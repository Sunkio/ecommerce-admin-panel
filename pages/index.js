import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    if(!session) {
        return (
          <div className="bg-blue-900 w-screen h-screen flex items-center">
            <div className="text-center w-full">
                <button onClick={() => signIn("google")} className="bg-white p-2 rounded-lg px-4">Login with Google</button>
            </div>
          </div>
      )
    }
    return (
        <div className="bg-blue-900 w-screen h-screen flex items-center">
            <div className="text-center w-full">
                <h1 className="text-white text-2xl font-semibold mb-6">Welcome {session.user.name}</h1>
                <button className="bg-white p-2 rounded-lg px-4" onClick={() => signOut()}>Sign Out</button>
            </div>
        </div>
    )
}
