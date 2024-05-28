import { getAllPosts, getPostById } from "@/services/getPosts"
import { Metadata } from "next"

/*async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            //revalidate: 60 //кэширование, каждые 60 секунда запрос и данные обновляются
        }
    })

    return response.json()
}*/

type Props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const posts: any[] = await getAllPosts()

    return posts.map((post) => ({
        slug: post.id.toString(),
    }))
}

export async function generateMetadata({
    params: { id }
}: Props): Promise<Metadata> {
    const post = await getPostById(id)

    return {
        title: post.title,
    }
}

export default async function Post({ params: { id } }: Props) {
    const post = await getPostById(id)

    return (
        <>
            <h1>Post page {post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}