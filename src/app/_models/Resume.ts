export interface Resume {
  name: string;
  title: string;
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface Experience {
  company: string;
  position: string;
  startDate: Date;
  endDate: Date;
  description?: string;
}

export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
}
