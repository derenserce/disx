export const getPosts = async () => {
  const res = await fetch("http://localhost:8080/api/posts", { cache: "no-cache" })
  return res.json()
}
