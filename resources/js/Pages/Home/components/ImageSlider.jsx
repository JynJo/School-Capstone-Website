import { useState } from 'react'

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const changeImage = (slideIndex) => {
		setCurrentIndex(slideIndex);
	}

	const nextBtnHandler = () => {
		const isLastImage = currentIndex === slides.length - 1;
		if (isLastImage) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	}

	const prevBtnHandler = () => {
		const isFirstImage = currentIndex === 0;
		if (isFirstImage) {
			setCurrentIndex(slides.length - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	}

	return (
		<div
		style={{ 
			backgroundImage: `url(${slides[currentIndex]})`,
			height: '100%',
			width: '100%',
			backgroundSize: 'cover',
			position: 'relative'
		}}
		>
			<div
			  style={{
			  	backgroundColor: 'rgba(0, 0, 0, 0.5)',
			    position: 'absolute',
			    padding: '12px',
			    bottom: '3%',
			    left: '50%',
			    transform: 'translateX(-50%)', 
			    display: 'flex',
			    justifyContent: 'center', 
			    alignItems: 'center', 
			    width: '100%',
			  }}
			>
				<span onClick={prevBtnHandler} style={{fontSize: '22px'}} className="text-white cursor-pointer">&#8249;</span>
			  {slides.map((slide, slideIndex) => (
			    <span 
				    onClick={() => changeImage(slideIndex) } 
				    key={slideIndex} 
				    className={`mx-1 cursor-pointer ${(currentIndex === slideIndex) ? 'text-white' : 'text-gray-400'}`} 
				    style={{ fontSize: '8px'}}>
			      <i className="fas fa-circle"></i>
			    </span>
			  ))}
				<span onClick={nextBtnHandler} style={{fontSize: '22px'}} className="text-white cursor-pointer">&#8250;</span>
			</div>

		</div>

	)
}
export default ImageSlider;