import Button from "../../../common/components/Button";

const Hero = () => {
  return (
    <div className="bg-cover bg-repeat md:h-[671px] h-screen bannerBg">
      <div className="container h-full pt-[122px] md:pt-[70px]">
        <div className="flex flex-wrap justify-between items-center h-full">
          <div className="">
            <h1 className="font-primary font-light text-4xl md:text-[40px] md:leading-[48px] text-white">
              Welcome to Gateway
            </h1>
            <p className="font-primary font-normal text-sm text-white my-8 md:w-[425px] w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <Button text={"APPLY NOW"} className="py-3 w-[195px]" />
          </div>
          <div className="lg:w-[348px] lg:h-[344px] w-[200px] mx-auto lg:ml-auto lg:mr-0 mb-20 lg:mb-0">
            <img
              src="/images/bannerRight.svg"
              alt="banner img"
              className="w-full h-full"
            />
          </div>
        </div>
        
        <div className="flex justify-center text-center mt-[-40px] md:mt-[-60px] cursor-pointer">
          <a href="#comparison">
            <img
              src="/images/bottomNav.svg"
              alt="bottom navigation"
              className="w-[18px] h-[18px] "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
