import { Metadata } from "next"

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60 //кэширование, каждые 60 секунда запрос и данные обновляются
        }
    })

    return response.json()
}

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({
    params: { id }
}: Props): Promise<Metadata> {
    const post = await getData(id)

    return {
        title: post.title,
    }
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id)
    console.log(post)

    return (
        <>
            <h1>Post page {post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}