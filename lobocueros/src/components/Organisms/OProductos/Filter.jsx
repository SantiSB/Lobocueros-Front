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

	const filterMenuGender = () =>{
		if(localStorage.getItem('filtro') === "Mujer" 
			|| localStorage.getItem('filtro') === "Mujer Bolsos"
			|| localStorage.getItem('filtro') === "Mujer Billeteras"
			|| localStorage.getItem('filtro') === "Mujer Accesorios"
			|| localStorage.getItem('filtro') === "Mujer Viaje"
			|| localStorage.getItem('filtro') === "Mujer Bolsos todo"
			|| localStorage.getItem('filtro') === "Mujer Bolsos carteras"
			|| localStorage.getItem('filtro') === "Mujer Bolsos mochilas"
			|| localStorage.getItem('filtro') === "Mujer Bolsos manos libres"
			|| localStorage.getItem('filtro') === "Mujer Bolsos manos libres pelo"
			|| localStorage.getItem('filtro') === "Mujer Bolsos morrales"
			|| localStorage.getItem('filtro') === "Mujer Bolsos carrieles"
			|| localStorage.getItem('filtro') === "Mujer Bolsos bolsos mola"
			|| localStorage.getItem('filtro') === "Mujer Bolsos bolsos pelo"
			|| localStorage.getItem('filtro') === "Mujer Bolsos portafolios"
			|| localStorage.getItem('filtro') === "Mujer Billeteras todo"
			|| localStorage.getItem('filtro') === "Mujer Billeteras billeteras"
			|| localStorage.getItem('filtro') === "Mujer Billeteras portadocumentos"
			|| localStorage.getItem('filtro') === "Mujer Billeteras pasaporteras"
			|| localStorage.getItem('filtro') === "Mujer Accesorios todo"
			|| localStorage.getItem('filtro') === "Mujer Accesorios cosmetiqueras"
			|| localStorage.getItem('filtro') === "Mujer Accesorios riñoneras"
			|| localStorage.getItem('filtro') === "Mujer Accesorios otros"
		){
			localStorage.setItem('filtro', "");
			return 10
		}
		else if(localStorage.getItem('filtro') === "Hombre"
			|| localStorage.getItem('filtro') === "Hombre Bolsos"
			|| localStorage.getItem('filtro') === "Hombre Billeteras"
			|| localStorage.getItem('filtro') === "Hombre Accesorios"
			|| localStorage.getItem('filtro') === "Hombre Viaje"
			|| localStorage.getItem('filtro') === "Hombre Bolsos todo"
			|| localStorage.getItem('filtro') === "Hombre Bolsos carteras"
			|| localStorage.getItem('filtro') === "Hombre Bolsos mochilas"
			|| localStorage.getItem('filtro') === "Hombre Bolsos manos libres"
			|| localStorage.getItem('filtro') === "Hombre Bolsos manos libres pelo"
			|| localStorage.getItem('filtro') === "Hombre Bolsos morrales"
			|| localStorage.getItem('filtro') === "Hombre Bolsos carrieles"
			|| localStorage.getItem('filtro') === "Hombre Bolsos bolsos mola"
			|| localStorage.getItem('filtro') === "Hombre Bolsos bolsos pelo"
			|| localStorage.getItem('filtro') === "Hombre Bolsos portafolios"
			|| localStorage.getItem('filtro') === "Hombre Billeteras todo"
			|| localStorage.getItem('filtro') === "Hombre Billeteras billeteras"
			|| localStorage.getItem('filtro') === "Hombre Billeteras portadocumentos"
			|| localStorage.getItem('filtro') === "Hombre Billeteras pasaporteras"
			|| localStorage.getItem('filtro') === "Hombre Accesorios todo"
			|| localStorage.getItem('filtro') === "Hombre Accesorios cosmetiqueras"
			|| localStorage.getItem('filtro') === "Hombre Accesorios riñoneras"
			|| localStorage.getItem('filtro') === "Hombre Accesorios otros"
		){
			localStorage.setItem('filtro', "");
			return 20
		}
		else{
			return ""
		}
		
	}

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
		return event.gender === "Masculino"
		
	};
	const filterByGenderFemenino = (event) => {
		return event.gender === "Femenino"
		
	};
	const filterByGenderUnisex = (event) => {
		return event.gender === "Unisex" || event.gender === "Masculino" || event.gender === "Femenino"
	};

	//FilterByCategory
	const filterByCategoryBolsos = (event) => {
		return event.category === "Bolsos"
	};
	const filterByCategoryBilleteras = (event) => {
		return event.category === "Billeteras"
	};
	const filterByCategoryAccesorios = (event) => {
		return event.category === "Accesorios"
	};
	const filterByCategoryViaje = (event) => {
		return event.category === "Viaje"
	};
	const filterByCategoryAll = (event) => {
		return event.category === "Viaje" || event.category === "Bolsos" || event.category === "Accesorios" || event.category === "Billeteras"
	};

	//FilterBySubCategory
	const filterBySubCategoryCarteras = (event) => {
		return event.subcategory === "Carteras"
	};
	const filterBySubCategoryMochilas = (event) => {
		return event.subcategory === "Mochilas"
	};
	const filterBySubCategoryManosLibres = (event) => {
		return event.subcategory === "Manos libres"
	};
	const filterBySubCategoryManosLibresPelo = (event) => {
		return event.subcategory === "Manos libres con pelo"
	};
	const filterBySubCategoryBolsosMola = (event) => {
		return event.subcategory === "Bolos con mola"
	};
	const filterBySubCategoryBolsosPelo = (event) => {
		return event.subcategory === "Bolsos con pelo"
	};
	const filterBySubCategoryMorrales = (event) => {
		return event.subcategory === "Morrales"
	};
	const filterBySubCategoryCarrieles = (event) => {
		return event.subcategory === "Carrieles"
	};
	const filterBySubCategoryPortadocumentos = (event) => {
		return event.subcategory === "Portadocumentos"
	};
	const filterBySubCategoryPortafolios = (event) => {
		return event.subcategory === "Portafolios"
	};
	const filterBySubCategoryBilleteras = (event) => {
		return event.subcategory === "Billeteras"
	};
	const filterBySubCategoryPasaporteras = (event) => {
		return event.subcategory === "Pasaporteras"
	};
	const filterBySubCategoryCosmetiqueras = (event) => {
		return event.subcategory === "Cosmetiqueras"
	};
	const filterBySubCategoryRiñoneras = (event) => {
		return event.subcategory === "Riñoneras"
	};
	const filterBySubCategoryOtros = (event) => {
		return event.subcategory === "Otros"
	};

	//OrderBy
	const filterByPrice = (event) => {
		return event.price !== null
	}

	const filterByUpdate = (event) => {
		return event.updated !== null
	}

	//FilterBy SEARCH
	const removeAccents = (string) =>
		string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");		
	const filterBySearch = (event) => {
		return removeAccents(event.title.toLowerCase()).includes(removeAccents(search.toLowerCase()))
	}
	
	const listEventsFilter = () => {
		let newListEvents = props.productsData

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
						("" + b.updated).localeCompare(
							a.updated
						)
					);
					break; 
				case 40:
					newListEvents = newListEvents.filter(filterByUpdate);
					newListEvents = newListEvents.sort((a, b) =>
						("" + a.updated).localeCompare(
							b.updated
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