import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([ ]); //on 2nd pass, State will be [{first formData}]
  const [errors, setErrors] = useState([ ]);
  
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    if (firstName.length > 0) {
      event.preventDefault();
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData]; // [{ firstName: firstName, lastName: lastName }]
                                                    //  (nothing here but formData at first, submittedData is empty)
      setSubmittedData(dataArray); 
      setFirstName("");
      setLastName("");
      setErrors([ ]);
    } else {
      event.preventDefault();
      setErrors(["First name is required!"])
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
