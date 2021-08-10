import "./singlePost.css";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="post-pic-ibp-train"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur
          <div className="singlePostEdit">
            <EditIcon className="singlePostIcon" />
            <HighlightOffIcon className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Debbie Climer</b>{" "}
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          alias totam, autem tenetur consequuntur necessitatibus, quo deserunt
          error consequatur obcaecati accusamus iste hic eos ad recusandae
          adipisci voluptatem voluptates facilis?
        </p>
      </div>
    </div>
  );
}
