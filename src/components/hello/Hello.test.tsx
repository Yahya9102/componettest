
import { describe, it,expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hello from "./Hello";
import  counter from "./hello";
import userEvent from '@testing-library/user-event';


/*
describe("Render hello component", () => {  
    it("should render Hello", () => {

    const {getByText} = render(<Hello />);

    // Finns en virtuel webbläsare i DOM trädet

    expect(getByText("Hello, world!")).toBeInTheDocument()  
  });
});

*/



describe("Render hello component", async () => {  
    it("button should return number plus 1", () => {

    render(<Hello />);

    // Finns en virtuel webbläsare i DOM trädet

    const button = screen.getByRole('button', { name: /Click/i });

    for (let i = 0; i < 1; i++) {
           userEvent.click(button);
    }

    expect(screen.findByText('1')).toBeInTheDocument();



  });
});


/*

describe("Counter function should return number + 1", () => {
  it("Should take in a number and return a number + 1", () => {
    expect(counter(1)).toBe(1)
  })
})


*/