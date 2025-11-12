import { Heading } from "../components/heading.tsx";
import Page from "../components/page.tsx";
import { define } from "../utils.ts";

export default define.page(function Music() {
  return (
    <Page>
      <Heading interactive variant="h1" href="/" class="-translate-y-8">
        <span class="inline-block vt-name-[header]">Music</span>
      </Heading>
    </Page>
  );
});
