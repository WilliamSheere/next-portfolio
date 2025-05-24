import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navLinks}>
				<div className={styles.navItem}> About</div>
				<div className={styles.navItem}> Portfolio</div>
				<div className={styles.navItem}> Contact</div>
			</div>
		</nav>
	);
};

export default Navbar;
