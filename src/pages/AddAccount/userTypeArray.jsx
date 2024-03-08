import { Select } from "antd";

export const usertypeArray = {
    0: [
        <Select.Option value={''} key="empty">
           - Select Your A/c. Type -
        </Select.Option>,
        <Select.Option value={1} key="0">
            Master
        </Select.Option>,
        <Select.Option value={2} key="1">
            Client
        </Select.Option>
    ],
    1: [
        <Select.Option value={''} key="empty">
            - Select Your A/c. Type -
        </Select.Option>,
        <Select.Option value={1} key="2">
            Agent
        </Select.Option>,
        <Select.Option value={2} key="3">
            Client
        </Select.Option>
    ],
    2: [
        <Select.Option value={''} key="empty">
           - Select Your A/c. Type -
        </Select.Option>,
        <Select.Option value={2} key="4">
            Client
        </Select.Option>
    ],
    4: [
        <Select.Option value={''} key="empty">
           - Select Your A/c. Type -
        </Select.Option>,
        <Select.Option value={4} key="5">
           Master
        </Select.Option>,
        <Select.Option value={3} key="4">
            Agent
        </Select.Option>,
        <Select.Option value={2} key="3">
            User
        </Select.Option>
    ],
    5: [
        <Select.Option value={''} key="empty">
            - Select Your A/c. Type -
        </Select.Option>,
        <Select.Option value={1} key="6">
            Super Master
        </Select.Option>,
        <Select.Option value={2} key="7">
            Client
        </Select.Option>
    ],
};