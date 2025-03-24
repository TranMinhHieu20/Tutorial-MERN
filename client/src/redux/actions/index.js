import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction.type;
};

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payload) => payload,
    getPostsFailure: (err) => err,
});

/*
getType(getPosts.getPostSuccess) 
=>
    {
        type: 'getPostRequest',
        payload: {
            name: 'Test'
        }
    }
*/
