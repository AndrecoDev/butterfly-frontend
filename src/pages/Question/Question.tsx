import QuestionRow from "../../components/QuestionRow/QuestionRow";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

import "./Question.css";

const Question = () => {
  const url = `${process.env.REACT_APP_URL}/questions`;
  const { data } = useFetch(url) || [];

  return (
    <div className="container_question">
      {data?.data.length > 0
        ? data?.data.map((question: any, id: number) => (
            <QuestionRow key={id} name={question.name} />
          ))
        : "Loading ..."}

      <Link to="/thankyou">
        <button type="button">Send</button>
      </Link>
    </div>
  );
};

export default Question;
