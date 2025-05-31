import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiDocker, SiExpress, SiPython } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Git', icon: <FaGit className="text-orange-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-700" /> },
    { name: 'Express', icon: <SiExpress className="text-gray-800" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-500" /> }, // Ajoute Python ici
  ];
  return (
    <section id="skills" className="py-20 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition duration-300">
              <div className="flex justify-center text-2xl mb-2">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
