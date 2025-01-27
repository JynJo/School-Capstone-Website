import { Carousel } from 'react-bootstrap'
import { Parallax } from 'react-parallax'


export default function Hero({ title }) {
	return (<>
		<Parallax
			strength={400}
			bgImage="images/img3.jpg"
			className="hero">
			<div 
				className="hero-section text-center text-3xl md:text-[4em]"  
				style={{ fontFamily: "Faculty Glyphic" }}>
				<h1>Lourdes College</h1>
			</div>
		</Parallax>

	</>)
}
