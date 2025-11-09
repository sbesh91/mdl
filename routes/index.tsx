import { define } from "../utils.ts";
import Page from "../components/page.tsx";
import Side from "../shared/side.tsx";
import Main from "../shared/main.tsx";

export default define.page(function Home() {
  return (
    <Page>
      <Side as="a" href="/aside" />
      <Main as="main" />
    </Page>
  );
});
