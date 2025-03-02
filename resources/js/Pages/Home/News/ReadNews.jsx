import Layout from '../Layouts/Layout.jsx'

export default function ReadNews({ news }) {
    console.log(news)
    return (<>
        <div data-aos="fade-down" className="flex flex-row justify-center">
            <div className="p-5 flex flex-col gap-4 w-[70vw]">
            <h2 className="font-bold italic text-lg text-gray-500">{ new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format( new Date(new Date(news.created_at).toLocaleDateString())) }</h2>
            <img
                className="max-h-[600px] object-scale-down"
                src={`/storage/${news.image}`}
            />
            <h2 className="text-2xl font-semibold">{ news.title }</h2>
            <article className="text-gray-600 text-lg font-light" dangerouslySetInnerHTML={{ __html: news.content}}></article>
            </div>
        </div>
    </>)

}

ReadNews.layout = page => <Layout children={page}/>

