import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Header = styled.header`
	background-color: #fff;
	border-radius: 3px;
	box-shadow: 0 -8px 0 rgba(255, 255, 255, 0.2), inset 1px 1px 0 rgba(201, 202, 202, 0.75);
	display: flex;
	justify-content: space-between;
	margin: 42px auto 0;
	padding: 24px 30px 21px 24px;
	width: 100%;
`
const Company = styled.div`
`

const CompanyName = styled.h3`
	color: #010101;
	font-size: 26px;
	font-weight: 900;
	line-height: 19px;
	text-transform: uppercase;
`

const CompanyDescription = styled.span`
	color: #777;
	font-size: 11px;
	line-height: 10px;
`

const Logo = styled.span``

const NavLinks = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
`

const NavLink = styled.a`
	cursor: pointer;
	display: block;
	font-size: 13px;	
	font-weight: 700;
	line-height: 9px;
	margin: 16px 0 14px 46px;
	position: relative;
	text-transform: uppercase;

	&:after {
		background-color: #006db7;
		content: '';
		display: block;
		height: 8px;
		margin: 0 0 0 -15.5px;
		opacity: 0;
		position: absolute;
		top: 36px;
		transition: 0.25s;
		width: calc(100% + 31px);
	}

	&:hover {
		&:after {
			opacity: 1;
		}
	}
`

const Search = styled.span`
	background-color: #006db7;
	border-radius: 50%;
	display: block;
	margin: 1px 0 0 30px;
	height: 38px;
	width: 38px;
`

const Layout = ({ children, data }) => {
	return (
		<div>
			<div className="container">
				<Helmet
					title="Bejamas"
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' }
					]}
				/>
				<Header>
					<Company>
						<Logo />
						<CompanyName>Trucking</CompanyName>
						<CompanyDescription>Logistics & Transportation</CompanyDescription>
					</Company>
					<nav>
						<NavLinks>
							<li><NavLink>Home</NavLink></li>
							<li><NavLink>About Us</NavLink></li>
							<li><NavLink>Services</NavLink></li>
							<li><NavLink>News</NavLink></li>
							<li><NavLink>Locations</NavLink></li>
							<li><NavLink>Contact</NavLink></li>
							<li><Search /></li>
						</NavLinks>
					</nav>
				</Header>
			</div>
			{children()}
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.func
}

export default Layout
