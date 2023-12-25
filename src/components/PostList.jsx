import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post_list_store";
import { WelcomeMessage } from "./WelcomeMessage";

const PostList = () => {
  const { postList, addFetchPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addFetchPosts(data.posts);
      });
  }, []);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
