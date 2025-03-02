import Layout from "./Layout.jsx";

const Announcement = ({ announcement }) => {
    console.log(announcement);

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                {announcement && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                        <div>
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                                    {announcement.title}
                                </h2>

                                <p
                                    className="mt-4 text-gray-700 break-words"
                                    dangerouslySetInnerHTML={{
                                        __html: announcement.content,
                                    }}
                                ></p>

                                <small className="text-gray-500">
                                    Announced on:{" "}
                                    {new Date(
                                        announcement.created_at
                                    ).toLocaleString()}
                                </small>
                            </div>
                        </div>

                        <div>
                            <img
                                src={`/storage/${announcement.image}`}
                                className="rounded"
                                alt={announcement.title || "Announcement Image"}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

Announcement.layout = (page) => <Layout children={page} />;

export default Announcement;
