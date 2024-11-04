import Link from 'next/link';

interface ButtonProps {
  title: string;
  redirectTo: string;
  isPrimary: boolean;
}

const Button = ({ title, redirectTo, isPrimary }: ButtonProps) => {
  return (
    <Link href={redirectTo}>
      <div
        className={`px-4 py-2 rounded-[10px] text-white font-nunito w-max ${
          isPrimary
            ? 'bg-secondary border-[1px] border-[#E6B345] hover:bg-tertiary hover:text-[#fff] hover:border-[#fff] transition-all'
            : 'border-[1px] hover:bg-tertiary'
        }`}
      >
        {title}
      </div>
    </Link>
  );
};

export default Button;
