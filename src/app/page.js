import React from 'react';
import PropTypes from 'prop-types';
import Herosection from "@/app/component/Herosection";

const Page = props => {
	return (
		<div>
			<Herosection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"}/>
		</div>
	);
};

Page.propTypes = {};

export default Page;