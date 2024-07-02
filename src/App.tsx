import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import { ContactLink } from './components/contact-link'
import { ProjectCard } from './components/project-card'
import { ProjectModal } from './components/project-modal'
import { yearDiff } from './utils/yearDiff'

export function App() {
  const expTime = yearDiff(new Date(2021, 0, 1), new Date())

  return (
    <main className="flex flex-col w-full gap-16 max-w-[1150px] mx-auto h-full p-4">
      <ProjectModal />

      <div className="flex flex-col max-w-fit">
        <h1 className="text-6xl font-bold">
          <span className="text-4xl font-normal">Olá, sou</span>
          <br />
          Matheus Bezerra
        </h1>
        <span className="text-xl self-end">desenvolvedor web</span>
      </div>

      <section id="sobre-mim">
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        <p className="text-lg">
          Atuo como desenvolvedor web há {expTime} anos criando interfaces
          intuitivas com foco em acessibilidade e usabilidade. Acredito em
          proporcionar às pessoas a mesma experiência que eu gostaria de ter,
          entregando o meu melhor em cada projeto.
        </p>
      </section>

      <section id="projetos">
        <h2 className="text-2xl font-bold">Projetos</h2>
        <p className="text-lg mb-4">
          Esses foram os projetos nos quais atuei, seja no processo de criação,
          implementação ou manuntenção
        </p>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 7 }).map((_, index) => (
            <ProjectCard
              key={`project-${index}`}
              name={`Projeto ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="contato">
        <h2 className="text-2xl font-bold">Onde me Encontrar</h2>
        <p className="text-lg mb-4">
          Estou sempre aberto a novas oportunidades e desafios. Entre em contato
          comigo!
        </p>

        <div className="flex flex-col gap-2">
          <ContactLink
            icon={<Envelope size={24} />}
            title="E-mail"
            linkTitle="sethwololo@gmail.com"
            linkHref="mailto:sethwololo@gmail.com"
          />

          <ContactLink
            icon={<LinkedinLogo size={24} />}
            title="LinkedIn"
            linkTitle="linkedin.com/in/matheush5710"
            linkHref="https://linkedin.com/in/matheush5710"
          />

          <ContactLink
            icon={<GithubLogo size={24} />}
            title="GitHub"
            linkTitle="github.com/sethwololo"
            linkHref="https://github.com/sethwololo"
          />
        </div>
      </section>
    </main>
  )
}
