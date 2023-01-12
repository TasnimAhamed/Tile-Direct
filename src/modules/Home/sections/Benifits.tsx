import SectionTitle from "../../../common/components/SectionTitle";
import TextIcon from "../../../common/components/TextIcon";

const Benifits = () => {
  return (
    <div className="bg-[#F5F5F5] py-[100px]">
      <div className=" container">
        <SectionTitle title={"You Design, We Take Care of the Rest!"} />
        <div className="flex justify-between flex-wrap items-center mt-[70px]">
          <div className="md:w-[375px] lg:w-[458px] md:h-[333px] w-full h-full md:m-0 mb-5 object-cover">
            <img
              src="/images/featureImage.svg"
              alt="feature"
              className="w-full h-full"
            />
          </div>
          <div className="">
            <h2 className="font-primary font-bold text-[25px] leading-[28px] text-black my-7">
              Benefits
            </h2>
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line long goes here"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line short"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line long goes here"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line short"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line long goes here"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line short"}
            />
            <TextIcon
              icon={"/images/rightIcon.svg"}
              text={"Lorem ipsum item line long goes here"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
