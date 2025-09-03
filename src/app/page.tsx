import PostsList from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Blog Posts</h1>
      </header>
      <main>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </main>
      <footer>
        <p className="text-center py-4">© 2025 Blog Posts</p>
      </footer>
    </>
  );
}
