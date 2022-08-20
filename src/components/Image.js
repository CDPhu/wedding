import React from 'react';
import styled from 'styled-components';
import MainBackgroundImage from '../assets/images/background-image.jpeg';

const StyleImage = styled.img`
    width: ${({ width }) => width || 'auto'};
    box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
`;

const BackgroundImage = styled(StyleImage)`
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    top: 0px;
    opacity: 0.8;
`;

export const BackgroundImages = () => (
    <BackgroundImage src={MainBackgroundImage} />
);

export default StyleImage;
