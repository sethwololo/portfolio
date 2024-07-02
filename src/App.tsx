import { ProjectCard } from './components/project-card'
import { yearDiff } from './utils/yearDiff'

export function App() {
  const expTime = yearDiff(new Date(2021, 0, 1), new Date())

  return (
    <main className="flex flex-col w-full gap-16 max-w-[1150px] mx-auto h-full bg-red-50 p-4">
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
        <p className="text-lg mb-6">
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
        <p className="text-lg">
          Estou sempre aberto a novas oportunidades e desafios. Entre em contato
          comigo!
        </p>
        <p className="text-lg">
          <b>E-mail:</b>{' '}
          <a href="mailto:sethwololo@gmail.com">sethwololo@gmail.com</a>
        </p>
        <p className="text-lg">
          <b>LinkedIn:</b>{' '}
          <a href="https://www.linkedin.com/in/matheush5710/">
            linkedin.com/in/matheush5710
          </a>
        </p>
        <p className="text-lg">
          <b>GitHub:</b>{' '}
          <a href="https://github.com/sethwololo">github.com/sethwololo</a>
        </p>
      </section>
    </main>
  )
}
