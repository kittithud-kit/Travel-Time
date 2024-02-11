import React, { useEffect } from "react";
import "./Login.css";
import LayoutPage from "./LayoutPage";

function PageLogin() {
  useEffect(() => {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    //Event Listeners
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      checkRequired([username, email, password, password2]);
      checkLength(username, 3, 15);
      checkLength(password, 6, 25);
      checkEmail(email);
      checkPasswordMatch(password, password2);
    });
  }, []);

  //Show input error messages
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control-login error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  //show success colour
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control-login success";
  }

  //check email is valid
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "รหัสอีเมลผิดพลาด กรุณาลองใหม่");
    }
  }

  //checkRequired fields
  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input, `${getFieldName(input)} กรุณากรอกรหัส`);
      } else {
        showSuccess(input);
      }
    });
  }

  //check input Length
  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} รหัสต้องการมากกว่า ${min} ขึ้นไป `
      );
    } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} รหัสต้องน้อยกว่า ${max}`);
    } else {
      showSuccess(input);
    }
  }

  //get FieldName
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  // check passwords match
  function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, "รหัสไม่ตรงกัน");
    }
  }

  return (
    <LayoutPage>
      <div className="containerlogin">
        <form id="form" className="formlogin">
          <h2 className="h2login">Register</h2>
          <div className="form-control-login success">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter username" />
            <small>Username รหัสต้องน้อยกว่า 15</small>
          </div>
          <div className="form-control-login success">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter Email" />
            <small>Error Message</small>
          </div>
          <div className="form-control-login success">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
            <small>Password รหัสต้องการมากกว่า 6 ขึ้นไป </small>
          </div>
          <div className="form-control-login success">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              placeholder="Enter password again"
            />
            <small>Password รหัสต้องตรงกัน</small>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </LayoutPage>
  );
}

export default PageLogin;
