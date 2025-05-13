
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Responsivo",
    description: "Loja virtual completa com carrinho de compras, filtros de pesquisa e sistema de pagamento integrado.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=E-commerce&font=montserrat",
    tags: ["React", "Redux", "Stripe", "Styled Components"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description: "Painel administrativo com visualização de dados em tempo real, gráficos interativos e relatórios personalizados.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Dashboard&font=montserrat",
    tags: ["Vue.js", "Chart.js", "Vuex", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "App de Gestão de Tarefas",
    description: "Aplicativo para organização de tarefas com categorias, prioridades, notificações e sincronização entre dispositivos.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Task+App&font=montserrat",
    tags: ["React Native", "TypeScript", "Redux", "Node.js"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Site de Streaming",
    description: "Plataforma de streaming de vídeos com reprodução em alta qualidade, sistema de recomendações e perfis de usuário.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Streaming&font=montserrat",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AWS"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Rede Social de Fotos",
    description: "Rede social para compartilhamento de fotos com filtros, comentários, likes e recursos de acessibilidade.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=PhotoShare&font=montserrat",
    tags: ["React", "GraphQL", "Firebase", "Material UI"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "PWA de Previsão do Tempo",
    description: "Aplicativo progressivo de previsão do tempo com geolocalização, alertas e modo offline.",
    image: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Weather+App&font=montserrat",
    tags: ["Vue.js", "PWA", "OpenWeather API", "Geolocation"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => 
        project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );
  
  const uniqueTags = Array.from(new Set(projectsData.flatMap(project => project.tags)))
    .sort((a, b) => a.localeCompare(b));
  
  return (
    <section id="projects" className="py-24 section-padding relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="mt-8 mb-12">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all" 
                  ? "bg-portfolio-purple text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Todos
            </button>
            {uniqueTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? "bg-portfolio-purple text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card group animate-fade-in"
              style={{ animationDelay: `${0.1 * project.id}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="project-card-overlay group-hover:opacity-100">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-portfolio-purple text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-portfolio-dark-purple transition-colors"
                    aria-label={`Ver projeto ${project.title} ao vivo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver ao vivo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-white/20 transition-colors"
                    aria-label={`Ver código fonte do projeto ${project.title} no Github`}
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Nenhum projeto encontrado com a tecnologia "{filter}".
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-4 btn-primary"
            >
              Ver todos os projetos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
