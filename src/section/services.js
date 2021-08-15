import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import data from "data/services";

const MainSection = styled.section`
  background: #fff;
  padding: 110px 0;
  text-align: center;
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
  margin-bottom: 3rem;
`;
const CardBody = styled.div`
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 3px 48px rgba(0, 0, 0, 0.1);
  margin: -40px auto;
  position: relative;
  border-radius: 5px;
  width: 90%;

  @media only screen and (max-width: 992px) {
    padding: 2rem 1rem;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    padding: 2rem;
    margin-bottom: 0.9375rem;
  }
`;
const CardTitle = styled.h3`
  font-weight: 700;
  color: #333;
  font-size: 1.25rem;
`;
const CardDesc = styled.p`
  font-size: 1rem;
  color: #62758d;
  font-weigh: 300;
  margin-bottom: 2rem;
`;
const TagsBox = styled.div`
  display: flex;
  flex-flow: row;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 992px) {
    flex-flow: column;
  }

  @media only screen and (max-width: 768px) {
    flex-flow: row;
  }
`;
const Tags = styled.a`
  background-color: transparent;
  color: rgb(29, 29, 236);
  padding: 3px 15px 1px;
  min-width: 100px;
  font-size: 1rem;
  font-weight: 700;

  @media only screen and (max-width: 992px) {
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Services = () => {
  return (
    <MainSection>
      <Container>
        <Row>
          <HeadTwo>ما خدمات زیادی به مشتریان بزرگمان ارائه می دهیم</HeadTwo>
          <Paragraph>
            از این زیر عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
            خدمات خود استفاده می کنیم.
            <br />
            با کلیک بر روی این قسمت می توانید متن خود را ویرایش کنید
          </Paragraph>
        </Row>
        <Row>
          {data.map((item) => (
            <Col sm={12} md={4} key={item.id}>
              <Card.Body>
                <Image src={item.imgSrc} quality={100} />
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDesc>{item.description}</CardDesc>
                  <TagsBox className={item.color}>
                    <Tags>{item.tagOne}</Tags>
                    <Tags>{item.tagTwo}</Tags>
                  </TagsBox>
                </CardBody>
              </Card.Body>
            </Col>
          ))}
        </Row>
      </Container>
    </MainSection>
  );
};

export default Services;
