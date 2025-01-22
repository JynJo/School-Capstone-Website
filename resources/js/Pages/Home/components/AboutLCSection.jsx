import React from "react";
import { Link } from '@inertiajs/react'
const AboutSBLC = () => {
    return (
        <section className="mt-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="/images/about-img.jpg"
                        alt="SBLC Building"
                        className="rounded h-[600px] w-[500px] object-cover"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        About LC
                    </h2>
                    <p className="text-gray-600 font-light mb-6 leading-relaxed">
                        Founded in 1928 by the late Archbishop James Hayes, S. J. as San Agustin Parochial School, an elementary school for boys and girls. Five years later, in 1933, the school gave to the community its first twenty (20) graduates and responded to a growing felt need of High School Catholic Education in the city, the school operated with separate principals for the boys and for the girls. The girls division saw the birth of LOURDES ACADEMY which was managed by the Religious of the Virgin Mary (RVM) Sisters.
                    </p>
                    <Link href={ route('about') }>
                    <button className="bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600">
                        Learn More
                    </button>
                    </Link>
                    {/* Logos Section */}
                  {/*  <div className="flex flex-wrap mt-8 space-x-4 items-center">
                        <img
                            src="https://via.placeholder.com/100x50" // Replace with logo URL
                            alt="DepED"
                            className="h-12"
                        />
                        <img
                            src="https://via.placeholder.com/100x50" // Replace with logo URL
                            alt="CHED"
                            className="h-12"
                        />
                        <img
                            src="https://via.placeholder.com/100x50" // Replace with logo URL
                            alt="SOCOTEC"
                            className="h-12"
                        />
                        <img
                            src="https://via.placeholder.com/100x50" // Replace with logo URL
                            alt="UKAS"
                            className="h-12"
                        />
                    </div>*/}
                </div>
            </div>
        </section>
    );
};

export default AboutSBLC;

