import { AiFillGoogleCircle } from 'react-icons/ai'

import styles from './styles.module.scss'

export function SignInButton() {

    const isAuthenticated = false

    return (
        <button className={styles.button} type="button">
            {isAuthenticated ? <AiFillGoogleCircle className={styles.googleAuthenticated} /> : <AiFillGoogleCircle className={styles.googleUnAuthenticated} />}
            {isAuthenticated ? 'Gabriel Dias' : 'Entre com seu Email'}
        </button>
    )
}