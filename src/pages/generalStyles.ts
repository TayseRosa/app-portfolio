import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: 18px;
    color:${({theme}) => theme.colors.secondary};
    justify-content: center;
    align-items: center;
`;

export const TextMain = styled.Text`
    font-size: 16px;
    color:${({theme}) => theme.colors.font};
    padding: 20px 0;
    text-align: center;
`;

export const WrapperDev = styled.View`
    flex-direction: row;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

export const ImageDev = styled.Image`
    width: 200px;
    height: 250px;
    padding: 50px 5px;
    top: 50px;
    `;

export const Listing = styled.FlatList`
    margin: 20px 0;
`;


export const ImageDevResume = styled.Image`
    width: 350px;
    height: 350px;
    top: 20px;
`;