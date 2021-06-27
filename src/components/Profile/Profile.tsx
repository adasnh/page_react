import { FC } from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import Action from "./Action";
import BasicData from "./BasicData";
import SkillsAndInformations from "./SkillsAndInformations";
import PanelInformations from "./PanelInformations";
import Proposals from "./Proposals";
import InternalReviews from "./InternalReviews";
import AmountOfFees from "./AmountOfFees";

const ProfileContainer = styled.main`
  padding: 0 20px;
  background-color: ${Colors.white};
`;

export const Profile: FC = () => { 
    
    return (
      <ProfileContainer>
          <Action/>
          <BasicData/>
          <SkillsAndInformations/>
          <PanelInformations/>
          <Proposals/>
          <InternalReviews/>
          <AmountOfFees/>
      </ProfileContainer>
    );
}

export default Profile;