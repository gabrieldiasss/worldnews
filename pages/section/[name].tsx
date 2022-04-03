import { GetServerSideProps, GetStaticPropsContext } from "next"
import { getSession } from "next-auth/react";
import Head from "next/head";
import { New } from "../../components/New";
import { News } from "../../types";
import styles from './styles.module.scss'

interface SectionProps {
    name: string;


    newsSection: {
        results: News[];
    }
}

interface Section {
    section: string;
}

export default function Section({ name, newsSection }: SectionProps) {

    console.log(newsSection.results)

    const section = name
    const capitalized = section[0].toUpperCase() + section.substr(1);

    return (
        <>

            <Head>
                <title>{capitalized} | World News</title>
            </Head>

            <main className={styles.container} >

                <h1>{capitalized}</h1>

                <div className={styles.grid} >

                    {/* <New /> */}
                    {newsSection.results?.map((newValue, key) => (
                        <div key={key} >
                            <New newValue={newValue} />
                        </div>
                    ))}
                </div>

            </main>

        </>

    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const session = await getSession({ req })

    const { name } = params!

    if(!session) {
        return {
            redirect: {
                destination: "/unauthorized"
            }
        }
    } 

    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${name}.json?q=everything&api-key=${process.env.API_KEY}`)

    const newsSection = await response.json()

    return {
        props: {
            name,
            newsSection
        }
    }

}