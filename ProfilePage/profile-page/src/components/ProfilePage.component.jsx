import React from "react";
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../assets/profile-photo.jpg";
import postPhoto1 from "../assets/post-photo-1.jpg";
import postPhoto2 from "../assets/post-photo-2.jpg";
// import postPhoto3 from "../assets/post-photo-3.jpg";



function ProfilePage() {
  const [fileName, setFileName] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isHovering]);


  return (
    // <div className="container">
    <div className="grid-container">

      {/* profile section */}
      <div className="profile-section left">
        <div className="card profile-card">
          <img src={profilePhoto} className="card-img-top profile-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Atif Iqbal Butt</h5>
            <p className="card-text">Software Developer</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item profile-info">
                <strong>Posts:</strong> 3
              </li>
              <li className="list-group-item profile-info">
                <strong>Likes:</strong> 10
              </li>
              <li className="list-group-item profile-info">
                <strong>Following:</strong> 20
              </li>
              <li className="list-group-item profile-info">
                <strong>Followers:</strong> 50
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* post section */}

      <div id="middle-content" onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)} className="post-section middle">
        <div className="post-section">
          <div className="">

            <div className="card post-card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Write a post</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>

                    <div className="form-group">
                      <label htmlFor="fileInput" className="upload-label">Upload image or video</label>
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="fileInput" aria-describedby="fileInputDescription" onChange={(e) => setFileName(e.target.files[0].name)} />
                        <label className="custom-file-label" htmlFor="fileInput">{fileName ? fileName : "Choose file"}</label>
                      </div>
                      <small id="fileInputDescription" className="form-text text-muted">Max file size: 10 MB</small>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary post-button">
                    Post
                  </button>
                </form>
              </div>
            </div>

            <div className="card post-card mt-3">
              <img src={postPhoto1} className="card-img-top post-image" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Post title 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    &nbsp;Like
                  </button>
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faComment} />
                    &nbsp;Comment
                  </button>
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faShare} />
                    &nbsp;Share
                  </button>
                </div>
              </div>
            </div>

            <div className="card post-card mt-3">
              <img src={postPhoto2} className="card-img-top post-image" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Post title 2</h5>
                <p className="card-text">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    &nbsp;Like
                  </button>
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faComment} />
                    &nbsp;Comment
                  </button>
                  <button type="button" className="btn btn-outline-primary post-button">
                    <FontAwesomeIcon icon={faShare} />
                    &nbsp;Share
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>



      {/* Right profile section */}
      <div className="right-menu-section right">
        <div className="option">
          <h2 className="section-heading">Friend Suggestions</h2>
          <ul className="list-unstyled">
            <li className="list-item">User 1</li>
            <li className="list-item">User 2</li>
            <li className="list-item">User 3</li>
          </ul>
        </div>
        <div className="option">
          <h2 className="section-heading">Trending Topics</h2>
          <ul className="list-unstyled">
            <li className="list-item">Topic 1</li>
            <li className="list-item">Topic 2</li>
            <li className="list-item">Topic 3</li>
          </ul>
        </div>
        <div className="option">
          <h2 className="section-heading">Sponsored Posts</h2>
          <ul className="list-unstyled">
            <li className="list-item">Advertisement 1</li>
            <li className="list-item">Advertisement 2</li>
            <li className="list-item">Advertisement 3</li>
          </ul>
        </div>
        <div className="option">
          <h2 className="section-heading">Groups</h2>
          <ul className="list-unstyled">
            <li className="list-item">Group 1</li>
            <li className="list-item">Group 2</li>
            <li className="list-item">Group 3</li>
          </ul>
        </div>
        <div className="option">
          <h2 className="section-heading">Events</h2>
          <ul className="list-unstyled">
            <li className="list-item">Event 1</li>
            <li className="list-item">Event 2</li>
            <li className="list-item">Event 3</li>
          </ul>
        </div>
        <div className="option">
          <h2 className="section-heading">Messaging</h2>
          <p>Start a conversation with a friend.</p>
        </div>
      </div>





    </div>
    // </div>
  );
}

export default ProfilePage;