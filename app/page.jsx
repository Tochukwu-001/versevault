import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <section className="bg-black/70 min-h-dvh flex items-center justify-center">
        <div className="text-white flex flex-col justify-center items-center gap-20 lg:w-3xl w-full max-md:p-3">
          <h1 className="text-center text-2xl md:text-4xl font-bold uppercase">
            Your community for stories and poems
          </h1>

          <p className="text-xl text-center">
            <span className="text-purple-500 font-bold italic">VerseVault</span>{" "}
            is where imagination takes shape. Write poems, craft stories, and
            explore the creations of others. Whether you’re just starting your
            writing journey or you’ve been expressing yourself for years, join a
            community built for sharing, connecting, and experiencing words in
            their purest form.
          </p>

          <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
            <Link
              href={"/"}
              className="border border-gray-400 rounded-lg px-8 py-3 text-xl hover:bg-gray-50/10 transition-all duration-200 max-md:w-full text-center"
            >
              Behind the Vault
            </Link>
            <Link
              href={"/"}
              className="text-xl px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 max-md:w-full text-center"
            >
              Start Creating
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
