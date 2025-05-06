import { Post } from '@/types/post';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PostPageProps {
  params: { id: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) return notFound();

  const post: Post = await res.json();

  return (
    <main className="container animate-fade-in">
      <div className="mt-6 mb-6">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
      
      <div className="card">
        <div className="mb-4 flex justify-between items-center">
          <span className="badge badge-accent">Article #{params.id}</span>
          <span className="text-muted">Published: {new Date().toLocaleDateString('en-US')}</span>
        </div>
        
        <h1 className="gradient-text mb-6">{post.title}</h1>
        
        <div className="glass p-6 animate-slide-up">
          <p className="mb-4">{post.body}</p>
          <p className="mb-4">{post.body}</p>
        </div>
        
       
      </div>
    </main>
  );
}