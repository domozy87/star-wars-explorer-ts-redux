import React from 'react';
import styled from 'styled-components';

// MUI
import { Avatar } from '@mui/material';

type AvatarT = {
    name: string;
    image_url: string;
};

const Wrapper = styled.div`
    width: 100%;
    height: auto;
`;

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyleName = styled.div`
    padding-left: 10px;
    color: #000;
`;

const AvatarComponent: React.FC<AvatarT> = (props) => {
    const { name, image_url } = props;

    return (
        <Wrapper>
            <Content>
                <Avatar
                    alt={name}
                    src={image_url}
                    sx={{ width: 36, height: 36 }}
                />
                <StyleName>{name}</StyleName>
            </Content>
        </Wrapper>
    );
};

export default AvatarComponent;