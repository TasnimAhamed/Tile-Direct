const Select = ({ label, data }: any) => {
    return (
      <div className="flex flex-col mb-[28px] w-full">
        <label
          htmlFor={label}
          className="font-primary font-bold text-[9px] leading-[12px] text-white tracking-[0.09em] "
        >
          {label}
        </label>

        <div className="mt-[6px] md:w-[390px] w-full px-5 py-3 border border-[#D9D9D9] bg-white outline-none font-primary font-normal text-sm text-black" >
          <select className="mr-4 w-full" >
            {data.map((e : string, i : number) => <option key={i} > {e} </option>)}  
          </select>
        </div>
      </div>
    );
  };
  
  export default Select;
  