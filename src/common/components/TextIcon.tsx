const TextIcon = ({ icon, text }: any) => {
  return (
    <div className="flex gap-3 items-center mb-4">
      <div className="">
        <img src={icon} alt="icon" className="w-full h-full" />
      </div>

      <h3 className="font-primary font-normal text-sm text-black text-left">
        {text}
      </h3>
    </div>
  );
};

export default TextIcon;
