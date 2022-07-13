import React from 'react';
import {act, render, fireEvent} from "@testing-library/react";
import Overview from "./Overview.jsx";


describe("Product Details Component", () => {
  it("rendered components", () => {
    const { getByTestId } = render(<Overview />)
    const productName = getByTestId("productDetails")
    expect(productName).toBeTruthy()
  })
})