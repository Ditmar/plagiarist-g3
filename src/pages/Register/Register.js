import React from 'react'
import { Grid, Paper, Avatar, Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import useStyles from './register.styles';

export const Register = () => {
  const classes = useStyles();
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    return (
        <Grid>
            <Paper style = {classes.paperStyle}>
                <Grid align = 'center' >
                    <Avatar style = {classes.avatarStyle}></Avatar>
                    <Typography variant = 'caption' gutterBottom style = {{...classes.typeFont, ...classes.sizeFont, ...classes.colorFont, ...classes.opacityFont}}>Plagio Control</Typography>
                    <br /><br />
                    <h2 style = {classes.headerStyle}>Sign in Plagio Control</h2>
                    <Typography variant = 'caption' gutterBottom style = {{...classes.typeFont, ...classes.sizeFontSecondary, ...classes.colorFont, ...classes.opacityFont}}>Enter your email and password below</Typography>
                </Grid>
                <br/>
                <form style = {{margin: '20px', ...classes.typeFont}}>
                    <InputLabel htmlFor = 'standard-adornment-email' style = {{...classes.typeFont, ...classes.sizeFontSecondary, ...classes.colorFont, ...classes.opacityFont}}>EMAIL</InputLabel>
                    <OutlinedInput id = 'outlined-basic' fullWidth label = 'Email' size = 'small' variant = 'outlined' placeholder = 'Email address' style={{height: '40px', fontSize: '14px', ...classes.borderLabel}} />
                    <br /><br />
                    <InputLabel htmlFor='standard-adornment-password' style={{...classes.typeFont, ...classes.sizeFontSecondary, ...classes.colorFont, ...classes.opacityFont}}>PASSWORD</InputLabel>
                    <OutlinedInput
                        fullWidth
                        placeholder='Password'
                        style={{height: '40px', borderRadius: '8px'}}
                        type={values.showPassword ? "text" : 'password'}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                            <InputAdornment position = 'end'>
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                        }
                    />
                    <br /><br />
                    <InputLabel htmlFor='standard-adornment-password' style={{...classes.typeFont, ...classes.sizeFontSecondary, ...classes.colorFont, ...classes.opacityFont}}>RE. PASSWORD</InputLabel>
                    <OutlinedInput
                        fullWidth
                        placeholder='Repeat password'
                        style={{height: '40px', borderRadius: '8px'}}
                        type={values.showPassword ? "text" : 'password'}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        endAdornment={
                            <InputAdornment position = 'end'>
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                        }
                    />
                    <br /><br />                                
                    <Button fullWidth type='submit' variant='contained' color='primary' style={{background: '#3751FF', ...classes.typeFont, ...classes.sizeFontSecondary, ...classes.borderLabel}}>Sign in</Button>   
                    <center>
                    <p  style={{...classes.typeFont, ...classes.sizeFontSecondary, ...classes.colorFont, ...classes.opacityFont}}>You do not have an account?  <a href='/' >Login</a> </p>
                    </center>                              
                </form>
            </Paper>
        </Grid>
    )
}