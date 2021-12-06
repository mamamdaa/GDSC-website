import React from "react";
import "./css/event.css";
import sample from "../images/sample.jpg";

function Event() {
  return (
    <div className="event-box">
      <div className="events ">
        <div class=" border-bottom mx-auto">
          <h1 class=" p-2 mt-5 mb-4">Upcoming events</h1>
          <div className="events-container mb-5 d-flex justify-content-center">
            <div class="card m-2 ">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
            <div class="card m-2 ">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
            <div class="card m-2 ">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="events">
        <div class=" border-0 mx-auto">
          <h1 class=" p-2 mt-5 mb-4">Recent events</h1>
          <div className="events-container mb-5 d-flex justify-content-center">
            <div class="card m-2 mb-5">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
            <div class="card m-2 mb-5">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
            <div class="card m-2 mb-5">
              <img src={sample} alt="Sample" />
              <div class="card-body">
                <h5 class="card-title">Title of the event</h5>
                <p class="card-text">
                  In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                  hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                  nec consectetur.
                </p>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cursor-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                  </svg>
                </div>

                <a href="#" class="btn btn-primary float-end mt-4">
                  Register now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="activity">
        <h1 class="text-center p-4">Study jams</h1>

        <div className="activity-container  d-flex justify-content-center">
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2  mb-5">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="activity">
        <h1 class="text-center p-4">Workshops</h1>

        <div className="activity-container  d-flex justify-content-center">
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2  mb-5">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="activity">
        <h1 class="text-center p-4">Tech Talks</h1>

        <div className="activity-container  d-flex justify-content-center">
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2 mb-5 ">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
          <div class="card m-2  mb-5">
            <img src={sample} alt="Sample" />
            <div class="card-body">
              <h5 class="card-title">Title of the event</h5>
              <p class="card-text">
                In tincidunt et nulla odio nec consectetur. Diam, tempus erat
                hendrerit dictumst sed a tincidunt. In tincidunt et nulla odio
                nec consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
