import Page from "../components/page.tsx";
import Main from "../shared/main.tsx";
import Side from "../shared/side.tsx";
import { define } from "../utils.ts";

export default define.page(function Aside() {
  return (
    <Page>
      <Side variant="normal" as="aside" />
      <Main variant="shrink" as="a" href="/" />
    </Page>
  );
});
