import Link from "next/link";
import Layout from "layout/Layout";

export default function Home() {
  return (
    <Layout
      title={"Naga Class for Software Development"}
      keywords={"Naga Class, Software, Front End, Backend"}
      description={"Naga Class for Software Development"}
    >
      <Link href="https://www.nagaclass.com">
        <a>www.nagaclass.com</a>
      </Link>
    </Layout>
  );
}
