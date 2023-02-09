import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Review = (props) => {
  return (
    <Carousel>
      <div className="reviewBox">
        <p className="reviewContent">{props.data ? props.data.content1 : "loading..."}</p>
        <p className="reviewPerson">{props.data ? props.data.person1 : "loading..."}</p>
        <p className="reviewJob">{props.data ? props.data.job1 : "loading..."}</p>
      </div>
      <div className="reviewBox">
        <p className="reviewContent">{props.data ? props.data.content2 : "loading..."}</p>
        <p className="reviewPerson">{props.data ? props.data.person2 : "loading..."}</p>
        <p className="reviewJob">{props.data ? props.data.job2 : "loading..."}</p>
      </div>
      <div className="reviewBox">
        <p className="reviewContent">{props.data ? props.data.content3 : "loading..."}</p>
        <p className="reviewPerson">{props.data ? props.data.person3 : "loading..."}</p>
        <p className="reviewJob">{props.data ? props.data.job3 : "loading..."}</p>
      </div>
    </Carousel>
  );
};
