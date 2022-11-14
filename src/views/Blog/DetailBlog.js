import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../customize/fetch";
import "./blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  const handleBackData = () => {
    history.push("/blog");
  };

  // console.log(">>> check data detail: ", dataBlogDetail);
  // console.log(">>> check length data detail: ", dataBlogDetail.length);
  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt;--Back</span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID : {id} ---{" "}
              {isLoading === true ? "Loading data ..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
