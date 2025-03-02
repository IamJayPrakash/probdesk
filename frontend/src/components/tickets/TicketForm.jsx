import React from "react";

const TicketForm = () => {
  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Description:
        <textarea name="description"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TicketForm;
