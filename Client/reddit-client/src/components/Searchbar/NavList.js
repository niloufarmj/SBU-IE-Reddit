import React from "react";
import avatar from "../../assets/media/avatar.jpg";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";

const NavList = (params) => {
  const user = params.user;

  return (
    <>
      <ul className="navbar-nav flex-row d-none d-md-flex">
        <li className="nav-item me-3 me-lg-1 mt-2">
          <Link
            className="nav-link"
            to={{
              pathname: "/userSettings",
              state: { user: user },
            }}
          >
            {"user settings "}
            <span>
              <i className="fas fa-cog fa-lg"></i>
            </span>
          </Link>
        </li>

        <li className="mt-2">
          <BootstrapSwitchButton
            checked={true}
            width={75}
            onstyle="dark"
            onlabel="Night"
            offlabel="Light"
          />
        </li>

        <li className="nav-item me-3 me-lg-1">
          <Link
            className="nav-link d-sm-flex align-items-sm-center"
            to={{
              pathname: "/user",
              state: { user: user },
            }}
          >
            <img src={avatar} className="rounded" height="40" alt="avatar" />
            <strong className="d-none d-sm-block ms-1">
              {!!user ? user.username : "john"}
            </strong>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
