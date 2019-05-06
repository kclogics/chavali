import React from "react";

class JavascriptDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };
  }
  render() {
    return (
      <form>
        <h2>Javascript Stack</h2>
        <h3>Add Library</h3>
      </form>
    );
  }
}

const T1 = () => (
  <div>
    <h1>Javascript</h1>
    <div className="flex-wrapper">
      <div className="single-chart">
        <svg viewBox="0 0 36 36" className="circular-chart yellow">
          <path
            className="circle-bg"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="40, 100"
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">
            80%
          </text>
        </svg>
      </div>
    </div>
  </div>
);
export default T1;
