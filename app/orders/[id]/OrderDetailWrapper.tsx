"use client"

import { useParams, useSearchParams } from "next/navigation"
import OrderDetailClient from "./OrderDetailClient"

export default function OrderDetailWrapper() {
    const params = useParams()
    const searchParams = useSearchParams()

    const paramId = params.id as string | undefined
    const queryId = searchParams.get("id") || undefined
    const id = paramId === "_fallback" ? queryId : paramId

    if (!id) return null
    return <OrderDetailClient id={id} />
}
