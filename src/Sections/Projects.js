function Projects() {
    return (
      <section className="bg-[#36454F] dark:bg-gray-900">
        <h1 className="underline pt-9 decoration-orange-300 flex justify-center text-4xl pt-5 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-black">
          Projects
        </h1>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <p className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Image Demo
            </p>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              Raspberry Pi OCR Summarizer
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Used a micro computer with a camera module to take low quality
              images of text. Using image data from the camera, I was able to
              extract characters, and feed them into a text summary pipeline.
              This project called upon a variety of libraries, using
              technologies in computer vision, machine learning, and natural
              language processing.
            </p>
            <a
              href="https://docs.google.com/presentation/d/1np0eR8Sxbrn7FDmA1tCazrk8-DZt7iyXT6X9HTkIgq8/edit?usp=sharing"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              rel="noopener"
            >
              Sample Images
             
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <p className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Demo
              </p>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Webscrapers
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Web developmemt business created by myself and two other
                friends. We utilized our skills in full-stack software
                development to create websites for local businesses. This is a
                venture that is ongoing, so we are continuing to look for
                clients.
              </p>
              <a
                href="https://webscrapers.org/"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                webscrapers.org
               
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit#slide=id.p"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                rel="noopener"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Image Demo
              </a>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Impulse Workout App
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Social fitness app designed to help users organize their
                workouts. Users are able to add each other, which grants them
                access to each other's published workouts. Utilized an API to
                fetch thousands of excerices filtered by muscle group,
                difficulty level, equipment, etc.
              </p>
              <a
                href="https://github.com/SahilKhunt08/Impulse-Workout-App"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Github
             
              </a>

              <a
                href="https://docs.google.com/presentation/d/1C55xx0iuZxkgIDcGtdVzLzj6qlmxoCyT5WYhqj00Obw/edit?usp=sharing"
                className="ml-3 text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Sample Images
               
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
              <p className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Video
              </p>
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Rube Goldberg Physics Simulation
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                Designed a fun Rube Goldberg style program that features a
                multitude of moving entities following the physics of the
                JavaScript libraries p5.js and Matter.js.
              </p>
              <a
                href="https://youtu.be/6peGWMOrVn0"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                rel="noopener"
              >
                Watch Demo
              
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects