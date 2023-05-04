import styles  from '@/app/styles/common.module.css'


import React from 'react';
import Link from "next/link";

const NotFound = () => {
	return (

		<section className={styles.container}>
			<div className={styles.error_page}>

				<h1>404</h1>
				<h2>Not Found</h2>
				<p>Could Not Find Requested Resource</p>

				<Link href="/" >
					<button>
						Go to Home Page
					</button>
				</Link>
			</div>
		</section>
	);
};

export default NotFound;