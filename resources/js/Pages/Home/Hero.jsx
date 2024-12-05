import { Carousel } from 'react-bootstrap'
import { Parallax } from 'react-parallax'


export default function Hero({ title }) {
	return (<>
		<Parallax
			strength={400}
			bgImage="images/img3.jpg"
			className="hero"
		>
		<div className="hero-section"  style={{ fontFamily: "Faculty Glyphic" }}>{ title }</div>
		</Parallax>

	</>)
}
