import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments count when button is clicked", async () => {
    // Arrange
    render(<Counter />);
    var button = await screen.findByText("count is 0");

    // Act
    fireEvent.click(button);

    // Assert
    expect(button.textContent).toBe("count is 1");
});