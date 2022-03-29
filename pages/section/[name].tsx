import { GetServerSideProps, GetStaticPaths, GetStaticProps, GetStaticPropsContext, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring";

interface SectionProps {
    name: string;
    display_name: string;
}

interface Section {
    section: string;
}

export default function Section({ name }: SectionProps) {

    const section = name
    const capitalized = section[0].toUpperCase() + section.substr(1);

    return (
        <>
            <h1>{capitalized}</h1>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

    const params = context.params!
    const name = params.name

    return {
        props: { 
            name
         } 
    }

}

export const getStaticPaths: GetStaticPaths = async () => {

   const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
    const data = await response.json()
    const results = data.results 

    console.log(results)

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

}