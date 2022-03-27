import React from "react";
import { madeProjects } from "../../data/madeprojects";
import "../../styles/madeProject/MadeProject.css";
function MadeProject() {
  return (
    <div>
      {madeProjects.map((madeProject) => {
        return (
          <>
            <div className="madeProjectDiv">
              <h1>{madeProject.type}</h1>
              {madeProject.projects.map((project) => {
                return (
                  <div className="row gx-0 gy-0 individual__project">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <img src={project.image} alt="gmail" height={"100px"} />
                    </div>
                    <div
                      className="col-lg-8 col-md-8 col-sm-12"
                      style={{ textAlign: "left" }}
                    >
                      <div>{project.name}</div>
                      <div>{project.desc}</div>
                      <div>{project.stack}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="the__divider"></div>
          </>
        );
      })}
    </div>
  );
}

export default MadeProject;

function MadeProjectTile() {
  return (
    <div>
      <h1></h1>
    </div>
  );
}
