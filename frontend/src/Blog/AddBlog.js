import "./AddBlog.css";
import { useState, useRef } from "react";
import AnimatedPage from "../Shared/AnimatedPage";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

export default function AddBlog() {
  ///VALIDITY
  const isThreeChars = (value) => {
    return value.trim().length >= 3;
  };

  const isFiveChars = (value) => {
    return value.trim().length >= 5;
  };

  //Form State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [formInputValidity, setFormInputValidty] = useState({
    title: true,
    text: true,
  });

  //Navigate Hook
  const Navigate = useNavigate();

  //Input Refs
  const titleInputRef = useRef();
  const textInputRef = useRef();

  //Publish Function
  const onPublishHandler = async (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const enteredTitleIsValid = isThreeChars(enteredTitle);
    const enteredTextIsValid = isFiveChars(description);

    setFormInputValidty({
      title: enteredTitleIsValid,
      text: enteredTextIsValid,
    });

    const formIsValid = enteredTextIsValid && enteredTitleIsValid;

    if (!formIsValid) {
      return;
    }

    if (formIsValid) {
      try {
        const response = await fetch("http://localhost:8000/api/addBlog", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
          }),
        });

        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        console.log("Success");
        let form = document.getElementsByClassName("addBlogForm")[0];
        form.reset();
        Navigate("/");
        alert("Blog created successfully!");
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <AnimatedPage>
      <div>
        <form className="addBlogForm" onSubmit={onPublishHandler}>
          <input
            ref={titleInputRef}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            name="title"
            required
          />
          {!formInputValidity.title && (
            <p className="text-red-600">
              Title should have more than 3 characters!
            </p>
          )}
          <Editor
            ref={textInputRef}
            name="description"
            initialValue="Tell your story!"
            onEditorChange={(newDesc) => {
              setDescription(newDesc);
            }}
          />
          {!formInputValidity.text && (
            <p className="text-red-600">
              Body should have more than 5 characters!
            </p>
          )}
          <div className="flex justify-center items-center mt-28">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </AnimatedPage>
  );
}
