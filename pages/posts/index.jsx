import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import PostItem from "components/PostItem";

const PostsPage = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 md:gap-5 lg:gap-5 xl:gap-5">
        {posts.map((post, idx) => (
          <PostItem key={idx} {...post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map(filename => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
