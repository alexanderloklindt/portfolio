import React from "react";
import "./login.modal.css"

const LoginModal = ({children}) => {


  return (
    <div>

        {children}
        <div className="loginModalContainer">
            <form className="loginModalForm" action="">
                <input type="text" name="" id="" />
            </form>
        </div>
    </div>
  );
};

export default LoginModal;
