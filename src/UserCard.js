import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const UserCard = ({ name, email, dob, location, phone, login, picture }) => {
  const street = location.street;
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo({
      title: "My name is",
      desc: `${name.first} ${name.last}`,
    });
  }, [name]);

  return (
    <Container className="p-0 mb-4 text-center border-0">
      <div className="border-bottom border-3 border-secondary img-container">
        <img
          src={picture.large}
          alt={name.last}
          className="rounded-circle p-1 my-3 border border-3 border-secondary"
        />
      </div>
      <h6 className="text-secondary">{info.title}</h6>
      <h2>{info.desc}</h2>
      <Container className="d-flex align-items-center justify-content-md-evenly">
        <FaUser
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "My name is",
              desc: `${name.first} ${name.last}`,
            })
          }
        />
        <FaEnvelopeOpen
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "My email address is",
              desc: email,
            })
          }
        />
        <FaCalendarTimes
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "My age is",
              desc: dob.age,
            })
          }
        />
        <FaMap
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "I live here",
              desc: `${street.number} ${street.name}, ${location.city}, ${location.country}`,
            })
          }
        />
        <FaPhone
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "Here is my phone number",
              desc: phone,
            })
          }
        />
        <FaLock
          className="icons"
          onMouseEnter={() =>
            setInfo({
              title: "My login password is",
              desc: login.password,
            })
          }
        />
      </Container>
    </Container>
  );
};

export default UserCard;
