import Image from "next/image"
import { useState } from "react";

const ImagesDisplay = ({ images }) => {

    const [selectedImg, setSelectedImg] = useState(images[0]);

    const handleHover = (img) => {
        setSelectedImg(img)
    }

    return(
        <div className="a">
            <div className="relative rounded-lg overflow-hidden w-full h-[45vw] lg:h-[25vw] mb-4">
                <Image fill className="object-cover" src={selectedImg}/>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-4">
                {
                    images.map((img)=>(
                        <div onMouseEnter={ () => handleHover(img) } className="relative h-[8vw] w-full rounded-lg overflow-hidden cursor-pointer hover:border-2 hover:border-main">
                            <Image fill src={img}/>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default ImagesDisplay