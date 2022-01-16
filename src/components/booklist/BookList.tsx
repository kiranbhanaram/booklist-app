import { useEffect, useState } from "react";
import { axiosInstance } from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Toast } from "../toast/Toast";
import "./BookList.css";

type ErrorProp = {
  message: string;
}

export type BookProps = {
  name?: string;
  author?: string;
  language: string;
  direction: string;
  source: string;
  comments: string;
}

export const BookList = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async () => {
    try {
      setShowLoader(true);
      return axiosInstance
        .get("fawazahmed0/quran-api@1/editions.json")
        .then((response) => {
          if (response.data) {
            if (Object.values(response.data).length > 0) {
              setTableData(Object.values(response.data));
            }
          }
          setShowLoader(false);
          return response.data;
        })
        .catch((error) => {
          setTableData([]);
          handleError(error, 'Table Data');
        });

    } catch (error) {
      setShowLoader(false);
    }
  };

  const handleError = (error: ErrorProp, apiName: string) => {
    setShowLoader(false);
    setErrorMsg(error.message);
    setTimeout(() => setErrorMsg(''), 3000);
    //commented switch case to handle future unique response status code
    // if (error.response) {
    //   switch (error.response.status) {
    //     case 403:
    //       break;

    //       case 404:
    //       break;

    //       case 500:
    //       break;

    //     default:
    //       break;
    //   }

    // }

  };

  return (
    <>
      {showLoader ? <Loader /> :
        <div className="bookListContainer">
          <Toast message={errorMsg} />
          <table>
            <thead>
              <tr>
                <th style={{ width: '49%' }}>
                  Book Name
                </th>
                <th>
                  Author
                </th>

              </tr>
            </thead>

            <tbody>
              {tableData.map((rowData: BookProps, index: number) => {
                return (
                  <tr key={index} onClick={() => { navigate("/detail", { state: { detailData: rowData } }) }}>
                    <td>{rowData.name}</td>
                    <td>{rowData.author}</td>
                  </tr>
                );
              })}

            </tbody>
            {/* <p>No Data </p> */}
          </table>
        </div>}
    </>);
}