import { getPosts } from "@/lib/GetPosts"

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      {posts.map((post: any) => (
        <ul
          key={post.title}
          className="flex gap-4"
        >
          <li>{post.title}</li>
          <li>{post.content}</li>
        </ul>
      ))}
    </main>
  )
}
