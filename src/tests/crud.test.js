import Crud from "../components/react-dj-table/children/crud";
import data from "../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const crudBtns = {
  btnCancel: true,
  btnUpdate: true,
  btnCreate: false,
  btnInsert: true,
  btnDelete: true,
};
const state = {
  json: data,
  crudBtns: crudBtns,
};

const div = document.createElement("div");
document.body.appendChild(div);

test("renders Thead", async () => {
  const { container } = render(<Crud state={state} />, {
    container: div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"crudDiv\\"><button name=\\"cancel\\" disabled=\\"\\">cancel</button><button name=\\"update\\" disabled=\\"\\">update</button><button name=\\"delete\\" disabled=\\"\\">delete</button></div>"`
  ); /* ... gets filled automatically by jest ... */
});
