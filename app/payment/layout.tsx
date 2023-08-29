import { UserProvider } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Layout({ children }: any) {
    return (
      <UserProvider>
        
            {children}
  
      </UserProvider>
    )
  }
)