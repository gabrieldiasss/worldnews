import { AiFillGoogleCircle } from 'react-icons/ai'

import styles from './styles.module.scss'

import { useSession, signIn, signOut } from 'next-auth/react'

export function SignInButton() {

    const { data: session } = useSession()

    console.log(session)

    const isAuthenticated = session

    return (
        <button
            className={styles.button}
            type="button"
            onClick={() => session ? signOut() : signIn('google') }
        >
            {isAuthenticated ? <AiFillGoogleCircle className={styles.googleAuthenticated} /> : <AiFillGoogleCircle className={styles.googleUnAuthenticated} />}
            {isAuthenticated ? `${session.user?.name}` : 'Enter your email'}
        </button>
    )
}