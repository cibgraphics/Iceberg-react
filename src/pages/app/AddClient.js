// import React, { useState } from 'react';
import ClientSettings from "../../components/forms/ClientSettings";
import withAuthentication from './../../components/withAuthentication';

const AddProject = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Add Client</h1>

        <div className="well">
          <form onSubmit={submitHandler}>
            <ClientSettings />
          </form>
        </div>

        <div className="button-group">
          <button type='submit' className="button">Add Expense</button>
        </div>
      </div>
    </div>
  );
};

export default withAuthentication(AddProject);
