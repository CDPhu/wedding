import React, { useState, useEffect } from 'react';

import Header from '../main/Header';
import Content from './Content';
import Action from './Action';

import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Loader from '../../components/Loader';
import { BackgroundImages } from '../../components/Image';

import { PAGE } from '../../config/common';
import { getRequest } from '../../utils/httpService';

import content from '../../assets/content.json';

const InfoBlock = ({ children }) => (
    <Flex justify="center">
        <Box padding="100px 12px">{children}</Box>
    </Flex>
);

const Register = () => {
    const [page, setPage] = useState(0);
    const [answer, setAnswer] = useState({});
    const [featureEnable, setFeatureEnable] = useState(true);
    const [isFetchingConfig, setIsFetchingConfig] = useState(true);

    useEffect(() => {
        const getRemoteConfig = async () => {
            const result = await getRequest({
                type: 'config'
            });
            return result;
        };
        // get remote config
        getRemoteConfig().then((value) => {
            if (value?.code === 200) {
                setFeatureEnable(value?.data?.enable);
            } else {
                console.error(
                    'Unexpected network issue, feature default enable'
                );
                setFeatureEnable(true);
            }
            setIsFetchingConfig(false);
        });
    }, []);
    return (
        <>
            <Header service={PAGE.REGISTER.KEY} />
            <Flex height="calc(100vh - 128px)">
                <Box width="100vw" minWidth="225px">
                    {isFetchingConfig && (
                        <InfoBlock>
                            <Loader />
                        </InfoBlock>
                    )}
                    {!isFetchingConfig && featureEnable && (
                        <Content
                            page={page}
                            answer={answer}
                            setAnswer={setAnswer}
                        />
                    )}
                    {!isFetchingConfig && !featureEnable && (
                        <InfoBlock>{content.register.content.close}</InfoBlock>
                    )}
                </Box>
            </Flex>
            <BackgroundImages alt="background-images" />
            {featureEnable && (
                <Action answer={answer} page={page} updatePage={setPage} />
            )}
        </>
    );
};

export default Register;
