import { React } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Box from './Box';

const StyleText = styled(Box)`
    font-size: ${({ fontSize }) => fontSize || '14px'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    font-style: ${({ fontStyle }) => fontStyle || 'normal'};
    color: ${({ color }) => color || '#d48d5d'};
`;

const Text = ({
    fontSize,
    fontStyle,
    color,
    textAlign,
    lang,
    children,
    ...props
}) => {
    return (
        <StyleText
            fontSize={fontSize}
            fontStyle={fontStyle}
            textAlign={textAlign}
            color={color}
            lang={lang}
            {...props}
        >
            {children}
        </StyleText>
    );
};

Text.propTypes = {
    fontSize: PropTypes.string,
    fontStyle: PropTypes.string,
    textAlign: PropTypes.string,
    color: PropTypes.string,
    lang: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Text;
