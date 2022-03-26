import axios from "axios"
import { useEffect, useState } from "react"
import xml2js from 'xml2js'

interface Category {
    title: string;
}


export function MenuCategorys() {

    const [categorys, setCategorys] = useState<Category[]>([])

    useEffect(() => {
        axios.get("https://api.nytimes.com/services/xml/rss/nyt/Economy.xml", {
            headers: {
                "Content-Type": "aplication/hml; charset=utf-8"
            }
        })
            .then((response) => {
                console.log(response.data)

                let parser = new xml2js.Parser()
                parser.parseString(
                   response.data,
                    function(err: any, result: any) {

                        try {
                            console.log(result)
                        } catch {
                            /* console.log(err) */
                        }
                        
                    }
                )
            })
    }, [])

    return (
        <>
            oi
        </>
    )
}