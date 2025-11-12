import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const headingVariants = cva(
  "text-heading font-light font-display origin-top-left",
  {
    variants: {
      variant: {
        h1: "text-7xl lowercase text-medium-foil",
        h2: "text-4xl lowercase",
        h3: "text-3xl text-medium",
        h4: "text-2xl",
        h5: "text-xl",
        h6: "text-lg",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  },
);

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    href?: string;
    interactive?: boolean;
  };

export function Heading({
  variant = "h2",
  href,
  interactive,
  ...props
}: HeadingProps) {
  const Comp = variant ?? "h2";

  const instance = (
    <Comp
      {...props}
      class={cn(headingVariants({ variant, className: props.class }))}
    />
  );

  if (interactive) {
    return <a href={href}>{instance}</a>;
  }

  return instance;
}
