import { shallow } from 'enzyme';
import { BookDetail } from '../components/bookDetail/BookDetail';

it('renders BookDetail component', () => {
  expect(
    shallow(
      <BookDetail
        rowData={{
          name: undefined,
          author: undefined,
          language: '',
          direction: '',
          source: '',
          comments: '',
        }}
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    )
  ).toMatchSnapshot();
});

it('Renders props data of Book Detail component', () => {
  const data = {
    name: 'ace-tgkhmahjiddinju',
    language: 'Achinese',
    direction: 'ltr',
    source: 'https://www.islamic-invitation.com/',
    comments:
      'This translation was OCRed, in case you find any mistakes, let me know at https://bit.ly/33FuNZS',
  };

  const onClose = (): void => {
    throw new Error('Function not implemented.');
  };

  // Shallow render Book Detail component
  const wrapper = shallow(<BookDetail rowData={data} onClose={onClose} />);

  expect(wrapper.find('#detail-name').text()).toEqual(data.name);
  expect(wrapper.find('#detail-lang').text()).toEqual(data.language);
  expect(wrapper.find('#detail-direction').text()).toEqual(data.direction);
  expect(wrapper.find('#detail-source').text()).toEqual(data.source);
  expect(wrapper.find('#detail-comment').text()).toEqual(data.comments);

  expect(wrapper.find('.close').length).toEqual(1);
  wrapper.find('.close').simulate('onClick');
});
