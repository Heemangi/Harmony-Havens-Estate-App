import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Dream Home with Ease</h1>
          <p>
          Welcome to our premier real estate platform, where finding your perfect abode is effortless.
          Whether you are searching for the ideal rental flat or envisioning your dream villa to own, our curated selection offers an array of options to suit every lifestyle. 
          With seamless navigation and personalized assistance, embark on your journey to find the home that truly reflects your aspirations.
          </p>
          <SearchBar />
          {/* <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div> */}
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bgi.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
