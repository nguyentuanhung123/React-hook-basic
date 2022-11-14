import React from "react";
import "../Blog/blog.scss";
import axios from "axios";
import moment from "moment/moment";
import { useState, useEffect } from "react";

export const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "20",
        key: "AIzaSyCOVp9Tz2JMq2MaC_sP2QCDT5ZBEV92voo",
        type: "video",
        q: query,
      },
    });
    console.log(">>> check res: ", res);

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }

      console.log(">>> check result: ", result);
      setVideos(result);
    }

    console.log(">>> check res youtube: ", res);
  };

  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="ifram-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="#30.2 Design Giao Diện & Hoàn Thiện Chức Năng 'Search Youtube' với Google APIs và React Hook"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Create At:{" "}
                  {moment(item.createAt).format("DD-MM-YYYY HH:mm:ss")}
                </div>
                <div className="author">Author : {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "oauPQ4s34UeFP3Cv_Xyv7TqbquE",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 550,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BgqinqhhWOSCrU0l8Z5JQAwxUSQ",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "YoQ4-qTclIs"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-13T07:00:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#22 React Routers - Điều Hướng Trang Với React | React Cơ Bản Cho Beginners Từ A đến Z",
//           "description": "Để chuyển hướng trang, cũng như cung cấp nhiều thông tin cho người dùng, thì việc PHẢI DÙNG routers là điều không tránh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T07:00:15Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "-Zeqyv0nQa0hKYxdVFgb3bXLP0I",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "8JkHV2GZL0M"
//         },
//         "snippet": {
//           "publishedAt": "2022-07-26T11:15:14Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "Học React.JS Cơ Bản Trong 30 Phút (Update với React 18 năm 2022) | React Siêu Dễ Cho Beginner",
//           "description": "Trong video này, chúng ta sẽ cùng setup và thực hành dự án React & thực hành ứng dụng Todo List được xây dựng từ đầu.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-07-26T11:15:14Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "JCNfyulAPn7NA2c79uWHYt7aePM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "vA1445e1sp0"
//         },
//         "snippet": {
//           "publishedAt": "2022-08-21T12:45:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#19 The react routers (v5) - Tạo Thanh Navigation | Khóa Học React ULTIMATE",
//           "description": "Trong video này, chúng ta sẽ cùng nhau: ✓ Cài đặt thư viện React Router (version 5) ✓ Tạo thanh header Navigation (thanh điều ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/vA1445e1sp0/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/vA1445e1sp0/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/vA1445e1sp0/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-08-21T12:45:15Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BDHXaMvFyt4ja4Dl3aoUtJqOax0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "rKOEjUqBbX8"
//         },
//         "snippet": {
//           "publishedAt": "2022-04-23T12:45:13Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#N Hạ Version React 18 Xuống 17 | React.JS Cơ Bản Từ Z đến A Cho Người Mới Bắt Đầu - Hỏi Dân IT",
//           "description": "Để tránh các bugs không cần thiết do React nâng lên version 18 (vào tháng 4/2022), các bạn có thể hạ version 18 xuống 17 nhé.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-04-23T12:45:13Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Iv9NEyUo28Uu9-1iV6UH7aw48PI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "Yh1ghmbu1YE"
//         },
//         "snippet": {
//           "publishedAt": "2022-10-05T12:30:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "KHÓA HỌC REACT Pro Beyond -  Big &amp; Bigger | Cảm Nhận Sự LÀM CHỦ HOÀN TOÀN REACT.JS",
//           "description": "Một khóa học đơn giản 'thiên về cách tư duy' để hiểu React một cách rõ ràng hơn. Giáo trình khóa học: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/Yh1ghmbu1YE/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/Yh1ghmbu1YE/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/Yh1ghmbu1YE/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-10-05T12:30:15Z"
//         }
//       }
//     ]
//   }
