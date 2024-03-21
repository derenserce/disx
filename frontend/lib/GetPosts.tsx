type Post = {
  id: number
  title: string
  content: string

}

export const getPosts = async (): Promise<Post[] | undefined> => {
  const res = await fetch("http://localhost:8080/api/posts", { cache: "no-cache" })
  return res.json()
}
