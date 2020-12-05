import Image from 'next/image'
import Link from 'next/link'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Hero() {
  const hero = useStyles();

  return (
    <div className={hero.root}>
      <Grid container className={hero.gridContainer}>
        <Grid className={hero.gridLeft} item xs={12} md={5}>
          <Typography
            style={{ fontFamily: "'Goldman' ,'Roboto'" }}
            gutterBottom
            color='textPrimary'
            variant='h1'
          >
            PASSAGGREGATE
            </Typography>
          <Typography gutterBottom color='textSecondary' variant='body1'>
            Passaggregate is the best online learning plat-form in Nigeria, a
            broad plat-form for Universities, Polytechnics and Secondary
            Schools...
            </Typography>
          <Link href='/about' passHref>
            <Button endIcon={<ExpandMoreIcon />}>Read More</Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={7}>
          <Image src='/images/hero.svg' height={500} width={960} alt='hero' />
        </Grid>
      </Grid>
    </div>
  );
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '48px 0',
    marginBottom: 32,
    backgroundColor: theme.palette.primary.main,
  },
  gridContainer: {
    padding: '0 50px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 15px',
      flexDirection: 'column-reverse',
    },
  },
  gridLeft: {
    textAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0'
    }
  },
}));

export default Hero;
