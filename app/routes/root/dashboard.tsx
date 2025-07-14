import React from 'react'
import {ProductCard} from "../../../components";
import { Link } from 'react-router';

const Dashboard = () => {
    return (
        <main className="-mt-24 pb-10 flex flex-col">
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
                    <h1 className="text-white text-4xl md:text-5xl font-semibold">
                        E-CommerceShowcase
                    </h1>

                    <span className="text-white text-center text-2xl">
                        Discover premium products with exceptional quality and unbeatable prices
                    </span>

                    <div className="pt-6">
                        <Link
                            to="/products"
                            className="hover flex justify-center items-center px-4 py-2 w-[240px] rounded-lg button-background sleek-white cursor-pointer"
                        >
                            <h1 className="text-lg text-white">Shop Now</h1>
                            <img
                                src="/assets/icons/right-arrow.png"
                                alt="Right Arrow"
                                className="mt-1 ml-3 size-6"
                            />
                        </Link>
                    </div>
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

            <section className="pt-10 flex wrapper justify-center">
                <div className="w-full grid md:grid-cols-3 gap-4">
                    <div className="w-full hover items-center flex flex-col p-5 rounded-lg border border-gray-600 bg-dark">
                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            10K+
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Happy Customers
                        </p>
                    </div>

                    <div className="hover items-center flex flex-col p-5 rounded-lg border border-gray-600 bg-dark">
                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            500+
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Premium Products
                        </p>
                    </div>

                    <div className="hover items-center flex flex-col p-5 rounded-lg border border-gray-600 bg-dark">
                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            99%
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Satisfaction Rate
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Dashboard
