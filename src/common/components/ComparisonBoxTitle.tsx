const ComparisonBoxTitle = ({ title, subTitle }: any) => {
  return (
    <h1 className="font-primary font-bold text-sm text-black tracking-[0.095em] text-center flex flex-col mb-[50px]">
      {title}
      <span>{subTitle}</span>
    </h1>
  );
};

export default ComparisonBoxTitle;
