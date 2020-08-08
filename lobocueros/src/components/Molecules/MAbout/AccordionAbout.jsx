import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>MISIÓN</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
            quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
            Esse laborum accusamus ipsa. Ut dolor earum asperiores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>VISIÓN</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  	    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
            quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
            Esse laborum accusamus ipsa. Ut dolor earum asperiores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>VALORES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  	    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
            quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
            Esse laborum accusamus ipsa. Ut dolor earum asperiores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>NUESTRA HISTORIA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
		  	    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Maxime provident officia necessitatibus dicta animi? Ex placeat non, porro possimus rem distinctio, 
            quidem iure neque unde dolorem ipsum officia optio dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Veritatis labore repudiandae assumenda eligendi, nesciunt architecto incidunt sed quaerat ducimus veniam porro quod? 
            Esse laborum accusamus ipsa. Ut dolor earum asperiores.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}