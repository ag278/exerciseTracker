import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import { Typography } from '@material-ui/core';

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { margin } from '@mui/system';
function Post() {
  return (
    <Card spacing={3} className="carda">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader={`September 14, 2016, Bhubaneswar`}
      />
      <CardContent>
        <div style={{ whiteSpace: 'nowrap' }}>
          <DirectionsRunIcon
            style={{ display: 'inline-block', marginLeft: '4px' }}
          />
          <div
            style={{
              display: 'inline-block',
              marginLeft: '30px',
              fontSize: '15px',
            }}
          >
            {' '}
            Distance:
          </div>{' '}
          <div style={{ display: 'inline-block', fontSize: '25px' }}>
            xkm
          </div>{' '}
          <div
            style={{
              display: 'inline-block',
              marginLeft: '30px',
              fontSize: '15px',
            }}
          >
            {' '}
            Time:
          </div>{' '}
          <div style={{ display: 'inline-block', fontSize: '25px' }}>2min</div>
        </div>
      </CardContent>
      <CardMedia
        component="img"
        height="500"
        //   image="./src/public/images/food-image.png"
        image="https://picsum.photos/200"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="div">
          <b>@user83 </b>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ChatBubbleIcon style={{ color: 'grey', margin: '8' }} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
