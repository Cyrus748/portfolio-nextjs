import {
  faMobileButton,
  faLaptopCode,
  faServer,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    title: "Software Development",
    icon: faMobileButton,
    shortDescription:
      "A skilled software developer with a focus on mobile applications, adept at crafting captivating user experiences.",
    description:
      "A proficient Python software developer adeptly crafts robust applications and solutions using the language's versatile syntax and extensive libraries, driving innovation and efficiency in software development.",
  },
  {
    title: "Web Development",
    icon: faLaptopCode,
    shortDescription:
      "I deliver visually stunning and user-friendly websites to help you establish a strong online presence.",
    description:
      "I deliver visually stunning and user-friendly websites to help you establish a strong online presence. Whether it's a simple informational site or a complex e-commerce platform, I provide tailored web development solutions. Using the latest frameworks and technologies, I create responsive, SEO-friendly websites that offer a seamless browsing experience on all devices.",
  },
  {
    title: "BlockChain Development",
    icon: faServer,
    shortDescription:
      "I enhance your digital applications with a robust and scalable blockchain infrastructure.",
    description:
      "A proficient software developer specializing in blockchain technology, adept at creating innovative solutions that harness the power of decentralized systems, ensuring security, transparency, and efficiency in digital transactions and applications.",
  },
  {
    title: "Product Strategy",
    icon: faBrain,
    shortDescription:
      "I collaborate with you to define clear goals, target audiences, and a roadmap for success.",
    description:
      "I collaborate with you to define clear goals, target audiences, and a roadmap for success. My expertise in product ideation and market analysis ensures that your product not only meets user needs but also aligns with your business strategy for long-term growth and full potential of your digital products with effective product strategy.",
  },
];

export default services;
