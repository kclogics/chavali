import React from "react";

var hello =
  "https://api.whatsapp.com/send?phone=+918500700886&text=Hi," +
  "This is krish you can ping me anytime ;)";
var maploc =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15275.937195587363!2d81.520293!3d16.827135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ed385ce82ee6a74!2skrishna+chavali!5e0!3m2!1sen!2sin!4v1526169870090";
const Social = () => (
  <div>
    <h1>Social</h1>

    <p id="connectsocial">
      Are you still here :D Then checkout{" "}
      <a id="bofice" href="http://www.bofice.com/">
        bofice.com
      </a>{" "}
      , you will like all the funkiness.
    </p>
    <p>
      <a id="connectsocial">
        May be you wanna hangout with me and i will make sure that you have a
        lovely time :) &nbsp;
      </a>
    </p>
    <iframe src={maploc} width="100%" height="260px" frameBorder="0" />
  </div>
);
export default Social;
