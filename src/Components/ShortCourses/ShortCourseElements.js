import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  // padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1120px;
    width: 90%;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const PricingHeading = styled.h1`
  
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background:    #d76d6d;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 290px;
  height: 300px;
  text-decoration: none;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 34px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 0;
  align-items: center;
  color: #000;
`;

export const PricingCardIcon = styled.div`
  margin: 5px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 0;
  font-size: 20px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 12px;
  margin-bottom: 0;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;