import Link from "next/link";
import React from "react";

function Topbar() {
  return (
    <div className="topbar d-xl-flex d-none">
      <div className="container-lg container-fluid d-flex justify-content-between align-items-center">
        <div className="topbar-left">
          <ul className="topbar-info-list">
            <li>
              <i className="bi bi-clock" />
              Opening Hours: 8am - 6pm
            </li>
            <li>
              <i className="bi bi-geo-alt" />
              2464 Royal Ln. Mesa New
            </li>
          </ul>
        </div>
        <div className="topbar-right">
          <ul className="topbar-right-list">
            <li>
              <span>Language</span>{" "}
              <img src="assets/images/icons/flag-eng.png" alt="image" />
              <ul className="topbar-sublist">
                <li>
                  <span>Germeny</span>{" "}
                  <img src="assets/images/icons/flag-germeny.svg" alt="image" />
                </li>
                <li>
                  <span>French</span>{" "}
                  <img src="assets/images/icons/flag-french.svg" alt="image" />
                </li>
                <li>
                  <span>Bengali</span>{" "}
                  <img src="assets/images/icons/flag-bangla.svg" alt="image" />
                </li>
              </ul>
            </li>
            <li>
              Register/Login
              <ul className="topbar-sublist">
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="register">
                    <a>Register</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
