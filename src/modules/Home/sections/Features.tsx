import SectionTitle from "../../../common/components/SectionTitle";
import TextIcon from "../../../common/components/TextIcon";

const Features = () => {
  return (
    <div className="my-[100px] container">
      <SectionTitle title={"You Design, We Take Care of the Rest!"} />
      <div className="flex justify-between flex-wrap items-center mt-10 md:mt-[70px]">
        <div className="">
          <h2 className="font-primary font-bold text-[25px] leading-[28px] text-black my-7">
            Features
          </h2>
          <TextIcon
            icon={"/images/pen.svg"}
            text={"Lorem ipsum item line long goes here"}
          />
          <TextIcon
            icon={"/images/book.svg"}
            text={"Lorem ipsum item line short"}
          />
          <TextIcon
            icon={"/images/file.svg"}
            text={"Lorem ipsum item line long goes here"}
          />
          <TextIcon
            icon={"/images/userAdd.svg"}
            text={"Lorem ipsum item line short"}
          />
          <TextIcon
            icon={"/images/mark.svg"}
            text={"Lorem ipsum item line long goes here"}
          />
          <TextIcon
            icon={"/images/dollar.svg"}
            text={"Lorem ipsum item line short"}
          />
          <TextIcon
            icon={"/images/featureBright.svg"}
            text={"Lorem ipsum item line long goes here"}
          />
        </div>
        <div className="md:w-[375px] lg:w-[458px] md:h-[333px] w-full h-full md:mt-0 mt-5 object-cover">
          <img
            src="/images/featureImage.svg"
            alt="feature"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
