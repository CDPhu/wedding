import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from './Box';
import { color } from '../config/theme';
import { URL } from '../config/common';
import content from '../assets/content.json';

const BaseButton = styled(Box)`
    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
    color: ${({ disabled }) => (disabled ? color.disable : color.black)};
    padding: 4px;
    text-align: center;
    width: 108px;
    height: 30px;
`;

export const ActionButton = styled(BaseButton)``;

export const NormalButton = styled(BaseButton)`
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
`;

export const LinkButton = styled(Link)`
    text-decoration: none;
    text-align: center;
    padding: ${({ padding }) => (padding ? padding : '4px')};
    margin: ${({ margin }) => (margin ? margin : '8px')};
    width: ${({ width }) => (width ? width : '120px')};
    height: ${({ height }) => (height ? height : '30px')};
    color: ${color.black};
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
    &:hover {
        background-color: ${color.primary};
        color: white;
        border: 1px solid white;
    }
`;

export const LinkOuterButton = styled.a`
    display: inline-block;
    text-decoration: none;
    text-align: center;
    margin: ${({ margin }) => (margin ? margin : '8px')};
    padding: ${({ padding }) => (padding ? padding : '4px')};
    width: ${({ width }) => (width ? width : '120px')};
    height: ${({ height }) => (height ? height : '30px')};
    color: ${color.black};
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
    &:hover {
        background-color: ${color.primary};
        color: white;
        border: 1px solid white;
    }
`;

export const ReportButton = () => (
    <LinkOuterButton href={URL.REPORT} target="_blank" rel="noreferrer">
        {content.register.content.error_report}
    </LinkOuterButton>
);
