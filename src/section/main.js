import { Container } from "react-bootstrap";
import Logo from "assets/images/logo.png";
import Header from "assets/images/header.png";
import Image from "next/image";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(
      0deg,
      rgba(34, 57, 155, 0.7),
      rgba(34, 57, 155, 0.7)
    ),
    url(${Header.src}) no-repeat;
  background-size: cover;
  padding: 150px 0 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
`;

const HeadOne = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: #fff;
  margin: 100px auto 20px;
  max-width: 750px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #fff;
  padding: 0 50px;
  margin: 10px auto 40px;
  max-width: 750px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row;
`;

const Button = styled.a`
  font-size: 1.375rem;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  color: #fff;
  margin: 0 10px;
  padding: 14px 50px;
  border-radius: 5px;
  font-weight: 900;
  transition: ease-in 0.2s;

  &:hover {
    transition: ease-in 0.1s;
    background-color: ${(props) => props.hoverbg};
    color: #fff;
  }
`;

const Main = () => {
  return (
    <Section>
      <Container fluid>
        <Image src={Logo} />
        <HeadOne>به راحتی خدمات مورد نیاز خودت رو پیدا کن</HeadOne>
        <Paragraph>
          اینجا می توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست
          و چه کارهایی انجام می ده
        </Paragraph>
        <ButtonBox>
          <Button bgcolor="#5274f9" border="none" hoverbg="#3f61e6">
            مشاوره می خوام
          </Button>
          <Button
            bgcolor="transparent"
            border="solid 1px #fff"
            hoverbg="rgba(255,255,255,0.2)"
          >
            فرم تماس با ما
          </Button>
        </ButtonBox>
      </Container>
    </Section>
  );
};

export default Main;
