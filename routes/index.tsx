import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import { page } from "fresh";

interface Props {
  message: string;
}

export const handler = define.handlers<Props>({
  GET() {
    return page({ message: "hello world" });
  },
});

export default define.page<typeof handler>(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="body px-4 py-8 mx-auto fresh-gradient">
      <Head>
        <title>Fresh counter</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to {ctx.data.message}</h1>
        <p class="my-4">
          Try updating this message in the {ctx.data.message}
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <strong>hello world</strong>
        <br />
        <Counter count={count} />
      </div>
    </div>
  );
});
