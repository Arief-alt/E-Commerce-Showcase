import React from 'react'
import {ProductCard} from "../../../components";

const Dashboard = () => {
    return (
        <main className="-mt-24 flex flex-col">
            <section
                className="h-[500px] w-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/images/E-Commerce.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <header
                    className="pt-40 p-12 flex flex-col justify-center items-center gap-6"
                >
                    <h1 className="text-white text-5xl font-semibold">
                        E-CommerceShowcase
                    </h1>

                    <span className="text-white text-2xl">
                        Discover premium products with exceptional quality and unbeatable prices
                    </span>
                </header>
            </section>

            <section className="pt-10 flex flex-col wrapper justify-center gap-4">
                <h1 className="text-blue-400 text-4xl font-semibold">
                    Find Your Product
                </h1>

                <form className="gap-2">
                    <div className="px-4 gap-2 flex items-center p-2 rounded-full border border-blue-400 cursor-pointer w-[350px] sm:w-[500px] xl:w-[1000px] focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-transparent transition-all">
                        <img
                            src="/assets/icons/search.png"
                            alt="search"
                            className="size-8"
                        />

                        <input
                            type="text"
                            maxLength={50}
                            placeholder="Search Products..."
                            className="text-gray-950 text-lg w-full border-0 outline-none focus:outline-none bg-transparent"
                        />
                    </div>
                </form>
            </section>

            <section className="pt-10 flex flex-col wrapper justify-center gap-4">
                <h1 className="text-blue-400 text-4xl font-semibold">
                    Featured Products
                </h1>

                <span className="text-gray-700 text-lg">
                    Handpicked items just for you
                </span>
            </section>

            <section className="pt-10 flex flex-col wrapper justify-center gap-4">
                <ProductCard
                    image={''}
                    type={'Audio'}
                    title={'Wireless Headphones'}
                    description={'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula'}
                    stars={0}
                    cost={100}
                />
            </section>
        </main>
    )
}
export default Dashboard
