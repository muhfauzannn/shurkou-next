import Image from 'next/image'

interface ServicesProps {
    image: string;
    title: string;
  }

const AppServices = ({image,title}:ServicesProps) => {
    return(
        <div className="flex items-center justify-center flex-col gap-2 p-4 max-md:p-0 max-md:pt-6 max-md:px-0 hover:-translate-y-2 transition-all">
            <Image className='rounded-[10px]' src={`/assets/${image}`} alt='logo' width={50} height={50}/>
            <p className='font-nunito font-[400] text-center w-max'>{title}</p>
        </div>
    )
}
export default AppServices;