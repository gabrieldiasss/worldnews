import styles from './styles.module.scss'

import Link from 'next/link'
import { SignInButton } from '../SignInButton'

export function Header() {

    return (
        <header className={styles.header} >
            <div className={styles.headerContent}>
                <Link href="/" >
                    <img src="/images/logo.png" />
                </Link>
                
                <SignInButton />
            </div>
        </header>
    )

}