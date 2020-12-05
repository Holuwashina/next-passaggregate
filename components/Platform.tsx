import Image from 'next/image'
import {useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Grid, Paper } from '@material-ui/core';
import {UNIVERSITY, POLYTECHNIC, SECONDARY, PLATFORM} from '../data/data';
import SelectionCard from './SelectionCard';

const Platforms = () => {
  const platForm = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={platForm.root}>
      <Paper square elevation={3} className={platForm.tabBar}>
        <Tabs value={value} centered onChange={handleChange}>
          <Tab label='University' {...a11yProps(0)} />
          <Tab label='Polytechnic' {...a11yProps(1)} />
          <Tab label='Secondary School' {...a11yProps(2)} />
        </Tabs>
      </Paper>

      {PLATFORM.map((data) => (
        <TabPanel key={data.index} value={value} index={data.index}>
          <Grid container justify='center' alignItems='center'>
            <Grid className={platForm.grid} item sm={12} md={5}>
              <Image src={data.img} width={800} height={500} alt='' />
            </Grid>

            <Grid className={platForm.grid} item sm={12} md={7}>
              {data.index === 0 && (
                <SelectionCard
                  platform={UNIVERSITY}
                  message='Select your admitted university & explore.'
                />
              )}

              {data.index === 1 && (
                <SelectionCard
                  platform={POLYTECHNIC}
                  message='Select your admitted polytechnic & explore.'
                />
              )}

              {data.index === 2 && (
                <SelectionCard
                  platform={SECONDARY}
                  message='Explore JSS1 - JSS3 & SSS1 - SSS3 classes.'
                />
              )}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
}

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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index:any) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
    margin: '0 10px',
    padding: '20px 0',
  },
  tabBar: {
    maxWidth: 500,
    margin: 'auto'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default Platforms