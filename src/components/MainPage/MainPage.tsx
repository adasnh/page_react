import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getComments } from '../../actions/commentActions';
import { getPhotos } from '../../actions/photoActions';
import { getPosts } from '../../actions/postsActions';
import { getUsers } from '../../actions/usersActions';


import { MainContainer } from '../MainContainer/MainContainer';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Colors } from '../../styledHelpers/Colors';
import { NotFound } from './NotFound';
import { Entities } from '../Entities/Entities';
import { Workspace } from '../Workspace/Workspace';
import { Profile } from '../Profile/Profile';


const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: ${Colors.bgColor};
    height:100%;
    text-decoration:none;
    a {
      text-decoration:none;
      color: ${Colors.fontColor};
    }
    padding-bottom:50px;
`;

const AppWraper = styled.div`
  display: flex;
  flex: 1 1;
  width: 100%;
  max-width: 100rem;
  min-height: 0;
  margin: auto;
`;

const MainWrapper = styled.div`
  width: 100%;
  padding: 0.75rem 0.5rem 0;
`;

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>


const MainPage: FC = () => {

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetComments>(getComments());
        dispatch<GetPosts>(getPosts());
    }, []);
    
  return(
    <Router>
      <Wrapper>
        <TopBar />
        <AppWraper>
          <LeftMenu />
          <MainWrapper>
          <Switch>
            <Route path="/entities" exact>
              <Entities />
            </Route>
            <Route path="/workspace" exact>
              <Workspace />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/" exact>
              <MainContainer />
            </Route>
            <Route component={NotFound} />
          </Switch>
          </MainWrapper>
        </AppWraper>
      </Wrapper> 
    </Router>
  )

}

export default MainPage;