interface ProjectCardProps {
  name: string
  // imageUrl: string
}

export function ProjectCard({ name }: ProjectCardProps) {
  return (
    <div className="flex flex-col max-w-[300px] bg-white border border-gray-300 rounded-lg shadow overflow-hidden cursor-pointer">
      <div className="bg-gray-200 w-full h-40" />
      <div className="p-2">
        <span>{name}</span>
      </div>
    </div>
  )
}
