import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

import { ContactLink } from './components/contact-link'
import { ProjectGrid } from './components/project-grid'
import { SectionText } from './components/section-text'
import { SectionTitle } from './components/section-title'
import { ProjectsProvider } from './contexts/ProjectsContext'
import { yearDiff } from './utils/yearDiff'

export function App() {
  const expTime = yearDiff(new Date(2021, 0, 1), new Date())

  return (
    <main className="flex flex-col w-full gap-32 max-w-[1120px] mx-auto h-full p-4 pb-20">
      <h1 className="flex flex-col max-w-fit my-32 sm:my-64 ml-auto text-zinc-600">
        <span className="text-2xl sm:text-4xl font-normal">olá, sou</span>
        <strong className="text-4xl sm:text-6xl font-bold text-zinc-700">
          Matheus Bezerra
        </strong>
        <span className="text-xl self-end">desenvolvedor web</span>
      </h1>

      <section id="sobre-mim" className="flex flex-col gap-4">
        <SectionTitle>sobre mim</SectionTitle>
        <SectionText>
          atuo como desenvolvedor web há {expTime} anos, criando interfaces
          intuitivas com foco em acessibilidade e usabilidade. acredito em
          proporcionar às pessoas a mesma experiência que eu gostaria de ter,
          entregando o meu melhor em cada projeto.
        </SectionText>
      </section>

      <section id="meu-trabalho" className="flex flex-col gap-4">
        <SectionTitle>meu trabalho</SectionTitle>
        <SectionText>
          esses foram os projetos em que estive envolvido:
        </SectionText>
        <ProjectsProvider>
          <ProjectGrid />
        </ProjectsProvider>
      </section>

      <section id="contato" className="flex flex-col gap-4">
        <SectionTitle>onde me encontrar</SectionTitle>
        <SectionText>
          estou sempre aberto a novas oportunidades e desafios. entre em contato
          comigo!
        </SectionText>

        <div className="flex flex-col gap-2">
          <ContactLink
            icon={<Envelope size={18} className="shrink-0" />}
            title="e-mail"
            linkTitle="sethwololo@gmail.com"
            linkHref="mailto:sethwololo@gmail.com"
          />

          <ContactLink
            icon={<LinkedinLogo size={18} />}
            title="linkedin"
            linkTitle="linkedin.com/in/matheush5710"
            linkHref="https://linkedin.com/in/matheush5710"
          />

          <ContactLink
            icon={<GithubLogo size={18} className="shrink-0" />}
            title="github"
            linkTitle="github.com/sethwololo"
            linkHref="https://github.com/sethwololo"
          />
        </div>
      </section>
    </main>
  )
}
