const SkillList = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "Angular",
  "React",
  "Node.js",
  "Express.js",
  "TypeScript",
  "HTML",
  "CSS",
  "Sass",
  "Tailwind CSS",
  "Next.js",
  "Strapi",
  "Firebase",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "CI/CD",
  "Generative AI",
  "SEO",
  "AWS",
  "Google Cloud",
  "Azure",
];


const Skills = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light">
      <span className="font-semibold text-lg sm:text-2xl md:text-3xl text-accent dark:text-accentDark">
        Olá! Sou Elton José Mota Costa de Souza, um líder técnico na Zup Innovation com mais de 15 anos de experiência em desenvolvimento de software e gestão de projetos. Minha jornada no mundo da tecnologia começou quando eu era jovem e se desenvolveu através de inúmeras experiências desafiadoras e recompensadoras.
      </span>
      <ul className="flex flex-wrap mt-8 justify-center  xs:justify-start">
        {SkillList.map((item, index) => {
          return (
            <li
              key={index}
              className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
