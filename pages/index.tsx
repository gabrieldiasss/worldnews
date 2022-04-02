import Head from "next/head"

import styles from './home.module.scss'
import { MenuCategorys } from "../components/MenuCategorys"

import { GetServerSideProps, GetStaticProps } from "next"
import { Category, News } from "../types"

import { New } from "../components/New"

interface HomeProps {

	category: {
		results: Category[];
	}

	newsHome: {
		results: News[];
	}
}

export default function Home({ category, newsHome }: HomeProps) {

	console.log(newsHome.results)

	return (
		<>
			<Head>
				<title>World News</title>
			</Head>

			<MenuCategorys section={category.results} />

			<main className={styles.home}>

				<h1 className={styles.titleHome}>
					Latest news
				</h1>

				<section className={styles.news} >
					{newsHome.results?.map((newValue, key) => (
						<New key={key} newValue={newValue} />
					))}
				</section>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	// categorys
	const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=${process.env.API_KEY}`)
	const data = await response.json()

	// news
	const responseNews = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/all.json?q=everything&api-key=${process.env.API_KEY}`)
	const dataNews = await responseNews.json()

	console.log(data)
	console.log(dataNews)

	return {
		props: {
			category: data,
			newsHome: dataNews
		},

		revalidate: 3600
	}
}
