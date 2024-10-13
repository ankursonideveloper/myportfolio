import "./index.css";
import ProfilePhoto from "./assets/ProfilePhoto.jpg";
import Header from "./components/Header";
import Section from "./components/Section";
import SkillChildren from "./components/SkillChildren";
import Project from "./components/Project";
import Education from "./components/Education";
import List from "./components/List";
import Contact from "./components/Contact";
import AboutMeContent from "./components/AboutMeContent";
import Experience from "./components/Experience";
import experiences from "./constants/ExperienceContent";

import {
  UserRound,
  FlaskConical,
  BriefcaseBusiness,
  Brain,
  GraduationCap,
  Heart,
  Medal,
  UserRoundSearch,
} from "lucide-react";

function App() {
  return (
    <>
      <div className="w-2/3 mx-auto mt-6 rounded-lg border-blue-700 border-2 bg-slate-100 shadow-xl">
        <Header
          name="Ankur Soni"
          designation="Full Stack Developer"
          photoSrc={ProfilePhoto}
        ></Header>
        <Section Icon={UserRound} sectionName="About me">
          <AboutMeContent />
        </Section>
        <Section Icon={FlaskConical} sectionName="Experience">
          {experiences.map((item) => {
            const experienceHeaderKey = Object.keys(item)[0];
            return (
              <Experience
                experienceHeader={experienceHeaderKey}
                experienceDescription={item[experienceHeaderKey].Content}
                skills={item[experienceHeaderKey].Skills}
              ></Experience>
            );
          })}
        </Section>
        <Section Icon={BriefcaseBusiness} sectionName="Projects">
          <Project
            projectTitle="Rock Paper Scissor Game"
            projectDescription="Built a fully functional Rock Paper Scissors game, demonstrating proficiency in JavaScript for game development and user interaction handling. The project highlighted skills in DOM manipulation, event handling, and creating a responsive design."
            projectSkills={["HTML", "CSS", "JavaScript"]}
          ></Project>
        </Section>
        <Section Icon={Brain} sectionName="Skills">
          <SkillChildren></SkillChildren>
        </Section>
        <Section Icon={GraduationCap} sectionName="Education">
          <Education
            title="Bachelor of Technology in Electronics & Communication"
            description="Institute of Engineering and Technology, 2014-2018"
          ></Education>
        </Section>
        <Section Icon={Heart} sectionName="Hobbies & Interests">
          <List
            list={[
              "Reading Books",
              "Playing Cricket",
              "Playing Badminton",
              "Watching Podcast",
            ]}
          ></List>
        </Section>
        <Section Icon={Medal} sectionName="Extracurricular Activities">
          <List list={["Marathon Runner", "Dandiya", "Diwari Playing"]}></List>
        </Section>
        <Section Icon={UserRoundSearch} sectionName="Contact & Social Media">
          <Contact></Contact>
        </Section>
      </div>
    </>
  );
}

export default App;
