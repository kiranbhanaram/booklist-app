import { useEffect, useState } from 'react';
import { axiosInstance } from '../../axiosConfig';
import { Loader } from '../loader/Loader';
import { Toast } from '../toast/Toast';
import './BookList.css';
import { BookDetail } from '../bookDetail/BookDetail';

type ErrorProp = {
  message: string;
};

export type BookProps = {
  name?: string;
  author?: string;
  language: string;
  direction: string;
  source: string;
  comments: string;
};

export function BookList() {
  const [tableData, setTableData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [modalData, setModalData] = useState<BookProps>();

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = (): void => {
    try {
      setShowLoader(true);
      axiosInstance
        .get('fawazahmed0/quran-api@1/editions.json')
        .then((response) => {
          if (response.data) {
            if (Object.values(response.data).length > 0) {
              setTableData(Object.values(response.data));
            }
          }
          setShowLoader(false);
        })
        .catch((error) => {
          setTableData([]);
          handleError(error, 'Table Data');
        });
    } catch (error) {
      setShowLoader(false);
    }
  };

  const handleError = (error: ErrorProp, apiName: string): void => {
    setShowLoader(false);
    setErrorMsg(error.message || 'Error while making request to server');
    setTimeout(() => setErrorMsg(''), 3000);
  };

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="bookListContainer">
          <Toast message={errorMsg} />
          <table>
            <thead>
              <tr>
                <th style={{ width: '49%' }}>Book Name</th>
                <th>Author</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((rowData: BookProps, index: number) => (
                <tr key={index} onClick={() => setModalData(rowData)}>
                  <td>{rowData.name}</td>
                  <td>{rowData.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {modalData && <BookDetail rowData={modalData} onClose={() => setModalData(undefined)} />}
        </div>
      )}
    </>
  );
}
