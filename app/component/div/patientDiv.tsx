import React, { useRef }  from "react";
import Headertext from "../text/Headertext";
import BodyText from "../text/Bodytext";

const patientDiv = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    videoRef.current?.pause();
  };
  return (
    <section className="flex flex-col justify-center items-center w-full h-[150%] gap-2 bg-white">
      <Headertext  className="break-words md:w-9/12 md:text-center mt-10 p-5 md:p-0" content="We’re welcoming new patients and can’t wait to meet you."/>
      <BodyText   className="break-words md:w-6/12 md:text-center p-5 md:p-0 -mt-10 md:mt-0" content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
      <video
        ref={videoRef}
        src="/video/6529143-uhd_4096_2160_25fps.mp4"
        className="video-embed w-full md:h-[32rem] h-[20rem] rounded-xl mb-20"
        muted
        loop
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
     </section>
  )
}

export default patientDiv
