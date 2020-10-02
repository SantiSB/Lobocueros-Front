import React from 'react';

const Features = (props) => {
	console.log("qwe", props)
    return(
		<div className="features">
			<div className="features-product">
				<table> 
					<tr>
						<th colspan="2">Caracteristicas del producto</th>
					</tr>
					<tr>
						<td className="item-table">Material</td>
						<td>{props.productDetail.material}</td>
					</tr>
					<tr>
						<td className="item-table" >Tamaño</td>
						<td>{props.productDetail.size}</td>
					</tr>
					<tr>
						<td className="item-table">Sistema de cierre</td>
						<td>{props.productDetail.closing}</td>
					</tr>
					<tr>
						<td className="item-table">Tipo de tapa</td>
						<td>{props.productDetail.top}</td>
					</tr>
					<tr>
						<td className="item-table">Forro</td>
						<td>{props.productDetail.cover}</td>
					</tr>
					<tr>
						<td className="item-table">Orientación</td>
						<td>{props.productDetail.orientation}</td>
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
						<td>{props.productDetail.width}</td>
					</tr>
					<tr>
						<td className="item-table">Alto (cms)</td>
						<td>{props.productDetail.hight}</td>
					</tr>
					<tr>
						<td className="item-table">Profundo (cms)</td>
						<td>{props.productDetail.depth}</td>
					</tr>
				</table>
				
			</div>
				
		</div>
		
    )
}
export default Features;