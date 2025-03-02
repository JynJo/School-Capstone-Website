import React from "react";
import { Link } from "@inertiajs/react";

export default function AboutSection() {
    return (
        <>
            <div className="lg:text-center">
                <h2
                    className="text-pink-600 text-center text-3xl my-4 font-semibold"
                    style={{ fontFamily: "Poppins" }}
                >
                    About Us
                </h2>
            </div>
            <div
                data-aos="fade-down"
                className="py-12 bg-[url(/images/about-img.jpg)] bg-linear-to-r from-gray-500 to-gray-500"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="">
                            <div className="flex items-center text-center">
                                <div style={{ fontFamily: "Open Sans" }}>
                                    <p className="text-gray-800">
                                        At Lourdes College, we believe in
                                        empowering students to achieve their
                                        full potential. Our programs are
                                        designed to provide a holistic education
                                        that combines academic excellence with
                                        personal growth and community
                                        engagement.
                                    </p>
                                    <p className="mt-4 text-gray-800">
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
        </>
    );
}
