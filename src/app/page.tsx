import Link from 'next/link';
import { Post } from '@/types/post';

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const posts: Post[] = await res.json();

  return (
    <main className="container animate-fade-in">
      <h1 className="gradient-text">My blog</h1>
      
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="card animate-slide-up">
            <Link href={`/post/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-muted">{post.body.substring(0, 100)}...</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="badge badge-primary">article #{post.id}</span>
                <button className="btn btn-accent">Read more </button>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}