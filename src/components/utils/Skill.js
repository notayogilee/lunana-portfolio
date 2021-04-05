import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import unhovered from '../../images/Artwork 1@2x.png'

const useStyles = makeStyles((theme) => ({
  image: {
    height: '410px',
    width: '293px',
    position: 'relative'
  },
  imageText: {
    height: '115px',
    width: '293px',
    paddingTop: '26px',
    background: theme.palette.common.grey
  },
  line: {
    position: 'absolute',
    background: theme.palette.common.white,
    height: '4px',
    width: '50px',
    bottom: 0,
    left: '121.5px',
    borderRadius: '5px',
    transform: 'translateY(2px)'
  },
}))

const Skill = ({ label }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (

    <Grid
      container
      direction="column"
    >
      <Grid item className={classes.image}>
        <img src={unhovered} alt="digital" />
        <div className={classes.line}></div>
      </Grid>
      <Grid item className={classes.imageText}>
        <Typography variant="h3" align="center">
          {label}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Skill

