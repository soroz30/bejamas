import React from 'react'
import styled from 'styled-components'
import Advantages from './Advantages'

const Main = styled.h1`
	color: #fff;
	font-size: 72px;
	font-weight: 800;
	line-height: 60px;
	margin: 160px 0 154px;
	max-width: 600px;
	padding: 22px 0 0;
	position: relative;
	text-transform: uppercase;

	&:before {
		background-color: #fdc300;
		content: '';
		height: 7px;
		position: absolute;
		top: 0;
		width: 69px;
	}
`

const Hero = () => {
	return (
		<div className="container">
			<Main>Strongest distribution network</Main>
			<Advantages />
		</div>
	)
}

export default Hero;
