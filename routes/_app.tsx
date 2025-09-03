import { Partial } from "fresh/runtime";
import { define } from "../utils.ts";
import { Link } from "../components/Link.tsx";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mdl</title>
      </head>
      <body f-client-nav>
        <Link href="/test">Test</Link>
        <Link href="/">Home</Link>
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
});
