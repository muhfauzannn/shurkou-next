import TypePlan from "./atomic/typeplan"

const PlanDetail = [
    {
        id: 1,
        price: "Rp15.000",
        priceDate: "/Week",
        link: "/signup",
        title: "Weekly plan",
        description: "Full access for one week. Perfect for short-term needs.",
        features: ["Access premium apps", "All features", "24/7 support"],
        popular: false
    },
    {
        id: 2,
        price: "Rp35.000",
        link: "/signup",
        priceDate: "/Week",
        title: "Weekly plan",
        description: "Full access for one week. Perfect for short-term needs.",
        features: ["Access premium apps", "All features", "24/7 support"],
        popular: false
    },
    {
        id: 3,
        price: "Rp35.000",
        link: "/signup",
        priceDate: "/Week",
        title: "Weekly plan",
        description: "Full access for one week. Perfect for short-term needs.",
        features: ["Access premium apps", "All features", "24/7 support"],
        popular: true
    }
]

const Plan = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col items-center gap-12">
                <div>
                    <h1 className="text-6xl font-[600] w-max">Plan & <span className="text-[#E6B345]">Pricing</span></h1>
                    <p className="font-nunito font-[400] w-3/4">Choose only what you need with our flexible packages. Pay for what you use, and easily scale up as your needs grow. We are here to grow with you.</p>
                </div>
                <div className="rounded-[26px] w-10/12 max-md:w-full backdrop-filter backdrop-blur-lg px-8 flex flex-wrap justify-center font-poppins gap-6">
                    {PlanDetail.map(plan => (
                        <TypePlan
                            key={plan.id}
                            link={plan.link} // Memastikan link yang benar dikirimkan
                            id={plan.id}
                            price={plan.price}
                            priceDate={plan.priceDate}
                            title={plan.title}
                            description={plan.description}
                            features={plan.features}
                            popular={plan.popular}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plan
