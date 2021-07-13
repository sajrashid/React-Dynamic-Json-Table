import Pager from "./pager";
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

const div = document.createElement("div");
document.body.appendChild(div);

test("renders Pager", async () => {
  const { container } = render(<Pager state={state} />, {
    container:div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<button data-content=\\"first\\" id=\\"first\\">‹</button><button data-content=\\"previous\\" id=\\"previous\\">«</button><button data-content=\\"next\\" disabled=\\"\\" id=\\"next\\">»</button><button data-content=\\"last\\" disabled=\\"\\" id=\\"last\\">›</button>
    <div>Go to page<input data-content=\\"page no\\" type=\\"number\\" value=\\"\\"></div>
    <div class=\\"numberOfPages\\">&nbsp;of&nbsp;&nbsp;pages</div>
    <div><select data-content=\\"items per page\\" type=\\"number\\" max=\\"10000\\">
        <option value=\\"10\\">Show 10</option>
      </select></div>"
  `); /* ... gets filled automatically by jest ... */
});
