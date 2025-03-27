import Layout from '../DashboardLayout.jsx'
import { useForm } from '@inertiajs/react'
import { useState, useEffect } from "react";

export default function EventCreate() {
    const { data, errors, setData, post } = useForm({
        title: null,
        date: null,
        description: null,
        category: null,
        image: null
    });

    const submitHandler = (e) => {
        e.preventDefault()
        post(route('events.store'));
    }

    return (
        <div className="container-fluid py-4">
            <div className="card">
                <div className="card-header">
                    <h2 className="h4 font-weight-bold mb-0">Create Event</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                value={data.title} 
                                onChange={e => setData('title', e.target.value)} 
                                type="text" 
                                id="title" 
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`} 
                                placeholder="Enter event title"
                            />
                            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea 
                                value={data.description} 
                                onChange={e => setData('description', e.target.value)} 
                                id="description" 
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`} 
                                rows="3"
                                placeholder="Enter event description"
                            ></textarea>
                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="category" className="form-label">Category</label>
                            <select 
                                value={data.category} 
                                onChange={e => setData('category', e.target.value)} 
                                id="category" 
                                className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                            >
                                <option value="">Please select</option>
                                <option value="Academic Calendar">Academic Calendar</option>
                                <option value="Admissions and Programs">Admissions and Programs</option>
                                <option value="Student Events">Student Events</option>
                                <option value="Community Events">Community Events</option>
                            </select>
                            {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Event Date</label>
                            <input 
                                type="date" 
                                id="date" 
                                className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                value={data.date || ''}
                                onChange={e => setData('date', e.target.value)}
                            />
                            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Featured Image</label>
                            <input 
                                type="file" 
                                id="image" 
                                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                onChange={e => setData('image', e.target.files[0])}
                            />
                            {errors.image && <div className="invalid-feedback">{errors.image}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Create Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

EventCreate.layout = page => <Layout children={page}/>