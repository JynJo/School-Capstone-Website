import React from "react";
import { Link } from '@inertiajs/react'

const LatestNews = ({ news }) => {
    return (
        <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Title */}
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-pink">
        Latest News
      </h2>
       </div>
    {/* End Title */}
    {/* Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
        { news.map((news, index) => (
        <div
        className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition max-h-[500px]"
      >
        <div className="aspect-w-16 aspect-h-10">
          <img
            className=" object-scale rounded max-h-[200px]"
            src={`/storage/${news.image}`}
            alt="Blog Image"
          />
        </div>
        <h3 className="mt-5 text-xl text-gray-800">
          { news.title}
        </h3>
        <Link href={ route('news.show', { title: news.title }) } className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-pink">
          Read More
          <svg
            className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
        ))}
         {/* End Card */}
        </div>
    {/* End Grid */}
  </div>
  {/* End Card Blog */}
</>

    );
};

export default LatestNews;

