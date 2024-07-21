import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
      if (data.posts.length < 9) {
        setShowMore(false);
      }
    };
    fetchPosts();
  }, []);

  const handleShowMore = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch(`/api/post/getposts?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setPosts((prev) => [...prev, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="min-h-screen pt-10 px-5 sm:mx-5 2xl:mx-40 dark:bg-black dark:bg-opacity-40">
        {posts && posts.length < 1 && (
          <div className="my-10 flex justify-center">
            <h1>No Posts to show</h1>
          </div>
        )}
        {posts && posts.length > 0 && (
          <div className="flex flex-col sm:items-center gap-6">
            <h2 className="text-2xl font-semibold text-center">All Posts</h2>

            <div className="max-w-[90rem] flex flex-wrap gap-6 justify-center mb-10">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        )}

        {showMore && (
          <button
            onClick={handleShowMore}
            className="w-full text-sky-500 dark:text-sky-300 self-center text-lg sm:text-xl py-10 hover:text-sky-400 dark:hover:text-sky-200"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
}
