/* eslint-disable @next/next/link-passhref */
import axios from "axios"
import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react"
import { Category } from "../../types";

import styles from './styles.module.scss'

interface MenuCategorysProps {
    section: Category[];
}

export function MenuCategorys({ section }: MenuCategorysProps) {

    return (
        <>
            <nav className={styles.content} >
                <ul>
                    {section.map((category, key) => (
                        <Link key={key} href={`/section/${category.display_name}`} >
                            <li>{category.display_name}</li>
                        </Link>

                    ))}
                </ul>
            </nav>
        </>
    )
}





