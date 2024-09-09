import Image from 'next/image'

interface FeaturesProps {
    image: string;
    title: string;
    description: string;
  }
const FeaturesCard = ({image, title, description}:FeaturesProps) => {
    return(
        <div className='flex flex-col gap-3 items-center'>
            <div className="w-[70px] h-[70px] bg-secondary rounded-[15px] flex justify-center items-center">
                <Image src={`./icon/${image}`} alt='logo' width={50} height={50}/>
            </div>
            <div className='text-center w-11/12 font-nunito flex flex-col gap-2'>
                <p className='text-base font-[700]'>{title}</p>
                <p className='text-sm font-[400]'>{description}</p>
            </div>
        </div>
    )
}
export default FeaturesCard