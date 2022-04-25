import React from 'react'
import { Link } from 'react-router-dom'
import { splitpoint } from './split-point'

function Shipcard({id, name, cost}) {
	return (
		<Link className="ship-card" to={`/starships/${id}`}>
			<div className="ship-card-image" style={{backgroundImage: `url(https://starwars-visualguide.com/assets/img/starships/${id}.jpg), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg)`}}></div>
			<div className="ship-card-info">
				<div className="info-row">
					<span>Cost:</span>
					<span className='info-value'>${splitpoint(cost)}</span>
				</div>
				<div className="info-row">
					<span>Name:</span>
					<span className='info-value'>{name}</span>
				</div>
			</div>
		</Link>
	)
}

export default Shipcard