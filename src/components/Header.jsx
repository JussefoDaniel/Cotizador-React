import React from 'react';
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
    background-color: #00a8a5;
    padding: 10px;
    font-weight: bold;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
    color: #1A237E;
`;
    

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

export default Header;