import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dropdown from "../component/Dropdown"
import configureStore from 'redux-mock-store';
import { setSalaryFilter } from '../store/slice/listslice';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Dropdown', () => {
  test('renders the dropdown component', () => {
    render(
      <Provider store={store}>
        <Dropdown />
      </Provider>
    );

    const dropdownElement = screen.getByLabelText('Filter by Salary:');
    expect(dropdownElement).toBeInTheDocument();
  });

  test('dispatches setSalaryFilter action when dropdown value changes', () => {
    render(
      <Provider store={store}>
        <Dropdown />
      </Provider>
    );

    const dropdownElement = screen.getByLabelText('Filter by Salary:');
    fireEvent.change(dropdownElement, { target: { value: '500000' } });

   
    const expectedAction = setSalaryFilter('500000');
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});
