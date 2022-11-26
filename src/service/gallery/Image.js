import React from "react";
import styled from 'styled-components';
import FadeIn from 'react-fade-in';

import Box from '../../components/Box';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import Image from '../../components/Image';


import { color } from '../../config/theme';
// import content from '../../assets/content.json';
//import ImageMain from '../../assets/images/main.png';

const StyledImage = styled(Image)`
    width: 640px;
    height: 480px;

    @media (max-width: 1440px) {
        width: 560px;
        height: 420px;
    }

    @media (max-width: 1248px) {
        width: 480px;
        height: 360px;
    }
`;

const StyledContentBlock = styled(Flex)`
    justify-content: center;
    width: 100vw;
`;



const testImage = () => {
    // const [imageVar, setImageVar] = useState(0);

    const data = [ { 
        image: "https://lh3.googleusercontent.com/pw/AL9nZEWLeu_gubHx9TYn2B_KjiGH0X4qmWqLPjiKlDMlNIEjrAFjFSzrgCNUvSYwjluhyHZvOi3vKryVh4t-HiVL0lrJiWL8cO7wywL85o7MFd8O0Tpqk0RK8ImIELouz62aOb-G8oAy6uA_9hELeMNeKSTz=w1427-h950-no?authuser=0", 
        name: "Hello", 
        comment: "Hello World" 
    } ];

    const dataName=data.map(
        (element)=>{
            return(    
                <Text color={color.black}>
                {element.name}
                </Text> 
            )
        }
    )

    const dataComment=data.map(
        (element)=>{
            return(    
                <Text color={color.black}>
                {element.comment}
                </Text> 
            )
        }
    )

    const dataImage=data.map(
        (element)=>{
            return(    
                <StyledImage
                        src={element.image}
                        alt="main-page-image"
                    />
            )
        }
    )


    return (
        <Flex justify="center" minWidth="375px" width="100vw">
            <Flex direction="column" minWidth="375px">
                <StyledContentBlock padding="16px 0 0">
                    <FadeIn delay={500} transitionDuration={1000}>
                        {dataImage}
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock margin="4px 0">
                    <FadeIn delay={1000}>
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock>
                    <FadeIn delay={1000}>
                        <Box padding="16px 0 0">
                            {dataName}
                        </Box>
                        <Box padding="16px 0 0">
                            {dataComment}  
                        </Box>
                    </FadeIn>
                </StyledContentBlock>
                <StyledContentBlock margin="16px 0 36px">
                </StyledContentBlock>
            </Flex>
        </Flex>
    );
};

export default testImage;
