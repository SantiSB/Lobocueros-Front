import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setListFilter } from "../../../redux/actionsCreators";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

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
	const [category, setCategory] = React.useState('');
	const [price, setPrice] = React.useState('');
	const [search, setSearch] = React.useState('');

	React.useEffect(() => {
        listEventsFilter();
    }, [props.productsData, gender, category, price, search]);

	const handleChangeGender = (event) => {
		setGender(event.target.value);
	}

	const handleChangeCategory = (event) => {
		setCategory(event.target.value);
	}

	const handleChangePrice = (event) => {
		setPrice(event.target.value);
	};

	const handleChangeSearch = (event) => {
		setSearch(event.target.value);
	};

	
	const filterByGenderMasculino = (event) => {
		return event.gender == "Masculino"
		
	};

	const filterByGenderFemenino = (event) => {
		return event.gender == "Femenino"
		
	};

	const filterByGenderUnisex = (event) => {
		return event.gender == "Unisex" || event.gender == "Masculino" || event.gender == "Femenino"
	};

	const filterByPrice = (event) => {
		return event.price != null
	}

	const removeAccents = (string) =>
		string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		
	const filterBySearch = (event) => {
		return removeAccents(event.title.toLowerCase()).includes(removeAccents(search.toLowerCase()))
	}
	
	const listEventsFilter = () => {
		let newListEvents = props.productsData

			if(search != ""){
				newListEvents = newListEvents.filter(filterBySearch);
			}
			switch (gender) {
				case 10:
					newListEvents = newListEvents.filter(filterByGenderFemenino);
					break;
			
				case 20:
					newListEvents = newListEvents.filter(filterByGenderMasculino);
					break; 
	
				case 30:
					newListEvents = newListEvents.filter(filterByGenderUnisex);
					break;
			}
	

			switch (price) { 
				case 10:
					newListEvents = newListEvents.filter(filterByPrice);
					newListEvents = newListEvents.sort((a, b) =>
						("" + a.price).localeCompare(
							b.price
						)
					);
					break;
				case 20:
					newListEvents = newListEvents.filter(filterByPrice);
					newListEvents = newListEvents.sort((a, b) =>
						("" + b.price).localeCompare(
							a.price
						)
					);
					break;            

		}
		props.setListFilter(newListEvents);
	}
	console.log("zxcv", props.listFilter)
    return(
		<div className="filter-products">
			<div className="select-filter">
				<FormControl className="form-control">
					<InputLabel id="gender">Genero</InputLabel>
					<Select
					labelId="gender"
					id="gender"
					value={gender} 
					onChange={handleChangeGender}
					>
						<MenuItem value={10}>Mujer</MenuItem>
						<MenuItem value={20}>Hombre</MenuItem>
						<MenuItem value={30}>Unisex</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control">
					<InputLabel id="category">Categoria</InputLabel>
					<Select
					labelId="category"
					id="category"
					value={category}
					onChange={handleChangeCategory}
					>
						<MenuItem value={10}>Nuevo</MenuItem>
						<MenuItem value={10}>Bolsos</MenuItem>
						<MenuItem value={20}>Morrales</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control">
					<InputLabel id="price">Precio</InputLabel>
					<Select
					labelId="price"
					id="price"
					value={price}
					onChange={handleChangePrice}
					>
						<MenuItem value={10}>Menor a mayor precio</MenuItem>
						<MenuItem value={20}>Mayor a menor precio</MenuItem>
					</Select>
				</FormControl>
				<FormControl className="form-control" id="search-form-control">
					<InputLabel htmlFor="standard-adornment-password">Buscar por titulo</InputLabel>
                    <Input
						id="search"
                        value={search}
                        onChange={handleChangeSearch}
                        endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                        }
                    />
				</FormControl> 
			</div>
		</div>
		
		
    )
}

const mapStateToProps = (state) => ({
	allData: state.allData,
	productsData: state.productsData,
	listFilter: state.listFilter
});
const mapDispatchToProps = {
	setAllData,
	setProductsData,
	setListFilter
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);