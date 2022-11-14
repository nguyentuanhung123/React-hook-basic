import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  //componentDidMount
  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });
        // console.log(">>> check res : ", res.data);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData == true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse(); //đảo ngược
        }
        // console.log(">>> check set data : ", data);
        setData(data); //cập nhật data cho mảng
        setIsLoading(false); //sau khi load xong dữ liệu thì ngừng chạy
        setIsError(false); //load xong không có lỗi xảy ra
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled : ", err.message); //khi cancel chạy vào dòng này
        } else {
          //khi không cancel chạy vào dòng này
          setIsError(true);
          setIsLoading(false);
        }
      }
    }

    setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      ourRequest.cancel("Operation cancel by the user ."); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
