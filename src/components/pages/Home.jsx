import React from "react";
import "./css/home.css";
import sample from "../images/sample.jpg";
import org from "../images/org.png";
function Home() {
  return (
    <div className="box">
      <div className="first p-sm5">
        <div class="container">
          <div class="card mt-sm-5">
            <h2 class="mb-4 mt-sm-5">Connect . Learn .Grow.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
              mauris mattis tempor elementum eget tortor mi nec auctor.
              Vulputate enim tortor augue et est vulputate etiam ut magna. Et
              donec ultricies semper maecenas risus sed. Commodo vitae faucibus
              gravida nulla. Phasellus mauris duis turpis dolor aliquam
              porttitor. In tincidunt et nulla odio nec consectetur. Diam,
              tempus erat hendrerit dictumst sed a tincidunt. Aliquet gravida
              condimentum donec ipsum.
            </p>

            <a class="btn btn-primary mb-4" href="#" role="button">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div class="wrapper-flex d-flex justify-content-center p-sm-4">
        <div class="container">
          <h1 class="ms-sm-1">Our Organization</h1>
          <p class="ms-sm-1 mt-sm-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris
            mattis tempor elementum eget tortor mi nec auctor. Vulputate enim
            tortor augue et est vulputate etiam ut magna. Et donec ultricies
            semper maecenas risus sed. Commodo vitae faucibus gravida nulla.
            Phasellus mauris duis turpis dolor aliquam porttitor. In tincidunt
            et nulla odio nec consectetur. Diam, tempus erat hendrerit dictumst
            sed a tincidunt. Aliquet gravida condimentum donec ipsum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris mattis
            tempor elementum eget tortor mi nec auctor. Vulputate enim tortor
            augue et est vulputate etiam ut magna. Et donec ultricies semper
            maecenas risus sed. Commodo vitae faucibus gravida nulla. Phasellus
            mauris duis turpis dolor aliquam porttitor. In tincidunt et nulla
            odio nec consectetur. Diam, tempus erat hendrerit dictumst sed a
            tincidunt. Aliquet gravida condimentum donec ipsum.
          </p>
          <a
            class="btn btn-primary position-relative ms-sm-1"
            href="#"
            role="button"
          >
            Join us
          </a>
        </div>

        <div class="container con1">
          <img class="mt-4" src={org} alt="Organization" />
        </div>
      </div>

      <div class="thrid p-sm-5">
        <div class="head ">
          <h1 class="ms-5 mt-4">What we do</h1>
        </div>

        <div class="wrapper-card d-flex  justify-content-center mt-5">
          <div class="container m-2">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Webinars</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="container m-2">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Tech talks</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn  float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="container m-2">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Workshops</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="container m-2">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Tech Solutions</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn  float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fourth p-sm-5">
        <div class="head ">
          <h1 class="ms-5 mt-4">Upcomming events</h1>
        </div>

        <div class="wrapper-card2 d-flex justify-content-center mt-5">
          <div class="container m-1">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="container m-1 ">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn  float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div class="container m-1">
            <div class="card">
              <img class="card-img-top" src={""} alt="Logo" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn float-end">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
