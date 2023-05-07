import React from "react";

//import ProfileImg from "../assets/20220507_170804.jpg";

const Home = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        position: "absolute",
        height: "100vh",
      }}
    >
      <h1 style={{ fontFamily: "cursive", color: "#6E07F3" }}>
        Welcome to My Portfolio
      </h1>
      <h1 className="p-sm-5 mx-3 mt-5">
        I am <strong>S.Karthik</strong>, experienced as a{" "}
        <strong>Frontend Developer.</strong> I build user Interfaces using{" "}
        <strong>React Js.</strong>{" "}
      </h1>
      {/* <img
        src={ProfileImg}
        alt="profile"
        width="150px"
        style={{ borderRadius: "10%" }}
      /> */}
    </section>
  );
};

export default Home;
