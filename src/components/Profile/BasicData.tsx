import {FC} from "react";
import styled from "styled-components";
import {fontSize} from "../../styledHelpers/FontSizes";
import {FlexColumn} from "../../styledHelpers/Grid";
import {CarouselFlex, EditIcon} from "../../styledHelpers/Components";
import { useSelector } from "react-redux";
import { IState } from "../../reducers";
import { ISinglePhotoReducer } from "../../reducers/photoReducers";
import { IUsersReducer } from "../../reducers/usersReducers";
import { id } from "../../tools/currentUser";
import { Colors } from "../../styledHelpers/Colors";



const BasicDataContainer = styled(CarouselFlex)`
  height: 150px;
  padding: 30px 0;
`;

const BasicDataSeeProfileWrapper = styled.div`
  width: 90px;
  
  img {
    width: 75px;
    height: auto;
    border-radius: 50%;
  }
  
  a {
    font-size: ${fontSize["16"]};
    color: ${Colors.lightBlue};
    text-decoration: none;
  }
`;

const BasicDataPersonalDetailsWrapper = styled(FlexColumn)`
  width: 180px;
  justify-content: space-evenly;
  margin-left: 15px;
  
  .bold {
    font-weight: bold;
  }
`;

const BasicDataEditContactDataWrapper = styled(FlexColumn)`
  margin-left: auto;
  padding-left: 20px;
`;

const BasicDataContactData = styled(FlexColumn)`
  justify-content: space-evenly;
  height: 50%;
  width: 220px;

  margin-right: 5px;
`;

const BasicDataEditIcon = styled(EditIcon)`
  height: 50%;
`;

const BasicDataSpan = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: ${fontSize["16"]};

`;

export const BasicData: FC = () => { 

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));

    return (
        <BasicDataContainer>
            <BasicDataSeeProfileWrapper>
            <img src={photoList[id]?.url} alt="avatar logo"/>
                <a href="/profile">See profile</a>
            </BasicDataSeeProfileWrapper>

            <BasicDataPersonalDetailsWrapper>
                <BasicDataSpan className="bold">{usersList[id]?.name}</BasicDataSpan>
                <BasicDataSpan className="bold">{usersList[id]?.company.name}</BasicDataSpan>
                <BasicDataSpan>{usersList[id]?.address.city}</BasicDataSpan>
            </BasicDataPersonalDetailsWrapper>

            <BasicDataEditContactDataWrapper>
                <BasicDataEditIcon>
                    <img src="assets/icons/pencil.png" alt="edit"/>
                </BasicDataEditIcon>

                <BasicDataContactData>
                    <BasicDataSpan>{usersList[id]?.email}</BasicDataSpan>
                    <BasicDataSpan>{usersList[id]?.phone}</BasicDataSpan>
                </BasicDataContactData>
            </BasicDataEditContactDataWrapper>
        </BasicDataContainer>
    );
}

export default BasicData;