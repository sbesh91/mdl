import { cva, VariantProps } from "class-variance-authority";
import { Heading } from "../components/heading.tsx";
import { AnchorHTMLAttributes, HTMLAttributes } from "preact";
import { cn } from "../helpers/cn.ts";

const mainVariants = cva("grid gap-4 origin-top-right vt-name-[main]", {
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

type Props = (AnchorProps | MainProps) & VariantProps<typeof mainVariants>;

export default function Main({ as, ...props }: Props) {
  // deno-lint-ignore no-explicit-any
  const Wrapper = as as any;
  const interactive = props.variant !== "shrink";

  return (
    <Wrapper
      {...props}
      id="main"
      class={cn(mainVariants({ variant: props.variant, class: props.class }))}
    >
      <Heading interactive={interactive} href="/music">
        <span class="inline-block vt-name-[header]">Music</span>
      </Heading>
      <Heading interactive={interactive} href="/videos">
        Videos
      </Heading>
      <Heading interactive={interactive} href="/pictures">
        Pictures
      </Heading>
      <Heading interactive={interactive} href="/radio">
        Radio
      </Heading>
      <Heading interactive={interactive} href="/marketplace">
        Marketplace
      </Heading>
      <Heading interactive={interactive} href="/social">
        Social
      </Heading>
      <Heading interactive={interactive} href="/podcasts">
        Podcasts
      </Heading>
      <Heading interactive={interactive} href="/internet">
        Internet
      </Heading>
      <Heading interactive={interactive} href="/settings">
        Settings
      </Heading>
    </Wrapper>
  );
}
