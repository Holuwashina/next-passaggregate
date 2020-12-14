import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Grid, Paper } from '@material-ui/core';
import SelectionCard from './SelectionCard';
import { PlatformsDfn } from '../utils/types';


const Platform = ({ platforms }: PlatformsDfn) => {
  const platForm = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={platForm.root}>
      <Paper square elevation={3} className={platForm.tabBar}>
        <Tabs value={value} centered onChange={handleChange}>
          {platforms.map((platform) => (
            <Tab key={platform.id} label={platform.platformName} {...a11yProps(platform.id)} />
          ))}
        </Tabs>
      </Paper>

      {platforms.map((platform: any) => (
        <TabPanel key={platform.id} value={value} index={platform.id}>
          <Grid container justify='center' alignItems='center'>
            <Grid className={platForm.grid} item sm={12} md={5}>
              <Image src={platform.platformImageUrl} width={800} height={500} alt={platform.platformName} />
            </Grid>

            <Grid className={platForm.grid} item sm={12} md={7}>
              {platform.id === 0 && <SelectionCard platform={platforms[0]} />}

              {platform.id === 1 && <SelectionCard platform={platforms[1]} />}

              {platform.id === 2 && <SelectionCard platform={platforms[2]} />}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
};

export default Platform;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index: any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
    margin: '0 10px',
    padding: '20px 0',
  },
  tabBar: {
    maxWidth: 500,
    margin: 'auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
