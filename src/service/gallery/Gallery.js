import React from 'react';
import Heading from './Heading';
import Image from './Image';

import { PAGE } from '../../config/common';
import { BackgroundImages } from '../../components/Image';

const Gallery = () => {
    return (
        <>
            <Heading service={PAGE.MAIN.KEY} />
            <Image />
            <BackgroundImages alt="background-images" />
        </>
    );
};

export default Gallery;
