import "./AddBlog.css";
import { useState, useRef } from "react";
import AnimatedPage from "../Shared/AnimatedPage";
import Button from "../Components/Button";
import ReactQuill from 'react-quill'
import '../../node_modules/react-quill/dist/quill.snow.css'
import { useNavigate } from "react-router-dom";

export default function AddBlog() {
  ///VALIDITY
  const isThreeChars = (value) => {
    return value.trim().length >= 3;
  };

  const isFiveChars = (value) => {
    return value.trim().length >= 1;
  };

  //Editor State
  const [value, setValue] = useState("");
  const [formInputValidity,setFormInputValidty] = useState({
    title: true,
    text: true
  })

  //Navigate Hook
  const Navigate = useNavigate();

  //Input Refs
  const titleInputRef = useRef();
  const textInputRef = useRef();

  //Publish Function
  const onPublishHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const enteredTitleIsValid = isThreeChars(enteredTitle);
    const enteredTextIsValid = isFiveChars(enteredText);

    setFormInputValidty({
      title: enteredTitleIsValid,
      text: enteredTextIsValid
    })

    const formIsValid = enteredTextIsValid && enteredTitleIsValid;

    if(!formIsValid){
      return;
    };

    if(formIsValid){
      console.log("Success");
      console.log(enteredText)
      let form = document.getElementsByClassName('writeForm')[0];
      form.reset();
      Navigate('/')
    }
  }

  return (
    <AnimatedPage>
      <div className="write border-4 border-black">
        <form className="writeForm">
          <div className="writeFormGroup flex flex-row items-center justify-center">
            <input ref={titleInputRef}
              className="writeInput"
              placeholder="Add Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="flex flex-row items-center justify-center">
          {!formInputValidity.title && <p className="text-red-600">Title size should be greater than 2!</p>}
          </div>
          <div className="flex flex-row justify-center items-center">
          <ReactQuill ref={textInputRef}
            id='editor'
            placeholder="Tell Your Story"
            style={{
                background: "white",
                color: "black",
                width: "750px",
                height: "400px"
            }}
            theme="snow"
            value={value}
            onChange={() => {
                // console.log(document.getElementsByClassName("ql-editor")[0].innerHTML)
                setValue()
            }}
        />
          </div>
          <div className="flex flex-row items-center justify-center">
          {!formInputValidity.text && <p className="text-red-600">Text length should not be 0</p>}
          </div>

          <div className="flex flex-row justify-end">
            <Button type={'button'} onClick={onPublishHandler}>Publish</Button>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
}
