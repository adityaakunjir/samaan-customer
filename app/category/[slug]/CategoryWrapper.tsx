"use client"

import { useParams } from "next/navigation"
import CategoryClient from "./CategoryClient"

export default function CategoryWrapper() {
    const params = useParams()
    const slug = params.slug as string
    return <CategoryClient slug={slug} />
}
