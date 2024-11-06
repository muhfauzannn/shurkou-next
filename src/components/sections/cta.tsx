const Cta = ()=>{
    return(
        <div className="w-full flex flex-col items-center gap-6">
            <div className="w-11/12  rounded-[25px] bg-gradient-to-r from-[#ead6aa] to-[#3059ee] py-40 max-md:py-28 text-[#071952] flex flex-col items-center gap-[30px]">
                <div className="flex flex-col items-center gap-[5px] max-md:gap-[12px]">
                    <p className="font-nunito font-[600] text-base">Are You ready?</p>
                    <h1 className="text-center text-white text-[64px] max-md:text-[48px] font-[600] w-[60%] max-md:w-[80%] leading-none">
                        Be A Part Of The Next Big Thing
                    </h1>
                </div>

                <a className="self-center" href="/">
                    <div className={`w-[200px] h-6 bg-primary hover:bg-secondary text-white flex justify-center items-center rounded-[24px] py-[20px] transition-all`}>
                    <p className="font-poppins">Get Started</p>
                    </div>
                </a>
            </div>
        </div>
    )

}
export default Cta