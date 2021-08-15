import { Container } from "react-bootstrap";
import Footer from "assets/images/footer.png";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Footer.src}) no-repeat;
  background-size: cover;
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
`;

const HeadOne = styled.h1`
  font-weight: 700;
  font-size: 1.75rem;
  color: #fff;
  margin: 0 auto 20px;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #fff;
  padding: 0 50px;
  margin: 10px auto 80px;
  max-width: 850px;
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
  font-weight: 700;
  transition: ease-in 0.2s;

  &:hover {
    transition: ease-in 0.1s;
    background-color: ${(props) => props.hoverbg};
    color: #fff;
  }
`;

const Contact = () => {
  return (
    <Section>
      <Container fluid>
        <HeadOne>اگر علاقه مند به همکاری با ما هستی</HeadOne>
        <Paragraph>
          از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
          خدمات خود استفاده می کنیم. با کلیک بر روی این قسمت می توانید متن خود
          را ویرایش کنید
        </Paragraph>
        <ButtonBox>
          <Button bgcolor="#5274f9" border="none" hoverbg="#3f61e6">
            ارسال رزومه
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

export default Contact;
