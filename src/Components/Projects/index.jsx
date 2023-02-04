import { ProjectCards } from "../ProjectCards";
import { FormattedMessage } from "react-intl";

function Projects() {
  return (
    <div id="Projects">
      <div className="mb-12 pt-20 ml-60">
        <h1 className="text-8xl font-bold">
          {/* PROJECTS */}
          <FormattedMessage id="projects.title" defaultMessage="PROJECTS" />
        </h1>
      </div>
      <div className="grid grid-cols-4 justify-items-center">
        <ProjectCards />
      </div>
    </div>
  );
}

export { Projects };
