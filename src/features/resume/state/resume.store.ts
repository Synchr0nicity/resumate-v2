import { create } from "zustand";
import {
  Resume,
  Experience,
  Education,
  PersonalDetails,
  Link,
} from "./resume.types";
import { resume } from "react-dom/server";

type ResumeStore = {
  resume: Resume;

  setResume: (resume: Resume) => void;

  updatePersonalDetails: (data: Partial<PersonalDetails>) => void;
  addLink: (link: Link) => void;
  removeLink: (id: string) => void;
  updateLink: (id: string, data: Partial<Link>) => void;

  addExperience: (item: Experience) => void;
  updateExperience: (id: string, data: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;

  addEducation: (item: Education) => void;
  updateEducation: (id: string, data: Partial<Education>) => void;
  deleteEducation: (id: string) => void;

  resetResume: () => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  resume: {
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      links: [],
      reference: "",
      description: "",
    },
    workHistory: [],
    education: [],
  },

  setResume: (resume) => set({ resume }),

  updatePersonalDetails: (data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          ...data,
        },
      },
    })),

  addLink: (link) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          links: [...(state.resume.personalDetails.links || []), link],
        },
      },
    })),

  updateLink: (id, data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          links: state.resume.personalDetails.links?.map((l) =>
            l.id === id ? { ...l, ...data } : l,
          ),
        },
      },
    })),

  removeLink: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        personalDetails: {
          ...state.resume.personalDetails,
          links: state.resume.personalDetails.links?.filter((l) => l.id !== id),
        },
      },
    })),

  addExperience: (item) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: [...state.resume.workHistory, item],
      },
    })),

  updateExperience: (id, data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.workHistory.map((exp) =>
          exp.id === id ? { ...exp, ...data } : exp,
        ),
      },
    })),

  deleteExperience: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        experience: state.resume.workHistory.filter((exp) => exp.id !== id),
      },
    })),

  addEducation: (item) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: [...state.resume.education, item],
      },
    })),

  updateEducation: (id, data) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.map((edu) =>
          edu.id === id ? { ...edu, ...data } : edu,
        ),
      },
    })),

  deleteEducation: (id) =>
    set((state) => ({
      resume: {
        ...state.resume,
        education: state.resume.education.filter((edu) => edu.id !== id),
      },
    })),

  resetResume: () =>
    set({
      resume: {
        personalDetails: {
          name: "",
          email: "",
          phone: "",
          address: "",
          dob: "",
          links: [],
          reference: "",
          description: "",
        },
        workHistory: [],
        education: [],
      },
    }),
}));
