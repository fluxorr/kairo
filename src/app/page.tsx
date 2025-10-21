import prisma from "@/lib/db"

export default async function Page() {

  const users = await prisma.user.findMany();

  return (
    <div className="flex justify-center items-center h-screen" >
      HEllo world
      {JSON.stringify(users)}
    </div>
  )
}