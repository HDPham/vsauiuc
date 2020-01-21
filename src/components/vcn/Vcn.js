import React, {useState} from 'react';
import {Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';

function Vcn() {
	const carouselItems = [
		{
			src: '/images/vcn_2017/group.jpg',
			altText: 'Slide 1'
		}, 
		{
			src: '/images/vcn_2017/coed.jpg',
			altText: 'Slide 2'
		}, 
		{
			src: '/images/vcn_2017/skit.jpg',
			altText: 'Slide 3'
		}, 
		{
			src: '/images/vcn_2017/siracha.jpg',
			altText: 'Slide 4'
		}, 
		{
			src: '/images/vcn_2017/lion.jpg',
			altText: 'Slide 5'
		}, 
		{
			src: '/images/vcn_2017/ribbons.jpg',
			altText: 'Slide 6'
		}
	]

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	  
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}
	  
	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}
	  
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	}
	  
	const slides = carouselItems.map((item) => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img src={item.src} alt={item.altText} className="vw-100" style={{minHeight: '35vh', maxHeight: '65vh'}} />
			</CarouselItem>
		);
	});

	return (
		<>
			<Container fluid={true} tag="main" role="main" className="fade-in">
				<Row>
					<Carousel activeIndex={activeIndex} next={next} previous={previous} className="mw-100">
						<CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
						{slides}
						<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
						<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
					</Carousel>
				</Row>
				<Row className="justify-content-center mt-4">
					<Col xs={10} lg={8} xl={6} className="text-center">
						<h1 className="text-maroon">Vietnamese Culture Night</h1>
						<p><strong>Vietnamese Culture Night (VCN)</strong> is our annual cultural event showcasing traditional/modern dances and performances. Previously known as Family Day, VCN highlights the talents of VSA UIUC members, family, and friends by celebrating the culture that brings us all together. The show is free and open to all, and includes a Vietnamese-themed dinner after the show.</p>
					</Col>
				</Row>
			</Container>
			<footer className="position-absolute pb-3 w-100 text-center text-secondary fade-in" style={{bottom: '0'}}>
				Organized by the Vietnamese Student Association at the University of Illinois Urbana-Champaign. <br />
				For any questions, contact us at <a href="mailto:vsauiuc.familyday@gmail.com" className="text-maroon">vsauiuc.familyday@gmail.com</a>
			</footer>
		</>
	)
}

export default Vcn;