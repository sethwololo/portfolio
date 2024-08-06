import { TbBrandGithub, TbBrandLinkedin, TbMail } from 'solid-icons/tb'

import { ContactLink } from './components/contact-link'
import { ProjectGrid } from './components/project-grid'
import * as Section from './components/section'
import { yearDiff } from './utils/yearDiff'

export function App() {
  const expTime = yearDiff(new Date(2021, 0, 1), new Date())

  return (
    <main class="mx-auto flex h-full w-full max-w-[1120px] flex-col gap-32 p-4 pb-20">
      <h1 class="my-32 ml-auto flex max-w-fit flex-col text-zinc-600 sm:my-64">
        <span class="text-2xl font-normal sm:text-4xl">olá, sou</span>
        <strong class="text-4xl font-bold text-zinc-700 sm:text-6xl">
          Matheus Bezerra
        </strong>
        <span class="self-end text-xl">desenvolvedor web</span>
      </h1>

      <Section.Root id="sobre-mim">
        <Section.Title>sobre mim</Section.Title>
        <Section.Text>
          atuo como desenvolvedor web há {expTime} anos, criando interfaces
          intuitivas com foco em acessibilidade e usabilidade. acredito em
          proporcionar às pessoas a mesma experiência que eu gostaria de ter,
          entregando o meu melhor em cada projeto.
        </Section.Text>
      </Section.Root>

      <Section.Root id="meu-trabalho">
        <Section.Title>meu trabalho</Section.Title>
        <Section.Text>
          esses foram os projetos em que estive envolvido:
        </Section.Text>

        <ProjectGrid />
      </Section.Root>

      <Section.Root id="contato">
        <Section.Title>onde me encontrar</Section.Title>

        <div class="flex flex-col gap-2">
          <ContactLink
            icon={<TbMail size={18} />}
            title="e-mail"
            linkTitle="sethwololo@gmail.com"
            linkHref="mailto:sethwololo@gmail.com"
          />

          <ContactLink
            icon={<TbBrandGithub size={18} />}
            title="github"
            linkTitle="github.com/sethwololo"
            linkHref="https://github.com/sethwololo"
          />

          <ContactLink
            icon={<TbBrandLinkedin size={18} />}
            title="linkedin"
            linkTitle="linkedin.com/in/matheush5710"
            linkHref="https://linkedin.com/in/matheush5710"
          />
        </div>
      </Section.Root>
    </main>
  )
}
