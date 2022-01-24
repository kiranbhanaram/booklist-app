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

it('renders in table rows based on provided columns', () => {
  const cols = [
    { header: 'Book Name', name: 'name' },
    { header: 'Author', name: 'author' },
  ];
  const data = [
    {
      name: 'aar-sheikhmahmoudab',
      author: 'Sheikh Mahmoud Abdel Qader Hamz And Group Of Scholars',
    },
    { name: 'ace-tgkhmahjiddinju', author: 'Tgk. H. Mahjiddin Jusuf' },
    { name: 'afr-imammabaker', author: 'Imam M. A. Baker' },
    { name: 'amh-muhammedsadiqan-la', author: 'Imam M. A. Baker' },
    { name: 'amh-muhammedsadiqan-la', author: 'Muhammed Sadiq And Muhammed Sani Habib' },
  ];
  // Shallow render BookList Table
  const container = shallow(<BookList />);
  // There should be ONLY 1 table element
  const table = container.find('table');
  expect(table).toHaveLength(1);
  // The table should have ONLY 1 thead element
  const thead = table.find('thead');
  expect(thead).toHaveLength(1);
  // The number of th tags should be equal to number of columns
  const headers = thead.find('th');
  expect(headers).toHaveLength(cols.length);
  // Each th tag text should equal to column header
  headers.forEach((th, idx) => {
    expect(th.text()).toEqual(cols[idx].header);
  });
  // The table should have ONLY 1 tbody tag
  const tbody = table.find('tbody');
  expect(tbody).toHaveLength(1);

  const rows = tbody.find('tr');
  // Loop through each row and check the content
  rows.forEach((tr, rowIndex) => {
    const cells = tr.find('td');
    expect(cells).toHaveLength(cols.length);
    expect(cells.at(0).text()).toEqual(data[rowIndex].name);
    expect(cells.at(1).text()).toEqual(data[rowIndex].author);
  });
});
