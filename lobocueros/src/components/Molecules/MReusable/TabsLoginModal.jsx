import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormLoginRegister from '../../Atoms/AReusable/FormLoginRegister';

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
  tabs: {
	  color: "#420000"
  }
}));

const TabsLoginModal = () => {
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
				centered
				scrollButtons="auto"
				aria-label="scrollable auto tabs example"
				
				>
				<Tab label="REGISTRARSE" {...a11yProps(0)} />
				<Tab label="INICIAR SESIÓN" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<FormLoginRegister action={"Registrarse"}></FormLoginRegister>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<FormLoginRegister action={"Iniciar Sesión"}></FormLoginRegister>
			</TabPanel>
		</div>
		
    )
}
export default TabsLoginModal;