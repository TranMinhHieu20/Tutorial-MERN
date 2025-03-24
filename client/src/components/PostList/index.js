import {Grid} from '@mui/material'

export default function PostList() {
    return ( <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={12} sm={6}>
            <p>This is post1</p>
        </Grid>
        <Grid item xs={12} sm={6}>
            <p>This is post2</p>
        </Grid>
        <Grid item xs={12} sm={6}>
            <p>This is post3</p>
        </Grid>
    </Grid>
        
        
    )
}