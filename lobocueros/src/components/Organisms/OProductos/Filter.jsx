import React from 'react';
import { connect} from "react-redux";
import { setAllData, setProductsData, setListFilter } from "../../../redux/actionsCreators";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const Filter = (props) => {



	//Estados
	const [gender, setGender] = React.useState("");
	const [category, setCategory] = React.useState("");
	const [order, setOrder] = React.useState('');
	const [search, setSearch] = React.useState('');
	const [subCategory, setSubCategory] = React.useState("");

	React.useEffect(()=>{
		if(localStorage.getItem('filtro') === "Mujer"){
			setGender(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre"){
			setGender(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Nuevo"){
			setOrder(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos carteras"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos mochilas"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos manos libres"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos manos libres pelo"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos morrales"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos carrieles"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos bolsos mola"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos bolsos pelo"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Bolsos portafolios"){
			setGender(10);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Billeteras"){
			setGender(10);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Billeteras todo"){
			setGender(10);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Billeteras billeteras"){
			setGender(10);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Billeteras portadocumentos"){
			setGender(10);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Billeteras pasaporteras"){
			setGender(10);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Accesorios"){
			setGender(10);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Accesorios todo"){
			setGender(10);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Accesorios cosmetiqueras"){
			setGender(10);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Accesorios riñoneras"){
			setGender(10);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Accesorios otros"){
			setGender(10);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Mujer Viaje"){
			setGender(10);
			setCategory(40);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos carteras"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos mochilas"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos manos libres"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos manos libres pelo"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos morrales"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos carrieles"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos bolsos mola"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos bolsos pelo"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Bolsos portafolios"){
			setGender(20);
			setCategory(10);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Billeteras"){
			setGender(20);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Billeteras todo"){
			setGender(20);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Billeteras billeteras"){
			setGender(20);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Billeteras portadocumentos"){
			setGender(20);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Billeteras pasaporteras"){
			setGender(20);
			setCategory(20);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Accesorios"){
			setGender(20);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Accesorios todo"){
			setGender(20);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Accesorios cosmetiqueras"){
			setGender(20);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Accesorios riñoneras"){
			setGender(20);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Accesorios otros"){
			setGender(20);
			setCategory(30);
			localStorage.setItem('filtro', "");
		}
		else if(localStorage.getItem('filtro') === "Hombre Viaje"){
			setGender(20);
			setCategory(40);
			localStorage.setItem('filtro', "");
		}
		
		
	},[])

	React.useEffect(() => {
    	listEventsFilter();
    }, [props.productsData, gender, category, order, search, subCategory]);

	//OnChange
	const handleChangeGender = (event) => {
		setGender(event.target.value);
	}
	const handleChangeCategory = (event) => {
		setSubCategory("")
		setCategory(event.target.value);
	}
	const handleChangeOrder = (event) => {
		setOrder(event.target.value);
	};
	const handleChangeSearch = (event) => {
		setSearch(event.target.value);
	};
	const handleChangeSubCategory = (event) => {
		setSubCategory(event.target.value);
	};

	//FilterBy GENDER
	const filterByGenderMasculino = (event) => {
		return event.gender.name === "Masculino"
		
	};
	const filterByGenderFemenino = (event) => {
		return event.gender.name === "Femenino"
		
	};
	const filterByGenderUnisex = (event) => {
		return event.gender.name === "Unisex" || event.gender.name === "Masculino" || event.gender.name === "Femenino"
	};

	//FilterByCategory
	const filterByCategoryBolsos = (event) => {
		return event.categoryType.category.name === "Bolsos"
	};
	const filterByCategoryBilleteras = (event) => {
		return event.categoryType.category.name === "Billeteras"
	};
	const filterByCategoryAccesorios = (event) => {
		return event.categoryType.category.name === "Accesorios"
	};
	const filterByCategoryViaje = (event) => {
		return event.categoryType.category.name === "Viaje"
	};
	const filterByCategoryAll = (event) => {
		return event.categoryType.category.name === "Viaje" || event.categoryType.category.name === "Bolsos" || event.categoryType.category.name === "Accesorios" || event.categoryType.category.name === "Billeteras"
	};

	//FilterBySubCategory
	const filterBySubCategoryCarteras = (event) => {
		return event.categoryType.name === "Carteras"
	};
	const filterBySubCategoryMochilas = (event) => {
		return event.categoryType.name === "Mochilas"
	};
	const filterBySubCategoryManosLibres = (event) => {
		return event.categoryType.name === "Manos libres"
	};
	const filterBySubCategoryManosLibresPelo = (event) => {
		return event.categoryType.name === "Manos libres con pelo"
	};
	const filterBySubCategoryBolsosMola = (event) => {
		return event.categoryType.name === "Bolos con mola"
	};
	const filterBySubCategoryBolsosPelo = (event) => {
		return event.categoryType.name === "Bolsos con pelo"
	};
	const filterBySubCategoryMorrales = (event) => {
		return event.categoryType.name === "Morrales"
	};
	const filterBySubCategoryCarrieles = (event) => {
		return event.categoryType.name === "Carrieles"
	};
	const filterBySubCategoryPortadocumentos = (event) => {
		return event.categoryType.name === "Portadocumentos"
	};
	const filterBySubCategoryPortafolios = (event) => {
		return event.categoryType.name === "Portafolios"
	};
	const filterBySubCategoryBilleteras = (event) => {
		return event.categoryType.name === "Billeteras"
	};
	const filterBySubCategoryPasaporteras = (event) => {
		return event.categoryType.name === "Pasaporteras"
	};
	const filterBySubCategoryCosmetiqueras = (event) => {
		return event.categoryType.name === "Cosmetiqueras"
	};
	const filterBySubCategoryRiñoneras = (event) => {
		return event.categoryType.name === "Riñoneras"
	};
	const filterBySubCategoryOtros = (event) => {
		return event.categoryType.name === "Otros"
	};

	//OrderBy
	const filterByPrice = (event) => {
		return event.price !== null
	}

	const filterByUpdate = (event) => {
		return event.modified !== null
	}

	//FilterBy SEARCH
	const removeAccents = (string) =>
		string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");		
	const filterBySearch = (event) => {
		return removeAccents(event.title.toLowerCase()).includes(removeAccents(search.toLowerCase()))
	}
	
	const listEventsFilter = () => {
		var newListEvents = props.productsData

			//SEARCH
			if(search !== ""){
				newListEvents = newListEvents.filter(filterBySearch);
			}

			//GENDER
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
				default:
					break;
			}

			//ORDER
			switch (order) { 
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
				case 30:
					newListEvents = newListEvents.filter(filterByUpdate);
					newListEvents = newListEvents.sort((a, b) =>
						("" + b.modified).localeCompare(
							a.modified
						)
					);
					break; 
				case 40:
					newListEvents = newListEvents.filter(filterByUpdate);
					newListEvents = newListEvents.sort((a, b) =>
						("" + a.modified).localeCompare(
							b.modified
						)
					);
					break; 
				case 50:
					break;     
				default:
					break;       

			}

			//CATEGORY
			switch (category) { 
				case 10:
					newListEvents = newListEvents.filter(filterByCategoryBolsos);
					break;
				case 20:
					newListEvents = newListEvents.filter(filterByCategoryBilleteras);
					break;       
				case 30:
					newListEvents = newListEvents.filter(filterByCategoryAccesorios);
					break;            
				case 40:
					newListEvents = newListEvents.filter(filterByCategoryViaje);
					break; 
				case 50:
					newListEvents = newListEvents.filter(filterByCategoryAll);
					break;
				default:
					break;
			}

			//SUBCATEGORY
			switch (subCategory) { 
				case 10:
					newListEvents = newListEvents.filter(filterBySubCategoryCarteras);
					break;
				case 20:
					newListEvents = newListEvents.filter(filterBySubCategoryMochilas);
					break;       
				case 30:
					newListEvents = newListEvents.filter(filterBySubCategoryManosLibres);
					break;            
				case 40:
					newListEvents = newListEvents.filter(filterBySubCategoryManosLibresPelo);
					break; 
				case 50:
					newListEvents = newListEvents.filter(filterBySubCategoryMorrales);
					break;
				case 60:
					newListEvents = newListEvents.filter(filterBySubCategoryCarrieles);
					break;
				case 70: 
					newListEvents = newListEvents.filter(filterBySubCategoryBolsosMola);
					break;
				case 80:
					newListEvents = newListEvents.filter(filterBySubCategoryBolsosPelo);
					break;       
				case 90:
					newListEvents = newListEvents.filter(filterBySubCategoryPortafolios);
					break;            
				case 100:
					newListEvents = newListEvents.filter(filterBySubCategoryBilleteras);
					break; 
				case 110:
					newListEvents = newListEvents.filter(filterBySubCategoryPortadocumentos);
					break;
				case 120:
					newListEvents = newListEvents.filter(filterBySubCategoryPasaporteras);
					break;
				case 130:
					newListEvents = newListEvents.filter(filterBySubCategoryCosmetiqueras);
					break;       
				case 140:
					newListEvents = newListEvents.filter(filterBySubCategoryRiñoneras);
					break;            
				case 150:
					newListEvents = newListEvents.filter(filterBySubCategoryOtros);
					break;
				default:
					break;
			}

		//ACTUALIZAR LISTA	
	console.log("edc", newListEvents.map(function(item){
		return item.categoryType.name
	}))

		props.setListFilter(newListEvents);
	}
	const buildSubCategory = () => {
		
		if(category === ""){
			return ""
		}
		else{
			if(category === 10){			
				return(
					<FormControl className="form-control">
						<InputLabel id="subCategory">Subcategoria</InputLabel>
						<Select
						labelId="subCategory"
						id="subCategory"
						value={subCategory}
						onChange={handleChangeSubCategory}
						>
							<MenuItem value={10}>Carteras</MenuItem>
							<MenuItem value={20}>Mochilas</MenuItem>
							<MenuItem value={30}>Manos Libres</MenuItem>
							<MenuItem value={40}>Manos libres con pelo</MenuItem>
							<MenuItem value={50}>Morrales</MenuItem>
							<MenuItem value={60}>Carrieles</MenuItem>
							<MenuItem value={70}>Bolsos con mola</MenuItem>
							<MenuItem value={80}>Bolsos con pelo</MenuItem>
							<MenuItem value={90}>Portafolios</MenuItem>
						</Select>
					</FormControl>
				)
			}
			else if(category === 20){
				return(
					<FormControl className="form-control">
						<InputLabel id="subCategory">Subcategoria</InputLabel>
						<Select
						labelId="subCategory"
						id="subCategory"
						value={subCategory}
						onChange={handleChangeSubCategory}
						>
							<MenuItem value={100}>Billetera</MenuItem>
							<MenuItem value={110}>Portadocumentos</MenuItem>
							<MenuItem value={120}>Pasaportera</MenuItem>
						</Select>
					</FormControl>
				)
			}
			else if(category === 30){
				return(
					<FormControl className="form-control">
						<InputLabel id="subCategory">Subcategoria</InputLabel>
						<Select
						labelId="subCategory"
						id="subCategory"
						value={subCategory}
						onChange={handleChangeSubCategory}
						>
							<MenuItem value={130}>Cosmetiqueras</MenuItem>
							<MenuItem value={140}>Riñoneras</MenuItem>
							<MenuItem value={150}>Otros</MenuItem>
						</Select>
					</FormControl>
				)
			}
		}
	}
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
						<MenuItem value={10}>Bolsos</MenuItem>
						<MenuItem value={20}>Billeteras</MenuItem>
						<MenuItem value={30}>Accesorios</MenuItem>
						<MenuItem value={40}>Viaje</MenuItem>
						<MenuItem value={50}>Todas las categorias</MenuItem>
					</Select>
				</FormControl>
				{buildSubCategory()}
				<FormControl className="form-control">
					<InputLabel id="order">Ordenar</InputLabel>
					<Select
					labelId="order"
					id="order"
					value={order}
					onChange={handleChangeOrder}
					>
						<MenuItem value={10}>Menor a mayor precio</MenuItem>
						<MenuItem value={20}>Mayor a menor precio</MenuItem>
						<MenuItem value={30}>Mas nuevo a mas antiguo</MenuItem>
						<MenuItem value={40}>Mas antiguo a mas nuevo</MenuItem>
						<MenuItem value={50}>Sin orden</MenuItem>
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