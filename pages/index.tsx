import Head from "next/head"

import styles from './home.module.scss'
import { MenuCategorys } from "../components/MenuCategorys"

import { GetStaticProps } from "next"
import { Category, News } from "../types"

import { New } from "../components/New"
import Link from "next/link"

interface HomeProps {
	results: Category[];
	resultsNews: News[];
}

export default function Home({ results, resultsNews }: HomeProps) {

	return (
		<>

			<Head>
				<title>World News</title>
			</Head>

			<MenuCategorys section={results} />

			<main className={styles.home}>

				<h1 className={styles.titleHome}>Últimas notícias</h1>

				<section className={styles.news} >
					{resultsNews.map((newValue, key) => (
						// eslint-disable-next-line @next/next/link-passhref
						<New key={key} newValue={newValue} />
					))}
				</section>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	// categorys
	const response = await fetch('https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo')
	const data = await response.json()
	const results = data.results

	// news
	const responseNews = await fetch('https://api.nytimes.com/svc/news/v3/content/nyt/all.json?q=everything&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo')
	const dataNews = await responseNews.json()
	const resultsNews = dataNews.results

	return {
		props: {
			results,
			resultsNews
		}
	}
}
