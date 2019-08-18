import React from "react";

import T1 from "./T1";
import T2 from "./T2";
import T3 from "./T3";
import T4 from "./T4";

const aws = "45, 100";

const chavaliTools = () => (
  <>
    <T1 />
    <hr />
    <T2 />
    <hr />
    <T3 />
    <hr />
    <T4 />
    {/* <div className="flex-wrapper">
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart orange">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="80, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            80%
          </text>
        </svg>
      </div>
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart green">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="70, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            70%
          </text>
        </svg>
      </div>
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart blue">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="50, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            50%
          </text>
        </svg>
      </div>
      <div className="single-chart">
        <svg
          viewBox="0 0 36 36"
          className="circular-chart blue"
          id="circular-chart blue"
        >
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray={aws}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            45%
          </text>
        </svg>
      </div>
    </div> */}
  </>
);

export default chavaliTools;
