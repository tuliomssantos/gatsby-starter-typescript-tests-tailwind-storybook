import React from "react"
import { render } from "@testing-library/react"

const Title = () => <h1 data-testid="hero-title">Gatsby is awesome!</h1>

test('two plus two is four', () => {
   expect(2 + 2).toBe(4);
});

test("Displays the correct title", () => {
   const { getByTestId } = render(<Title />)
   // Assertion
   expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
   // --> Test will pass
})