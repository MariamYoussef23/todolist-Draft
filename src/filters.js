import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Filters = ({ updateFilter, uncheckAll }) => {
  return (
    <>
      <DropdownButton
        variant="outline-secondary"
        title="Filter Todos"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onClick={() => updateFilter("NON_COMPLETE")}>
          Show Incomplete
        </Dropdown.Item>
        <Dropdown.Item onClick={() => updateFilter("COMPLETE")}>
          Show Complete
        </Dropdown.Item>
        <Dropdown.Item onClick={() => updateFilter("ALL")}>
          Show All{" "}
        </Dropdown.Item>
        <Dropdown.Item onClick={uncheckAll}>Uncheck All</Dropdown.Item>
      </DropdownButton>

      {/* <Button variant="outline-primary" onClick={() => updateFilter('NON_COMPLETE')}>Show Incomplete</Button>{' '}
			<Button variant="outline-primary" onClick={() => updateFilter('COMPLETE')}>Show Complete</Button>{' '}
			<Button variant="outline-primary" onClick={() => updateFilter('ALL')}>Show All</Button>{' '}
			<Button variant="outline-primary" onClick={uncheckAll}>Uncheck All</Button>{' '} */}

      {/* <button onClick={() => updateFilter('NON_COMPLETE')}>Show Incomplete</button>
			<button onClick={() => updateFilter('COMPLETE')}>Show Complete</button>
			<button onClick={() => updateFilter('ALL')}>Show All</button>
			<button onClick={uncheckAll}>Uncheck All</button> */}
    </>
  );
};

export default Filters;
