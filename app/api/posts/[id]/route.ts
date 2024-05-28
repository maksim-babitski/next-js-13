import { NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'
import { posts } from '@/data/posts'
//import { redirect } from 'next/navigation'


export async function GET(req: Request, { params }: { params: { id: string } }) { //http://localhost:3000/api/posts/4
    const id = params.id

    const currentPost = posts.find(post =>
        post.id.toString() === id
    )

    return NextResponse.json(currentPost)
}


/*export async function DELETE(req: Request, { params }: { params: { id: string } }) { //http://localhost:3000/api/posts/4
    const id = params.id

    const headerList = headers()
    const type = headerList.get('Content-Type')

    const cookiesList = cookies()
    const coo1 = cookiesList.get('Cookie_1')?.value



    //logic delete post
    //redirect('/blog')

    return NextResponse.json({ id, type, coo1 })
}*/