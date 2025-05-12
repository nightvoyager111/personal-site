import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-50 to-sky-100 p-4">
      {/* ===== Hero Section ===== */}
      <section className="text-center space-y-6">
        {/* Profile Photo — replace /avatar.png with your own image in /public */}
        <Image
          src="/myself.png"
          alt="Your profile picture"
          width={128}
          height={128}
          className="rounded-full shadow-lg"
        />

        {/* Name & Tagline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-sky-400">Hi, I’m</span> <span className="text-indigo-600">Amelia&nbsp;Zhang</span>
        </h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-700 mx-auto">
          2nd‑year Computer Engineering student @ U of T. I love turning complex algorithms into delightful user experiences.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/resume.pdf"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium shadow transition hover:bg-indigo-700"
          >
            Download Résumé
          </a>
          <a
            href="https://github.com/nightvoyager111"
            className="rounded-lg ring-2 ring-indigo-600 px-6 py-3 text-indigo-600 font-medium shadow transition hover:bg-indigo-50"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
