import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111113]",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#3E8EFF] via-[#FE6CBB] to-[#A06AFE] text-white",
        outline: "border-gradient",
        ghost: "bg-transparent text-white/90 hover:text-white hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export function Button({ className, variant, size, asChild, ...props }) {
  const Comp = asChild ? "span" : "button";
  const classes = twMerge(clsx(buttonVariants({ variant, size }), className));
  if (variant === "outline") {
    return (
      <Comp className={twMerge("rounded-lg p-[1px] shadow-glow", className)} {...props}>
        <span className="block rounded-lg bg-[#111113] px-4 py-2">{props.children}</span>
      </Comp>
    );
  }
  return <Comp className={classes} {...props} />;
}
