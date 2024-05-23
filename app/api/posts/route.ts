import { NextResponse } from "next/server";
import { posts } from '../../../data/posts'

export async function GET(req: Request) { //http://localhost:3000/api/posts?q=searchquery
    const { searchParams } = new URL(req.url)

    const query = searchParams.get('q')

    let currentPosts = posts

    if (query) {
        currentPosts = posts.filter(posts =>
            posts.title.toLocaleLowerCase()
                .includes(query.toLocaleLowerCase())
        )
    }

    return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
    const body = await req.json()

    console.log(body)

    return NextResponse.json({ body })

}