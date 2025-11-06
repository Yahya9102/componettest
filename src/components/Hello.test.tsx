
import { describe, it,expect } from "vitest";
import { render } from "@testing-library/react";
import Hello from "./Hello";


describe("Render hello component", () => {  
    it("should render Hello", () => {

    const {getByText} = render(<Hello />);
    
      
    expect(getByText("Hello, world!")).toBeInTheDocument();
  });
});


