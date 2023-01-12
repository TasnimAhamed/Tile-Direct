const ComparisonBox = ({ children }: any) => {
  return (
    <div className="md:w-auto md:flex-auto lg:flex-none lg:w-[421px] w-full h-[477px] border border-black flex flex-col items-center pt-[71px] pb-[78px] bg-white md:mb-0 mb-10">
      {children}
    </div>
  );
};

export default ComparisonBox;
