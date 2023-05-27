export interface IProject {
  id: number;
  title: string;
  role: string;
  github?: string;
  link?: string;
  description: string;
  thumbnail: string;
  features: IFeature[];
  technologies: {
    name: string
  }[];
}

export interface IFeature {
  path: string;
  title?: string;
  description?: string;
}
