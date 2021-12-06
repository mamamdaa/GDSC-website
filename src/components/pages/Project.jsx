import React from "react";
import "./css/project.css";
import sample from "../images/sample.jpg";

function Project() {
  return (
    <div className="project-box">
      <div className="projects position-relative ">
        <div className="content position-absolute mt-4 start-50 translate-middle-x ">
          <h1 class="mt-5">Projects</h1>

          <p class="mt-xl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris
            mattis tempor elementum eget tortor mi nec auctor. Vulputate enim
            tortor augue et est vulputate etiam ut magna. Et donec ultricies
            semper maecenas risus sed. Commodo vitae faucibus gravida nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris
            mattis tempor elementum eget tortor mi nec auctor. Vulputate enim
            tortor augue et est vulputate etiam ut magna. Et donec ultricies
            semper maecenas risus sed. Commodo vitae faucibus gravida nulla.
          </p>
        </div>
      </div>

      <div className="sample-projects p-sm-5">
        <div className="projects-container d-flex justify-content-center">
          <div class="card m-2 border-0">
            <div class="card-body ">
              <h1 class="card-title">Sample project title</h1>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <a href="#" class="btn btn-primary m-1">
                View
              </a>
              <a href="#" class="btn btn-light border-primary border-2 m-1">
                Learn more
              </a>
            </div>
          </div>

          <div class="card boxes border-0 p-3 m-2">
            <div className="project-boxes mt-xl-3 d-flex justify-content-center">
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sample-projects p-sm-5">
        <div className="projects-container d-flex justify-content-center">
          <div class="card m-2 border-0">
            <div class="card-body ">
              <h1 class="card-title">Sample project title</h1>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel
                mauris mattis tempor elementum eget tortor mi nec auctor.
                Vulputate enim tortor augue et est vulputate etiam ut magna. Et
                donec ultricies semper maecenas risus sed. Commodo vitae
                faucibus gravida nulla.
              </p>
              <a href="#" class="btn btn-primary m-1">
                View
              </a>
              <a href="#" class="btn btn-light border-primary border-2 m-1">
                Learn more
              </a>
            </div>
          </div>

          <div class="card boxes border-0 p-3 m-2">
            <div className="project-boxes mt-xl-3 d-flex justify-content-center">
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
              <div className="card project-box m-1 border-0">
                <img src={sample} alt="Sample" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
