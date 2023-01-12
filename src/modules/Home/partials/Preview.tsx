import ReactPlayer from "react-player";

const Preview = () => {
  return (
    <div className=" h-[220px] sm:h-[350px] md:h-[420px] lg:w-[924px] lg:h-[589px] w-full relative">
        <ReactPlayer 
           controls
           url="/videos/video-1.mp4"
           width='100%'
           height='100%'
           playing
           playIcon={<img src='/images/play-button.png' className="w-[50px] h-[50px] cursor-pointer opacity-70 absolute" />}
           light="/images/preview.svg"
        />
    </div>
  );
};

export default Preview;
