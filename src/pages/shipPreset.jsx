import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Iconloading from "../components/iconloading"
import { splitpoint } from "../components/split-point"

const created = (date) => {
	const d = new Date(date)

	return `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`
}

const ShipPreset = () => {
		const {id} = useParams();
		const [starship, setStarship] = useState(null)
	
	useEffect(() => {
			fetch(`https://swapi.dev/api/starships/${id}`)
				.then(res => res.json())
				.then(data => setStarship(data))
	},[id])


	return (
		<div>
			{starship ? (
				<>
					<h1 className="page-title ship-title">{starship.name}</h1>
					<div className="ship-viev">
							<div className="shipviev-grid">
								<div className="ship-viev-image" style={{ backgroundImage: `url(https://starwars-visualguide.com/assets/img/starships/${id}.jpg), url(https://starwars-visualguide.com/assets/img/big-placeholder.jpg)` }}></div>
								<div className="ship-viev-info">
									<div className="viev-info-row">
										<span>Model: </span>
										<span className='viev-info-value'>{starship.model}</span>
									</div>
									<div className="viev-info-row">
										<span>Name: </span>
										<span className='viev-info-value'>{starship.name}</span>
									</div>
									<div className="viev-info-row">
										<span>Length: </span>
										<span className='viev-info-value'>{starship.length}</span>
									</div>
									<div className="viev-info-row">
										<span>Cost: </span>
										<span className='viev-info-value'>${splitpoint(starship.cost_in_credits)}</span>
									</div>
									<div className="viev-info-row">
										<span>Created: </span>
										<span className='viev-info-value'>{created(starship.created)}</span>
									</div>
								</div>
						</div>
						<p className="home-text">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim
						</p>
					</div>
				</>
			): <Iconloading />}
		</div>
	)
}
export {ShipPreset}