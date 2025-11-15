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
        <span class="header inline-block vt-name-[music]">Music</span>
      </Heading>
      <Heading interactive={interactive} href="/videos">
        <span class="inline-block vt-name-[videos]">Videos</span>
      </Heading>
      <Heading interactive={interactive} href="/pictures">
        <span class="inline-block vt-name-[pictures]">Pictures</span>
      </Heading>
      <Heading interactive={interactive} href="/radio">
        <span class="inline-block vt-name-[radio]">Radio</span>
      </Heading>
      <Heading interactive={interactive} href="/marketplace">
        <span class="inline-block vt-name-[marketplace]">Marketplace</span>
      </Heading>
      <Heading interactive={interactive} href="/social">
        <span class="inline-block vt-name-[social]">Social</span>
      </Heading>
      <Heading interactive={interactive} href="/podcasts">
        <span class="inline-block vt-name-[podcasts]">Podcasts</span>
      </Heading>
      <Heading interactive={interactive} href="/internet">
        <span class="inline-block vt-name-[internet]">Internet</span>
      </Heading>
      <Heading interactive={interactive} href="/settings">
        <span class="inline-block vt-name-[settings]">Settings</span>
      </Heading>
    </Wrapper>
  );
}
