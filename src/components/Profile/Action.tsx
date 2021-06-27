import styled from "styled-components";
import { fontSize } from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";
import {CarouselFlex} from "../../styledHelpers/Components";

const BasicDataActionContainer = styled(CarouselFlex)`
  position: relative;
  left: 70%;
  padding-top: 15px;
  
`

const BasicDataActionItem = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:nth-child(2) {
    margin: 0 10px;
  }
  
  span {
    font-size: ${fontSize["16"]};
    color: ${Colors.black};

    margin-left: 6px;
  }
  
  img {
    width: 17px;
    height: auto;
    max-height: 15px;
  }
`;

function Action() {
    return (
        <BasicDataActionContainer>
            <BasicDataActionItem href="test">
                <img src="assets/icons/message.png" alt="message"/>
                <span>Message</span>
            </BasicDataActionItem>

            <BasicDataActionItem href="test">
                <img src="assets/icons/request.png" alt="request"/>
                <span>Create a request</span>
            </BasicDataActionItem>

            <BasicDataActionItem href="test">
                <img src="assets/icons/suitcase.png" alt="add"/>
                <span>Add to a cluster</span>
            </BasicDataActionItem>
        </BasicDataActionContainer>
    );
}

export default Action;
