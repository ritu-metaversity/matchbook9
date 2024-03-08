import { Col, Row } from "antd";
import "./style.scss";

const CommissionSettings = () => {
  const renderTableRow = (label) => (
    <tr>
      <td>{label}</td>
      <td id="taxcommition0-upline">0</td>
    </tr>
  );

  return (
    <Row className="m-t-20 commission">
      <Col xs={24} lg={24}>
        <h4 className="m-b-20 ">Commission Settings</h4>
        <table className="table table-striped table-bordered">
          <tbody>
            {renderTableRow("Upline")}
            <tr>
              <td>Downline</td>
              <td>
                <input
                  name="commission[]"
                  className="tdcommission"
                  id="taxcommition0"
                  placeholder={0}
                  defaultValue=""
                  type="number"
                  required="required"
                  max={0}
                  min={0}
                  disabled
                />
                <span className="error" />
              </td>
            </tr>
            {renderTableRow("Our")}
          </tbody>
        </table>
      </Col>

      <Col xs={24} lg={24}>
        <h4 className="m-b-20 col-md-12">Partnership</h4>
        <table className="table table-striped table-bordered">
          <tbody>
            {renderTableRow("Upline")}
            <tr>
              <td>Downline</td>
              <td>
                <input
                  name="commission[]"
                  className="tdcommission"
                  id="tdpartnership"
                  placeholder={0}
                  defaultValue=""
                  type="number"
                  required="required"
                  max={0}
                  min={0}
                  disabled
                />
                <span className="error" />
              </td>
            </tr>
            {renderTableRow("Our")}
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default CommissionSettings;
