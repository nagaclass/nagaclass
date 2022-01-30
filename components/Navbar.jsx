import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container pt-5 pb-5 mb-4">
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/">
          <a>Naga Class</a>
        </Link>
        <h1 className="text-3xl font-bold">Blog</h1>
      </nav>
    </div>
  );
};

export default Navbar;
