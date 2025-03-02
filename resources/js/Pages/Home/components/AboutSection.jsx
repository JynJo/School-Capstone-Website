import React from "react";
import { Link } from '@inertiajs/react'

export default function AboutSection() {
    return (
        <div data-aos="fade-down" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-[#ea9999] text-center text-3xl my-4 font-semibold" style={{ fontFamily: 'Poppins' }}>
                        About Us
                    </h2>
                    <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto"  style={{ fontFamily: 'Open Sans'}}>
                        We are dedicated to providing quality education and fostering a community of lifelong learners.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex justify-center">
                            <img
                                src="/images/about-img.jpg" // Replace with your image path
                                alt="About Us"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex items-center">
                            <div style={{ fontFamily: 'Open Sans'}}>
                                <p className="text-md text-gray-500">
                                    At Lourdes College, we believe in empowering students to achieve their full potential.
                                    Our programs are designed to provide a holistic education that combines academic excellence
                                    with personal growth and community engagement.
                                </p>
                                <p className="mt-4 text-md text-gray-500">
                                    With a dedicated faculty, state-of-the-art facilities, and a supportive environment,
                                    we strive to create opportunities for every student to succeed.
                                </p>
                                <button className="mt-6 px-6 py-2 bg-[#ea9999] rounded-lg text-white  hover:bg-[#d88a8a] transition">
                                    <Link href="/about" className="underline">
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

