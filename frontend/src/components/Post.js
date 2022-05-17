import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
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
      <CardContent style={{ paddingTop: '0px' }}>
        <div style={{ whiteSpace: 'nowrap' }}>
          <DirectionsRunIcon
            style={{ display: 'inline-block', marginLeft: '10px' }}
          />
          <div
            style={{
              display: 'inline-block',
              marginLeft: '20px',
              fontSize: '20px',
            }}
          >
            {' '}
            Distance:{' '}
            <div style={{ display: 'inline-block', fontSize: '25px' }}>
              20
            </div>{' '}
            km
          </div>
          <div
            style={{
              display: 'inline-block',
              marginLeft: '30px',
              fontSize: '20px',
            }}
          >
            {' '}
            Time:{' '}
            <div style={{ display: 'inline-block', fontSize: '25px' }}>
              2
            </div>{' '}
            min
          </div>
        </div>
      </CardContent>
      <CardMedia
        component="img"
        height="500"
        //   image="./src/public/images/food-image.png"
        image="https://picsum.photos/200"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon style={{ color: 'black' }} />
        </IconButton>
        <ChatBubbleOutlineIcon
          style={{ color: 'black', marginLeft: '8', marginRight: '8' }}
        />
        <IconButton aria-label="share">
          <SendIcon style={{ color: 'black' }} />
        </IconButton>
      </CardActions>
      <CardContent style={{ paddingTop: '0px' }}>
        <Typography variant="body2" color="text.secondary" component="div">
          <b>@user83 </b>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary" component="div">
          <b>28 Likes </b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Post;
