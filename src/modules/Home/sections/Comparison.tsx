import ComparisonBox from "../../../common/components/ComparisonBox";
import SectionTitle from "../../../common/components/SectionTitle";
import LeftComparison from "../partials/LeftComparison";
import Preview from "../partials/Preview";
import RightComparison from "../partials/RightComparison";

const Comparison = () => {
  return (
    <div className="md:h-[1220px] lg:h-[1324px]" id="comparison">
      <div className="bg-[#F5F5F5] md:h-[1081px] pt-[100px] ">
        <div className="container relative">
          
          <Preview />

          <div className="mt-[70px] mb-[50px]">
            <SectionTitle
              title={
                "Say Goodbye to Expensive, Time Consuming Tile Fulfillment"
              }
            />
          </div>

          <div className="md:flex justify-center items-center absolute right-[44%] left-[44%] mt-10 hidden z-50">
            <div className="w-[92px] h-[92px] font-primary text-white font-extrabold text-[30px] leading-[30px] bg-black flex items-center justify-center rounded-full">
              VS
            </div>
          </div>

          <div className="flex relative flex-wrap justify-between md:px-[25px] md:gap-[20px] lg:gap-0">
            <ComparisonBox>
              <LeftComparison />
            </ComparisonBox>

            <div className="md:hidden justify-center items-center absolute top-[44%] left-[36%] right-[36%] flex ">
              <div className="w-[92px] h-[92px] font-primary text-white font-extrabold text-[30px] leading-[30px] bg-black flex items-center justify-center rounded-full">
                VS
              </div>
            </div>

            <ComparisonBox>
              <RightComparison />
            </ComparisonBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
