import { Links, Meta, Scripts } from "@remix-run/react";
import LayOut from "../src/widgets/LayOut";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="data:image/x-icon;base54,AA" />
        <title>세상의 모든 인터넷 툴, 툴모아</title>
        <Meta />
        <Links />
      </head>
      <body>
        <LayOut />
        <Scripts />
      </body>
    </html>
  );
}
