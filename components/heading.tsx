import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const headingVariants = cva("text-heading font-light font-display", {
  variants: {
    variant: {
      h1: "text-4xl lowercase",
      h2: "text-3xl text-medium",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

export function Heading({ variant = "h1", ...props }: HeadingProps) {
  const Comp = variant ?? "h1";

  return (
    <Comp
      {...props}
      class={cn(headingVariants({ variant, className: props.class }))}
    />
  );
}
