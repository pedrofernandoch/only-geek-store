import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import logo from '../assets/logoOnlyGeek.png'

export default function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        <img src={logo} alt="Logo" width="350px"/>
        <br/>
        <br/>
        {'Copyright © '}
        <Link color="inherit" href="/">
        OnlyGeek (BRASIL) LIMITADA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </>
  );
}