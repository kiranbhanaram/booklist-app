import { useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookDetail.css";
import { BookProps } from "../booklist/BookList";

type LocationParams = {
  pathname: string;
  state: { detailData:BookProps };
  search: string;
  hash: string;
  key: string;
}

export const BookDetail =  (props: BookProps)=>{

  const navigate  = useNavigate();
  const location = useLocation() as LocationParams;

  useEffect(() => {
    if(!location.state){
      navigate("/");
    }
  }, []);

  
  	return (
      <div className='detail'>
    <div className='detail-container'>
      <dl>
        <dt>
          Language
        </dt>
        <dd>
          {location.state.detailData.language}
        </dd>
        <dt>
        Direction
        </dt>
        <dd>
        {location.state.detailData.direction}
        </dd>
        <dt>
        source
        </dt>
        <dd>
        {location.state.detailData.source}
        </dd>
        <dt>
        comments
        </dt>
        <dd>
        {location.state.detailData.comments}
        </dd>
      </dl>
    </div>
    <div className='detail-nav'>
      <button className='close' onClick={()=> navigate("/")}>
        Close
      </button>
    </div>
  </div>
    );
}