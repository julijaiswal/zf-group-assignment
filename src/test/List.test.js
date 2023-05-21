import { render, screen } from '@testing-library/react';
import List from "../component/List"

test('renders list component', () => {
  render(<List />);
  test("sorts the listdata array correctly by first name", () => {
    const dispatchMock = jest.fn();
    const listdata = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Johnson" },
    ];
    const expectedSortedList = [
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Johnson" },
      { firstName: "John", lastName: "Doe" },
    ];

    handleSort("firstName", listdata, dispatchMock);

    expect(dispatchMock).toHaveBeenCalledWith(expectedSortedList);
  });
});
