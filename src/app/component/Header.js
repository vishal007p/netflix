import React from 'react';
import styles from '@/app/styles/navbar.module.css'
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/component/Nav";


const Header = props => {
	return (
		<header className={styles.main_header}>

			<div className={styles.navbar_brand}>

					<h1 style={{fontSize: '30px',color:'red'}}>LOGO</h1>
					{/*<Image src="/logo.png" width={150} height={40} />*/}

			</div>
			<Nav/>
		</header>

	);
};

Header.propTypes = {};

export default Header;