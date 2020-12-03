import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ControlledAccordions from '../../Molecules/MAbout/AccordionAbout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabsAbout = () => {
	const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
				value={value}
				onChange={handleChange}
				className={classes.tabs}
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
				aria-label="scrollable auto tabs example"
				
				>
				<Tab label="QUIENES SOMOS" {...a11yProps(0)} />
				<Tab label="NUESTRAS POLITICAS" {...a11yProps(1)} />
        <Tab label="TERMINOS Y CONDICIONES" {...a11yProps(2)} />
        <Tab label="PEDIDOS Y DEVOLUCIONES" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
        <ControlledAccordions></ControlledAccordions>
			</TabPanel>
			<TabPanel value={value} index={1}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
			</TabPanel>
      <TabPanel value={value} index={2}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam egetaximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
        quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
        Esse laborum accusamus ipsa. Ut dolor earum asperiores.
			</TabPanel>
      <TabPanel value={value} index={3}>
        <b>PEDIDOS</b>
        <br></br>
        <br></br>
        Telefono / WhatsApp : (+57)313 871 1212
        <br></br>
        <br></br>
        Para realizar un pedido al por mayor (6+ Uds), comunicarse con ventas (+57)313 871 1212 (Precio Especial) 
        <br></br>
        Para realizar un pedido desde el exterior de Colombia, comunicarse con ventas (+57)313 871 1212.
        <br></br>
        La entrega de los productos después de la verificación del pago es de 3 a 8 días hábiles.

        <br></br>
        <br></br>
        <b>DEVOLUCIONES</b>
        <br></br>
        <br></br>
        Para el proceso de devolución el cliente tiene 5 días hábiles después de entregado su pedido para tomar 
        la decisión de devolución, después de pasado este tiempo las devoluciones quedan invalidadas. 
        <br></br>
        El proceso de devolución toma un tiempo aproximado de entre 8 a 10 días hábiles a partir del envió de un 
        email con el asunto de: DEVOLUCIÓN DE PRODUCTO al correo atencionaclientelb@gmail.com adjuntando la factura 
        de la compra y detallando en el cuerpo del email, la referencia del producto, el color, además deL medio de 
        pago para la devolución.
        <br></br>
        Devolución de dinero: Entre 2 y 3 días hábiles luego del reingreso del producto devuelto a alguno de nuestros 
        centros. La agilidad en el proceso dependerá de la claridad y veracidad de los datos de la cuenta bancaria que 
        nos suministre para realizar la transacción y los tiempos de respuesta de la entidad financiera. Las devoluciones 
        de dinero no se realizan en tiendas físicas.
        <br></br>
        Cambio de producto:  Sujeto a disponibilidad de inventario en la referencia, talla y color de tu elección. 
        Plazo: entre 3 y 5 días hábiles después de recibir el producto en nuestro Centro de Distribución. En tiendas físicas: inmediato  
        <br></br>
        Un asesor de nuestra empresa se pondrá en contacto con la persona que requiere la devolución y 
        realizará el proceso de programación de recogida del producto, el producto debe estar sellado y 
        debe encontrarse en excelente estado como fue entregado.
      </TabPanel>
    </div>
		
    )
}
export default TabsAbout;