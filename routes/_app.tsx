import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2b2b2d" />
        <meta name="description" content="MDL Web Application" />

        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.svg" />

        <title>mdl</title>
      </head>
      <body class="h-dvh overflow-auto bg-primary">
        <Component />
      </body>
    </html>
  );
});
