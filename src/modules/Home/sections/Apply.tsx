import Select from "../../../common/components/Select";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import SectionTitle from "../../../common/components/SectionTitle";

const Apply = () => {
  return (
    <div className="applyNowBg pt-[100px] pb-[80px]">
      <div className="container ">
        <SectionTitle title={"Apply Now"} className="!text-white" />

        <div className="flex flex-wrap justify-evenly items-center mt-[77px]">
          
          <div className="w-full md:w-fit">
            <Input label={"FIRST NAME *"} placeholder={"Danielle"} />
            <Input label={"COMPANY NAME *"} placeholder={"Bespoke"} />
            <Select label={"Numbers of EMPLOYEES*"} data={[ "1-5", "10-20", "20-30", "30-40" ]} />
            <Input label={"WEBSITE *"} placeholder={""} />
            <Input label={"EMAIL ADDRESS *"} placeholder={""} />
          </div>

          <div className="w-full md:w-fit">
            <Input label={"LAST NAME*"} placeholder={"Blais"} />
            <Select label={"YEARS IN BUSINESS*"} data={[ "demo", "demo", "demo", "demo" ]} />
            <Select label={"YEARLY REVENUE *"} data={[ "demo", "demo", "demo", "demo" ]} />
            <Select
              label={"WHICH BEST DESCRIBES YOUR BUSINESS? *"}
              data={[ "demo", "demo", "demo", "demo" ]}
            />
            <Input label={"PHONE NUMBER *"} placeholder={""} />
          </div>

        </div>
        <div className="flex mt-[40px] justify-center items-center">
          <Button text={"SUBMIT"} className="py-3 w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Apply;
