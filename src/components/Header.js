import React from 'react'
import styles from "../styles/Header.module.css"; 
const Header = () => {
  return (
		// <div className={styles.blob}>Header</div>
		<div
			className={`${styles.blob} w-96 h-96 shadow-[0_0_40px_rgba(255,215,0,0.7)]`}
		></div>
	);
}

export default Header