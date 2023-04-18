const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image1"
      />
      <h1 className="sub-heading">Kiran V</h1>
      <p className="sub-paragraph">
        vishnu institute of computer education and technology bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
