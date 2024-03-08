import { Col, Form, Input, Row } from "antd";

const MinMaxBet = () => {
  return (
    <Row className="m-t-20 commission">
      <Col xs={24} lg={24}>
        <h4 className="m-b-20 col-md-12">Min Max Bet</h4>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th />
              <th>
                <input
                  type="hidden"
                  name="minmaxGamename[0]"
                  defaultValue="Cricket"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>Min Bet</td>
              <td>100</td>
            </tr>
            <tr>
              <td>
                <Form.Item
                  name="minbet"
                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input min!",
                  //     },
                  //   ]}
                  defaultValue={100}>
                  <Input
                    id="minbet"
                    className="minbet"
                    type="number"
                    value={100}
                    placeholder={100}
                    defaultValue={100}
                    max={5000000}
                    min={100}
                  />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>Max Bet</td>
              <td>5000000</td>
            </tr>
            <tr>
              <td>
                <Form.Item
                  name="maxbet"
                  defaultValue={5000000}

                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input max!",
                  //     },
                  //   ]}
                >
                  <Input
                    id="maxbet"
                    className="maxbet"
                    type="number"
                    value={5000000}
                    placeholder={5000000}
                    defaultValue={5000000}
                    max={5000000}
                    min={100}
                  />
                </Form.Item>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>Delay</td>
              <td>5.00</td>
            </tr>
            <tr>
              <td>
                <Form.Item
                  name="maxbet"
                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input max!",
                  //     },
                  //   ]}
                >
                  <Input
                    id="delay"
                    className="delay"
                    type="number"
                    value={5.0}
                    placeholder={5.0}
                    defaultValue={5.0}
                    min={5.0}
                  />
                </Form.Item>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default MinMaxBet;
