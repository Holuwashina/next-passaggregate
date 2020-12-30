import Link from 'next/link';
import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';
import { Platforms } from '../utils/types';

type Props = {
  platform: Platforms;
};

const SelectionCard = ({ platform }: Props) => {

  const { platformList } = platform;
  const selectionCard = useStyles();
  const [select, setSelect] = useState(platformList[0].name);

  const handleSelect = (e: React.ChangeEvent<{ value: any }>) => {
    setSelect(e.target.value as string);
  };

  return (
    <>
      <Card className={selectionCard.card}>
        <CardContent>
          <Alert severity='info'>{platform.platformInfo}</Alert>
          <FormControl
            className={selectionCard.form}
            fullWidth
            size='small'
            variant='outlined'
          >
            <InputLabel>{platform.platformName}</InputLabel>
            <Select
              value={select}
              onChange={handleSelect}
              label={platform.platformName}
            >
              {platformList.map((list) => (
                <MenuItem key={list.id} value={list.name}>
                  {list.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            size='small'
            variant='outlined'
            disabled
            label='Selected'
            value={select}
          />
          <Link href={`/platform/${select}`} passHref>
            <Button style={{ marginTop: 10 }} endIcon={<GraphicEqIcon />}>
              Explore
            </Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    margin: '15px 0',
    minWidth: '250px',
  },

  card: {
    maxWidth: '400px',
    [theme.breakpoints.only('xs')]: {
      minWidth: '280px',
    },
  },
}));

export default SelectionCard;
