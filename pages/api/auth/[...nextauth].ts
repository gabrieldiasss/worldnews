import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { query as q } from 'faunadb'
import { fauna } from '../../../services/fauna'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {

            const { email } = user

            try {

                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index('user_by_email'),
                                    q.Casefold(user.email!)
                                )
                            )
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email } }
                        ),
                        q.Get(
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(user.email!)
                            )
                        )
                    )

                )

                return true

            } catch {
                return false
            }
        }
    },

    session: {
        strategy: "jwt"
    },

   jwt: {
       secret: process.env.JWT_TOKEN, 
   }

})
