import Image from 'next/image'

interface PlanProps {
    id: number
    link: string
    price: string
    priceDate: string
    title: string
    description: string
    features: string[]
    popular: boolean
}

const TypePlan = ({ id, link, price, priceDate, title, description, features, popular }: PlanProps) => {
    return (
        <div className={`h-[475px] ${popular ? 'bg-tertiary' : 'bg-[rgba(255,255,255,0.5)]'} py-[40px] px-[30px] flex flex-col w-[303px] rounded-[26px] text-white justify-between relative`}>
            
            {popular && (
                <div className="absolute bg-primary py-[5px] px-[16px] rounded-[20px] top-2 right-2 opacity-80">
                    <p className="text-white text-sm">Most Popular</p>
                </div>
            )}
            
            <div className="flex flex-col gap-[20px]">
                <p className={`text-[2rem] font-[700] ${popular ? 'text-white' : 'text-[#071952]'}`}>
                    {price}
                    <span className="text-[1rem]">{priceDate}</span>
                </p>
                <div className="flex flex-col gap-[6px]">
                    <p className={`text-[28px] ${popular ? 'text-white' : 'text-[#071952]'}`}>{title}</p>
                    <p>{description}</p>
                </div>

                {features.length > 0 ? (
                    features.map((feature, index) => (
                        <div key={index} className="flex gap-[10px]">
                            <Image src="/icon/checklistPlan.svg" alt="checklist" width={20} height={20} />
                            <p>{feature}</p>
                        </div>
                    ))
                ) : (
                    <p>No features available</p>
                )}
            </div>

            <a className="self-center" href={link}>
                <div className="w-[200px] h-6 bg-[#E6B345] text-white flex justify-center items-center rounded-[24px] py-[20px]">
                    <p>Choose Plan</p>
                </div>
            </a>
        </div>
    )
}

export default TypePlan