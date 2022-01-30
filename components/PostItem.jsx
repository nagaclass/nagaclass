import Image from "next/image";
import Link from "next/link";

export default function PostItem({ frontMatter: { cover_image, date, title, excerpt }, slug }) {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <div className="border-2 border-main hover:border-main-dark rounded-md p-3">
          <div className="bg-cover bg-center" style={{ backgroundImage: `url(${cover_image})`, width: "100%", height: 250 }} />
          <div className="post-date">Posted on {date}</div>
          <h3 className="w-fit p-2 font-bold my-2 rounded-md bg-main-dark">{title}</h3>

          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  );
}
