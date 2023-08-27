
"use client"
import { useUser } from '@auth0/nextjs-auth0/client';
export default function Index() {
  const { user, error, isLoading } = useUser();

  
  if (error) return <div>{error.message}</div>;
  
  
  if (user) {
    return (
      <div className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
       
      </div>
    );
  }

  return (
    <div className='px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5'>
        <a href="/api/auth/login">Register</a>
  
  </div>
  );
}