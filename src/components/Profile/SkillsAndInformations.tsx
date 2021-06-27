import styled from "styled-components";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import {Colors} from "../../styledHelpers/Colors";
import {EditIcon} from "../../styledHelpers/Components";


const SkillsAndInformationsContainer = styled(FlexColumn)`
  padding-top: 15px;
  padding-bottom: 5px;
  position: relative;
  
  border-top: ${Colors.lightGrey} 1px solid;
`;

const SkillsAndInformationsWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  
  h2 {
    width: 100%;
    margin-bottom: 5px;
    color: ${Colors.grey};
  }
`;

const SkillsAndInformationsItem = styled(FlexRow)`
  flex-wrap: wrap;

  div {
    padding: 3px 6px;
    background-color: #E6F0F3;
    border-radius: 3px;
    color: #6BA9B8;
    margin-top: 5px;
    
    margin-right: 10px;
  }
`;

function SkillsAndInformations() {
    return (
        <SkillsAndInformationsContainer>
            <EditIcon>
                <img  src="assets/icons/pencil.png" alt="edit"/>
            </EditIcon>

            <SkillsAndInformationsWrapper>
                <h2>Expertise</h2>

                <SkillsAndInformationsItem>
                    <div><span>Mergers and acquisition</span></div>
                </SkillsAndInformationsItem>
            </SkillsAndInformationsWrapper>

            <SkillsAndInformationsWrapper>
                <h2>Specialities</h2>

                <SkillsAndInformationsItem>
                    <div><span>Cross border operation</span></div>
                    <div><span>Transaction over 500m&/$</span></div>
                </SkillsAndInformationsItem>
            </SkillsAndInformationsWrapper>

            <SkillsAndInformationsWrapper>
                <h2>Admission to practice law</h2>

                <SkillsAndInformationsItem>
                    <div><span>Paris bar association</span></div>
                    <div><span>Tunisian bar association</span></div>
                </SkillsAndInformationsItem>
            </SkillsAndInformationsWrapper>

            <SkillsAndInformationsWrapper>
                <h2>Countries</h2>

                <SkillsAndInformationsItem>
                    <div><span>Tunisia</span></div>
                </SkillsAndInformationsItem>
            </SkillsAndInformationsWrapper>
        </SkillsAndInformationsContainer>
    );
}

export default SkillsAndInformations;
