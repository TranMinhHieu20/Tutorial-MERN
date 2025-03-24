import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    IconButton,
    Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Post() {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title="This is title"
                subheader="March 24, 2025"
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }
            />
            <CardMedia image="" title="Title" />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {' '}
                    This is Title Post
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {' '}
                    This is Content Post
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">
                        {' '}
                        10 likes
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}
