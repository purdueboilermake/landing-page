/**
 * app/page.tsx
 * Home page
 * @unkn-wn, @VarunJasti
 * 11-14-2024
 */

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>BoilerMake XII</title>
      <link rel="icon" href="/landing-page/assets/favicon.ico" type="image/x-icon" />
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
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Dosis:wght@200..800&family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <meta name="title" content="BoilerMake XII" />
      <meta
        name="description"
        content="Purdue University's flagship hackathon, BoilerMake, is back in February 2025. Adventure Awaits."
      />
      <meta
        name="keywords"
        content="boilermake, purdue, midwest, hackathon, boilermaker, uiuc, chicago, Indiana, illinois"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n            body {\n                font-family: "Dosis", sans-serif;\n                font-weight: 500;\n            }\n\n            h1 {\n                font-family: "Arvo", serif;\n            }\n        '
        }}
      />
      <main className="flex flex-col h-screen w-full overflow-hidden justify-end bg-[#ACDEFF]">
        <div className="flex flex-col h-3/4 mx-auto items-center justify-center md:justify-end [@media_((max-height:1080px)_and_(min-width:1620px))]:-mb-32    z-10">
          <img
            src="/landing-page/assets/logo.png"
            alt="Boilermake Logo"
            className="w-5/6 md:max-w-full"
          />
          <h1 className="text-4xl md:text-6xl w-full font-bold text-center">
            BoilerMake XII
          </h1>
          <p className="text-xl my-2 md:text-2xl text-center">
            Adventure Awaits. February 2025
          </p>
          <div className="flex flex-row gap-2 mt-2">
            <a
              className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#8f250c] transition duration-500 ease-in-out"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdEvajhXUU7ygN8Uy8Vt62OxmXKNAGPhDYC8TnTiyeiRlnbSg/viewform"
            >
              Early Interest Form
            </a>
            <a
              href="/past"
              className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#8f250c] transition duration-500 ease-in-out"
            >
              In the Past
            </a>
          </div>
          <div className="flex flex-row gap-3 mt-6">
            <a
              href="mailto:team@boilermake.org"
              className="text-[#333333] hover:text-[#8f250c] transition duration-300 ease-in-out"
            >
              <i className="fas fa-xl fa-envelope" />
            </a>
            <a
              href="https://www.instagram.com/boilermake/?hl=en"
              className="text-[#333333] hover:text-[#8f250c] transition duration-300 ease-in-out"
            >
              <i className="fab fa-xl fa-instagram" />
            </a>
            <a
              href="https://x.com/BoilerMake1"
              className="text-[#333333] hover:text-[#8f250c] transition duration-300 ease-in-out"
            >
              <i className="fab fa-xl fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/boilermake/"
              className="text-[#333333] hover:text-[#8f250c] transition duration-300 ease-in-out"
            >
              <i className="fab fa-xl fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="flex flex-col z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#8f250c"
              fillOpacity="0.7"
              d="M0,224L26.7,229.3C53.3,235,107,245,160,213.3C213.3,181,267,107,320,106.7C373.3,107,427,181,480,197.3C533.3,213,587,171,640,170.7C693.3,171,747,213,800,218.7C853.3,224,907,192,960,149.3C1013.3,107,1067,53,1120,32C1173.3,11,1227,21,1280,64C1333.3,107,1387,181,1413,218.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="md:-mt-8 lg:-mt-16"
          >
            <rect fill="#333" width={1440} height={80} />
            <path
              fill="none"
              stroke="#fff"
              strokeWidth={8}
              strokeDasharray="15,30"
              d="M0,40H1440"
            />
          </svg>
          <div className="h-4 md:h-8 w-full bg-[#7BCF98]"></div>
        </div>
      </main>
    </>
  );
}
