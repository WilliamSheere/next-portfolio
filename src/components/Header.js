// import React from 'react'
// import styles from "../styles/Header.module.css";
// const Header = () => {
//   return (
// 		// <div className={styles.blob}>Header</div>
// 		<div
// 			className={`${styles.blob} w-96 h-96 shadow-[0_0_40px_rgba(255,215,0,0.7)]`}

// 		></div>

// 	);
// }

// export default Header

import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<div className={styles.container}>
			<div
				className={`${styles.blob} w-96 h-96 shadow-[0_0_40px_rgba(255,215,0,0.7)]`}
			/>

			<div className={styles.avatarContainer}>
				<Image
					src="/avatar.jpg"
					alt="My Avatar"
					width={180}
					height={180}
					className={styles.avatar}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1>Full Stack Web Developer</h1>
				<p>
					I build high-performance, full stack applications with a strong focus
					on modern JavaScript technologies, including React, Next.js, and
					Node.js.
				</p>
			</div>
		</div>
	);
};

export default Header;
