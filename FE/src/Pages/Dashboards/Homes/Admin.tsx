import React, { useState } from "react";
// import {} from "react-error-boundary"

interface iError {
  error?: any;
  resetErrorBoundary?: any;
}

export const Admin = () => {
  const [state, setState] = useState();
  return (
    <div>
      {state.map((props: any) => (
        <div>{props}</div>
      ))}{" "}
      Admin
    </div>
  );
};
