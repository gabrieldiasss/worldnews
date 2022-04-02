/* eslint-disable @next/next/link-passhref */

import Link from "next/link";
import { Category } from "../../types";

import styles from './styles.module.scss'

interface MenuCategorysProps {
    section: Category[];
}

export function MenuCategorys({ section }: MenuCategorysProps) {

    console.log(section)

    return (
        <>
            <nav className={styles.content} >
                <ul>
                    {section?.map((category, key) => (
                        <Link key={key} href={`/section/${category.section}`} >
                            <li>{category.display_name}</li>
                        </Link>

                    ))}
                </ul>
            </nav>
        </>
    )
}





