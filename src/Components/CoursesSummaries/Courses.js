import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
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
  How
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
      <InfoSec lightBg={lightBg}>
        <Container>
          
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
          
        </Container>
      </InfoSec>
    </>
  );
}

export default CoursesSection;
