import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './ShortCourseElements';
import Navbar from '../Navbar/NavBar1';

function ShortCourse() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <Navbar />
      <div style={{fontSize:'20px',padding:'10px',background:'red'}}>
            <b>Contact us via Email: alternativesglobal@gmail.com  |   Director on +256-782397529</b>
            </div><hr />
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Short Courses</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Gender and Project planning and Management</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gender, social inclusion and Extractives</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>21st Century skills every young person must have</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>GGrant Development, writing and Management</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
               
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Leadership Etiquete and Traction</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
               
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gender, social inclusion and Extractives</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Developing Impactful Youth Programs</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>

          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Dealing with attitudes and mindsets</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
               
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Mental health amidst pandemics</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Mental health and Money</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
           
          </PricingContainer>


          <PricingContainer>
          <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Young people’s mental health</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Mental health in the workplaces</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                
                <Button primary>Start Course</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>


        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default ShortCourse;