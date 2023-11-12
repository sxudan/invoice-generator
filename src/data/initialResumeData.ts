import { Resume } from "./types";

const initialResumeData: Resume = {
  fullname: "Karl Johnson",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod sunt autem dolor vel, doloremque tenetur modi accusantium amet mollitia voluptatem, soluta saepe adipisci. Voluptas, blanditiis magni! Commodi, incidunt maiores.",
  image: "",
  imageSize: 100,
  designation: "Web Developer",
  skills: ["Java", "Swift", "Nodejs", "Kotlin"],
  institutions: [
    {
      degreeName: "Master of Information Technology",
      collegeName: "Harvard",
      start: "2022",
      end: "2023",
    },
    {
      degreeName: "Master of Information Technology",
      collegeName: "Monash",
      start: "2022",
      end: "2023",
    },
  ],
  experience: [
    {
      position: "Software Lead",
      company: "XYZ PTY Ltd",
      start: "October 2022",
      end: "Nov 2023",
      workItems: [
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
      ],
    },
    {
      position: "Software Lead",
      company: "Apple Inc.",
      start: "October 2022",
      end: "Nov 2023",
      workItems: [
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
        "Database admin and web design",
      ],
    },
  ],
  contact: {
    phone: "0453334344",
    address: "Melbourne",
    email: "xyz@gmail.com",
    website: "https://www.google.com",
  },
  titles: {
    profile: "PROFILE",
    education: "EDUCATION",
    skills: "SKILLS",
    experience: "EXPERIENCE",
  },
};

export default initialResumeData;
