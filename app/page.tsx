import Board from "./Board";

export default function Home() {
    return (
        <>
            <header className="overflow-hidden">
                <a
                    id="skip-to-content"
                    aria-label="Skip to main content"
                    className="absolute left-[-9999px] top-4 z-50 rounded bg-primary-50 p-2 text-center text-white no-underline shadow-ring focus:left-5"
                    href="#main"
                >
                    Skip to content
                </a>
            </header>
            <header className="text-center border-b border-gray-500 py-4">
                <section>
                    <h1 className="text-4xl font-extrabold">
                        W
                        <span className="text-green-700">ord</span>
                        <span className="text-gray-600">u</span>
                        <span className="text-yellow-500">l</span>
                    </h1>
                </section>
            </header>
            <main
                id="main"
                className="flex flex-col justify-center items-center space-y-4 py-10 max-w-lg mx-auto"
            >
                <Board />
            </main>
            {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}
            {/*     <a */}
            {/*         className="flex items-center gap-2 hover:underline hover:underline-offset-4" */}
            {/*         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
            {/*         target="_blank" */}
            {/*         rel="noopener noreferrer" */}
            {/*     > */}
            {/*         Learn */}
            {/*     </a> */}
            {/*     <a */}
            {/*         className="flex items-center gap-2 hover:underline hover:underline-offset-4" */}
            {/*         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
            {/*         target="_blank" */}
            {/*         rel="noopener noreferrer" */}
            {/*     > */}
            {/*         Examples */}
            {/*     </a> */}
            {/*     <a */}
            {/*         className="flex items-center gap-2 hover:underline hover:underline-offset-4" */}
            {/*         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" */}
            {/*         target="_blank" */}
            {/*         rel="noopener noreferrer" */}
            {/*     > */}
            {/*         Go to nextjs.org → */}
            {/*     </a> */}
            {/* </footer> */}
        </>
    );
}
