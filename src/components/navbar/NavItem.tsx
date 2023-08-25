import Link from "next/link";

interface Props {
  isLink?: Boolean;
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavItem({
  isLink = false,
  href = "",
  className = "",
  children,
  onClick = () => {},
}: Props) {
  const classNames = `relative link text-[1.1rem]
    visited:bg-secondary-black hover:bg-secondary-black focus:bg-secondary-black
    color-white items-center flex grow-0 shrink-0 leading-normal px-3 py-2
    before:content-[""] before:absolute before:block before:w-full before:h-[2px] 
        before:bottom-0 before:left-0 before:bg-primary-blue
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out before:duration-300 cursor-pointer ${className}`;

  return (
    <>
      {isLink ? (
        <Link href={href} data-url={href} className={classNames}>
          {children}
        </Link>
      ) : (
        <div className={classNames} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
}
