import { useState, useEffect } from "react"
import Iconloading from "../components/iconloading"
import Planetcard from "../components/planetcard"


const Planets = () => {
	const [planets, setStarships] = useState([])
	
	useEffect(() => {
			fetch('https://swapi.dev/api/planets/')
				.then(res => res.json())
				.then(data => setStarships(data.results.slice(0,8)))
	}, [])

	return (
		<div>
			<h1 className="page-title planets-title">Planets</h1>
			<div className="planets-grid">
				{planets.length > 0 ? planets.map(item => {
					const pID = item.url.split('/')[5]

					return <Planetcard key={pID} id={pID} name={item.name} diameter={item.diameter} population={item.population}/>
				}): <Iconloading />}
			</div>
			
		</div>
	)
}
export {Planets}