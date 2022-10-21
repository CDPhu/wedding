import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';

import content from '../../assets/content.json';

import { color } from '../../config/theme';
import { PAGE, URL } from '../../config/common';

const StyleLink = styled(Link)`
    text-decoration: none;
    color: ${color.primary};
    padding: 16px;
    width: auto;

    &:hover {
        background-color: ${color.primary};
        color: white;
    }
    @media (max-width: 576px) {
        width: 100vw;
    }
`;

const StyleOuterLink = styled.a`
    text-decoration: none;
    color: ${color.primary};
    padding: 16px;
    width: auto;

    &:hover {
        background-color: ${color.primary};
        color: white;
    }
    @media (max-width: 576px) {
        width: 100vw;
    }
`;

const StyledTitle = styled(Text)`
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const MenuIcon = styled(Box)`
    padding: 16px;
    color: ${color.primary};
    &:hover {
        cursor: pointer;
    }
`;

const Menu = styled(Flex)`
    flex-direction: column;
    background-color: white;
    width: 100vw;
    position: fixed;
    top: 50px;
    border: 1px solid ${color.primary};
`;

const NormalMenu = styled(Flex)`
    @media (max-width: 576px) {
        display: none;
    }
`;

const MobileMenu = styled(Flex)`
    display: none;
    @media (max-width: 576px) {
        display: block;
    }
`;

const MenuItems = () => (
    <>
        <StyleLink to={PAGE.MAIN.PATH}>{content.header.home}</StyleLink>
        <StyleOuterLink target="_blank" rel="noreferrer" href={URL.REPORT}>
            {content.header.report}
        </StyleOuterLink>
    </>
);

const Header = ({ service }) => {
    const [showMenu, setShowMenu] = useState(false);
    const onClickMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Box
            width="100%"
            minWidth="375px"
            height="50px"
            borderBottom={`1px solid ${color.primary}`}
        >
            <Flex justify="space-between" height="50px">
                <StyledTitle fontSize="24px" fontStyle="italic" padding="12px">
                    {content.header.title}
                </StyledTitle>
                {service !== PAGE.MAIN.KEY && (
                    <>
                        <NormalMenu>
                            <MenuItems />
                        </NormalMenu>
                        <MobileMenu>
                            <MenuIcon onClick={onClickMenu}>
                                <FaBars />
                            </MenuIcon>
                        </MobileMenu>
                    </>
                )}
                {showMenu && service !== PAGE.MAIN.KEY && (
                    <Menu>
                        <MenuItems />
                    </Menu>
                )}
            </Flex>
        </Box>
    );
};

export default Header;
