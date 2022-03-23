import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'

import styles from './home.module.scss'

export default function Home() {

	const [term, setTerm] = useState('everything')

	useEffect(() => {

		axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
			.then((response) => {
				console.log(response.data)
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

			<main className={styles.home} >

				<h1 className={styles.titleHome} >Últimas notícias</h1>

				<section className={styles.news} >
					<article className={styles.articleNew} >
						<h1>Survivors Emerge From  Bombed Theater in Southern Ukraine</h1>
						<p>
							Workers were rescuing survivors
							from a theater in Mariupol that
							was sheltering hundreds, including
							children, as Russia increasingly targeted urban centers.
							A fourth consecutive day of peace talks yielded no announcements, and the U.N. Security Council held an emergency session. Here’s the latest.
						</p>
					</article>
				</section>
			</main>

		</>
	)
}
