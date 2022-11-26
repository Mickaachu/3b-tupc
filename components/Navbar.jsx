import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="tupclogo.png" />
      </div>
      <div className={styles.actions}>
        <Link href="/"><p>Home</p></Link>
        <Link href="/careers"><p>Careers</p></Link>
        <Link href="/admission"><p>Admission</p></Link>
        <Link href="/registrar"><p>Registrar</p></Link>
        <Link href="/contact"><p>Contact</p></Link>
        <Link href="/login"><Button variant="primary">Login</Button></Link>
      </div>
    </div>
  );
}
