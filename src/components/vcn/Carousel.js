import React, { useState } from 'react';
import { Carousel as CarouselRS, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

function Carousel() {
	const carouselItems = [
		{
			id: 1,
			name: 'group.jpg',
			altText: 'VCN Group'
		}, 
		{
			id: 2,
			name: 'coed.jpg',
			altText: 'VCN Coed'
		}, 
		{
			id: 3,
			name: 'skit.jpg',
			altText: 'VCN Skit'
		}, 
		{
			id: 4,
			name: 'siracha.jpg',
			altText: 'VCN Siracha Boys'
		}, 
		{
			id: 5,
			name: 'lion.jpg',
			altText: 'VCN Lion Dance'
		}, 
		{
			id: 6,
			name: 'ribbons.jpg',
			altText: 'VCN Ribbons'
		}
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};
	
	const slides = carouselItems.map((img) => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={img.id}>
				<img src={`${process.env.PUBLIC_URL}/images/vcn_2017/${img.name}`} alt={img.altText} className="w-100" style={{minHeight: '40vh', maxHeight: '80vh'}} />
			</CarouselItem>
		);
	});

	return (
		<CarouselRS activeIndex={activeIndex} next={next} previous={previous} className="fade-in">
			<CarouselIndicators items={carouselItems} activeIndex={activeIndex} onClickHandler={goToIndex} />
			{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
		</CarouselRS>
	);
}

export default Carousel;