import React from 'react'

const Dashboard = () => {
    return (
        <main className="-mt-24 flex flex-col">
            <section
                className="min-h-screen w-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/images/E-Commerce.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <header
                    className="p-12 flex flex-col justify-center items-center gap-6"
                >
                    <h1 className="text-5xl font-semibold">
                        E-CommerceShowcase
                    </h1>

                    <span className="text-2xl">
                        Discover premium products with exceptional quality and unbeatable prices
                    </span>
                </header>
            </section>
        </main>
    )
}
export default Dashboard
