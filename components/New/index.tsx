import { News } from '../../types';
import styles from './styles.module.scss'

interface NewProps {
    newValue: News;
} 

export function New({ newValue }: NewProps) {


    return (
        <>
            <article  className={styles.articleNew} >

                <strong>{newValue.title}</strong>
                <p>
                    {newValue?.abstract}
                </p>

                <span>Category: {newValue.section}</span>
            </article>
        </>
    )
}