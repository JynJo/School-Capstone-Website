import { useState, useEffect } from 'react'

import DashboardLayout from '../DashboardLayout.jsx'
import { useForm, usePage } from "@inertiajs/react"
import Tiptap from '../Components/Tiptap.jsx'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AnnounementCreate = () => {
    const MySwal = withReactContent(Swal)
    const [submitted, setSubmitted] = useState(false);
    const { data, setData, post, errors } = useForm({
        title: null,
        content: null,
        noticeFor: null,
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

        post( route('announcement.store'), { forceFormData: true }  );
        if (flash.success != null ) setSubmitted(true);
        setSubmitted(true)
    }


    return (<>
        <div className="p-4 shadow-sm">
            <form onSubmit={submitHandler}>
            <div className="">
                <label for="title" className="block font-medium mb-2">Title</label>
                <input value={data.title} onChange={e => setData('title', e.target.value)} type="text" id="title" className="form-control" placeholder=""/>
                { errors.title && <p className="text-red-500 my-2 text-sm"> { errors.title }</p>}
            </div>

            <label htmlFor="noticeFor" >Notice For</label>
            <select value={data.noticeFor} onChange={e => setData('noticeFor', e.target.value)} id="noticeFor" className="form-control">
                <option disabled></option>
                <option value="public">Broadcast on website</option>
                <option value="students">Students</option>
            </select>

                { errors.noticeFor && <p className="text-red-500 my-2 text-sm"> { errors.noticeFor }</p>}

            <Tiptap content={data.content} setData={setData}/>

            { errors.content && <p className="text-red-500 my-2 text-sm"> { errors.content }</p>}

            <div className="mt-4">
        <label>Featured Image</label>


        <label className="block">
      <span className="sr-only">Choose image</span>
      <input type="file" onChange={e => setData('image', e.target.files[0])} id="fileInput" className="form-control
      "/>
            </label>

        { errors.image && <p className="text-red-500 my-2 text-sm"> { errors.image }</p>}
        </div>
        <button type="submit" className="btn btn-primary">
            Create Announcement
        </button>
        </form>

        </div>

    </>)
}

export default AnnounementCreate
AnnounementCreate.layout = page => <DashboardLayout children={page}/>
