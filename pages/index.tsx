import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'

import styles from './home.module.scss'
import Link from "next/link"
import { MenuCategorys } from "../components/MenuCategorys"

interface News {
	headline: {
		main: string;
	}

	lead_paragraph: string;
	snippet: string;
}

export default function Home() {

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

			<MenuCategorys />

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
