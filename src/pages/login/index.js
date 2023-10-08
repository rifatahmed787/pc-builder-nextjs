import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          width: "200",
          height: "200px",
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", color: "black" }}>
          Login
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px 40px",
            gap: "30px",
          }}
        >
          <GoogleOutlined
            style={{
              fontSize: "50px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
          <GithubOutlined
            style={{
              fontSize: "50px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
