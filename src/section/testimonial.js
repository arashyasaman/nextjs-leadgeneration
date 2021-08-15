import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { data, customer } from "data/testimonial";

const MainSection = styled.section`
  background-color: #f3f3f3;
  padding: 80px 0;
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

const HeadTwo = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.75rem;
  color: #333;
`;
const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #808080;
  margin-bottom: 50px;
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const TestimonialBox = styled.div`
  background: #fff;
  text-align: center;
  padding: 3.4375rem 2.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px 10px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 991px) {
    margin-bottom: 2rem;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

const UserAvatar = styled.div`
  flex-grow: 3;
  flex-shrink: 3;
  flex-basis: 180px;

  @media only screen and (max-width: 991px) {
    margin-bottom: 0;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: unset;
  }
`;
const UserDesc = styled.div`
  flex-grow: 1;
  flex-shrink: 4;
  padding: 0 40px 0 0;
  text-align: right;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;

  @media only screen and (max-width: 991px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 0;
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
const UserTextDesc = styled.p`
  font-size: 1.25rem;
  color: #404040;
  font-weight: 300;
  margin-bottom: 2rem;

  @media only screen and (max-width: 991px) {
    order: 3;
    margin: 1rem 0;
  }
`;
const UserTextName = styled.p`
  font-size: 1.25rem;
  color: #404040;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 991px) {
    order: 1;
    margin: 1rem 0;
  }
`;
const UserTextPos = styled.p`
  font-size: 0.9375rem;
  color: #404040;
  margin-bottom: 0;

  @media only screen and (max-width: 991px) {
    order: 2;
    margin: 1rem 0;
  }
`;
const CustomerBox = styled.div`
  dispaly: flex;
  flex-flow: row;
  margin: 100px auto 30px;
  display: flex;
  justify-content: center;
  align-content: center;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
  }
`;

const Span = styled.span`
  margin: 0 20px;

  @media only screen and (max-width: 768px) {
    margin: 0;
  }

  & .auto {
    height: unset !important;
    min-height: unset !important;
    max-height: unset !important;
  }
`;

const Testimonial = () => {
  return (
    <MainSection>
      <Container>
        <Row>
          <HeadTwo>مشتریان ما در موردمان چه می گویند</HeadTwo>
          <Paragraph>
            از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
            خدمات خود استفاده می کنیم. با کلیک بر روی این قسمت می توانید متن خود
            را ویرایش کنید
          </Paragraph>
        </Row>
        <Row>
          <Col xs={1}></Col>
          {data.map((item) => (
            <Col sm={12} md={5}>
              <TestimonialBox>
                <UserAvatar>
                  <Image src={item.imgSrc} />
                </UserAvatar>
                <UserDesc>
                  <UserTextDesc>{item.description}</UserTextDesc>
                  <UserTextName>{item.name}</UserTextName>
                  <UserTextPos>{item.position}</UserTextPos>
                </UserDesc>
              </TestimonialBox>
            </Col>
          ))}
          <Col xs={1}></Col>
        </Row>
        <Row>
          <CustomerBox>
            {customer.map((item) => (
              <Span>
                <Image
                  className={item.className}
                  src={item.imgSrc}
                  quality={100}
                />
              </Span>
            ))}
          </CustomerBox>
        </Row>
      </Container>
    </MainSection>
  );
};

export default Testimonial;
