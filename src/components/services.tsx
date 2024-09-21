import AppServices from './atomic/appServices';

const Services = () => {
    const dataApps = [
        { key: 1, title: "Netflix", image: "Netflix-new-icon.png" },
        { key: 2, title: "Hotstar", image: "idqU3ch8ih.png" },
        { key: 3, title: "Chat GPT", image: "1700403373logo-chatgpt-png.png" },
        { key: 4, title: "Prime Video", image: "Amazon_Prime_Video_blue_logo_1.svg" },
        { key: 5, title: "Canva", image: "Canva_logo..png" },
        { key: 6, title: "Flaticon", image: "14649051.png" },
        { key: 7, title: "WeTV", image: "Sce286800836743538d6f90ee1a35ee08k.jpg" },
        { key: 8, title: "Perplexity AI", image: "perplexity.png" },
        { key: 9, title: "Viu", image: "unnamed (1).png" },
        { key: 10, title: "HBO GO", image: "unnamed.png" },
        { key: 11, title: "Freepik", image: "freepik.png" },
        { key: 12, title: "Peacock", image: "images (1).png" }
      ];

    return(
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex flex-col items-center gap-12">
                <div className="w-max flex flex-col items-center">
                    <h1 className="text-6xl font-[800] max-md:text-4xl">Explore Our Services</h1>
                    <div className="h-[5px] w-[50%] bg-[#E6B345] rounded-md"></div>
                </div>

                <div className="min-w-[60%] max-md:min-w-[80%] rounded-[25px] bg-[rgba(8,131,149,0.50)] border-4 border-[#3059EE]">
                    <div className="w-full h-full p-8 grid grid-cols-4 max-md:grid-cols-3 ">
                        {dataApps.map((app) => (
                            <AppServices key={app.key} image={app.image} title={app.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;