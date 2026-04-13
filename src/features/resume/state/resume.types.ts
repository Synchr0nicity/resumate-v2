export type Link = {
  id: string;
  label?: string;
  url: string;
};

export type PersonalDetails = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: string;
  links?: Link[];
  reference?: string;
  description?: string;
};

export type Experience = {
  id: string;
  company?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  description?: string;
};

export type Education = {
  id: string;
  school?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
};

export type Resume = {
  id?: string;

  personalDetails: PersonalDetails;

  experience: Experience[];
  education: Education[];
};
