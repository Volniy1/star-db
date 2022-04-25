import { useState } from 'react';
import {NavLink,Outlet} from 'react-router-dom';

const Layout = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className='global-container'>
			<div className="page-container">
			<header className='header'>
					<NavLink className='logo' to="/">StarDB</NavLink>
					<div className="links">
					<NavLink className='link' to="/starships">Starships</NavLink>
					<NavLink className='link link-space' to="/planets">Planets</NavLink>
					</div>
					<button className='menu-button' onClick={() => setOpen(!open)}>
						{
							open ? (
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 1L1 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M1 1L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>

							) : (
							<svg width="45" height="18" viewBox="0 0 45 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M44 9H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M44 1H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M44 17H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							)
						}
					</button>
			</header>
			<div className={`mobile-menu ${open ? 'open' : ''}`}>
				<NavLink className='mobile-link' to="/starships" onClick={() => setOpen(false)}>Starships</NavLink>
				<NavLink className='mobile-link mobile-link-space' to="/planets" onClick={() => setOpen(false)}>Planets</NavLink>
			</div>
			<main className='container'>
			<Outlet />
			</main>		
			</div>
		</div>
	)
}

export {Layout}
