import Link from "next/link";
import styles from "styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/">
          <a>NG</a>
        </Link>
        <h1 className="text-3xl font-bold">Blog</h1>
      </nav>
    </div>
  );
};

export default Navbar;
