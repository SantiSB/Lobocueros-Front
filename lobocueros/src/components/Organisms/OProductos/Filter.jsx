import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Filter = (props) => {

	const classes = useStyles();

	const [gender, setGender] = React.useState('');

	const handleChange = (event) => {
		setGender(event.target.value);
	};

    return(
		<div className="filter-products">
			<div className="select-filter">
				<FormControl className="form-control">
					<InputLabel id="demo-simple-select-label">Genero</InputLabel>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={gender}
					onChange={handleChange}
					>
						<MenuItem value={10}>Mujer</MenuItem>
						<MenuItem value={20}>Hombre</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control">
					<InputLabel id="demo-simple-select-label">Categoria</InputLabel>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={gender}
					onChange={handleChange}
					>
						<MenuItem value={10}>Nuevo</MenuItem>
						<MenuItem value={10}>Bolsos</MenuItem>
						<MenuItem value={20}>Morrales</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control">
					<InputLabel id="demo-simple-select-label">Subcategoria</InputLabel>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={gender}
					onChange={handleChange}
					>
						<MenuItem value={10}>Bolsos de mano</MenuItem>
						<MenuItem value={10}>Bolsos pequeños</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control" id="search-form-control">
					<TextField id="standard-basic" label="Buscar" />
				</FormControl> 
			</div>
		</div>
		
		
    )
}
export default Filter;