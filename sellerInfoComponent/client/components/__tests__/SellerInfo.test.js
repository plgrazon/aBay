import React from "react";
import { shallow, mount } from "enzyme";
import SellerInfo from "../SellerInfo";

describe("SellerInfo", () => {
  it("calls componentDidMount on mount", () => {
    const componentDidMountSpy = jest.spyOn(
      SellerInfo.prototype,
      "componentDidMount"
    );
    const sellerInfoWrapper = mount(<SellerInfo />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    sellerInfoWrapper.unmount();
  });
  it("calls sellerRatings and sellers on componentDidMount", () => {
    const sellerRatingsSpy = jest.spyOn(SellerInfo.prototype, "sellerRatings");
    const sellersSpy = jest.spyOn(SellerInfo.prototype, "sellers");
    const sellerInfoWrapper = mount(<SellerInfo />);
    expect(sellerRatingsSpy).toHaveBeenCalledTimes(1);
    expect(sellersSpy).toHaveBeenCalledTimes(1);
    sellerInfoWrapper.unmount();
  });
});
