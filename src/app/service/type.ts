export type DataProjects = {
  name: string;
  imageMain: string;
  Links: string[];
  descriptionBrief: string;
  descriptionMain: string;
  technologies: TechnologiesProps[];
};

interface TechnologiesProps {
  tec: string;
  color: string;
}
