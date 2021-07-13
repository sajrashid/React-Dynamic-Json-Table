import GlobalSearch from "./globalsearch";
import data from "../../../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const pagerIcons = {
  first: "&lsaquo;",
  previous: "&laquo;",
  next: "&raquo",
  last: "&rsaquo;",
};
const state = {
  json: data,
  jsonCopy: data,
  pagerIcons: pagerIcons,
  options: {},
};

const table = document.createElement("table");
const tbody = document.createElement("tbody");
document.body.appendChild(table);

test("renders Pager", async () => {
  const { container } = render(<GlobalSearch state={state} />, {
    container: table.appendChild(tbody),
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span><input placeholder=\\" search 11 records\\" type=\\"text\\" value=\\"\\"></span>"`
  ); /* ... gets filled automatically by jest ... */
});
