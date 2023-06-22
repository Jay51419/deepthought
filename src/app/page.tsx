import TaskCard from "@/components/task-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-2 min-h-screen w-full max-w-5xl mx-auto my-8 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl md:text-2xl text-primary pl-4">
          Technical Project Management
        </h1>
        <button className="bg-primary px-2 py-2 rounded-lg hover:bg-blue-500  flex-shrink-0">
          <span className="text-white text-sm">Submit Task</span>
        </button>
      </div>
      <div className="p-4 bg-blue-100 rounded">
        <h2 className="font-bold text-lg">Explore the world of management</h2>
        <p className="text-neutral-700">
          As a project manager, you play an important role in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <TaskCard
          title="Technical Project Management"
          description={"Story of Alignment\r\n Scope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n".replaceAll(
            "\r\n",
            " "
          )}
          contentSrc="https://www.youtube.com/embed/TiMRwri1xJ8"
        />

        <TaskCard
          title="Threadbuild"
          description={"Watch the video and thread build, and jot out key threads while watching that video.".replaceAll(
            "\r\n",
            " "
          )}
          contentSrc=""
        />
        <TaskCard
          title="Structure you pointers "
          description={"Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.".replaceAll(
            "\r\n",
            " "
          )}
          contentSrc=""
        />

        <TaskCard
          title="4SA Method"
          description={"To explore more read more".replaceAll("\r\n", " ")}
          contentSrc="https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878"
        />
      </div>
    </main>
  );
}
