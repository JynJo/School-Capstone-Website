import React from "react";
import { Link } from "@inertiajs/react";

export default function AboutSection() {
    return (
        <div data-aos="fade-up">
            <div className="lg:text-center">
                <h2
                    className="text-pink-600 text-center text-3xl my-4 font-semibold"
                    style={{ fontFamily: "Poppins" }}
                >
                    About LC
                </h2>
            </div>
            <div
                data-aos="fade-down"
                className="h-[50vh] flex items-center text-center py-12 bg-[linear-gradient(to_right_bottom,rgba(25,25,25,0.6),rgba(25,25,25,0.6)),url('/images/about-img.jpg')]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="">
                            <div className="">
                                <div className='text-white' style={{ fontFamily: "Open Sans" }}>
                                    <p >
                                        At Lourdes College, we believe in
                                        empowering students to achieve their
                                        full potential. Our programs are
                                        designed to provide a holistic education
                                        that combines academic excellence with
                                        personal growth and community
                                        engagement.
                                    </p>
                                    <p className="mt-4">
                                        With a dedicated faculty,
                                        state-of-the-art facilities, and a
                                        supportive environment, we strive to
                                        create opportunities for every student
                                        to succeed.
                                    </p>
                                    <br />
                                    <button className="p-2 bg-pink-600 rounded-sm text-white">
                                        <Link
                                            href="/about"
                                            className="underline"
                                        >
                                            Learn more about Lourdes College
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
