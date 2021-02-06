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
          MISIÓN
        </AccordionSummary>
        <AccordionDetails>
            Ofrecer al mercado y a nuestros clientes productos diseñados y elaborados 
            con los más altos niveles de calidad con el fin de satisfacer sus necesidades del día a día. 
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          VISIÓN
          
        </AccordionSummary>
        <AccordionDetails>
          
            En el año 2024 queremos posicionarnos y ser reconocidos en el mercado nacional 
            como una de las empresas que ofrece los mejores productos en cuero cumpliendo con las necesidades 
            de nuestros clientes y que nuestra marca sea sinónimo de calidad y perseverancia.
          
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          VALORES
        </AccordionSummary>
        <AccordionDetails>
          
            <ul>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Pasión por el trabajo</li>
              <li>Respeto</li>
              <li>Honestidad</li>
            </ul>
        
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          ¿QUIENES SOMOS?
        </AccordionSummary>
        <AccordionDetails>
          
            Lobocueros S.A.S es una empresa nacional fundada en el departamento de Nariño 
            por nuestro gerente general Lorenzo Bolaños Muñoz en el año 1994 , 
            Somos un equipo de trabajo especializado en la fabricación y comercialización de artículos en cuero 
            tanto a nivel nacional como internacional con más de 20 años de experiencia en el mercado de marroquinería, 
            establecidos y ubicados actualmente en la ciudad de Bogotá.
            Brindamos lo mejor de nosotros para satisfacer a nuestros clientes con nuestros productos, 
            somos amantes al cuero, materia prima esencial del nuestra actividad económica y productiva 
            que representa la fortaleza, estilo, trabajo y naturalidad de nuestra empresa.
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}