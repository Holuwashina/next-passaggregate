import Image from 'next/image';
import Link from 'next/link';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Container, Paper } from '@material-ui/core';

const SlugHero = () => {
  const hero = useStyles();

  return (
    <div className={hero.root}>
      <div className={hero.overlay}>
        <Container className={hero.container} maxWidth='sm'>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            TASUED
        </Typography>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            TAI SOLARIN UNIVERSITY OF EDUCATION IJAGUN, IJEBU-ODE.
        </Typography>
          <Typography gutterBottom color='textSecondary' variant='body1'>
            The Nation's Premier University of Education, the unique selling
            proposition is formula 1-2-8 [ 1st in Nigeria, 2nd in Africa and 8th
            in the world ] as claimed.
        </Typography>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            GET ACCESS TO
        </Typography>

          <Grid container spacing={3} justify='center'>
            <Grid item>
              <Paper elevation={5} className={hero.paper}>
                {/* {card.icon} */}
                <Typography color='primary' variant='h2'>
                  DEPARTMENTS' NOTES
                {/* {card.text} */}
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={hero.paper}>
                {/* {card.icon} */}
                <Typography color='primary' variant='h2'>
                  REAL-TIME QUESTIONS
                {/* {card.text} */}
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={hero.paper}>
                {/* {card.icon} */}
                <Typography color='primary' variant='h2'>
                  MEET NEW STUDENTS
                {/* {card.text} */}
                </Typography>
              </Paper>
            </Grid>

          </Grid>

        </Container>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 32,
    backgroundImage: `url('/images/gound.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  overlay: {
    padding: '48px 0',
    backgroundColor: `rgba(95,9,55, 0.4)`
  },

  container: {
    padding: 20,
    margin: '40px auto',
    textAlign: 'center',
    backgroundColor: `rgba(95,9,55, 0.7)`
  },

  paper: {
    padding: 13,
    textAlign: 'center',
  },
}));

export default SlugHero;