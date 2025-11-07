import { asset, Head } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function Home() {
  return (
    <div>
      <Head>
        <title>MDL</title>
      </Head>
      <a href="/test">Test</a>
      <p>Hello World</p>
      <img src={asset("/logo.svg")} alt="Logo" width="100" height="100" />
    </div>
  );
});
