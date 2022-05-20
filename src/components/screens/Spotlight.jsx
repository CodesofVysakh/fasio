import React from "react";

// packages
import styled from "styled-components";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// assets
import bg from "../../assets/images/banner/banner-bg.jpg";
import common from "../../assets/images/banner/banner-img.png";
import prev from "../../assets/images/banner/prev.png";
import next from "../../assets/images/banner/next.png";

const NextArrow = () => {};

const PrevArrow = () => {};

function Spotlight() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Container>
			<InnerContainer className="wrapper">
				<Left>
					<Title>Latest Collections..!</Title>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolorem, et.
					</Description>
				</Left>
				<Right>
					<ImageContainer>
						<img src={common} alt="image" />
					</ImageContainer>
				</Right>
				<Buttons>
					<ButtonContainer>
						<img src={prev} alt="prev arrow" />
					</ButtonContainer>
					<ButtonContainer>
						<img src={next} alt="next arrow" />
					</ButtonContainer>
				</Buttons>
			</InnerContainer>
		</Container>
	);
}

export default Spotlight;

const Container = styled.div`
	background: url(${bg});
	background-size: cover;
`;
const InnerContainer = styled.div`
	padding: 10% 0;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;
const Left = styled.div`
	width: 50%;
`;
const Title = styled.h3`
	font-size: 62px;
	font-family: latoblack;
`;
const Description = styled.p`
	font-size: 22px;
	font-family: latolight;
	margin-top: 20px;
	max-width: 70%;
`;
const Right = styled.div`
	width: 50%;
`;
const ImageContainer = styled.div`
	width: 100%;
`;
const Buttons = styled.div`
	width: 30%;
	position: absolute;
	display: flex;
	justify-content: space-between;
	bottom: 0;
`;
const ButtonContainer = styled.div`
	width: 100px;
	background: red;
`;
