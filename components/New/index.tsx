import { News } from '../../types';
import styles from './styles.module.scss'

interface NewProps {
    newValue: News;
}

export function New({ newValue }: NewProps) {

    const publishedFormatted = new Date(newValue.published_date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    return (
        <>
            <article className={styles.articleNew} >

                <strong>{newValue.title}</strong>
                <p>
                    {newValue?.abstract}
                </p>

                <span>Category: {newValue.section}</span>
                <span>{newValue.byline}</span>
                <span>{publishedFormatted}</span>
                <span>
                    <a href={newValue.url} >
                        Web url article
                    </a>
                </span>
            </article>
        </>
    )
}