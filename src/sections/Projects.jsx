import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    id: 1, 
    title:"Landing Page",
    description:"A beautiful landing page app using React.",
    image:project1,
    tags:["React","TailwindCSs", "Framer-Motion"],
    demoUrl:"#",
    githubUrl:"#",
  },
  {
    id:2,
    title:"Modern Business Page",
    description:"A modern business page app using React.",
    image:project2,
    tags:["React","TailwindCSs", "Framer-Motion"],
    demoUrl:"#",
    githubUrl:"#",
  },
  {
    id:3,
    title:"Web-Build",
    description:"A stylis web page with react and tailwindcss.",
    image:project3,
    tags:["React","TailwindCSs", "Framer-Motion"],
    demoUrl:"#",
    githubUrl:"#",
  }
]
export default function Projects() {
  return(
    <section
    id="projects"
    className="relative text-white bg-gray-800 py-24 px-4 "
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical <span className="text-primary">Builds</span> </h2>

        <p className="text-center  text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects I’m proud of.
          Built with care, refined with learning, and driven by curiosity.
        </p>

     <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, key) => (
        <div
        key={key}
        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
        >
          <div className="h-48 overflow-hidden">
            <img src={project.image} alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary-foregroung">
                  {tag}
                  </span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        </div>
      ))}

     </div>

      </div>
    </section>
  )
}