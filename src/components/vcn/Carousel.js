import React, { useState } from 'react';
import { Carousel as CarouselRS, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import groupImg from './vcn_2017/group.jpg';
import coedImg from './vcn_2017/coed.jpg';
import skitImg from './vcn_2017/skit.jpg';
import sirachaImg from './vcn_2017/siracha.jpg';
import lionImg from './vcn_2017/lion.jpg';
import ribbonsImg from './vcn_2017/ribbons.jpg';

function Carousel() {
	const carouselItems = [
		{
			id: 1,
			src: groupImg,
			altText: 'VCN Group'
		}, 
		{
			id: 2,
			src: coedImg,
			altText: 'VCN Coed'
		}, 
		{
			id: 3,
			src: skitImg,
			altText: 'VCN Skit'
		}, 
		{
			id: 4,
			src: sirachaImg,
			altText: 'VCN Siracha Boys'
		}, 
		{
			id: 5,
			src: lionImg,
			altText: 'VCN Lion Dance'
		}, 
		{
			id: 6,
			src: ribbonsImg,
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
				<img src={img.src} alt={img.altText} className="w-100" style={{minHeight: '40vh', maxHeight: '80vh'}} />
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