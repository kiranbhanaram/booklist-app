import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { BookList } from '../components/booklist/BookList';

it('renders BookList component', () => {
  expect(
    shallow(
      <MemoryRouter initialEntries={['/']}>
        <BookList />
      </MemoryRouter>
    )
  ).toMatchSnapshot();
});
