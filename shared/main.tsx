import { cva, VariantProps } from "class-variance-authority";
import { Heading } from "../components/heading.tsx";
import { AnchorHTMLAttributes, HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const sideVariants = cva("grid gap-4 origin-top-right", {
  variants: {
    variant: {
      normal: "py-10 ms-20 z-10 relative",
      shrink: "fixed top-0 right-0 translate-y-38 scale-35 z-0",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

type AnchorProps = {
  as: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;
type MainProps = {
  as: "main";
} & HTMLAttributes<HTMLElement>;

type Props = (AnchorProps | MainProps) & VariantProps<typeof sideVariants>;

export default function Main({ as, ...props }: Props) {
  // deno-lint-ignore no-explicit-any
  const Wrapper = as as any;

  return (
    <Wrapper
      {...props}
      id="main"
      class={cn(sideVariants({ variant: props.variant, class: props.class }))}
    >
      <Heading>Music</Heading>
      <Heading>Videos</Heading>
      <Heading>Pictures</Heading>
      <Heading>Radio</Heading>
      <Heading>Marketplace</Heading>
      <Heading>Social</Heading>
      <Heading>Podcasts</Heading>
      <Heading>Internet</Heading>
      <Heading>Settings</Heading>
    </Wrapper>
  );
}
