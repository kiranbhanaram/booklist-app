import React from "react";
import "./Toast.css";

type ToastProps = {
  message: string;
}

export const Toast = React.memo((props: ToastProps) => {
  return (<>
    {props.message ? (<div className='toast'>
      <figure>
        <img src='http://svgshare.com/i/19E.svg' alt="Logo" />
      </figure>
      <p>{props.message}</p>
    </div>) : null}
  </>
  )
});



