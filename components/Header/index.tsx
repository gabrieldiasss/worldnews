import styles from './styles.module.scss'

import Link from 'next/link'

export function Header() {

    return (
        <header className={styles.header} >
            <div className={styles.headerContent}>
                <Link href="/" >
                    <img src="/images/logo.png" />
                </Link>
                
                <nav>
                    <Link href="/signin" >
                        <a>Sign In</a>
                    </Link>

                    <Link href="/signup" >
                        <a className={styles.signUp} >Sign Up</a>
                    </Link>

                </nav>
            </div>
        </header>
    )

}