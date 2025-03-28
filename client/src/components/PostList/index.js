import React from 'react';
import { Grid } from '@mui/material';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';

export default function PostList() {
    const dispatch = useDispatch();
    const posts = useSelector(postsState$);
    console.log('posts-postsList', posts);

    React.useEffect(() => {
        dispatch(actions.getPosts.getPostsRequest());
    }, [dispatch]);

    return (
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6}>
                <Post />
            </Grid>
        </Grid>
    );
}
