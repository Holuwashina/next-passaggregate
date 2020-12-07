import Image from 'next/image'
import Link from 'next/link'
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Badge, Box } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WidgetsIcon from '@material-ui/icons/Widgets';
import MailIcon from '@material-ui/icons/Mail';


const Header = () => {
  const header = useStyles();

  return (
    <AppBar color='primary' position='fixed'>
      <Toolbar variant='dense'>

        <Link href='/' passHref>
          <IconButton>
            <Image width={100} height={24} src='/images/logo.png' alt='passaggregate' />
          </IconButton>
        </Link>

        <Box style={{ marginLeft: 'auto', display: 'inline-flex' }}>
          <IconButton>
            <Badge color='secondary' variant='dot'>
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
          <IconButton
            className={header.menu}
            color='inherit'
            aria-label='menu'
          >
            <WidgetsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


const useStyles = makeStyles((theme: Theme) => ({

  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export default Header;
