import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';

const Footer = () => {
  const footer = useStyles();
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={footer.root}>
      <Container maxWidth='xs'>
        <Grid container justify='center' spacing={1}>
          <Grid item>
            <Button variant='text'>Privacy policy</Button>
          </Grid>
          <Grid item>
            <Button variant='text'>Faqs</Button>
          </Grid>
          <Grid item>
            <Button variant='text'>Terms & Conditions</Button>
          </Grid>
          <Typography gutterBottom variant='body2' style={{margin: '12px 0'}}>
            Copyright &#xa9; {year} Passaggregate Inc.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 5,
    borderTop: 'outset'
  },
}));

export default Footer;
