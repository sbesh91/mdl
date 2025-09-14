import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <title>MDL</title>
      </Head>
      <p>Hello World</p>
    </div>
  );
});
