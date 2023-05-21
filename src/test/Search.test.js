import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Search from "../component/Search"
import { setSearchQuery } from '../store/slice/listslice';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Search', () => {
  test('dispatches setSearchQuery action with the search text', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('search names');
    fireEvent.change(searchInput, { target: { value: 'John' } });

    const expectedAction = setSearchQuery('John');
    expect(store.getActions()).toContainEqual(expectedAction);
  });
});


