import CareerTimeline from "../components/careerTimeline"

function AboutMe() {
    return (
        <section id="AboutMe" className="flex flex-col w-[100vw] min-h-[900px] bg-gray-100 dark:bg-gray-900 items-center pb-5">
            <h1 className="text-4xl mt-12 mb-4 text-black dark:text-white">About Me</h1>
            <p className="mb-12 text-center">A little bit a about my story</p>
            <div className="flex">
                <CareerTimeline />
            </div>

        </section>
    )
}

export default AboutMe
