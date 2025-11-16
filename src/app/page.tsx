import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./client";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";



export default async function Page() {

  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="flex justify-center items-center h-screen" >
      <HydrationBoundary state={dehydrate(queryClient)} >
        <Suspense fallback={<p>Loading...</p>} >
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}




// for client Components
// const trpc = useTRPC()
// const { data: users } = useQuery(trpc.getUsers.queryOptions())