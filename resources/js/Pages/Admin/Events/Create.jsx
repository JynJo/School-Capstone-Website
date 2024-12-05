import Layout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'
import { DayPicker } from "react-day-picker";
import { useState, useEffect } from "react";
import "react-day-picker/style.css";
export default function EventCreate() {
    const [date, setDate] = useState();
    const { data, errors, setData, post } = useForm({
        title: null,
        date: null,
        description: null,
        category: null,
        image: null
    });


    useEffect(() => {
        setData('date', date)
    }, [date])

    const submitHandler = (e) => {
        e.preventDefault()
        post( route('events.store') );
    }
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });



    return (<>
 <h2 className="text-lg font-bold">Create Event</h2>
        <div className="flex flex-col bg-white shadow-sm p-4 md:p-5  ">
            <form onSubmit={submitHandler}>
            <div class="w-full">
                <label for="input-label" class="block text-sm font-medium mb-2">Title</label>
                <input value={data.title} onChange={e => setData('title', e.target.value)} type="text" id="input-label" class="border py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=""/>
                { errors.title && <p className="text-red-500 my-2 text-sm"> { errors.title }</p>}
            </div>
            <div class="w-full">
                <label for="description" class="block text-sm font-medium mb-2">Description</label>
                <textarea value={data.description} onChange={e => setData('description', e.target.value)} type="text" id="description" class="border py-2 px-2 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=""></textarea>
                { errors.description && <p className="text-red-500 my-2 text-sm"> { errors.description }</p>}
            </div>


            <label htmlFor="category" class="block text-sm font-medium mt-2">Category</label>
            <select value={data.category} onChange={e => setData('category', e.target.value)} id="category" class="py-2 px-2 bg-white border block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <option selected="">Please select</option>
                <option value="Academic Calendar">Academic Calendar</option>
                <option value="Admissions and Programs">Admissios and Programs</option>
                <option value="Student Events">Student Events</option>
                <option value="Community Events">Community Events</option>
            </select>
            <div className="py-5">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={
                        date ? `Selected: ${date.toLocaleDateString()}` : "Pick a day."
                    }
                />
            </div>

                   <div class="max-w-sm mt-2">
                <label className="block text-sm font-medium mb-2">Featured Image</label>
        <label class="block">
      <span class="sr-only">Choose image</span>
      <input type="file" onChange={e => setData('image', e.target.files[0])} id="fileInput" class="block w-full text-sm text-gray-500
        file:me-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-pink-600 file:text-white
        hover:file:bg-pink-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
      "/>
            </label>

        { errors.image && <p className="text-red-500 my-2 text-sm"> { errors.image }</p>}
        </div>
        {/*<div className="z-50 border text-black mt-2" style={{ zIndex: '100'}}>
        <Datepicker
            useRange={false}
            asSingle={true}
            value={value}
            onChange={newValue => setValue(newValue)}
            primaryColor={"pink"}
        />
        </div> */}

        <button type="submit" class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">
            Create Event
        </button>
        </form>

        </div>


    </>)
}

EventCreate.layout = page => <Layout children={page}/>
