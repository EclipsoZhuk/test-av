import { createSlice } from "@reduxjs/toolkit";
import { messageState } from "./store.interface";

const initialState: messageState = {
  inbox: [
    {
      id: 1,
      avatar: "D",
      title: "Doro Onome Churchill",
      email: "nomzykush@gmail.com",
      description:
        "Front-end developer and Technical writer with keen attention to detail and a passion for delivering content as interactive as it is educational.",
    },
    {
      id: 2,
      avatar: "J",
      title: "John Doe",
      email: "john.doe@example.com",
      description:
        "Full-stack developer with a focus on building scalable and efficient web applications.",
    },
    {
      id: 3,
      avatar: "A",
      title: "Alice Johnson",
      email: "alice.johnson@example.com",
      description:
        "UI/UX designer with a creative mindset and a knack for crafting visually stunning user interfaces.",
    },
    {
      id: 4,
      avatar: "M",
      title: "Mary Smith",
      email: "mary.smith@example.com",
      description:
        "Data scientist and machine learning enthusiast, passionate about extracting meaningful insights from data.",
    },
    {
      id: 5,
      avatar: "S",
      title: "Samuel Brown",
      email: "samuel.brown@example.com",
      description:
        "Mobile app developer specializing in cross-platform development, creating seamless and user-friendly experiences.",
    },
    {
      id: 6,
      avatar: "E",
      title: "Emily White",
      email: "emily.white@example.com",
      description:
        "Content creator and social media strategist, leveraging the power of storytelling to engage and captivate audiences.",
    },
    {
      id: 7,
      avatar: "C",
      title: "Chris Green",
      email: "chris.green@example.com",
      description:
        "Backend developer focused on building robust and scalable server-side applications, ensuring smooth system operations.",
    },
    {
      id: 8,
      avatar: "R",
      title: "Rebecca Turner",
      email: "rebecca.turner@example.com",
      description:
        "Graphic designer with a passion for visual communication and creating memorable brand identities.",
    },
    {
      id: 9,
      avatar: "B",
      title: "Brian Clark",
      email: "brian.clark@example.com",
      description:
        "Cybersecurity expert and ethical hacker, dedicated to ensuring the highest level of digital security for organizations.",
    },
    {
      id: 10,
      avatar: "L",
      title: "Laura Martinez",
      email: "laura.martinez@example.com",
      description:
        "Marketing strategist with a data-driven approach, devising effective campaigns to drive brand awareness and engagement.",
    },
  ],
};

export const messageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
