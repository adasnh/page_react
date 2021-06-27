import { combineReducers } from 'redux';
import comment, { ICommentReducer } from './commentsReducers';
import photo, { ISinglePhotoReducer } from './photoReducers'
import posts, { IPostReducer } from './postsReducers';
import users, { IUsersReducer } from './usersReducers';


export default combineReducers({
    users,
    photo,
    posts,
    comment
});

export interface IState {
    users: IUsersReducer,
    photo: ISinglePhotoReducer,
    comment: ICommentReducer,
    posts: IPostReducer  
}