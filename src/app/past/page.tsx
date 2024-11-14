/**
 * app/past/page.tsx
 * Will show the past information of boilermake
 * @unkn-wn, @VarunJasti
 * 11-14-2024
 */

export default function PastPage() {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>In the Past | BoilerMake XII</title>
            <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <meta name="title" content="In the Past | BoilerMake XII" />
            <meta
                name="description"
                content="Purdue University's flagship hackathon, BoilerMake, is back in January 2025. Adventure Awaits."
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n            body {\n                font-family: "Dosis", sans-serif;\n                font-weight: 500;\n            }\n            h1 {\n                font-family: "Arvo", serif;\n            }\n        '
                }}
            />
            <img
                src="/assets/sun.png"
                className="absolute top-0 left-0 z-10 w-0 h-0 md:w-36 md:h-36"
            />
            <main className="flex flex-col bg-white h-full w-full pt-20 gap-8 md:gap-16 justify-between items-center">
                <h1 className="font-bold text-5xl text-center">BoilerMake in the Past</h1>
                <section className="text-black flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="text-center">
                            <h3 className="text-6xl">500+</h3>
                            <p>Attendees</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-6xl">36</h3>
                            <p>Hours of Hacking</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-6xl">$10,000+</h3>
                            <p>Prizes Awarded</p>
                        </div>
                    </div>
                </section>
                <section
                    x-data="{}"
                    x-init="$nextTick(() => {
              let ul = $refs.logos;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
          })"
                    className="w-full inline-flex flex-nowrap overflow-hidden"
                >
                    <ul
                        x-ref="logos"
                        className="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll"
                    >
                        <li>
                            <img src="/assets/pics/1.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/2.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/3.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/4.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/5.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/6.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/7.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/8.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/9.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/10.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/11.JPG" className="rounded-xl h-72" />
                        </li>
                        <li>
                            <img src="/assets/pics/12.JPG" className="rounded-xl h-72" />
                        </li>
                    </ul>
                </section>
                <section className="flex flex-col items-center w-full px-24 md:px-60 lg:px-72 relative">
                    <h2 className="text-3xl font-bold mb-6 md:mb-12 align-center">
                        Past Sponsors
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,_25%)] items-center justify-center justify-items-center gap-6 md:gap-8 place-items-center">
                        <img
                            src="/assets/sponsors/cockroachdb.svg"
                            alt="CockroachDB"
                            className="mx-auto"
                        />
                        <a href="https://www.sandia.gov/" target="_blank">
                            <img
                                src="/assets/sponsors/sandia.png"
                                alt="Sandia National Labs"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.digitalocean.com/" target="_blank">
                            <img
                                src="/assets/sponsors/digitalocean.png"
                                alt="Digital Ocean"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.deere.com/en/index.html" target="_blank">
                            <img
                                src="/assets/sponsors/johndeere.png"
                                alt="John Deere"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.ecolab.com/" target="_blank">
                            <img
                                src="/assets/sponsors/ecolab.png"
                                alt="EcoLab"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.bloomberg.com/" target="_blank">
                            <img
                                src="/assets/sponsors/bloomberg.png"
                                alt="Bloomberg"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.echo3d.com/" target="_blank">
                            <img
                                src="/assets/sponsors/echo3d.png"
                                alt="Echo3D"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.deloitte.com/global/en.html" target="_blank">
                            <img
                                src="/assets/sponsors/deloitte.png"
                                alt="Deloitte"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.sketch.com/" target="_blank">
                            <img
                                src="/assets/sponsors/sketch.png"
                                alt="Sketch"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.palantir.com/" target="_blank">
                            <img
                                src="/assets/sponsors/palantir.png"
                                alt="Palantir"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.klaviyo.com/" target="_blank">
                            <img
                                src="/assets/sponsors/klaviyo.png"
                                alt="Klaviyo"
                                className="mx-auto"
                            />
                        </a>
                        <a
                            href="https://corporate.ford.com/social-impact/community.html"
                            target="_blank"
                        >
                            <img src="/assets/sponsors/ford.png" alt="Ford" className="mx-auto" />
                        </a>
                        <a href="https://thecodex.me/" target="_blank">
                            <img
                                src="/assets/sponsors/codex.png"
                                alt="The Codex"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://dagshub.com/" target="_blank">
                            <img
                                src="/assets/sponsors/dagshub.svg"
                                alt="Dagshub"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.caterpillar.com/" target="_blank">
                            <img
                                src="/assets/sponsors/cat.png"
                                alt="Caterpillar"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.qualcomm.com/" target="_blank">
                            <img
                                src="/assets/sponsors/qualcomm.png"
                                alt="Qualcomm"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://wolfram.com/" target="_blank">
                            <img
                                src="/assets/sponsors/wolfram.png"
                                alt="Wolfram"
                                className="mx-auto"
                            />
                        </a>
                        <a href="https://www.capitalone.com/" target="_blank">
                            <img
                                src="/assets/sponsors/capitalone.png"
                                alt="CapitalOne"
                                className="mx-auto"
                            />
                        </a>
                    </div>
                    <p className="my-16 text-xl text-center">
                        Interested? Reach out to us at{" "}
                        <a href="mailto:sponsorship@boilermake.org" className="underline">
                            sponsorship@boilermake.org
                        </a>
                        !
                    </p>
                    <img
                        src="/assets/campfire.png"
                        alt="Sun"
                        className="absolute bottom-0 right-0 h-0 w-0 md:h-32 md:w-32"
                    />
                </section>
            </main>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>© 2025 Boilermake XII. All rights reserved.</p>
            </footer>
        </>
    )
}
