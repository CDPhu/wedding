import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flex from '../../components/Flex';
import Box from '../../components/Box';
import { ActionButton, NormalButton } from '../../components/Button';

import { postRequest } from '../../utils/httpService';
import { validateTel } from '../../utils/validation';

import content from '../../assets/content.json';

const Container = styled(Box)`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 64px;
    min-width: 330px;
    background-color: white;
`;

const isEmpty = (str) => str === null || str === undefined || str === '';

const Action = ({ answer, page, updatePage }) => {
    const [isEnableNextButton, setIsEnableNextButton] = useState(false);
    const { join } = answer;

    useEffect(() => {
        let enableNextButton = false;
        const {
            name,
            relation,
            join,
            invitation,
            address,
            people,
            vegetarian,
            child,
            tel
        } = answer;
        if (page === 0) {
            if (invitation === 0 || invitation === 1) {
                enableNextButton =
                    (!isEmpty(name) &&
                        !isEmpty(relation) &&
                        !isEmpty(join) &&
                        !isEmpty(address)) ||
                    false;
            } else if (invitation === 2) {
                enableNextButton =
                    (!isEmpty(name) &&
                        !isEmpty(relation) &&
                        !isEmpty(join) &&
                        !isEmpty(invitation)) ||
                    false;
            }
        } else if (page === 1) {
            enableNextButton =
                (!isEmpty(people) && !isEmpty(vegetarian) && !isEmpty(child)) ||
                false;
        } else if (page === 2) {
            enableNextButton = validateTel(tel);
        }
        setIsEnableNextButton(enableNextButton);
    }, [page, answer]);

    return (
        <>
            {page !== 4 && page !== 5 && (
                <Container>
                    <Flex justify="space-between" padding="20px 16px">
                        <Box>
                            {(page === 1 || page === 2 || page === 3) && (
                                <ActionButton
                                    onClick={() => {
                                        if (!join && page === 2) {
                                            updatePage(0);
                                        } else {
                                            updatePage(--page);
                                        }
                                    }}
                                >
                                    {content.register.action.previous}
                                </ActionButton>
                            )}
                        </Box>
                        <Box>
                            {(page === 0 || page === 1 || page === 2) && (
                                <ActionButton
                                    disabled={!isEnableNextButton}
                                    onClick={() => {
                                        if (isEnableNextButton) {
                                            if (!join && page === 0) {
                                                updatePage(2);
                                            } else {
                                                updatePage(++page);
                                            }
                                        }
                                    }}
                                >
                                    {content.register.action.next}
                                </ActionButton>
                            )}
                            {page === 3 && (
                                <NormalButton
                                    onClick={async () => {
                                        updatePage(++page);
                                        const result = await postRequest({
                                            data: answer
                                        });
                                        if (result?.status !== 200) {
                                            updatePage(5);
                                        }
                                    }}
                                >
                                    {content.register.action.button_finish}
                                </NormalButton>
                            )}
                        </Box>
                    </Flex>
                </Container>
            )}
        </>
    );
};

Action.propTypes = {
    answer: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired
};

export default Action;
