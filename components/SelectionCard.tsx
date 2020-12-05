import { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Card,
  CardContent,
  Button
} from "@material-ui/core";

interface props {
  platform: any,
  message: string,
};

const SelectionCard = ({ platform, message }: props) => {
  const { index, list } = platform;
  const selectionCard = useStyles();
  const [select, setSelect] = useState("DEFAULT");

  const handleSelect = (e: React.ChangeEvent<{ value: any }>) => {
    setSelect(e.target.value as string);
  };

  return (
    <>
      <Card className={selectionCard.card}>
        <CardContent>
          <Alert severity='info'>{message}</Alert>
          <FormControl
            className={selectionCard.form}
            fullWidth
            size='small'
            variant='outlined'
          >
            <InputLabel>{index}</InputLabel>
            <Select
              value={select}
              onChange={handleSelect}
              label={index}
            >
              <MenuItem value='DEFAULT'>DEFAULT</MenuItem>
              {list.map((data:string) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size='small'
            variant='outlined'
            disabled
            label='Selected'
            value={select}
          />
          <Button
            style={{ margin: "4px 10px 0" }}
            disabled={select === "DEFAULT"}
            endIcon={<GraphicEqIcon />}
          >
            Explore
      </Button>
        </CardContent>
      </Card>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "15px 0",
    minWidth: "250px",
  },

  card: {
    maxWidth: "400px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "280px",
    },
  },
}));

export default SelectionCard;
