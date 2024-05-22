"use client"
import { getAllPosts } from "@/services/getPosts"
//import { usePosts } from "@/app/store"
import Link from "next/link"
import useSWR from 'swr'
//import { useEffect } from "react"
//import { useShallow } from "zustand/react/shallow"

const Posts = () => {
    const { data, isLoading } = useSWR('posts', getAllPosts)
    /*const [posts, loading, getAllPosts] = usePosts(useShallow(
        (state) => [state.posts, state.loading, state.getAllposts]
    ))

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts])*/

    return isLoading ? (
        <h3>Loading...</h3>
    ) : (
        <ul>
            {data.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export { Posts }
