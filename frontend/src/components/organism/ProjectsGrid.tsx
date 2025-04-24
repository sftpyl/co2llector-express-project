import ButtonNavBar from "../atoms/ButtonNavBar";
import ProjectCartd from "../molecules/ProjectCartd";
import DraggableScroll from "./DragggableScrollContainer";

const ProjectsGrid = () => {
  return (
    <div className="w-full flex flex-col mt-10 ">
      <div className="w-full flex justify-between flex-wrap gap-5">
        <h3 className="text-5xl">Proyectos Recientes</h3>
        <div>
          <div className="flex gap-1.5 items-center ">
            <span>DE</span>
            <ButtonNavBar
              text="PROYECTOS INICIALES"
              fontSize="text-sm"
              classname="cursor-text!"
            />
            <span>A</span>
            <ButtonNavBar
              text="SOLUCIONES EN PRODUCCION"
              fontSize="text-sm"
              classname="cursor-text!"
            />
          </div>
          <div className="flex gap-1.5 justify-end items-center mt-2.5">
            <span>ENTRE</span>
            <ButtonNavBar
              text="2023"
              fontSize="text-sm"
              classname="cursor-text!"
            />
            <span>Y</span>
            <ButtonNavBar
              text="2025"
              fontSize="text-sm"
              classname="cursor-text!"
            />
          </div>
        </div>
      </div>
      <DraggableScroll>
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
        <ProjectCartd />
      </DraggableScroll>
    </div>
  );
};

export default ProjectsGrid;
