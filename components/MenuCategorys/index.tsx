/* eslint-disable @next/next/link-passhref */
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

import styles from './styles.module.scss'

interface Category {
    section: string;
    display_name: string;
}

export function MenuCategorys() {

    const [categorys, setCategorys] = useState<Category[]>([])

    const [term, setTerm] = useState('everything')

    useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/section-list.json?q=${term}&api-key=akpDA0BtJxJ3lmIbuog0M6wpKmgVhwVo`)
            .then((response) => {
                setCategorys(response.data.results)
            })
    }, [])

    return (
        <>
            <nav className={styles.content} >
                <ul>
                    {categorys.map((category, key) => (
                        <Link key={key} href={`/section/${category.section}`} >
                            <li>{category.display_name}</li>
                        </Link>

                    ))}
                </ul>
            </nav>
        </>
    )
}



