import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const PayMethodTable = () => {
  const classes = useStyles();
  const [method, setMethod] = React.useState('');

  const handleChange = (event) => {
    setMethod(event.target.value);
  };
  return (
    <div  className="container-counter">
      <p className="title-steep">Paso 2 de 3</p>
      <p className="subtitle-steep">Seleccionar Método de pago</p>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Metodo de Pago</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={method}
          onChange={handleChange}
          label="Metodo"
        >
          <MenuItem value={10}>Tarjeta de credito</MenuItem>
          <MenuItem value={20}>PayU</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default PayMethodTable