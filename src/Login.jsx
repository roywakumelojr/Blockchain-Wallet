import React, { useState } from "react";

import axios from 'axios'
import { Form, Button } from "semantic-ui-react";

const Login = (props) => {
  const [transactions, setTransactions] = useState({
    username: "",
  });

  const handleChanges = e => {
    setTransactions({
      ...transactions,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .get("http://0.0.0.0:5000/chain", transactions)

      .then(response => {
        console.log(response.config.username)
        localStorage.setItem("user_name", response.config.username);
        props.history.push("/dashboard");
        
      })
      .catch(error => {
          console.log(error)
      });
  };

  return (
    <div className='login-container'>
      <div className='login-form'>
        <Form onSubmit={onSubmit}>
        <Form.Input
            type="username"
            name="username"
            placeholder="Enter your mining username"
            value={transactions.username}
            onChange={handleChanges}
        />

        <Button color="violet" size="medium" fluid type="submit" className='login-form-button'>
            LOGIN
        </Button>
        </Form>
       
      </div>
    </div>
  );
}
export default Login;