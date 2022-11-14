import React from "react";
import { useEffect } from "react";
import { useState } from "react";

class CountDown extends React.Component {
  state = {
    count: 10,
  };
  componentDidMount() { //Diễn ra khi component được render và đặt trong DOM.
    // setTimeout(() => {
    //   console.log("me");
    // }, 1000);
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  } //hàm này chạy sau khi render lần đầu

  componentDidUpdate(
    prevProps,
    prevState //Được kích hoạt ngay lập tức sau khi render.
  ) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        // this.props.onTimesup();
      }
    }
  }
  render() {
    return <div>{this.state.count} class</div>;
  }
}

// export default CountDown;

const NewCountDown = (props) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      props.onTimesup();
      // alert("Times up bro");
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      <div>{count} hook</div>
    </>
  );
};

export { CountDown, NewCountDown };
