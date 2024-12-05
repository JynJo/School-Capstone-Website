import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../Layouts/Layout.jsx'

const Events = ({ events }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredEvents, setFilteredEvents] = useState(events);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const filtered = events.filter(event =>
            new Date(event.date).toDateString() === date.toDateString()
        );
        setFilteredEvents(filtered);
    };

    const hasEventOnDate = (date) => {
        return events.some(event =>
            new Date(event.date).toDateString() === date.toDateString()
        );
    };

    const categories = [
        'Academic Calendar',
        'Community Events',
        'Student Events',
        'Academics and Admissions Announcement'
    ];

    return (<>

        <h1 className="text-pink font-bold text-4xl m-4">Lourdes College Events</h1>
        <div className="p-10 flex flex-row justify-center gap-4">

            <div className="flex flex-col">
                <div>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        tileContent={({ date, view }) =>
                            view === 'month' && hasEventOnDate(date) ? (
                                <div className="bg-pink-500 rounded-full w-2 h-2 mx-auto mt-1"></div>
                            ) : null
                        }
                        tileClassName={({ date, view }) => {
                            if (
                                date.toDateString() === new Date().toDateString() &&
                                view === 'month'
                            ) {
                            return 'highlight-today';
                            }
                            return '';
                        }}
                    />
                </div>

                 <div className="bg-white rounded-lg shadow-md mt-2 rounded">
                    <div className="bg-pink-500 w-full px-2 ">
                        <h3 className="text-lg font-bold uppercase p-2 text-white mb-2">Categories</h3>
                    </div>
            <div className="space-y-2 p-4">
                {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`category-${index}`}
                            //value={category}
                            className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                            //onChange={(e) => onCategoryChange(e.target.value, e.target.checked)}
                        />
                        <label
                            htmlFor={`category-${index}`}
                            className="ml-2 text-gray-700 text-sm"
                        >
                            {category}
                        </label>
                    </div>
                ))}
            </div>

                   </div>
            </div>
            <div className="flex-grow">

                <div className="col-span-3">
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                            {filteredEvents.map(event => (
                                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="relative">
                <div className="absolute top-0 left-0 bg-pink-600 text-white font-bold p-2 px-2 text-center rounded" style={{ fontFamily: "Poppins"}}>
                    <span className="block text-lg">{new Date(event.date).getDate()}</span>
                    <div className="flex flex-row gap-2">
                    <span>{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
                    <span>{new Date(event.date).getFullYear()}</span>
                    </div>
                </div>

                <img className="rounded-t-lg w-full h-48 object-cover" src={`/storage/${event.image}`} alt={event.title} />
            </div>

            <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                    {event.title}
                </h5>
                <p className="font-normal text-gray-700">
                    {event.description}
                </p>
                {/*<a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>*/}
            </div>
        </div>                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No events on this date.</p>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

Events.layout = page => <Layout children={page}/>;
export default Events;

