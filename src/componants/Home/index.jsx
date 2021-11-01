import React from 'react';
import { Home1, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeDescSpan , HomeBtn } from './style';

const Home = () =>{ 
   
    return( 
      <Home1>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Anas Naser</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
  </Home1>
    )
  }

 
export default Home;
