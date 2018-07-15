import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
`

const Advantage = styled.div`
	flex: 1;

	&:nth-of-type(-n+2) {
		margin: 0 30px 0 0;
	}
`

const ImageContainer = styled.div`
	background: #dededd;
	height: 216px;
	position: relative;
`

const ReadMore = styled.a`
	background-color: #1b2936;
	bottom: 0;
	color: #fff;
	cursor: pointer;
	font-size: 13px;
	font-weight: 700;
	line-height: 9px;
	padding: 15px 61px 13px 31px;
	position: absolute;
	text-transform: uppercase;
	right: 0;

	&:after {
		align-items: center;
		background-color: #2f3840;
		content: ">";
		display: flex;
		height: 100%;
		justify-content: center;
		position: absolute;
		top: 0;
		right: 0;
		text-align: center;
		width: 32px;
	}
`

const ReadMoreActive = ReadMore.extend`
	background-color: #006db7;

	&:after {
		background-color: #037ed1;
	}
`

const Description = styled.div`
	background: #fff;
	max-height: 177px;
	padding: 32px 30px 35px 29px;
`

const DescriptionTitle = styled.h3`
	font-size: 18px;
	font-weight: 800;
	line-height: 13px;
	padding: 14px 0 23px 3px;
	position: relative;
	text-transform: uppercase;

	&:before {
		background-color: #fdc300;
		content: "";
		display: block;
		height: 3px;
		position: absolute;
		top: 0;
		width: 33px;
	}
`

const DescriptionText = styled.p`
	color: #777;
	font-family: 'Open Sans', sans-serif;
	font-size: 13px;
	line-height: 20px;
`

const DetailsButton = styled.a`
	background-color: #fdc300;
	border-radius: 25px;
	color: #fff;
	display: block;
	font-size: 13px;
	line-height: 9px;
	margin: 50px auto 50px;
	padding: 22px 65px 17px;
	text-transform: uppercase;
	width: 220px;
`

const Advantages = () => {
	return (
		<div>
			<Container>
				<Advantage>
					<ImageContainer>
						<ReadMoreActive>Read More</ReadMoreActive>
					</ImageContainer>
					<Description>
						<DescriptionTitle>Overland Network</DescriptionTitle>
						<DescriptionText>We have a wide experience in overland industry specific logistic solutions like farmaceutical 
							logistics, retail and automotive logistics by train or road.</DescriptionText>
					</Description>
				</Advantage>
				<Advantage>
					<ImageContainer>
						<ReadMore>Read More</ReadMore>
					</ImageContainer>
					<Description>
						<DescriptionTitle>Overland Freight</DescriptionTitle>
						<DescriptionText>
							We bring your goods safely to worldwide 
							destinations with our great sea fright services. We offer LLC and FLC shipments that are fast and effective with no delays.
						</DescriptionText>
					</Description>
				</Advantage>
				<Advantage>
					<ImageContainer>
						<ReadMore>Read More</ReadMore>
					</ImageContainer>
					<Description>
						<DescriptionTitle>Overland Network</DescriptionTitle>
						<DescriptionText>
							We provide full supply chain management package including cost effective and fast sea freight.
							You can also combine this package with other means of transportation.
						</DescriptionText>
					</Description>
				</Advantage>
			</Container>
			<DetailsButton>View Details</DetailsButton>
		</div>
	)
}

export default Advantages;
