
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import Appbar from '../Appbar/appbarLanding';
import {
  Column1,
  Column2,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  TopLine1,
  ImgWrapper,
  Img,
  Time,
  Price,
  How,
  ImgCover
} from './Courses.elements';

function CoursesSection({
  primary,
  lightBg,
  topLine,
  lightTopLine1,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  time,
  lightTime,
  lightPrice,
  price,
  lightHow,
  how

}) {
  return (
    <>
    <Appbar />
    <InfoSec>
        <Container>
          {/* <InfoColumn> */}
            <TextWrapper>
                <TopLine1>Course Summary</TopLine1>
                <TopLine lightTopLine={lightTopLine}> {topLine}</TopLine>
                <Heading lightText={lightText}><span>Target: </span>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}><span>What:</span> {description}</Subtitle>
                <How lightHow={lightHow}>{how}</How>
                <Time lightTime={lightTime}><span>Duration:</span> {time}</Time>
                <Price lightPrice={lightPrice}><span>Fee: </span>{price}</Price>
                <Link to='/checkout'>
                  <Button big fontBig primary={primary}>
                    Pay for enrolment
                  </Button>
                </Link>
            </TextWrapper>
            {/* </InfoColumn> */}
            {/* <InfoColumn>
              
                <Img src='./images/Online.js' alt="" />
              
            </InfoColumn>
        */}
        </Container>
        </InfoSec>
      
    </>
  );
}

export default CoursesSection;
