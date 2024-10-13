import React from "react";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <div className="mb-5">
      <p>Email: ankursoni2974@gmail.com</p>
      <p className="mb-3">Phone: +91 9305463385</p>
      <a
        href="https://www.linkedin.com/in/ankursoni2974"
        className="flex justify-start items-center gap-1 text-blue-700 text-sm"
        target="_blank"
      >
        <Linkedin className="size-4" />
        LinkedIn
      </a>
      <a
        href="https://github.com/ankursonideveloper"
        className="flex justify-start items-center gap-1 text-blue-700 text-sm"
        target="_blank"
      >
        <Github className="size-4" />
        Github
      </a>
    </div>
  );
};

export default Contact;
