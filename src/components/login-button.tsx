import { useSession, signIn, signOut } from "next-auth/react";

export function LoginButton() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  async function onLog() {
    const res = await signIn()
    console.log(res)
    return res
}
    

  return (
    <>
      Not signed in <br />
      <button onClick={onLog}>Sign in</button>
    </>
  );
}
