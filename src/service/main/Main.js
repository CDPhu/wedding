import React from 'react';
import Header from './Header';
import Info from './Info';

import { PAGE } from '../../config/common';
import { BackgroundImages } from '../../components/Image';

const Main = () => {
    return (
        <>
            <Header service={PAGE.MAIN.KEY} />
            <Info />
            <BackgroundImages alt="background-images" />
        </>
    );
};

export default Main;
