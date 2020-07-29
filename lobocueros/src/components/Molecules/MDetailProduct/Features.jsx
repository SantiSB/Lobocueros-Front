import React from 'react';

const Features = () => {
    return(
		<div className="features">
			<div className="features-product">
				<table>
					<tr>
						<th colspan="2">Caracteristicas del producto</th>
					</tr>
					<tr>
						<td className="item-table">Material</td>
						<td>Cuero</td>
					</tr>
					<tr>
						<td className="item-table" >Tamaño</td>
						<td>Grande</td>
					</tr>
					<tr>
						<td className="item-table">Sistema de cierre</td>
						<td>Con cierre</td>
					</tr>
					<tr>
						<td className="item-table">Tipo de tapa</td>
						<td>Sin tapa</td>
					</tr>
					<tr>
						<td className="item-table">Forro</td>
						<td>Sin forro</td>
					</tr>
					<tr>
						<td className="item-table">Orientación</td>
						<td>Vertical</td>
					</tr>
				</table>

			</div>
			<div className="measures-product">
				<table>
					<tr>
						<th colspan="2">Medidas del producto</th>
					</tr>
					<tr>
						<td className="item-table">Ancho (cms)</td>
						<td>44</td>
					</tr>
					<tr>
						<td className="item-table">Alto (cms)</td>
						<td>20</td>
					</tr>
					<tr>
						<td className="item-table">Profundo (cms)</td>
						<td>33</td>
					</tr>
				</table>
				
			</div>
				
		</div>
		
    )
}
export default Features;