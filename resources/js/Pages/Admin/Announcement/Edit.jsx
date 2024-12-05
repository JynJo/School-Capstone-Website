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
    const { data, setData, post, errors } = useForm({
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
<h2 className="text-lg font-bold">Edit Announcement</h2>
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 gap-4">
            <form onSubmit={submitHandler}>
            <div className="max-w-full">
                <label for="input-label" className="block text-sm font-medium mb-2">Title</label>
                <input value={data.title} onChange={e => setData('title', e.target.value)} type="text" id="input-label" className="border w-full py-2 px-4 block w-full border-gray-200 rounded text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none " placeholder=""/>
                { errors.title && <p className="text-red-500 my-2 text-sm"> { errors.title }</p>}
            </div>

            <label htmlFor="noticeFor" className="block text-sm font-medium ">Notice For</label>
            <select value={data.noticeFor} onChange={e => setData('noticeFor', e.target.value)} id="noticeFor" className="py-2 px-3 pe-4 bg-white border block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <option selected="">Please select</option>
                <option value="public">Broadcast on website</option>
                <option value="teachers">Teachers</option>
                <option value="students">Students</option>
                <option value="parents">Parents</option>
            </select>

                { errors.noticeFor && <p className="text-red-500 my-2 text-sm"> { errors.noticeFor }</p>}

            <Tiptap content={data.content} setData={setData}/>

            { errors.content && <p className="text-red-500 my-2 text-sm"> { errors.content }</p>}

            <div className="max-w-sm">
        <label className="block text-sm font-medium mb-2">Featured Image</label>


        <label className="block">
      <span className="sr-only">Choose image</span>
      <input type="file" onChange={e => setData('image', e.target.files[0])} id="fileInput" className="block w-full text-sm text-gray-500
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
        <button type="submit" className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">
            Save Changes
        </button>
        </form>

        </div>

    </>)
}

export default AnnounementEdit
AnnounementEdit.layout = page => <DashboardLayout children={page}/>
