import styles from './styles.module.scss'

export default function Unauthorized() {

    return (
        <>
            <main className={styles.contentContainer} >
                <img src="/images/undraw_warning_cyit.svg" alt="" />

                <section className={styles.content} >

                    <h1>401</h1>
                    <h2>
                        Login with your google account
                    </h2>
                    <p>
                        To access news in this category, you first need to authenticate with your google account.
                    </p>

                </section>
            </main>
        </>
    )
}