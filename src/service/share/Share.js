import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import Header from '../main/Header';
import { InputTitle, InputField, InputBlock } from '../register/Content';
import Input, { StyleTextarea } from '../../components/Input';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import { BackgroundImages } from '../../components/Image';
import Loader from '../../components/Loader';

import { postRequestWithData, postRequestWithoutResp } from '../../utils/httpService';
import { PAGE } from '../../config/common';
import { color } from '../../config/theme';
import content from '../../assets/content.json';

const baseInputStyles = css`
    text-align: center;
    padding: 16px;
    font-size: 24px;
    width: 180px;
    height: 70px;
    background: ${color.back};
    border: 1px solid ${color.black};
    box-sizing: border-box;
    border-radius: 10px;
`;

const StyledLabel = styled.label`
    ${baseInputStyles}

    color: ${color.black};
    &:hover {
        background-color: ${color.primary};
        color: white;
        border: 1px solid white;
        cursor: pointer;
    }
`;

const BaseButton = styled(Box)`
    ${baseInputStyles}

    color: ${({ disabled }) => (disabled ? color.disable : color.black)};
    &:hover {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
`;

const StyledInput = styled(Input)`
    display: none;
`;

const InfoBlock = ({ children }) => (
    <Flex justify="center">
        <Box padding="100px 12px">{children}</Box>
    </Flex>
);

const StyledLine = styled.span`
    width: 290px;
    padding: 16px;
    border-bottom: 1px solid ${color.primary};
`;

const Share = () => {
    const [name, setName] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageName, setSelectedImageName] = useState('');
    const [comment, setComment] = useState('');
    const [disableSendButton, setDisableSendButton] = useState(true);
    const [isPostingData, setIsPostingData] = useState(false);

    const onSend = async () => {
        setIsPostingData(true);
        const result = await postRequestWithData({
            url: process.env.REACT_APP_PHOTO_POST_URL,
            method: 'POST',
            data: JSON.stringify({ name, comment })
        });
        const { url } = result;
        await postRequestWithoutResp({
            url,
            method: 'PUT',
            data: selectedImage
        });
        setName('');
        setComment('');
        setSelectedImage(null);
        setSelectedImageName('');
        setIsPostingData(false);
    };

    useEffect(() => {
        setDisableSendButton(!(name && selectedImage));
    }, [name, selectedImage]);

    return (
        <>
            <Header service={PAGE.SHARE.KEY} />
            {isPostingData && (
                <InfoBlock>
                    <Loader />
                </InfoBlock>
            )}
            {!isPostingData && (
                <Flex justify="center" direction="column" width="100vw">
                    <InputBlock>
                        <InputTitle>{content.share.name}</InputTitle>
                        <InputField>
                            <Input
                                value={name}
                                width="290px"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </InputField>
                    </InputBlock>
                    <InputBlock>
                        <InputTitle optional={true}>
                            {content.share.comment}
                        </InputTitle>
                        <InputField>
                            <StyleTextarea
                                width="280px"
                                height="80px"
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                                value={comment}
                                name="notes"
                            />
                        </InputField>
                    </InputBlock>
                    <InputBlock>
                        <InputTitle>{content.share.upload}</InputTitle>
                        <InputField>
                            <StyledLabel>
                                {content.share.choose_file}
                                <StyledInput
                                    type="file"
                                    width="290px"
                                    onChange={(event) => {
                                        console.log(event.target.files[0]);
                                        setSelectedImage(event.target.files[0]);
                                        setSelectedImageName(
                                            event.target.files[0].name
                                        );
                                    }}
                                />
                            </StyledLabel>
                        </InputField>
                        {selectedImageName && (
                            <InputTitle optional={true}>
                                {content.share.file_name} {selectedImageName}
                            </InputTitle>
                        )}
                    </InputBlock>
                    <InputBlock>
                        <InputField>
                            <StyledLine />
                        </InputField>
                    </InputBlock>
                    <InputBlock>
                        <InputField>
                            <BaseButton
                                disabled={disableSendButton}
                                onClick={onSend}
                            >
                                {content.share.confirm}
                            </BaseButton>
                        </InputField>
                    </InputBlock>
                </Flex>
            )}
            <BackgroundImages alt="background-images" />
        </>
    );
};

export default Share;
