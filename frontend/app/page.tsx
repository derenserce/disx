import { Card } from "@/components/ui/card"
import { getPosts } from "@/lib/GetPosts"

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="my-4 rounded-lg border bg-card bg-slate-50 first:my-0 dark:bg-slate-800/80"
        >
          <div className="px-4 py-2">
            <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{post.title}</h1>
            <p className="text-base text-gray-600  dark:text-slate-200">{post.content}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
