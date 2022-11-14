import React from "react";
import { useState } from "react";
import axios from "axios";
import "./blog.scss";

const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitBtn = async () => {
    if (!title) {
      //trả về true
      alert("empty title");
      return;
    }
    if (!content) {
      //trả về true
      alert("empty content");
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    if (res && res.data) {
      let newBlog = res.data;
      props.handleAddNew(newBlog);
    }

    console.log("check res post data : ", res);

    console.log(
      ">>> check data before send >>> title :  ",
      title,
      "content : ",
      content
    );
  };
  return (
    <div className="add-new-container">
      <div className="text-add-new">------Add new blogs-----</div>
      <div className="inputs-data">
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="inputs-data">
        <label>Content: </label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button className="btn-add-new" onClick={handleSubmitBtn}>
        Submit
      </button>
    </div>
  );
};

export default AddNewBlog;