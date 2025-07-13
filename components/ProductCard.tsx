import React, {useEffect, useState} from 'react'

const ProductCard = ({ image, type, title, description, stars, cost }: ProductItem) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && isModalOpen) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('resize', handleResize);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isModalOpen]);

    return (
        <>
            <article
                className="group hover transition-all mt-4 max-w-sm h-full flex flex-col rounded-lg overflow-hidden bg-dark border border-gray-600 shadow-lg"
            >
                <div
                    className="relative w-full h-48 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image || '/assets/images/test-bg.jpg'})`
                    }}
                >
                    <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            className="hidden lg:flex bg-white p-2 rounded-md shadow cursor-pointer"
                            onClick={openModal}
                        >
                            <img
                                src="/assets/icons/eye.png"
                                alt="Eye"
                                className="size-6"
                            />
                        </button>
                        <button
                            className="bg-white p-2 rounded-md shadow cursor-pointer"
                        >
                            <img
                                src="/assets/icons/bookmark.png"
                                alt="Bookmark"
                                className="size-6"
                            />
                        </button>
                    </div>

                    <div className="absolute top-2 left-2 bg-blue-400 bg-opacity-70 text-white text-sm px-4 py-1 rounded-full flex items-center gap-1">
                        <p>{type}</p>
                    </div>
                </div>

                <section className="flex flex-col gap-4 p-6 flex-grow">
                    <h1 className="text-2xl font-bold text-white text-left">{title}</h1>

                    <p className="text-gray-200 text-left">{description}</p>

                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="text-yellow-400 text-3xl">
                                {i <= Math.floor(stars) ? '★' : '☆'}
                            </span>
                        ))}
                        <span className="text-gray-200 text-lg ml-2 mt-1">{stars.toFixed(1)}</span>
                    </div>

                    <span className="text-white text-2xl">${cost}</span>
                </section>

                <div className="px-6 pb-4">
                    <button className="sleek-white w-full flex border border-blue-300 button-background justify-center px-4 py-2 rounded-md items-center gap-2">
                        <h1 className="text-md text-white">Add to Cart</h1>
                    </button>
                </div>
            </article>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-dark bg-opacity-80 z-50"
                    style={{ top: 0, left: 0 }}
                >
                    <div
                        className="absolute left-1/2 transform translate-x p-4 max-w-[95vw] max-h-[90vh]"
                        style={{
                            top: `${window.scrollY + window.innerHeight / 2}px`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white rounded-full px-2 pb-1 z-50 cursor-pointer"
                        >
                            <span className="text-black text-xl font-bold">×</span>
                        </button>
                        <img
                            src={image || '/assets/images/test-bg.jpg'}
                            alt="Zoomed"
                            className="w-full h-auto object-contain rounded shadow-lg"
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductCard
