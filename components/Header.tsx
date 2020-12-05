import Image from 'next/image'
import Link from 'next/link'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Badge, Box } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';


const Header = () => {
  const header = useStyles();

  return (
    <AppBar color='primary' position='fixed'>
      <Toolbar variant='dense'>
        <IconButton
          edge='start'
          className={header.menu}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>

        <Link href='/'>
          <a className={header.img}>
            <Image width={100} height={24} src='/images/logo.png' alt='passaggregate' />
          </a>
        </Link>

        <Box style={{ marginLeft: 'auto' }}>
          <IconButton>
            <Badge color='secondary' variant='dot'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


const useStyles = makeStyles((theme:Theme) => ({
  img: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  
  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default Header;
