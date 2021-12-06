import React from "react";
import "./css/team.css";

function Team() {
  return (
    <div className="team-box">
      <div className="team position-relative ">
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

      <div className="board-members"></div>
    </div>
  );
}

export default Team;
