import Link from "next/link";
import Layout from "layout/Layout";
import Image from "next/image";
import Img from "../assets/images/under-construction.png";

export default function Home() {
  return (
    <Layout
      title={"Naga Class for Software Development"}
      keywords={"Naga Class, Software, Front End, Backend"}
      description={"Naga Class for Software Development"}
    >
      <main className="h-screen flex flex-col justify-center">
        <h1 className="text-4xl text-center mb-5">
          Welcome to{" "}
          <Link href="https://www.nagaclass.com/">
            <a className="bg-yellow-600 p-2 rounded-lg underline">www.nagaclass.com</a>
          </Link>
        </h1>
        <h1 className="text-4xl text-center">Keep in Touch!</h1>

        <div className="flex items-center justify-center mt-10">
          <Image src={Img} width={600} height={600} alt="Keep in Touch" />
        </div>
      </main>
    </Layout>
  );
}
