import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 5em;
    //background: linear-gradient(90deg, #1B2432, #F4D35E);
    background: #1B2432;
    position: absolute;
    bottom: 0;
    text-align: center;
`

const FooterContent = styled.p`
    font-size: 15pt;
    font-family: Hoefler Text Black, cooper-black-std, serif;
    font-weight: 10;
    color: white;
    transform: translate(0%, 50%);
`

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>"That's what She said" - Michael Scott</FooterContent>
        </FooterContainer>
    );
}