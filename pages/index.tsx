import Head from "next/head"
import { useEffect, useState } from "react"
import axios from 'axios'

export default function Home () {

	const [news, setNews] = useState([])
	const [term, setTerm] = useState('everything')

	useEffect(() => {

		axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
		.then((response) => {
			console.log(response.data)
		})
		.catch((err) => {
			console.log(err)
		})

	}, [])

	return (
		<>

			<Head>
				<title>News App</title>
			</Head>
	
			<h1>Olá</h1>
		</>
  	)
}
