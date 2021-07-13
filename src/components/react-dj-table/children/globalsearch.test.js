import GlobalSearch from "./globalsearch";
import data from "../../../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const state = {
  json: data,
  jsonCopy: data,
  options: {},
};

const div = document.createElement("div");
document.body.appendChild(div);

test("renders global search", async () => {
  const { container } = render(<GlobalSearch state={state} />, {
    container: div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div><input placeholder=\\" search 11 records\\" type=\\"text\\" value=\\"\\"></div>"`
  ); /* ... gets filled automatically by jest ... */
});
