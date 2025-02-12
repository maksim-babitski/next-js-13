import { getAllPosts } from "@/services/getPosts"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Blog | Next App',
}

export const revalidate = 30
//export const dynamicParams = false

export default async function Blog() {
    const data = await getAllPosts()

    return (
        <>
            <h1>Blog page</h1>
            {data.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </>
    )
}