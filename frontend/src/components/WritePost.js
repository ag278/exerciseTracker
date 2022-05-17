import { Card, Input, InputAdornment, MenuItem } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function WritePost(props) {
  const currencies = ['Running', 'cycling', 'Walking'];
  const [currency, setCurrency] = React.useState('EUR');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <Card>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ textAlign: 'center' }}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select your activity"
            value={currency}
            onChange={handleChange}
            helperText=""
            size="small"
          >
            {currencies.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-required"
            label="Time"
            helperText=""
            InputProps={{
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
            }}
            size="small"
          />

          <TextField
            label="Distance"
            id="outlined-start-adornment"
            // sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">km</InputAdornment>,
            }}
            helperText=""
            //style={{ marginTop: '20px' }}
            size="small"
          />
        </div>
        <div style={{ marginBottom: '10px', textAlign: 'center' }}>
          <TextField
            id="outlined-textarea"
            label="Descibe your experience"
            multiline
            style={{ marginLeft: '20px', marginRight: '20px', width: '93%' }}
          />
        </div>
        <div
          style={{
            marginBottom: '40px',
            marginLeft: '20px',
            textAlign: 'center',
          }}
        >
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: 'none' }}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <label htmlFor="select-image">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddPhotoAlternateOutlinedIcon />}
              component="span"
              style={{
                float: 'left',
                marginRight: '20px',
                marginBottom: '20px',
              }}
            >
              Upload Image
            </Button>
          </label>

          <Button
            variant="outlined"
            color="error"
            startIcon={<LocationOnIcon />}
            style={{ float: 'left' }}
            onClick={handleClickOpen}
          >
            Add location
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {'Enter your location'}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {/* Where are you? */}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Where are you?"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose} autoFocus>
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          <Button
            variant="contained"
            style={{ float: 'right', marginRight: '20px' }}
          >
            Post
          </Button>
        </div>
        <br></br>
        <div style={{ textAlign: 'center', marginLeft: '25%' }}>
          {imageUrl && selectedImage && (
            <Box mt={2} textAlign="left">
              <div style={{ marginLeft: '20%' }}>
                <h3>Image Preview</h3>
              </div>
              {/* //Image preview */}
              <img
                src={imageUrl}
                alt={selectedImage.name}
                style={{
                  height: '300px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'grid',
                  placeItems: 'center',
                  marginLeft: '5%',
                  marginBottom: '20px',
                }}
              />
            </Box>
          )}
        </div>
      </Box>
    </Card>
  );
}

export default WritePost;
