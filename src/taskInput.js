import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Filters from './filters';

const TaskInput = ({ updateTasks, updateFilter, uncheckAll }) => {
  const [input, setInput] = useState("");
  return (
    
    <div className=" filter d-flex justify-content-center p-5">
      <InputGroup >
        <Form.Control
          placeholder="Add your todo item here"
          aria-label="Add your todo item here"
          aria-describedby="basic-addon2"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button className="mx-2"
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            updateTasks(input);
            setInput("");
          }}
        >
          Add todo
        </Button>
      </InputGroup>

	  <Filters updateFilter={updateFilter} uncheckAll={uncheckAll} />
		  

      {/* <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={() => {
          updateTasks(input);
          setInput("");
        }}
      >
        Add
      </button> */}
    </div>
  );
};

export default TaskInput;
