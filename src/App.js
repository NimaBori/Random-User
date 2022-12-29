import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import UserCard from "./UserCard";
import Button from "react-bootstrap/Button";

function App() {
  const url = "https://randomuser.me/api/";
  const [person, setPerson] = useState(null);

  const getUserData = () => {
    axios
      .get(url)
      .then((res) => {
        const result = res.data.results[0];
        setPerson(result);
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(0deg, white, black 80%, black)",
      }}
    >
      <Container
        style={{
          backgroundColor: "white",
        }}
        className="section text-center border border-top-0 rounded my-4 p-0"
      >
        {person && <UserCard {...person} className="main-container" />}
        <Button
          variant="info"
          onClick={getUserData}
          className="btn-container fw-bold text-white mb-3"
        >
          RANDOM USER
        </Button>
      </Container>
    </main>
  );
}

export default App;
