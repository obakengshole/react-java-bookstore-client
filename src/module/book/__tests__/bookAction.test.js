import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { getBooksAction } from '../bookAction';

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe('BookActions', () => {
  beforeEach(() => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            title: 'test title',
            description: 'des',
            releaseYear: 2018,
          },
        ],
      })
    );
  });

  it('should able to dispatch success action', async () => {
    const store = mockStore({});
    await store.dispatch(getBooksAction());
    const actions = store.getActions();
    expect(actions.length).toEqual(1);
    expect(actions[0]).toEqual({
      type: 'BOOKLIST',
      payload: [
        {
          id: 1,
          title: 'test title',
          description: 'des',
          releaseYear: 2018,
        },
      ]
    });
  })
})