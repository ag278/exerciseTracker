import { Box, Grid, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';

import React from 'react';
import Post from '../components/Post';
import WritePost from '../components/WritePost';

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item md={1} lg={1}></Grid>
      <Grid item xs={12} md={6} lg={6}>
        <WritePost />
        <Box mt={4}>
          <Post />
        </Box>
      </Grid>
      <Grid item md={1} lg={1}></Grid>
      <Grid item md={4} lg={3}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus osrci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Grid>
    </Grid>
  );
}
export default Home;
