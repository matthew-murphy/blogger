import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="warehouse-pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Business</span>
          <span className="postCat">Operations</span>
        </div>
        <span className="postTitle">Call It IBP, It'll Be Ok</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        harum eaque tempore, quod ratione repellendus qui, suscipit possimus
        vero quas cum quos ea? Sit a tempora quasi culpa quibusdam quae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        harum eaque tempore, quod ratione repellendus qui, suscipit possimus
        vero quas cum quos ea? Sit a tempora quasi culpa quibusdam quae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        harum eaque tempore, quod ratione repellendus qui, suscipit possimus
        vero quas cum quos ea? Sit a tempora quasi culpa quibusdam quae?
      </p>
    </div>
  );
}
