import { GetStaticProps, GetStaticPaths } from 'next';
import { School } from '../../utils/types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Container, Paper } from '@material-ui/core';

type Props = {
  school: School;
};

const Slug = ({ school }: Props) => {
  const slug = useStyles();
  return (
    <div className={slug.root}>
      <div className={slug.overlay}>
        <Container className={slug.container} maxWidth='sm'>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            {school.id}
          </Typography>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            {school.name}
          </Typography>
          <Typography gutterBottom color='textSecondary' variant='body1'>
            {school.info}
          </Typography>
          <Typography gutterBottom color='textPrimary' variant='h1'>
            GET ACCESS TO
          </Typography>

          <Grid container spacing={3} justify='center'>
            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h2'>
                  DEPARTMENTS' NOTES
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h2'>
                  REAL-TIME QUESTIONS
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h2'>
                  MEET NEW STUDENTS
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Slug;

//http://json-db-passa.herokuapp.com/platforms
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  //Fetch the platform
  const school_res = await fetch(`http://json-db-passa.herokuapp.com/schools/?slug=${slug}`);
  const found: School[] = await school_res.json();

  //Return the platform as props
  return {
    props: {
      school: found[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const platform_res = await fetch('http://json-db-passa.herokuapp.com/schools');
  const schools: School[] = await platform_res.json();

  //Return the platform as props
  return {
    paths: schools.map((school) => ({
      params: { slug: school.slug.toString() },
    })),
    fallback: false,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 32,
    backgroundImage: `url('/images/gound.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  overlay: {
    padding: '48px 0 10px',
    backgroundColor: `rgba(95,9,55, 0.8)`,
  },

  container: {
    padding: 20,
    margin: '40px auto',
    textAlign: 'center',
  },

  paper: {
    padding: 10,
    textAlign: 'center',
  },
}));
