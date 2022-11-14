import React from "react";
import { useHistory } from "react-router-dom";

export const NotFound = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="not-found-container">
      <h4>Trang này không hiển thị</h4>
      <h5>
        Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết
        mà bạn đang cố mở có chính xác không.
      </h5>
      <button className="btn btn-primary" onClick={handleClick}>
        Trở lại trang chủ
      </button>
    </div>
  );
};
