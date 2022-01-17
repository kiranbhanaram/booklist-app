import './BookDetail.css';
import { BookProps } from '../booklist/BookList';

type LocationParams = {
  rowData: BookProps;
  onClose: () => void;
};

export function BookDetail(props: LocationParams) {
  const { language, direction, source, comments, name } = props.rowData;
  return (
    <div className="detail">
      <div className="detail-container">
        <div>
          <label>Name</label>
          <div>{name || '-'}</div>
        </div>

        <div>
          <label>Language</label>
          <div>{language || '-'}</div>
        </div>

        <div>
          <label>Direction</label>
          <div>{direction || '-'}</div>
        </div>

        <div>
          <label>Source</label>
          <div>{source || '-'}</div>
        </div>

        <div>
          <label>Comments</label>
          <div>{comments || '-'}</div>
        </div>
      </div>
      <div className="detail-nav">
        <button className="close" onClick={() => props.onClose()}>
          Close
        </button>
      </div>
    </div>
  );
}
