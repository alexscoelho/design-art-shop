"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SignInButton = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <>
      {session ? (
        <>
          <Link
            href="/admin"
            className={
              pathname.includes("/admin") ? "text-blue-600" : "text-black"
            }
          >
            Administracion
          </Link>
          <Image
            className="rounded-lg"
            src={session?.user?.image!}
            alt="avatar"
            width={70}
            height={50}
          />
          <button
            onClick={() => signOut()}
            className="border py-3 px-2 rounded-md text-lg hover:border-blue-600"
          >
            Cerrar Sesion
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          className="border py-3 px-2 rounded-md text-lg hover:border-blue-600"
        >
          Iniciar Session
        </button>
      )}
    </>
  );
};

export default SignInButton;
