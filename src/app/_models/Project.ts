export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl: string;
  picture: string;
  dateCreated: Date;
}
