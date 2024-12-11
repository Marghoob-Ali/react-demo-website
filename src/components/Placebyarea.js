import './Placebyarea.css'
function Placebyarea (){
    return(
    <div className="PlaceMainDiv">
        <div className="headingDiv">
            <h1>
                Place by area 
            </h1>
        </div>
        <div className="ImagesDiv"> 
        <div className="imagesDiv">
            <img 
            className="image 1"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730904799766x699414733551730900%2Fpetaling%2520jaya%25202.png?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="img1"
            />
            <p className="P">Melaka</p>
        </div>
        <div className="imagesDiv"> 
            <img 
            className="image 2"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730904984093x165310478443827740%2Fperak.jpg?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="img1"
            />
            <p className="P">Petaling Jaya</p>
        </div>
        <div className="imagesDiv">
            <img 
            className="image 3"
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730905063049x843754816060077200%2Fsabah.png?w=384&h=512&auto=compress&dpr=1.5&fit=crop&q=75"
            alt="img1"
            />
            <p className="P">Selangor</p>
        </div>
        </div>
        </div>
    )
}
export default Placebyarea