import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <h1>
        hii i am jiten
      </h1>
    </main>
  );
}
