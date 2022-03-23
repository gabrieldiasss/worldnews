import styles from './styles.module.scss'

export function Header() {

    return (
        <header className={styles.header} >
            <div className={styles.headerContent} >
                <img src="/images/logo.png" />
                <nav>
                    <a>Sign In</a>
                    <a className={styles.signUp} >Sign Up</a>
                </nav>
            </div>
        </header>
    )

}