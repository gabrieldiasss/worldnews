import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next"
import Head from "next/head";
import { New } from "../../components/New";
import { News } from "../../types";
import styles from './styles.module.scss'

interface SectionProps {
    name: string;

    results: News[];
}

interface Section {
    section: string;
}

export default function Section({ name, results }: SectionProps) {

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
                    {results.map((newValue, key) => (
                        <div key={key} >
                            <New newValue={newValue} />
                        </div>
                    ))}
                </div>

            </main>

        </>

    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetStaticPropsContext) => {

    const params = context.params!
    const name = params.name

    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${name}.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
    const data = await response.json()
    const results = data.results

    return {
        props: {
            name,
            results
        }
    }

}

/* export const getStaticPaths: GetStaticPaths = async () => {

    const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)

    const data = await response.json()

    const results = data.results

    const paths = results.map((section: Section) => {
        return {
            params: {
                name: `${section.section}`,
            }
        }
    })

    return {
        fallback: false,
        paths,
    }

} */