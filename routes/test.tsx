import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Test() {
  return (
    <div>
      <Head>
        <title>MDL</title>
      </Head>
      <a href="/">Home</a>
      <p>Hello World</p>
    </div>
  );
});
