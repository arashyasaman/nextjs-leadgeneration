import styled from 'styled-components'

const FooterDiv = styled.div`
    background-color: #333;
    color: #979797;
    font-size: 18px;
    direction: ltr;
`;

const Footer = () => {
    return (
        <FooterDiv className="text-center py-3">
            ©2019 . Company . All rights reserved
        </FooterDiv>
    )
}

export default Footer