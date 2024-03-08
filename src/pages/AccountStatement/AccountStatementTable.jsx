/* eslint-disable react/prop-types */
import './AccTable.scss'
const AccountStatementTable = ({ isLoading, columns }) => {
  return (
    <>
      <table
        id="example"
        className="table table-striped table-bordered datatable dataTable no-footer"
        style={{ width: "100%" }}
        role="grid"
        aria-describedby="example_info">
        <thead>
          <tr role="row">
            <th
              width="10%"
              className="sorting_asc"
              rowSpan={1}
              colSpan={1}
              aria-label="Date"
              style={{ width: "130.797px" }}>
              Date
            </th>
            <th
              width="10%"
              className="sorting_disabled"
              rowSpan={1}
              colSpan={1}
              aria-label="Credit"
              style={{ width: "130.797px" }}>
              Credit
            </th>
            <th
              width="10%"
              className="sorting_disabled"
              rowSpan={1}
              colSpan={1}
              aria-label="Debit"
              style={{ width: "130.797px" }}>
              Debit
            </th>
            <th
              width="10%"
              className="sorting_disabled"
              rowSpan={1}
              colSpan={1}
              aria-label="Closing"
              style={{ width: "130.797px" }}>
              Closing
            </th>
            <th
              className="sorting_disabled"
              rowSpan={1}
              colSpan={1}
              aria-label="Description"
              style={{ width: "616.617px" }}>
              Description
            </th>
            <th
              width="15%"
              className="sorting_disabled"
              rowSpan={1}
              colSpan={1}
              aria-label="Fromto"
              style={{ width: "200.195px" }}>
              Fromto
            </th>
          </tr>
        </thead>
        <tbody>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-04-01</td>
            <td className="text-right" />
            <td className="text-right" />
            <td className="text-right"> 0.00</td>
            <td>Opening</td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.33964916">
                aaa/Opening/aaa-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.78495953">
                AB20/Opening/AB20-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.24410532">
                abj/Opening/abj-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.44374695">
                btable/Opening/btable-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.65423650">
                cmeter/Opening/cmeter-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.77695330">
                Cricket/Opening/Cricket-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.42150574">
                Cricket/Opening/Cricket-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.68356426">
                Cricket/Opening/Cricket-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.59013277">
                dt20/Opening/dt20-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.4230058">
                dt202/Opening/dt202-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.77635701">
                dtl20/Opening/dtl20-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.15189598">
                Lucky7/Opening/Lucky7-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.73286277">
                Lucky7eu/Opening/Lucky7eu-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.21692391">
                superover/Opening/superover-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.28460173">
                superover/Opening/superover-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.8376478">
                TEEN/Opening/TEEN-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.74123219">
                TEEN20/Opening/TEEN20-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00</td>
            <td>
              <a href="javascript:;" data-marketid="1.80695454">
                TEEN8/Opening/TEEN8-0
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-09-26</td>
            <td className="text-right"> 3039.06 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 3039.06</td>
            <td>
              <a href="javascript:;" data-marketid="1.24778575">
               `//-`
              </a>
            </td>
            <td> </td>
          </tr>
          <tr role="row" className="odd">
            <td className="sorting_1">2023-11-16</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> -1000.00 </td>
            <td className="text-right"> 2039.06</td>
            <td>wdew</td>
            <td> Zmango100/Acvgs</td>
          </tr>
          <tr role="row" className="even">
            <td className="sorting_1">2023-11-17</td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 0.00 </td>
            <td className="text-right"> 2039.06</td>
            <td>
              <a href="javascript:;" data-marketid="1.221254814.1">
                Cricket/6 over runs MS W(MS W vs HH W)adv/Fancy-39
              </a>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AccountStatementTable;
