/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { BsPersonCircle } from "react-icons/bs";
import Spinner from "../../components/Atoms/spinner";
const Response = ({ response }) => {
  return (
    <div className="mt-4 text-gray-700 whitespace-pre-line m-8 flex  ">
      {response}
    </div>
  );
};

const ChatApp = () => {
  // const { param = "laporan" } = useParams();
  const [input, setInput] = useState("");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  // console.log("params", param);

  const handleSubmit = async () => {
    setLoading(true); // Set loading state to true while waiting for response
    try {
      const res = await axios.post("http://localhost:4000/openai", {
        message: input,
      });
      setResponse(res.data.message.content);
      setInput("");
      QController();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state after response received
    }
  };

  const QController = () => {
    setQuestion(input);
  };

  return (
    <div className="bg-gray-600 w-full h-[100vh]">
      <div className="flex flex-col items-center justify-center mt-8 ">
        <div className="bg-gray-100  md:w-[50%] w-[90%] md:h-[60vh] h-[57vh] overflow-auto rounded-lg shadow-md">
          {/* Chat history */}
          <div>
            <div className="flex justify-start items-center gap-4 text-xl mt-4">
              <span className=" ml-4 ">
                <BsPersonCircle />
              </span>
              <span>{question}</span>
            </div>
            {/* responese */}
            <div className="md:m-8 m-4">
              {loading ? <Spinner /> : <Response response={response} />}
            </div>
          </div>
          {/* Input field and send button */}
          <div className="flex items-center justify-center mb-0 mr-0 ml-0 absolute bottom-32 md:w-[50%] w-[90%]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full mr-2 p-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSubmit}
              className="px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              {loading ? "Sending..." : "Send"}
              {/* Change button text based on loading state */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
