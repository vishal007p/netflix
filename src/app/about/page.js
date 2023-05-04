import React from 'react';

import Herosection from "@/app/component/Herosection";

const Page = ({title}) => {
    return (
      <Herosection title={"Our Story"}  imageUrl={"/about1.svg"}/>
    );
};

Page.propTypes = {

};

export default Page