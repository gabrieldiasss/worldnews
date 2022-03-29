import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'

import styles from './home.module.scss'
import Link from "next/link"
import { MenuCategorys } from "../components/MenuCategorys"
import { GetStaticProps } from "next"
import { Category } from "../types"

interface News {
	headline: {
		main: string;
	}

	lead_paragraph: string;
	snippet: string;
}

interface SectionProps {
	results: Category[]
}

export default function Home({ results }: SectionProps) {

	const [term, setTerm] = useState('everything')
	const [news, setNews] = useState<News[]>([])
	
	useEffect(() => {

		axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
			.then((response) => {
				setNews(response.data.response.docs)

			})
			.catch((err) => {
				console.log(err)
			})

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>

			<Head>
				<title>World News</title>
			</Head>

			<MenuCategorys section={results} />

			<main className={styles.home}>

				<h1 className={styles.titleHome}>Últimas notícias</h1>

				<section className={styles.news} >
					{news.map((newValue, key) => (
						<article key={key} className={styles.articleNew} >

							<h1>{newValue.headline.main}</h1>
							<p>
								{newValue.snippet}
							</p>
						</article>
					))}
				</section>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetch('https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo')

    const data = await response.json()

    const results = data.results

    console.log(results)

    return {
        props: {
			results 
        }
    }
}
