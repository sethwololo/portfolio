import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import { ContactLink } from './components/contact-link'
import { ProjectGrid } from './components/project-grid'
import { yearDiff } from './utils/yearDiff'

export function App() {
  const expTime = yearDiff(new Date(2021, 0, 1), new Date())

  return (
    <main className="flex flex-col w-full gap-32 max-w-[1028px] mx-auto h-full p-4 bg-stone-50">
      <h1 className="flex flex-col max-w-fit my-32 sm:my-48 ml-auto">
        <span className="text-2xl sm:text-4xl font-normal">Olá, sou</span>
        <strong className="text-4xl sm:text-6xl font-bold">
          Matheus Bezerra
        </strong>
        <span className="text-xl self-end">desenvolvedor web</span>
      </h1>

      <section id="sobre-mim" className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Sobre mim</h2>
        <p className="text-md sm:text-lg text-pretty">
          Atuo como desenvolvedor web há {expTime} anos criando interfaces
          intuitivas com foco em acessibilidade e usabilidade. Acredito em
          proporcionar às pessoas a mesma experiência que eu gostaria de ter,
          entregando o meu melhor em cada projeto.
        </p>
      </section>

      <section id="projetos" className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Projetos</h2>
        <p className="text-md sm:text-lg text-pretty">
          Esses foram os projetos nos quais atuei, seja no processo de criação,
          implementação ou manuntenção
        </p>

        <ProjectGrid />
      </section>

      <section id="contato" className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Onde me encontrar</h2>
        <p className="text-md sm:text-lg text-pretty">
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
