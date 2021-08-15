import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Video from "assets/images/about/video.png";

const MainSection = styled.section`
  background-color: #6b6b6b;
  padding: 110px 0;

  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }
`;

const HeadThree = styled.h3`
  color: #ffff;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 1.75rem;

  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto 1.5rem;
  }
`;
const Ul = styled.ul`
  list-style: disc;
`;

const Li = styled.li`
  color: #ffff;
  font-size: 1.125rem;
  padding: 20px 15px;
  font-weight: 300;
`;

const About = () => {
  return (
    <MainSection>
      <Container>
        <Row className="smReverse">
          <Col sm={12} md={5}>
            <Image src={Video} quality={100} />
          </Col>
          <Col sm={12} md={7}>
            <HeadThree>ویدئو معرفی ما را تماشا کنید</HeadThree>
            <Ul>
              <Li>
                این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک
                کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و
                کاربران اطلاعات بیشتری بدست آورند
              </Li>
              <Li>
                این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک
                کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و
                کاربران اطلاعات بیشتری بدست آورند
              </Li>
            </Ul>
          </Col>
        </Row>
      </Container>
    </MainSection>
  );
};

export default About;
