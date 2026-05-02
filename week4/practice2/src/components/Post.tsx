import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setPosts(res.data);
      } catch (err) {
        console.error("데이터 가져오기 실패:", err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
