interface ButtonProps {
    title: string;
    redirectTo: string;
    isPrimary: boolean;
  }
  
  const Button = ({ title, redirectTo, isPrimary }: ButtonProps) => {
    return (
      <a href={redirectTo}>
        <div
          className={`px-4 py-2 rounded-[10px] text-white font-nunito w-max ${
            isPrimary ? 'bg-secondary border-[1px] border-[#E6B345]' : 'border-[1px]'
          }`}
        >
          {title}
        </div>
      </a>
    );
  };
  
  export default Button;
  