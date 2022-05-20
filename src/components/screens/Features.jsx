import React from "react";
import styled from "styled-components";
import delivery from "../../assets/images/features/f-icon1.png";
import returnPolicy from "../../assets/images/features/f-icon2.png";
import support from "../../assets/images/features/f-icon3.png";
import payment from "../../assets/images/features/f-icon4.png";

const featureDetails = [
	{
		id: 1,
		image: delivery,
		title: "Free Delivery",
		description: "Free shipping on all orders",
	},
	{
		id: 2,
		image: returnPolicy,
		title: "Return Policy",
		description: "Free shipping on all orders",
	},
	{
		id: 3,
		image: support,
		title: "24/7 Support",
		description: "Free shipping on all orders",
	},
	{
		id: 4,
		image: payment,
		title: "Secure Payment",
		description: "Free shipping on all orders",
	},
];

function Features() {
	return (
		<Container className="wrapper">
			<FeaturesList>
				{featureDetails.map((item) => (
					<FeatureElements key={item.id}>
						<ImageContainer>
							<img src={item.image} alt="free delivery" />
						</ImageContainer>
						<Title>{item.title}</Title>
						<Description>{item.description}</Description>
					</FeatureElements>
				))}
				{/* <FeatureElements>
					<ImageContainer>
						<img src={delivery} alt="free delivery" />
					</ImageContainer>
					<Title>Free Delivery</Title>
					<Description>Free shipping on all orders</Description>
				</FeatureElements> */}
			</FeaturesList>
		</Container>
	);
}

export default Features;

const Container = styled.div`
	margin: 5% 0;
`;
const FeaturesList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FeatureElements = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
`;
const ImageContainer = styled.div`
	width: 30px;
`;
const Title = styled.h5`
	font-size: 20px;
	font-family: latoregular;
`;
const Description = styled.p`
	font-size: 16px;
	font-family: latohairline;
`;
