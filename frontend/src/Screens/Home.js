import { Box, Grid, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import Sidebar from '../components/Sidebar';
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
        <Sidebar />
      </Grid>
    </Grid>
  );
}
export default Home;
