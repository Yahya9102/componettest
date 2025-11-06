
import { render, screen } from "@testing-library/react";
import { ListTodos } from "./ListTodo";
import { test, expect } from "vitest";


/*

Skapa tester för att:
1.Kontrollera att komponenten visar rubriken "Mina Todos" när den renderas.
2. Visa texten "Inga todos ännu!" när listan är tom.


EXTRA
Visa alla todos som skickas in via props.
2.  Antalet <li>-element i listan ska motsvara antalet todos i props.


*/


// 1.Kontrollera att komponenten visar rubriken "Mina Todos" när den renderas.
test("visar rubriken 'Mina Todos'", () => {
  render(<ListTodos todos={[]} />);
  expect(screen.getByText("Mina Todos")).toBeInTheDocument();
});











// 2. Visa texten "Inga todos ännu!" när listan är tom.
test("visar meddelande när listan är tom", () => {
  render(<ListTodos todos={[]} />);
  expect(screen.getByText("Inga todos ännu!")).toBeInTheDocument();
});







// Visa alla todos som skickas in via props.
test("visar alla todos i listan", () => {
  const todos = ["Diska", "Handla mjölk", "Plugga React"];
  render(<ListTodos todos={todos} />);

  // Kontrollera att varje todo visas
  expect(screen.getByText("Diska")).toBeInTheDocument();
  expect(screen.getByText("Handla mjölk")).toBeInTheDocument();
  expect(screen.getByText("Plugga React")).toBeInTheDocument();
});





// 2.  Antalet <li>-element i listan ska motsvara antalet todos i props.
test("ska visa rätt antal listobjekt", () => {
  const todos = ["Diska", "Handla mjölk", "Plugga React"];
  render(<ListTodos todos={todos} />);

  const items = screen.getAllByRole("listitem"); 
  expect(items.length).toBe(3);
});
