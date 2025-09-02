import { jsonPostRepository } from "@/repositories/post";

export default async function PostsList() {
  const posts = await jsonPostRepository.findAll();
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="mb-8 p-4 border-b shadow-sm max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
