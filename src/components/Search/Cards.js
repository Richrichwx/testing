import React, { Component } from 'react';
import styled from 'styled-components';
import guests from '../../assets/guests.png';
import forum from '../../assets/forum.png';
import './index.css';

const CardsContainer = styled('div')`
    display: flex;
    margin-top: 40px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 25px;
`;

const CardsItems = styled('div')`
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    flex: 33.33%;
    height: 254px;
    cursor: pointer;
    flex-wrap: wrap;
    max-width: 100%;
    margin: 40px 0 30px;
    background: url('https://d23jhgw4cciqh2.cloudfront.net/resized/venue/the-fonda-theatre-aeg-presents/e417.480x320.jpg') no-repeat;
    &:hover {
      &:before {
      content: '';
      background: rgba(0,0,0,0.7);
      height: 100%;
      width: 100%;
      display: block;
      z-index: 1;
      }
    }
`;

const CardsWrapper = styled('div')`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 415px;
    flex: 30.33%;
    width: 30.33%;
    position: relative;
    flex-direction: column;
    padding: 10px;
    @media (max-width: 1150px) {
        flex: 34.33%;
        width: 34.33%;
    }
`;

const TitleCards = styled('div')`
    width: 100%;
    height: 48px;
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    text-align: left;
    color: #ffffff;
    position: absolute;
    bottom: 30px;
    font-style: oblique;
    font-family: URW Chancery L, cursive;
`;

const CardsBottom = styled('div')`
    color: white;
    display: flex;
    height: 30px;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: space-between;
    position:absolute;
    bottom:0;
    font-size: 13px;
`;

const InnerBottom = styled('div')`
    padding: 0 10px;
    display: flex;
    height: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const GuestsForum = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 90px;
    align-items: center;
    height: 50px;
`;

const Img = styled('img')`
    height: 15px;
    width: 15px;
`;

const Rating = styled('div')`
    color: #000;
    width: 100%;
`;

const Button = styled('button')`
`;


const InnerTitle = styled('div')`
    padding: 0 10px;
`;

class Cards extends Component {
  render() {
    return (
      <CardsContainer>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
        <CardsWrapper>
          <CardsItems className="hover-button">
            <Button className="hover-button--on">Посмотреть</Button>
            <TitleCards>
              <InnerTitle>The NOVO - AEG Presents</InnerTitle>
            </TitleCards>
            <CardsBottom>
              <InnerBottom>
                <p>Автор: Пушкин А.С.</p>
                <GuestsForum>
                  <Img src={ forum }/>
                  <p>23</p>
                  <Img src={ guests }/>
                  <p>65</p>
                </GuestsForum>
              </InnerBottom>
            </CardsBottom>
          </CardsItems>
          <Rating>тут будет рейтинг(звездочки)!</Rating>
        </CardsWrapper>
      </CardsContainer>
    );
  }
}

export default Cards;