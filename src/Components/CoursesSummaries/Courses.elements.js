import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding:25px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : 'white')};
`;

// export const InfoRow = styled.div`
//   display: flex;
//   margin: 0 -15px -15px -15px;
//   flex-wrap: wrap;
//   align-items: center;
//   // flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
// `;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 1040px;
  padding-top: 0;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;



export const TopLine1 = styled.h1`
  color: ${({ lightTopLine1 }) => (lightTopLine1 ? '#000' : '#000')};
  font-size: 28px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  margin-bottom: 30px;
`;


export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#0000FF' : '#0000FF')};
  font-size: 50px;
  line-height: 45px;
  font-weight: 700;
  letter-spacing: 1.7px;
  margin-bottom: 16px;.
`;


export const Heading = styled.p`
  margin-bottom: 40px;
  font-size: 30px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ lightText }) => (lightText ? '#000' : '#000')};
`;

export const Subtitle = styled.p`
  max-width: 840px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 30px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#000' : '#000')};
`;
export const Time = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 10px;
  color: ${({ lightTime }) => (lightTime ? '#000' : '#000')};
`;
export const Price = styled.p`
  max-width: 200px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 10px;
  color: ${({ lightTime }) => (lightTime ? '#000' : '#000')};
`;
export const How = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 20px;
  color: ${({ lightTime }) => (lightTime ? '#000' : '#000')};
`;

