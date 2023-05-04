import React from 'react';
import ContactCard from "@/app/component/ContactCard";
import styles from "./contact.module.css"
import ContactForm from "@/app/component/ContactForm";

const Page = props => {
	return (
		<>
			<div className={styles.container}>


				<h1>contact us </h1>

				<ContactCard/>


				<section className={styles.contact_section}>
					<h2>We'd To Hear <span>From You</span></h2>
					<ContactForm/>
				</section>


			</div>

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.6170826872!2d72.64224125367033!3d23.04722913773406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86ea0c371051%3A0xc096b8a6ed4fbdf5!2sEklavya%20society%20thakkarnagar!5e0!3m2!1sen!2sin!4v1683196298000!5m2!1sen!2sin"
				 height={450} style={{border: 0,width:'100%'}} allowFullScreen="" loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>

		</>
	);
};

Page.propTypes = {
	/**/
};

export default Page;