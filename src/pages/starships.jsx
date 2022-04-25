import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Iconloading from "../components/iconloading"
import Shipcard from "../components/shipcard"

const StarShips = () => {
	const [starships, setStarships] = useState([])
	const [select, setSelect] = useState('name')
	
	useEffect(() => {
			fetch('https://swapi.dev/api/starships/')
				.then(res => res.json())
				.then(data => setStarships(data.results.slice(0,8)))
	}, [])

	useEffect(() => {
		if (starships.length === 0) return
		
		const newStarships = [...starships]
		switch (select) {
			case 'name':
				setStarships(newStarships.sort((a, b) => {
					if (a.name > b.name) return 1;
					// if (a.name == b.name) return 0;
					if (a.name < b.name) return -1;
					return 0;
				}))
				break;

				case 'cost':
					setStarships(newStarships.sort((a, b) => a.cost_in_credits - b.cost_in_credits))
					break;

			default:
				break;
		}
	}, [select, starships])

	return (
		<div>
			<h1 className="page-title starship-title">Starships</h1>
			<p className="sort-by">Sort by: 
				<select className="select-sort" value={select} onChange={event => setSelect(event.target.value)}>
					<option value="name">Name</option>
					<option value="cost">Cost</option>
				</select>
			</p>
			<div className="ship-grid">
				{}
				{starships.length > 0 ? starships.map(item => {
					const shipId = item.url.split('/')[5]

					return <Shipcard key={shipId} id={shipId} name={item.name} cost={item.cost_in_credits} />
				}) : <Iconloading />}
			</div>
			
		</div>
	)
}
export {StarShips}