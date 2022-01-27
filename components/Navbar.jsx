import Link from "next/link";
import styles from "styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/">
          <a>NG</a>
        </Link>
        <div>Blogs</div>
      </nav>
    </div>
  );
};

export default Navbar;
