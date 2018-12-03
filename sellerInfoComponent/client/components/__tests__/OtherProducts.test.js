import React from "react";
import { shallow, mount } from "enzyme";
import OtherProducts from "../OtherProducts";

describe("OtherProducts", () => {
  it("call componentDidMount on mount", () => {
    const componentDidMountSpy = jest.spyOn(
      OtherProducts.prototype,
      "componentDidMount"
    );
    const otherProductsWrapper = mount(<OtherProducts />);
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    otherProductsWrapper.unmount();
  });
});
