import { Element } from 'react-scroll'
import { Link } from '@inertiajs/react'
import Hero from '../Hero.jsx'
import { Head } from '@inertiajs/react'
import Layout from '../Layouts/Layout.jsx'

const Index = ({ auth }) => {
	return (<>
    	<Head title="Admissions"/>
		<Hero title="Admission Process"/>
		<div className="flex flex-col w-full items-center p-5">
		<div className="mt-4 w-3/5 flex flex-col gap-[4rem]">
			{/*<h2 className="h2 text-center text-gray-800">WELCOME TO LOURDES COLLEGE</h2>*/}
			<p className="font-bold text-[1.4rem] text-pink">
				We are delighted that you are considering Lourdes College for your child's educational journey. As a Catholic institution rooted in faith, excellence, and service, Lourdes College is more than just a school — it is a vibrant community of learners. From our youngest students in Kindergarten to our High School graduates, we focus not only on academic achievement but also on nurturing strong character, spiritual growth, and a lifelong love of learning.
			</p>
			<p className="font-light text-lg">
				We take pride in our students' accomplishments, including those who go on to excel in prestigious universities and meaningful careers. However, we believe that true success starts with a solid foundation — one built on faith, values, and the pursuit of knowledge. At Lourdes College, every child is valued, supported, and encouraged to grow as a whole person, ready to face the world with compassion, confidence, and a strong moral compass.
				Thank you for considering joining the Lourdes College family. We are excited to partner with you in shaping the future of your child.
			</p>
		</div>
		</div>
		<div className="p-4">
			<span className="relative flex justify-center">
			  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
			  <span className="relative z-10 bg-white px-6 text-uppercase font-bold">Admission Process</span>
			</span>
			<div className="flex flex-wrap flex-row items-center justify-center mt-4">
				<div className="flex flex-col w-5/12 gap-6">
					<div className="bg-pink px-4 py-2 w-10/12">
						<h2 className="font-medium text-uppercase">freshmen</h2>
					</div>
				</div>

				<div className="flex flex-col w-5/12 gap-6">
					<div className="bg-pink px-4 py-2 w-10/12">
						<h2 className="font-medium text-uppercase">transferees</h2>
					</div>
				</div>

				<div className="flex flex-col w-5/12 gap-6">
					<div className="bg-pink px-4 py-2 w-10/12">
						<h2 className="font-medium text-uppercase">Old Students</h2>
					</div>
				</div>

				<div className="flex flex-col w-5/12 gap-6">
					<div className="bg-pink px-4 py-2 w-10/12">
						<h2 className="font-medium text-uppercase">Foreign Students</h2>
					</div>
				</div>
			</div>
		</div>

	</>)
}
Index.layout = page => <Layout children={page}/>
export default Index;
