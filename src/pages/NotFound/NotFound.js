import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      {" "}
      <div className="notfound">Oops! No city found...</div>
      <Link className="link" to="/weather">
        Back to search
      </Link>
    </>
  );
}
