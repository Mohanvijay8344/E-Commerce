import React from "react";
import "./DescriptionBox.css";

function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="decription-box-nav-box">Description</div>
        <div className="decription-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        eCommerce websites have become an integral part of any business's
        success. The increase in online sales during the pandemic saw business
        owners moving from physical storefronts to digital solutions to sell
        online, helping to expand their reach and increase revenue.
      </div>
    </div>
  );
}

export default DescriptionBox;
