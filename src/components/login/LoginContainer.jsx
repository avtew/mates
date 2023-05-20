import React from "react";
import { Ctrl } from '../../api/ctrl'

const LoginContainer = (props) => {
  return (
    <Login login={Ctrl.init} />
  )
}

export default LoginContainer;