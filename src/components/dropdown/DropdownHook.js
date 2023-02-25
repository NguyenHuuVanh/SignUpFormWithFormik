import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/UseClickOutSide";

const DropdownHook = ({
  control,
  setValue,
  name,
  data,
  dropDownLabel = "Please your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState(dropDownLabel);
  useWatch({
    control,
    name: "job",
    defaultValue: "",
  });

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };
  return (
    <div className="form_dropdơwn" ref={nodeRef}>
      <div className="dropdown" onClick={() => setShow(!show)}>
        <span>{label || "Select your job"}</span>
      </div>
      <div className={`dropdown_selected ${show ? "" : "active"}`}>
        {data.map((item) => {
          <div
            className="selected"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>;
        })}
      </div>
    </div>
  );
};

export default DropdownHook;
