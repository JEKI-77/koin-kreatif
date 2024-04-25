/* eslint-disable react/prop-types */
import { useState } from "react";
// import axios from "axios";
// import { BsPersonCircle } from "react-icons/bs";
// import Spinner from "../../components/Atoms/spinner";
import { useEffect } from "react";
import lens from "../../assets/lens.png";
import loadingGif from "../../assets/loading.gif";
// const Response = ({ response }) => {
//   return (
//     <div className="mt-4 text-gray-700 whitespace-pre-line m-8 flex  ">
//       {response}
//     </div>
//   );
// };

const ChatApp = () => {
  // const { param = "laporan" } = useParams();
  // const [input, setInput] = useState("");
  // const [question, setQuestion] = useState("");
  // const [response, setResponse] = useState("");
  // console.log("response", response);
  // const [loading, setLoading] = useState(false);
  const [prompt, updatePrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  // console.log("params", param);

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:4000/openai",
  //       { message: input },
  //       {
  //         headers: {
  //           Accept: "application/json, text/plain, */*",
  //           "Content-Type": "application/json",
  //         },
  //         responseType: "stream",
  //       }
  //     );

  //     const reader = response.data;
  //     console.log(reader);
  //     const decoder = new TextDecoder();
  //     let loopRunner = true;

  //     while (loopRunner) {
  //       const { value, done } = await reader.read();
  //       if (done) break;
  //       const decodedChunk = decoder.decode(value, { stream: true });
  //       setResponse((prevResponse) => prevResponse + decodedChunk);
  //     }

  //     setInput("");
  //     QController();
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const QController = () => {
  //   setQuestion(input);
  // };

  useEffect(() => {
    if (prompt != null && prompt.trim() === "") {
      setAnswer("");
    }
  }, [prompt]);

  const sendPrompt = async () => {
    if (event.key !== "Enter") {
      return;
    }

    try {
      setLoading(true);
      setAnswer("");
      const response = await fetch("http://localhost:4000/openai", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*", // indicates which files we are able to understand
          "Content-Type": "application/json", // indicates what the server actually sent
        },
        body: JSON.stringify({ message: prompt }), // server is expecting JSON
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value, { stream: true });
        setAnswer((answer) => answer + decodedChunk);
      }
    } catch (err) {
      console.error(err, "err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <div className="spotlight__wrapper">
          <input
            type="text"
            className="spotlight__input "
            placeholder="Ask me anything..."
            disabled={loading}
            style={{
              backgroundImage: loading ? `url(${loadingGif})` : `url(${lens})`,
            }}
            onChange={(e) => updatePrompt(e.target.value)}
            onKeyDown={(e) => sendPrompt(e)}
          />
          <div className="spotlight__answer">{answer && <p>{answer}</p>}</div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="bg-gray-600 w-full h-[100vh]">
  //     <div className="flex flex-col items-center justify-center mt-8 ">
  //       <div className="bg-gray-100  md:w-[50%] w-[90%] md:h-[60vh] h-[57vh] overflow-auto rounded-lg shadow-md">
  //         {/* Chat history */}
  //         <div>
  //           <div className="flex justify-start items-center gap-4 text-xl mt-4">
  //             <span className=" ml-4 ">
  //               <BsPersonCircle />
  //             </span>
  //             <span>{question}</span>
  //           </div>
  //           {/* responese */}
  //           <div className="md:m-8 m-4">
  //             {loading ? <Spinner /> : <Response response={response} />}
  //           </div>
  //         </div>
  //         {/* Input field and send button */}
  //         <div className="flex items-center justify-center mb-0 mr-0 ml-0 absolute bottom-32 md:w-[50%] w-[90%]">
  //           <input
  //             type="text"
  //             value={input}
  //             onChange={(e) => setInput(e.target.value)}
  //             placeholder="Type your message..."
  //             className="w-full mr-2 p-2 border border-gray-300 rounded-lg focus:outline-none"
  //           />
  //           <button
  //             onClick={handleSubmit}
  //             className="px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
  //           >
  //             {loading ? "Sending..." : "Send"}
  //             {/* Change button text based on loading state */}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default ChatApp;
