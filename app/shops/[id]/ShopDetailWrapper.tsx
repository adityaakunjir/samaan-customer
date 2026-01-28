"use client"

import { useParams } from "next/navigation"
import ShopDetailClient from "./ShopDetailClient"

export default function ShopDetailWrapper() {
    const params = useParams()
    const id = params.id as string
    return <ShopDetailClient id={id} />
}
