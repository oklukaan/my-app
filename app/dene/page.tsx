import { withPageAuthRequired } from "@auth0/nextjs-auth0";

async function Page({ params }: { params?: { id: string } }) {
  return (
    <>
    </>
  )
}
// @ts-ignore
export default withPageAuthRequired(Page);