import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

const IconContainer = styled.div`
    display: block;
`;

const TopNavNotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 3;

`;

const TopNavIcon = styled.a`
  img {
    max-width: 25px;
    height: 23px;
    margin-right: 15px;
  }
`;

const TopNavCircleIcon = styled(TopNavIcon)`
  width: 42px;
  height: 42px;
  background-color: #E8E8E8;
  border-radius: 50%;
  position: relative;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 0;
  }
`;

const TopNavBadge = styled.div`
  width: 18px;
  height: 12px;
  top: 0;
  right: 0;
  position: absolute;
  background-color: ${Colors.lightBlue};
  border-radius: 50%;
  font-size: ${fontSize[10]};
  color: ${Colors.white};
  line-height: normal;
  text-align: center;
`;

export const TopBarIcons: FC = () => {
  
    return(
        <TopNavNotificationWrapper>
            <TopNavIcon href="/" className="d-none d-md-block">
                <img src="assets/icons/house.png" alt="home page"/>
            </TopNavIcon>
            <TopNavCircleIcon href="/test">
                <img src="assets/icons/comments.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
            <TopNavCircleIcon href="/test">
                <img src="assets/icons/bell.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
        </TopNavNotificationWrapper>
    );

};