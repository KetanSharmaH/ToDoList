import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const data = navigate.state;
  console.log(data);

  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (selectedKey) => {
    console.log(setSelectedItem(selectedKey));
  };

  const handleClick = (val) => {
    console.log(val);
  };

  return (
    <>
      <div>
        <button className="btn p-2">
          <a
            style={{ textDecoration: "none", color: "white" }}
            onClick={() => navigate("/CreateTab")}
          >
            Create Task
          </a>
        </button>
        <DropdownButton
          id="dropdown-item-button"
          title="Dropdown button"
          onSelect={handleSelect}
        >
          <Dropdown.Item key="1">Action</Dropdown.Item>
          <Dropdown.Item key="2">Another action</Dropdown.Item>
          <Dropdown.Item key="3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div></div>
    </>
  );
}

export default Home;
