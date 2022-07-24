import { React } from 'react';

import styled from 'styled-components';
import { rotate } from '../style/animation.css.js';

const StyleLoader = styled.div`
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${rotate} 3s linear infinite;
`;

const Loader = () => {
    return <StyleLoader />;
};

export default Loader;
