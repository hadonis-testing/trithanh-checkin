import { Carousel } from "react-bootstrap";
import "./CarouselComponent.css";

const CarouselComponent = () => {
	return (
		<Carousel className="carousel-component">
			<Carousel.Item>
				<img
					className="d-block w-100 carousel-image"
					src="https://via.placeholder.com/1920x1080?text=First+Slide"
					alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 carousel-image"
					src="https://via.placeholder.com/1920x1080?text=Second+Slide"
					alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 carousel-image"
					src="https://via.placeholder.com/1920x1080?text=Third+Slide"
					alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselComponent;
