import React, { useState } from "react";

import "./QuestionRow.css";

interface IQuestion {
  name: string;
}
const QuestionRow = ({ name }: IQuestion) => {
  const [checked, setCheckBoxChecked] = useState();
  const [showComment, setshowComment] = useState(false);
  const options = [
    { label: "disagree", value: "disagree" },
    { label: "agree", value: "agree" },
  ];
  const onChangeAttribute = (value: any) => {
    setCheckBoxChecked(value);
  };

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <ul>
          {options.map((option, key) => (
            <li key={key}>
              <label>
                {option.label}
                <input
                  name={option.value}
                  checked={checked === option.value}
                  onChange={() => onChangeAttribute(option.value)}
                  type="checkbox"
                />
              </label>
            </li>
          ))}
        </ul>
        <p className="questionRow_comment" onClick={() => setshowComment(true)}>
          Add comment
        </p>
        {showComment && <textarea name="userComment" />}
      </div>
    </div>
  );
};

export default QuestionRow;
