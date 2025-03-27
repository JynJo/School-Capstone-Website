import { useEffect, useState } from 'react'
import DashboardLayout from '../DashboardLayout.jsx'
import { useForm, usePage } from "@inertiajs/react"
import { Inertia } from '@inertiajs/inertia';
import Tiptap from '../Components/Tiptap.jsx'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AnnounementEdit = ({ announcement }) => {
    const MySwal = withReactContent(Swal)
    const [submitted, setSubmitted] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        title: announcement.title,
        content: announcement.content,
        noticeFor: announcement.notice_for,
        image: null
    });
    const { flash } = usePage().props;

    if (flash.success != null && submitted) {
        MySwal.fire({
            title: "Success",
            text: flash.success,
            icon: "success"
        });
        setSubmitted(false)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        post( route('announcement.update', { id: announcement.id }), {
            data: { ...data, _method: 'put'}
        });

        setSubmitted(true)
    }

    return (<>
<DashboardLayout>
            <div className="container-fluid p-4 bg-white rounded shadow-sm">
                <h2 className="h4 font-weight-bold mb-4">
                    <i className="fas fa-bullhorn mr-2"></i> Create New Announcement
                </h2>

                <form onSubmit={submitHandler}>
                    <div className="row">
                        {/* Title Field */}
                        <div className="col-md-12 mb-3">
                            <label htmlFor="title" className="form-label">
                                <i className="fas fa-heading mr-2"></i> Title
                            </label>
                            <input 
                                value={data.title} 
                                onChange={e => setData('title', e.target.value)} 
                                type="text" 
                                id="title" 
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                placeholder="Enter announcement title"
                                required
                            />
                            {errors.title && (
                                <div className="invalid-feedback">
                                    {errors.title}
                                </div>
                            )}
                        </div>

                        {/* Audience Selection */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="noticeFor" className="form-label">
                                <i className="fas fa-users mr-2"></i> Broadcast To
                            </label>
                            <select 
                                value={data.noticeFor} 
                                onChange={e => setData('noticeFor', e.target.value)} 
                                id="noticeFor" 
                                className={`form-control form-select ${errors.noticeFor ? 'is-invalid' : ''}`}
                                required
                            >
                                <option value="" disabled selected>Select audience</option>
                                <option value="public">Website (Public)</option>
                                <option value="students">Students Only</option>
                            </select>
                            {errors.noticeFor && (
                                <div className="invalid-feedback">
                                    {errors.noticeFor}
                                </div>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="image" className="form-label">
                                <i className="fas fa-image mr-2"></i> Featured Image
                            </label>
                            <input 
                                type="file" 
                                onChange={e => setData('image', e.target.files[0])} 
                                id="image" 
                                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                accept="image/*"
                            />
                            <small className="text-muted">Recommended size: 1200x630px</small>
                            {errors.image && (
                                <div className="invalid-feedback">
                                    {errors.image}
                                </div>
                            )}
                        </div>

                        {/* Content Editor */}
                        <div className="col-12 mb-4">
                            <label className="form-label">
                                <i className="fas fa-align-left mr-2"></i> Content
                            </label>
                            <Tiptap content={data.content} setData={setData}/>
                            {errors.content && (
                                <div className="text-danger small mt-2">
                                    {errors.content}
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="col-12 text-end">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Updating...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-save me-2"></i>
                                        Update Announcement
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </DashboardLayout>


    </>)
}

export default AnnounementEdit
