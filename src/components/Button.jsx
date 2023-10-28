import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  const newClassName = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={newClassName} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={newClassName } {...props}>
      {inner}
    </button>
  );
};

export default Button;
