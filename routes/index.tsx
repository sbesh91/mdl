import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <>
      <Head>
        <title>MDL</title>
      </Head>

      {/* Fixed gradient background */}
      <div class="gradient-blur fixed inset-0 z-0" />

      {/* Content */}
      <div class="relative min-h-screen bg-primary">
        <p class="text-foil">Hello World</p>
      </div>
    </>
  );
});
