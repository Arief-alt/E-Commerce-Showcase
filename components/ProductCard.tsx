import React from 'react'

const ProductCard = ({image, type, title, description, stars, cost}: ProductItem) => {
    return (
        <article
            className="hover:scale-105 mt-4 max-w-sm h-full flex flex-col rounded-lg overflow-hidden bg-dark border border-gray-600 shadow-lg"
        >
            <div className="relative w-full h-48 bg-cover bg-center"
                 style={{
                     backgroundImage: `url(${image || '/assets/images/test-bg.jpg'})`
                 }}
            >
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <p>{type}</p>
                </div>
            </div>

            <section className="flex flex-col gap-4 p-6 flex-grow">
                <h1 className="text-2xl font-bold text-white text-left">
                    {title}
                </h1>

                <p className="text-gray-200 text-left">
                    {description}
                </p>

                <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-yellow-400 text-3xl">
                            {i <= Math.floor(stars) ? '★' : '☆'}
                        </span>
                                ))}
                        <span className="text-gray-200 text-lg ml-2 mt-1">
                            {stars.toFixed(1)}
                        </span>
                </div>

                <span className="text-gray-200 text-2xl">
                    ${cost}
                </span>
            </section>

            <div className="px-6 pb-4">
                <a
                    href={``}
                    className="sleek-white w-full flex border border-blue-300 button-background justify-center px-4 py-2 rounded-md items-center gap-2"
                >
                    <h1 className="text-md text-white">Add to Cart</h1>
                </a>
            </div>
        </article>
    )
}
export default ProductCard
