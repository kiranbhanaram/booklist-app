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
          <div id="detail-name">{name || '-'}</div>
        </div>

        <div>
          <label>Language</label>
          <div id="detail-lang">{language || '-'}</div>
        </div>

        <div>
          <label>Direction</label>
          <div id="detail-direction">{direction || '-'}</div>
        </div>

        <div>
          <label>Source</label>
          <div id="detail-source">{source || '-'}</div>
        </div>

        <div>
          <label>Comments</label>
          <div id="detail-comment">{comments || '-'}</div>
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
