import { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const GenerateId = ({}) => {
  const [learnerId, setLearnerId] = useState("");
  const [form, setForm] = useState({
    email: "",
    firstname: "",
    lastname: "",
    program: "",
    level: "",
  });

  const onGenerateId = (e) => {
    e.preventDefault()
    let pr;
    switch (form.program) {
      case "Android Development":
        pr = "AND";
        break;
      case "Frontend Development":
        pr = "FRD";
        break;
      case "Backend Development":
        pr = "BKD";
        break;
      case "Full-stack development":
        pr = "FUD";
        break;
      case "DevOps Development":
        pr = "DOP";
        break;
    }
    let le;
    switch (form.level) {
      case "Entry":
        le = "EN";
        break;
      case "Junior":
        le = "JU";
        break;
      case "Intermediate":
        le = "IN";
        break;
      case "Senior":
        le = "SE";
        break;
    }

    const id = `GR${form.firstname
      .replace(/\s/g, "")
      .slice(0, 2)
      .toUpperCase()}${form.lastname
      .replace(/\s/g, "")
      .slice(0, 2)
      .toUpperCase()}229${pr}${le}`;
    setLearnerId(id);
  };
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1 className="header">Learner&apos;s ID generator</h1>
        <p className="sub-header">by Grow</p>
      </div>
      <div className="wrap">
        <div className="form">
          <Form setForm={setForm} form={form} onGenerateId={onGenerateId} />
        </div>
        <div className="card">
          <Card form={form} learnerId={learnerId} />
        </div>
      </div>
    </>
  );
};

export default GenerateId;
