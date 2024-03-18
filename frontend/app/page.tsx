const getPosts = async () => {
  const res = await fetch("http://localhost:8080/api/posts")
  return res.json()
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <main>
      Hoi
      {posts.map((post: any) => (
        <ul key={post.title} className="flex gap-4">
          <li>{post.title}</li>
          <li>{post.title}</li>
        </ul>
      ))}
    </main>
  )
}
