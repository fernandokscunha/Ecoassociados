import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import card1 from '../../image/slide1.jpg';
import card2 from '../../image/slide2.jpg';
import card3 from '../../image/slide3.jpg';
import Title from '../../assets/Title';
import Button from '../button/Button';

const Card = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 300px;
 height: 350px;
 border: 1px solid #ccc;
 border-radius: 8px;
 margin:10px;

 @media (max-width: 768px) {
  width: 100%;
  margin-left:0;
}
`;

const TituloStyle = styled.p`
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 8px;
`;

const Description = styled.p`
 font-size: 16px;
`;
const ImgCard = styled.img`
width: 300px;
height: 200px;

@media (max-width: 768px) {
   width: 100%;
   height: auto;
 }
`;
const CarouselCard = () => (
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
 <Container>
    <Title text="Eco campanhas" />
    <Row>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card1} alt="card 1" />
            <ImgCard src={card2} alt="card 2" />
            <ImgCard src={card3} alt="card 3" />
          </Carousel>
          <TituloStyle>Museu</TituloStyle>
          <Description>Descrição 1</Description>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card1} alt="card 1" />
            <ImgCard src={card2} alt="card 2" />
            <ImgCard src={card3} alt="card 3" />
          </Carousel>
          <TituloStyle>Título 2</TituloStyle>
          <Description>Descrição 2</Description>
        </Card>
      </Col>
      <Col sm={12} md={6} lg={4}>
        <Card>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop intervalTime={3000}>
            <ImgCard src={card1} alt="card 1" />
            <ImgCard src={card2} alt="card 2" />
            <ImgCard src={card3} alt="card 3" />
          </Carousel>
          <TituloStyle>Título 3</TituloStyle>
          <Description>Descrição 3</Description>
        </Card>
      </Col>
    </Row>
 </Container>
 <Button text="Saiba mais" size="large" to={'/campanhas'} external={false} />
 </div>
);

export default CarouselCard;