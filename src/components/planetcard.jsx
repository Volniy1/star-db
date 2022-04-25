import React from 'react'
import { splitpoint } from './split-point'

function Planetcard({id, name, diameter, population}) {
	return (
		<div className="planet-card">
			<div className="planet-card-image" style={{backgroundImage: `url(https://starwars-visualguide.com/assets/img/planets/${id}.jpg), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg)`}}></div>
			<div className="planet-card-info">
				<div className="planet-info-row">
					<span>Name:</span>
					<span className='planet-info-value'>{name}</span>
				</div>
				<div className="planet-info-row">
					<span>Diameter:</span>
					<span className='planet-info-value'>{parseInt(diameter).toLocaleString()} km</span>
				</div>
				<div className="planet-info-row">
					<span>Population:</span>
					<span className='planet-info-value'>{splitpoint(population)}</span>
				</div>
			</div>
		</div>
	)
}

export default Planetcard