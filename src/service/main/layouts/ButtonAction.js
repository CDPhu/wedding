import React from 'react';
import styled from 'styled-components';

import { BsPencil, BsGeoAlt, BsCalendarEvent, BsImages } from 'react-icons/bs';

import Box from '../../../components/Box';
import Flex from '../../../components/Flex';
import { LinkButton, LinkOuterButton } from '../../../components/Button';

import { URL } from '../../../config/common';
import content from '../../../assets/content.json';

const StyledButtonActionBlock = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        width: 375px;
    }
`;

const ButtonAction = () => {
    return (
        <StyledButtonActionBlock>
            <LinkButton to="/register" width="140px">
                <Flex justify="center" width="130px">
                    <BsPencil />
                    <Box padding="0 4px">{content.main.button_register}</Box>
                </Flex>
            </LinkButton>
            <LinkOuterButton
                href={URL.EVENT}
                target="_blank"
                rel="noreferrer"
                width="140px"
            >
                <Flex justify="center" width="130px">
                    <BsCalendarEvent />
                    <Box padding="0 4px">{content.main.button_event}</Box>
                </Flex>
            </LinkOuterButton>
            <LinkOuterButton
                href={URL.PHOTO}
                target="_blank"
                rel="noreferrer"
                width="140px"
            >
                <Flex justify="center" width="130px">
                    <BsImages />
                    <Box padding="0 4px">{content.main.button_photo}</Box>
                </Flex>
            </LinkOuterButton>
            <LinkOuterButton
                href={URL.MAP}
                target="_blank"
                rel="noreferrer"
                width="140px"
            >
                <Flex justify="center" width="130px">
                    <BsGeoAlt />
                    <Box padding="0 4px">
                        {content.register.content.final_map}
                    </Box>
                </Flex>
            </LinkOuterButton>
        </StyledButtonActionBlock>
    );
};

export default ButtonAction;
