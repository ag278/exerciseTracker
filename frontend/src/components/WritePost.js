import { Box, Card, Input, InputAdornment, MenuItem } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import React from 'react';
import Button from '@mui/material/Button';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function WritePost(props) {
  const currencies = ['Running', 'cycling', 'Walking'];
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Card>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 5, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Please select your activity"
            value={currency}
            onChange={handleChange}
            helperText=""
            style={{ marginTop: '20px', marginRight: '8px', width: '30%' }}
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Time"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch', width: '30%' }}
            helperText=""
            InputProps={{
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
            }}
            style={{ marginTop: '20px', width: '30%' }}
            size="small"
          />
          <TextField
            label="Distance"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            helperText=""
            style={{ marginTop: '20px' }}
            size="small"
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TextField
            id="outlined-textarea"
            label="Descibe your experience"
            multiline
            style={{ marginLeft: '20px', marginRight: '20px', width: '93%' }}
          />
        </div>
        <div style={{ marginBottom: '20px', marginLeft: '20px' }}>
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              component="span"
              style={{ marginRight: '20px' }}
            >
              Upload Image
            </Button>
          </label>
          <Button
            variant="outlined"
            color="error"
            startIcon={<LocationOnIcon />}
          >
            Add location
          </Button>
          <Button
            variant="contained"
            style={{ float: 'right', marginRight: '30px' }}
          >
            Post
          </Button>
        </div>
      </Box>
    </Card>
  );
}

export default WritePost;
