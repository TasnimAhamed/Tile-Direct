const SectionTitle = ({ title, className }: any) => {
  return (
    <h1
      className={`font-primary font-normal text-lg md:text-[28px] md:leading-[38px] text-black text-center ${className}`}
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
