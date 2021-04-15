import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
					<a className={styles.active} href="//#endregion">Home</a>
					<a href="//#region">Posts</a>
        </nav>

				<SignInButton />
      </div>
    </header>
    );
}
