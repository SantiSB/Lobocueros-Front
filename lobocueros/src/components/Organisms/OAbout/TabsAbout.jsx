import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
          {children}
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
        {/* <Tab label="¿COMO COMPRAR?" {...a11yProps(3)} /> */}
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
        <ControlledAccordions></ControlledAccordions>
			</TabPanel>
			<TabPanel value={value} index={1}>
        <b>Tiempo de entrega</b>
        <p>
          El tiempo de entrega está estimado entre 2 a 4 días hábiles en envíos nacionales y 2 a 4 semanas en envíos internacionales. 
          Este tiempo comienza a correr a partir de la confirmación del pago una vez la plataforma apruebe la transacción.
          Recibirás un correo electrónico con la confirmación de la compra.
        </p>
        
        <p>
          Queremos ayudarte a tener una excelente experiencia, y por eso gestionamos cualquier problema que puedas presentar 
          al momento de comprar un producto en nuestra tienda virtual. 
          Dado el caso de no recibir el producto, o que presente defectos o alteraciones al momento de la entrega puedes 
          contactarnos a través de nuestros distintos canales dispuestos especialmente para ti:
        </p>
        <ul>
          <li>Servicio al cliente: (031)7 356 696</li>
          <li>Correo Electrónico: atencionaclientelb@gmail.com </li>
          <li>A través de nuestra página web, en la sección de contacto.</li>
          <li>A través de nuestras redes sociales.</li>
        </ul>
        <br></br>
        <b>Tipos de envio y costos</b>
        <p>
          Los envios nacionales son gratuitos, para mas información sobre los envios internacionales comunicate con nosotros 
          a través de nuestros distintos canales dispuestos especialmente para ti:
        </p>
        <ul>
          <li>Servicio al cliente: (031)7 356 696</li>
          <li>Correo Electrónico: atencionaclientelb@gmail.com </li>
          <li>A través de nuestra página web, en la sección de contacto.</li>
          <li>A través de nuestras redes sociales.</li>
        </ul>
        <br></br>
        <b>Cambios o retractos</b>
        <p>
          El canal destinado a  cambios o retractos será el mismo a través el cual se haya realizado la compra (canal físico o virtual).
        </p>
        <br></br>
        <b>Cambios en tiendas Lobocueros</b>
        <p>
          Todas nuestras tiendas físicas en la ciudad de Bogotá brindan la posibilidad de realizar tus cambios de producto o devoluciones. 
          Para realizar tu cambio deberás tener en cuenta:
        </p>
        <ul>
          <li>El producto debe estar en óptimas condiciones.</li>
          <li>El producto no puede tener rastros de haber sido utilizado.</li>
          <li>El producto no debe estar modificado o alterado.</li>
          <li>El producto debe estar en buen estado y limpio.</li>
          <li>El producto debe tener todos sus empaques y etiquetas en perfecto estado.</li>
          <li>Se debe presentar la factura original de la compra o la cédula del comprador.</li>
        </ul>
        <br></br>
        <b>Cambios a través de www.lobocueros.com.co</b>
        <p>
          Si deseas realizar un cambio de una compra online, debes comunicarte dentro de los siguientes 10 días hábiles después de la compra por cualquiera de los siguientes canales:
        </p>
        <ul>
          <li>Servicio al cliente: (031)7 356 696</li>
          <li>Correo Electrónico: atencionaclientelb@gmail.com </li>
          <li>A través de nuestra página web, en la sección de contacto.</li>
          <li>A través de nuestras redes sociales.</li>
        </ul>
        <br></br>
        <b>Condiciones de garantia</b>
        <ul>
          <li>La fecha de garantía debe ser vigente. (Cuenta a partir de la fecha de elaboración de la factura)</li>
          <li>Se debe presentar la factura original de compra o cédula del comprador</li>
          <li>El daño del producto debe ser por un defecto de fábrica.</li>
          <li>El producto se debe encontrar en óptimas condiciones higiénicas.</li>
          <li>La garantía del producto aplica en el país de compra.</li>
        </ul>
        <p>
          Ninguna de estas condiciones aplicará si se evidencia un mal uso del producto por parte del cliente.
          Aclaramos que nuestros productos que no están diseñados para trabajos pesados o actividades que requieran alta resistencia.
          Se debe evitar el contacto con productos químicos al momento de usarlos como perfumes o jabones. Lobocueros no se hace responsable del deterioro normal de un producto ni por los daños que esta sufra por motivos de descuido o mal uso.
        </p>
			</TabPanel>
      <TabPanel value={value} index={2}>
        
        <h3>BIENVENIDO AL SITIO WWW.LOBOCUEROS.COM.CO</h3>
        <p>
          Recomendamos leer nuestros términos y condiciones al acceder a nuestro sitio web para tener una mejor experiencia. 
          Si no estás de acuerdo con ellos será mejor que te abstengas de realizar cualquier compra en la plataforma. 
          Nos reservamos el derecho a actualizar o cambiar los Términos y Condiciones en cualquier momento sin previo aviso, 
          es por esto que te aconsejamos leer los términos cada vez que ingreses al sitio web.
        </p>
        <br></br>
        <b>A. CONDICIONES ACTIVIDADES COMERCIALES</b>
        <p>
          Bienvenido! a www.lobocueros.com.co aquí podrás encontrar accesorios exclusivos en cuero que complementan tu oufit de una manera apropiada y funcional, además de contenido pensado en tus necesidades al lucir y usar nuestros productos en el día a día.
        </p>
        <br></br>
        <b>B. RESTRICCIONES DE USO</b>
        <p>
          Todo el contenido presente en el sitio www.lobocueros.com.co es propiedad intelectual de Lobocueros. Si deseas guardar, archivar o imprimir información proveniente de nuestro sitio, deberás hacerlo bajo las siguientes condiciones:
        </p>
        <ul>
          <li>El uso de la información deberá ser de carácter personal, y bajo ninguna circunstancia comercial.</li>
          <li>Está prohibida la reproducción de contenido o información en cualquier medio y bajo cualquier tipo de formato. </li>
          <li>No alterar de ninguna manera la marca registrada.</li>
        </ul>
        <p>
          LOBOCUEROS tiene completa propiedad intelectual de cualquier contenido que descargues, reproduzcas, imprimas, redistribuyas o guardes de este sitio.
        </p>
        <p>
          LOBOCUEROS no confiere licencia de ningún tipo sobre sus derechos de propiedad intelectual e industrial o algún otro elemento del sitio. 
        </p>
        <p>
          Los datos facilitados por el usuario al sitio web www.lobocueros.com.co son tratados con total confidencialidad y bajo ninguna circunstancia se usarán en actividades de orden comercial ajenas al modelo de negocio de la empresa.
        </p>
        <b>C. POLÍTICA DE PRECIOS</b>
        <p>
          Nuestras políticas se orientan hacia la definición de precios especiales y beneficios de descuento para clientes frecuentes, cumpliendo con el compromiso por brindar una experiencia única de compra en línea. Posteamos ofertas exclusivas en fechas especiales con condiciones y restricciones propias de cada promoción. La mercancía ofrecida en línea en www.lobocueros.com.co por lo general tiene el mismo precio que en su tienda física, aunque en algunos casos puede variar en función de la ubicación geográfica sumando el coste del envío hasta la ciudad de destino.  
        </p>
        <br></br>
        <b>D. COMUNICACIÓN</b>
        <p>
          www.lobocueros.com.co puede brindarte información, por medio de diferentes formatos al aceptar sus términos y condiciones.    
        </p>
        <br></br>
        <b>E. ACEPTACIÓN DE TÉRMINOS Y CONDICIONES</b>
        <p>
          Al acceder y hacer uso del sitio web www.lobocueros.com.co, aceptas que estás sujeto a los Términos y Condiciones, y todas las leyes aplicables regirán y se interpretarán de acuerdo a lo estipulado en la norma colombiana.    
        </p>
        <br></br>
        <b>F. USO DEL SITIO</b>
        <p>
          Está estrictamente prohibido el uso de lenguaje obsceno hacia la página, o el acoso mediante mensajes ofensivos.
        </p>
        <p>
          La suplantación de identidad está prohibida, inclusive para los directivos o empleados con licencia,   o el representante de LOBOCUEROS, así como para otros miembros o visitantes.
        </p>
        <p>
          No se puede cargar, distribuir o publicar a través de este sitio cualquier contenido que sea difamatorio, calumnioso, obsceno, amenazante, invasor de la privacidad o de los derechos de publicidad, abusivo, ilegal, o de cualquier otra manera que puedan constituir o fomentar un delito penal, violar los derechos de cualquiera de las partes o que de lo contrario puede dar lugar a responsabilidad civil o violar cualquier ley.
        </p>
        <p>
          El contenido comercial para solicitar a otros a unirse o ser miembros de cualquier otro servicio comercial en línea u organización está prohibido.
        </p>
			</TabPanel>
      <TabPanel value={value} index={3}>
        <p>
          En www.lobocueros.com.co tienes la posibilidad de comprar los productos que más te gustan de una forma sencilla y confiable.  
          Simplemente, nos brindas unos datos de información básica en el formulario de compra, 
          realizas la confirmación del pago y nosotros hacemos el resto por ti. A continuación te enseñamos como comprar: 
        </p>
      </TabPanel>
    </div>
		
    )
}
export default TabsAbout;