import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { MenuCategorys } from '../components/MenuCategorys'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<Header />
			<MenuCategorys />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
