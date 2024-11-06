import Image from 'next/image'
import Link from 'next/link';
import DashboardItems from '../../../modules/DashboarItems';

const DashboardDesc = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-11/12 sm:w-11/12 md:w-[80%] lg:w-[70%] flex flex-col gap-10 py-10">

                {/* Subscription and Profile Section */}
                <div className="w-full flex gap-8 max-sm:flex-col">
                    <div className="w-[90%] h-[213px] bg-[#F2F2F2] max-sm:w-[100%] rounded-3xl relative p-4 flex flex-col gap-2 justify-center font-poppins">
                        <Image src={"/icon/Logo (2).svg"} className='absolute right-[16px] top-[16px]' alt='logo' width={35} height={35} />
                        <h1 className='text-[#3059ee] text-[64px] font-semibold leading-none'>Premium</h1>
                        <p className='text-[#071952] text-xl font-semibold'>Next payment: 5 December 2024</p>
                    </div>
                    <div className="w-[20%] h-[213px] max-sm:w-[100%] max-sm:hidden flex flex-col justify-between items-end text-[#071952]">
                        <Link href={"#"}>
                            <div className="w-[150px] h-[150px] bg-[#F2F2F2] rounded-[30px] flex flex-col gap-1 items-center justify-center duration-300 hover:opacity-70">
                                <Image src="/icon/attribution-pencil.svg" alt='logo' width={20} height={20}/>
                                <p className='font-semibold text-base text-center w-fit'>Edit Profile</p>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className="w-[150px] h-[50px] bg-[#F2F2F2] rounded-[20px] duration-300 hover:opacity-70 flex justify-center items-center gap-2">
                                <Image src="/icon/time-past.svg" alt='logo' width={20} height={20}/>
                                <p className='font-semibold text-base w-fit'>Activity</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mapped Dashboard Items Section */}
                <div className='flex flex-col gap-[27px] font-poppins text-[#071952] font-semibold'>
                    {DashboardItems.map((section) => (
                        <div key={section.title}>
                            <p className='text-white mb-1'>{section.title}</p>
                            <div className='flex gap-3 flex-col'>
                                {section.item.map((subItem) => (
                                    <Link key={subItem.key} href={subItem.link} className='w-full'>
                                        <div className='w-full h-[63px] bg-[#f2f2f2] rounded-2xl px-[25px] flex justify-between items-center duration-500 hover:opacity-70 hover:translate-x-2'>
                                            <div className='flex gap-4 items-center'>
                                                <Image src={subItem.logo} alt='logo' width={25} height={25} />
                                                <p>{subItem.title}</p>
                                            </div>
                                            <Image src={"/icon/angle-right.svg"} className='fill-[#071952]' alt='logo' width={25} height={25} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardDesc;
