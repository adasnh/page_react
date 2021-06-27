import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ISinglePhoto } from '../../../entities/ISinglePhoto';
import { ISinglePost } from '../../../entities/ISinglePost';
import { ISingleUser } from '../../../entities/ISingleUser';
import { IState } from '../../../reducers';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { Colors } from '../../../styledHelpers/Colors';
import { id } from '../../../tools/currentUser';
import { ISinglePhotoReducer } from '../../../reducers/photoReducers';
import { IPostReducer } from '../../../reducers/postsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';


const PublicationWrapper = styled.section`
    display: flex;
    overflow: hidden;
    width: 100%;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 6px rgb(91 94 106 / 30%);

    .title{
        color: #5052a8;
    font-size: ${fontSize["22"]};
    font-weight: 700;  
    }

    .see-more-publications{
        margin-top: 10px;
    font-size: ${fontSize["14"]};
    font-weight: 700;
    color: ${Colors.blue};
    }
`;

const HighlightArticle = styled.article`
    position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
    width: 30rem;
    max-width: 30%;
    margin-right: 1rem;
    color: white;
`;

const HighlightArticleImg = styled.img`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
`;

const HighlightDiv = styled.div`
    z-index: 1;
    padding: 2rem 0.75rem 1rem;
`;

const HighlightPublicationTitle = styled.h3``;

const HighlightPublicationUser = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const HighlightPublicationTime = styled.div``;

const HighlightPublicationUserLink = styled(Link)`
    display: flex;
    align-items: center;
    img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
`;

const Articles = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    margin-right: 1rem;
`;

const ArticlesTitle = styled.h2`
    font-weight:bold;
    font-size: 1.5em;
    margin: 0.7rem 0;
`;

const ArticleWrapper = styled.article`
    display: flex;
    align-items: flex-start;
    margin: 0.7rem 0;
`;

const ArticleImg = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
`;

const UserSign = styled.div`
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`;

const UserSignLink = styled(Link)`
    display: flex;
    align-items: center;
    img {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0.5rem;
        border-radius: 50%;
    }
`;


const ArticleTitle = styled.h3`
    margin-bottom: 0.5rem;
`;





export const Publications: FC = () => {

    
    const { postList } = useSelector<IState, IPostReducer>(state => ({
        ...state.posts
    }));

    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const { photoList } = useSelector<IState, ISinglePhotoReducer>(state => ({
        ...state.photo
    }));


    function getPosts(postList: ISinglePost[], usersList: ISingleUser[], photoList: ISinglePhoto[]) {
        
        const posts: ISinglePost[] = postList.filter(x => x.userId === 1).slice(1, 4);
        
        if(postList.length > 0 && usersList.length > 0 && photoList.length > 0){
        
        return (posts.length > 0 ? posts.map((post, i) =>
            <ArticleWrapper>
            <ArticleImg src={photoList[post.id].thumbnailUrl} alt=""/>
            <div>
                <ArticleTitle>{post.title}</ArticleTitle>
                <UserSign>
                    <div>2020-05-08</div>
                    <UserSignLink to="/Profile">
                        <img src={photoList[id].url} alt="" />
                        <p>{usersList[id].name}</p>
                    </UserSignLink>
                </UserSign>
            </div>
            </ArticleWrapper>) : <></>);

        }
    }

    return(
        <PublicationWrapper>
         
            <HighlightArticle>
                <HighlightArticleImg src="https://via.placeholder.com/600/92c952" alt="" />
                <HighlightDiv>
                    <HighlightPublicationTitle>
                        sunt aut facere repellat provident occaecati excepturi optio reprehenderit
                    </HighlightPublicationTitle>
                    <HighlightPublicationUser>
                        <HighlightPublicationTime>2020-05-08</HighlightPublicationTime>
                        <HighlightPublicationUserLink to="/">
                            <img src="https://via.placeholder.com/150/92c952" alt="" />
                            <p>Krystyna Czubowna</p>
                        </HighlightPublicationUserLink>
                    </HighlightPublicationUser>
                </HighlightDiv>
            </HighlightArticle>

            <Articles>
                <ArticlesTitle className="title">Latest publications</ArticlesTitle>
                {getPosts(postList, usersList, photoList)}

            <Link to="/publications" className="see-more-publications">See more publications</Link>
            </Articles>
        </PublicationWrapper>
    );
};