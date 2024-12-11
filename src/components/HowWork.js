import "./Videolink.css";
function HowWork() {
  return (
    <div className="mainDiv">
      <div className="div1"> 
        {" "}
        <h1 className="heading">How it works?</h1>
        <p className="works-P">
          Did you get involved in the search process? We are always available to
          you and will be happy to assist.
        </p>
        <button className="button">Contact us</button>
      </div>
      <div className="div2">
        <iframe
          classname="video"
          width="550"
          height="300"
          src="https://www.youtube.com/embed/Vho0ixZwlI0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </div>
  );
}
export default HowWork;
