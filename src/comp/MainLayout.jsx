import { useState } from "react";
import { Layout, Drawer } from "antd";
import { Outlet, useLocation } from "react-router";
import NavBar from "./layout/NavBar/NavBar";
import SiderComp from "./layout/NavBar/SiderComp";
import { Content } from "antd/es/layout/layout";
import './common.scss'
import { Helmet } from "react-helmet";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { pathname } = useLocation();

  const onClose = () => {
    setCollapsed(false);
  };
  document.title = window.location.hostname.split(".")[1];
  const [Loca, setLoc] = useState(true);





  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content={Loca ? "width=1440" : "width=device-width, initial-scale=1.0"}
        />
      </Helmet>
      <Layout className="main-layout">
        <NavBar setCollapsed={setCollapsed} collapsed={collapsed} />
        <Layout>
          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            open={collapsed}
            key="1"
            className={
              pathname === "/list-clients"
                ? "match_drawer-comp"
                : "antd-drawer-comp"
            }
            width={300}>
            <SiderComp
              onClose={onClose}
              toggleCollapsed={collapsed}
              setToggleCollapsed={setCollapsed}
            />
          </Drawer>

          <Content className="content-comp logo_cont">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>

    // </div>
  );
};

export default MainLayout;
