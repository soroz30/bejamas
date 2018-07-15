import React from 'react'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Hero from '../components/Hero'
import Offers from '../components/Offers'

const HomePage = () => {
	return (
		<main>
			<Hero />
			<Offers />
		</main>
	)
}

injectGlobal`
	${reset}
	@font-face {
	      font-family: 'Raleway';
		  font-style: normal;
		  font-weight: 400, 700;
	}

	* {
		box-sizing: border-box;
	}

	body {
		background-color: #1b2936;
		font-family: 'Raleway', sans-serif;
		margin: 0;
		width: 1920px;
	}

	.container {
		margin: 0 auto;
		width: 1142px;
	}
`

export default HomePage
