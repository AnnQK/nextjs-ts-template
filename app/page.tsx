import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2>Next.js Typescript project template</h2>
        <h3>Tools:</h3>
        <ul className={styles.list}>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Eslint</li>
          <li>Prettier</li>
          <li>Husky</li>
        </ul>
      </div>
    </main>
  );
}
