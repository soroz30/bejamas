import React from 'react'
import styled from 'styled-components'

const OffersBackground = styled.div`
	background: #fff;
`

const OffersHeading = styled.h2`
	color: #333;
	font-size: 30px;
	line-height: 22px;
	padding: 70px 0 15px;
	text-align: center;
`

const OffersDescription = styled.p`
	color: #888;
	font-size: 13px;
	font-weight: 600;
	line-height: 9px;
	margin: 0 0 95px;
	padding: 0 0 15px;
	position: relative;
	text-align: center;
	text-transform: uppercase;

	&:after {
		background-color: #fdc300;
		bottom: -3px;
		content: "";
		height: 3px;
		left: 50%;
		position: absolute;
		transform: translateX(-50%);
		width: 33px;
	}
`

const OffersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const Offer = styled.div`
	background-color: #fcfcfc;
	display: flex;
	flex-basis: 50%;
`

const OfferImageContainer = styled.div`
	align-items: center;
	display: flex;
	flex: 0 0 165px;
	justify-content: center;
`

const OfferDescriptionContainer = styled.div`
	padding: 35px 30px 40px 0;
`

const OfferDescriptionHeading = styled.h3`
	color: #333;
	font-size: 18px;
	font-weight: 700;
	line-height: 18px;
	margin: 0 0 20px;
`

const OfferDescription = styled.p`
	color: #777;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
`

const Offers = () => {
	return (
		<OffersBackground>
			<OffersHeading>What we Offer</OffersHeading>
			<OffersDescription>Tailored Logistic Services</OffersDescription>
			<div className="container">
				<OffersContainer>
					<Offer>
						<OfferImageContainer></OfferImageContainer>
						<OfferDescriptionContainer>
							<OfferDescriptionHeading>Contract logistics</OfferDescriptionHeading>
							<OfferDescription>
								Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!
							</OfferDescription>
						</OfferDescriptionContainer>
					</Offer>
					<Offer>
						<OfferImageContainer></OfferImageContainer>
						<OfferDescriptionContainer></OfferDescriptionContainer>
					</Offer>
					<Offer>
						<OfferImageContainer></OfferImageContainer>
						<OfferDescriptionContainer></OfferDescriptionContainer>
					</Offer>
					<Offer>
						<OfferImageContainer></OfferImageContainer>
						<OfferDescriptionContainer></OfferDescriptionContainer>
					</Offer>
				</OffersContainer>
			</div>
		</OffersBackground>
	)
}

export default Offers;