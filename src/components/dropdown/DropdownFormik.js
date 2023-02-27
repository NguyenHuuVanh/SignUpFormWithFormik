import React, { useState } from "react";
import useClickOutSide from "../../hooks/UseClickOutSide";

const DropdownFormik = ({
  labelTitle,
  name,
  data,
  dropDownLabel = "Please your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState(dropDownLabel);

  const handleClickDropdownItem = (e) => {
    setShow(false);
    setLabel(e.target.textContent);
  };
  return (
    <>
      <label className="form_group">{labelTitle}</label>
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
    </>
  );
};

export default DropdownFormik;
