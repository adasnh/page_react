import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import WorkspaceItem from '../../Workspace/WorkspaceItem';
import {Item, ITEMS} from "../../Workspace/WorkspaceItems";
import '../../../styles/slick-carousel/slick/slick.css';
import '../../../styles/slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Colors } from '../../../styledHelpers/Colors';
import { Link } from 'react-router-dom';

const WorkspaceSliderWrapper = styled.div`
    margin:3rem 0;
    
`; 

const SliderTitle = styled.div`
    font-weight:bold;
    font-size: 1.5em;
    margin: 0.7rem 0;
`;

const SliderContainer = styled.div`
    display:flex;
    justify-content: space-around;
`;

const Workspace = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #e5e8f3;
    }
`;

const WorkspaceImage = styled.img`
`;

const WorkspaceTitle = styled.div`
    margin-top:0.5rem;
    color: ${Colors.fontColor};
`;

const UpdateTime = styled.div`
    font-size: 0.8rem;
    margin-top: 0.8rem;
    margin-bottom: -0.3rem;
    color: ${Colors.fontColorLight};
`;

export const WorkspacesSlider: FC = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        
        <WorkspaceSliderWrapper>
            <SliderTitle>
                <h2>Workspaces</h2>
            </SliderTitle>
            <Slider {...settings}>
            {ITEMS.map((item: Item, index: number) => {
                        return (
                            <WorkspaceItem
                                href={item.href}
                                title={item.title}
                                backgroundImageUrl={item.backgroundImageUrl}
                                imagUrl={item.imagUrl}
                                smallImageUrl={item.smallImageUrl}
                                type={item.type}
                                updateDate="Last update 2 days ago"
                                usersCount={150}
                                key={index}
                            />
                        );
                    }
                )}

            </Slider>
        </WorkspaceSliderWrapper>
    );
};