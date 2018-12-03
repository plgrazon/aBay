import React from "react";
import { render } from "react-dom";
import SellerInfo from "./components/SellerInfo.jsx";
import OtherProducts from "./components/OtherProducts.jsx";

render(<SellerInfo />, document.getElementById("seller-info"));
render(<OtherProducts />, document.getElementById("other-products"));
