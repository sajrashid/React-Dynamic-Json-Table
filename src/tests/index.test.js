import Table from "../components/react-dj-table/index";
import data from "../data.json";
import pretty from "pretty";
import { render } from "@testing-library/react";

const options = {
  iconCols: [{ name: '<i class="envelope icon"></i>Email' }],
  labelCols: [{ name: "NAME" }],
  hiddelCols: ["id"],
  dateCols: [{ RetiredDate: "en-GB" }],
  pageable: true,
  searchable: true,
  sortable: true,
  dateOptions: {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  },
  // eslint-disable-next-line no-template-curly-in-string
  customCols: [
    {
      Avatar:
        // eslint-disable-next-line no-template-curly-in-string
        '<div style="min-height:3em"><img  style="width:60px; height:60px"  decoding="async" src=${Avatar}></img></div',
    },
  ], //adding min height reduces loading flash as image cells are not resized vertically
};

const div = document.createElement("DIV");
document.body.appendChild(div);
test("renders Pager", async () => {
  const { container } = render(<Table json={data} options={options} />, {
    container: div,
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<table class=\\" \\">
      <thead>
        <tr>
          <td colspan=\\"8\\" class=\\"\\">
            <div><input name=\\"globalSearch\\" placeholder=\\" search 11 records\\" type=\\"text\\" value=\\"\\"></div>
          </td>
        </tr>
        <tr>
          <th class=\\" \\" id=\\"id\\">id</th>
          <th class=\\" \\" id=\\"sold\\">sold</th>
          <th class=\\" \\" id=\\"Manufacturer\\">Manufacturer</th>
          <th class=\\" \\" id=\\"Model\\">Model</th>
          <th class=\\" \\" id=\\"Year\\">Year</th>
          <th class=\\" \\" id=\\"Cost\\">Cost</th>
          <th class=\\" \\" id=\\"CreditCards\\">CreditCards</th>
          <th class=\\" \\" id=\\"PurchaseDate\\">PurchaseDate</th>
        </tr>
      </thead>
      <tbody>
        <tr class=\\"\\" id=\\"1\\">
          <td class=\\" \\">1</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Aston Martin</td>
          <td class=\\" \\">Vantage</td>
          <td class=\\" \\">2009</td>
          <td class=\\" \\">$7774.28</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"2\\">
          <td class=\\" \\">2</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Maybach</td>
          <td class=\\" \\">62</td>
          <td class=\\" \\">2007</td>
          <td class=\\" \\">$9729.34</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"3\\">
          <td class=\\" \\">3</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Dodge</td>
          <td class=\\" \\">Caravan</td>
          <td class=\\" \\">2005</td>
          <td class=\\" \\">$1218.90</td>
          <td class=\\" \\">maestro</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"4\\">
          <td class=\\" \\">4</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Nissan</td>
          <td class=\\" \\">Titan</td>
          <td class=\\" \\">2004</td>
          <td class=\\" \\">$1075.62</td>
          <td class=\\" \\">visa</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"5\\">
          <td class=\\" \\">5</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Land Rover</td>
          <td class=\\" \\">Defender</td>
          <td class=\\" \\">1997</td>
          <td class=\\" \\">$5430.04</td>
          <td class=\\" \\">visa-electron</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"6\\">
          <td class=\\" \\">6</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\" checked=\\"\\"></td>
          <td class=\\" \\">Ford</td>
          <td class=\\" \\">Thunderbird</td>
          <td class=\\" \\">1986</td>
          <td class=\\" \\">$4588.51</td>
          <td class=\\" \\">diners-club-carte-blanche</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"7\\">
          <td class=\\" \\">7</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">GMC</td>
          <td class=\\" \\">Yukon</td>
          <td class=\\" \\">2003</td>
          <td class=\\" \\">$4278.83</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"8\\">
          <td class=\\" \\">8</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Toyota</td>
          <td class=\\" \\">Prius c</td>
          <td class=\\" \\">2012</td>
          <td class=\\" \\">$5038.96</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"9\\">
          <td class=\\" \\">9</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Chevrolet</td>
          <td class=\\" \\">Express 2500</td>
          <td class=\\" \\">2010</td>
          <td class=\\" \\">$4776.16</td>
          <td class=\\" \\">china-unionpay</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
        <tr class=\\"\\" id=\\"10\\">
          <td class=\\" \\">10</td>
          <td class=\\" \\"> <input readonly=\\"\\" type=\\"checkbox\\"></td>
          <td class=\\" \\">Mercury</td>
          <td class=\\" \\">Cougar</td>
          <td class=\\" \\">1969</td>
          <td class=\\" \\">$8667.00</td>
          <td class=\\" \\">jcb</td>
          <td class=\\" \\">2019-01-26T14:00:49Z</td>
        </tr>
      </tbody>
    </table>
    <div colspan=\\"8\\">
      <div class=\\"\\"><button data-content=\\"first\\" disabled=\\"\\" id=\\"first\\">‹</button><button data-content=\\"previous\\" disabled=\\"\\" id=\\"previous\\">«</button><button data-content=\\"next\\" id=\\"next\\">»</button><button data-content=\\"last\\" id=\\"last\\">›</button>
        <div>Go to page<input data-content=\\"page no\\" type=\\"number\\" value=\\"1\\"></div>
        <div class=\\"numberOfPages\\">1&nbsp;of&nbsp;10&nbsp;pages</div>
        <div><select data-content=\\"items per page\\" type=\\"number\\" max=\\"10000\\">
            <option value=\\"10\\">Show 10</option>
          </select></div>
      </div>
    </div>"
  `); /* ... gets filled automatically by jest ... */
});
