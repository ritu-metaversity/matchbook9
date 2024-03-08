/* eslint-disable react/prop-types */
import { Drawer, Dropdown } from "antd";
import './Style.scss'
import { Link, useLocation } from "react-router-dom";
import { CaretDownOutlined } from '@ant-design/icons';
import { items, reports, user } from "./MenuItems";
import { FaSearchPlus } from "react-icons/fa";
import DropHeader from "../DropHeader/DropHeader";


const NavBar = ({setCollapsed, collapsed}) => {

  const handelMenu = () => {
    setCollapsed(!collapsed)
  }
  const { pathname } = useLocation();

  return (
    <>
      <Drawer
        // title="Basic Drawer"
        placement="left"
        // onClose={onClose}
        // open={open}
        className="left-drawer">
        {/* <MenuSider /> */}
      </Drawer>
      <header>
        <div className="header-bottom">
          <div>
            <Link to="/list-clients" className="logo">
              <img src="https://dzm0kbaskt4pv.cloudfront.net/v12/static/themes/matchbox9.com/admin/logo.png" alt=""/>
            </Link>
            <div onClick={handelMenu} className={`${collapsed ? "change" : null} side-menu-button`}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <nav className="navbar navbar-expand-md btco-hover-menu">
              <div className="collapse navbar-collapse">
                <ul className="list-unstyled navbar-nav">
                  <li className="nav-item">
                    <Link to="/active-users">
                      List of clients
                    </Link>
                  </li>
                  <li className="nav-item" id="election-menu" style={{ display: "none" }}></li>
                  <li className="nav-item" id="ipl-menu" style={{ display: "none" }}></li>
                  <li className="nav-item">
                    <Link to="/market-analysis">
                      Market Analysis
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Dropdown menu={{ items }} >
                      <Link to="#livemarket" onClick={(e) => e.preventDefault()}>
                        Live Market
                        <CaretDownOutlined />
                      </Link>
                    </Dropdown>
                  </li>
                  <li className="nav-item dropdown">
                    <Dropdown menu={{ items: reports }}>
                      <Link to="#Report" onClick={(e) => e.preventDefault()}>
                        Reports
                        <CaretDownOutlined />
                      </Link>
                    </Dropdown>
                  </li>
                </ul>

              </div>

            </nav>
            <ul className="user-search list-unstyled">
              <li className="username dropdown">
                <Dropdown menu={{ items:user }} trigger={['click']}>
                  <Link to="#user" onClick={(e) => e.preventDefault()}>
                    {localStorage.getItem("userId")}
                    <CaretDownOutlined />
                  </Link>
                </Dropdown>
              </li>
              <li className="search1">
                <input id="tags" type="text" name="list" placeholder="All Client" className="ui-autocomplete-input" autoComplete="off" />
                <Link to="/" >
                  <FaSearchPlus />
                </Link>

              </li>

            </ul>
          </div>

        </div>
      </header>
      {pathname === "/list-clients" && <DropHeader />}
    </>
  );
};

export default NavBar;
