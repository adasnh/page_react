import React, { FC } from 'react';
import styled from 'styled-components';

import { UserCard } from './UserCard/UserCard';

const LeftSide = styled.aside`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-start;
    width: 15rem;
    padding-top: 0.75rem;
`;
const SideMenu = styled.div``;

export const LeftMenu: FC = () => {
    return(
        <LeftSide>
            <UserCard />
            <SideMenu></SideMenu>
        </LeftSide>
    );

};