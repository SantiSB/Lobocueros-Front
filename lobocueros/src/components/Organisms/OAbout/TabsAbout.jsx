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
		</div>
		
    )
}
export default TabsAbout;