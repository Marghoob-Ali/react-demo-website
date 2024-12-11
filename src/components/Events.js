import "./Events.css";
function Events() {
  return (
    <div className="maindivEvents">
      <div className="headingEvents">
        <h1>Space of all events</h1>
      </div>
      <div className="images"> 
        <div className="imgdiv">
          <img
            className="img 1"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730903726086x679831824180516000%2FConference.jpg?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="events"
          />
          <p className="text"> Conferences</p>
        </div>
        <div className="imgdiv">
          <img
            className="img 2"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730903709926x331254856510814000%2Fseminar.jpg?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="Events2"
          /><p className="text">Seminars</p>
        </div>
        <div className="imgdiv">
          <img
            className="img 3"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730903709926x331254856510814000%2Fseminar.jpg?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="Events3"
          />
          <p className="text">
          Bachelor Parties</p>
        </div>
      </div>
    </div>
  );
}
export default Events;
