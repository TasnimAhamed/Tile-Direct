const Button = ({ text, className }: any) => {
  return (
    <button
      className={`bg-black text-white font-primary font-bold text-sm ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
