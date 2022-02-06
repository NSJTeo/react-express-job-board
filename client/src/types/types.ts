type Requirements = {
  content: string;
  items: string[];
};

type Role = {
  content: string;
  items: string[];
};

export type JobPosting = {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirements;
  role: Role;
};

export type Theme = {
  background: String;
  infoBackground: String;
  button: String;
  textColor: String;
};
