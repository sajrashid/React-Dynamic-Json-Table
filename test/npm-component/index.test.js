import Table from "./index";
import data from "../../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const div = document.createElement("DIV");
document.body.appendChild(div);

test("renders Pager", async () => {
  const { container } = render(<Table json={data} />, {
    container: div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
 ); /* ... gets filled automatically by jest ... */
});
