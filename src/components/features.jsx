import Image from 'next/image'
import FeaturesCard from './atomic/featuresCard';

const Features = () =>{

    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col items-center gap-12">
                <div className="w-max">
                    <h1 className="text-6xl font-[800]">Features</h1>
                    <div className="h-[5px] w-full bg-[#E6B345] rounded-md"></div>
                </div>

                <div className="w-full flex justify-between">

                    <FeaturesCard 
                        image="key.svg"
                        title="All Access, One Payment"
                        description="Enjoy all your favorite apps with just one payment."
                    />

                    <FeaturesCard 
                        image="dollar-symbol.svg"
                        title="Affordable Pricing"
                        description="Get premium entertainment at a fraction of the cost."
                    />

                    <FeaturesCard 
                        image="support.svg"
                        title="24/7 Support"
                        description="Our support team is available around the clock."
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Features;