"use client";
import { useState } from "react";
import TaskCard from "@/components/task-card";
import {
  ArrowLeftShort,
  ArrowRightShort,
  Calendar2Event,
  People,
  Question,
  X,
} from "react-bootstrap-icons";
import Link from "next/link";
import useScrollDirection from "@/hooks/scroll-direction";

export default function Home() {
  const [showJourneyBoard, setShowJourneyBoard] = useState(false);
  const [showNoticeBoard, setShowNoticeBoard] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <main className="px-2 min-h-screen w-full max-w-5xl mx-auto my-8 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl md:text-2xl text-primary pr-4">
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
      <div className="grid md:grid-cols-2 gap-6">
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
      <div className="hidden xl:block fixed top-10 left-0 shadow-lg rounded-r-xl overflow-hidden  h-96 bg-white">
        <div className="bg-black w-full flex justify-between items-center py-1 px-2">
          <div>
            {showJourneyBoard && (
              <span className="font-semibold text-white text-sm">
                Journey Board
              </span>
            )}
          </div>
          <div></div>
          {!showJourneyBoard ? (
            <button
              onClick={() => setShowJourneyBoard(true)}
              className=" bg-white rounded-full"
            >
              <ArrowRightShort size={18} />
            </button>
          ) : (
            <button
              onClick={() => setShowJourneyBoard(false)}
              className=" bg-white rounded-full"
            >
              <ArrowLeftShort size={18} />
            </button>
          )}
        </div>
        {!showJourneyBoard ? (
          <div className="p-4">
            <div className="border border-blue-500 px-3 py-1 rounded-lg">1</div>
          </div>
        ) : (
          <div className="p-4">
            <ul className="list-disc list-inside">
              <li className="font-semibold">Explore the world of management</li>
              <li>Technical Project Management</li>
              <li>Threadbuild</li>
              <li>Structure you pointers</li>
              <li>4SA Method</li>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden xl:flex fixed top-10 right-0 shadow-lg rounded-l-xl overflow-hidden max-w-sm   bg-white">
        <div className="h-full flex flex-col items-center bg-black px-2 py-4">
          <div className="mb-4">
            {!showNoticeBoard ? (
              <button
                onClick={() => setShowNoticeBoard(true)}
                className=" bg-white rounded-full"
              >
                <ArrowLeftShort size={18} />
              </button>
            ) : (
              <button
                onClick={() => setShowNoticeBoard(false)}
                className=" bg-white rounded-full"
              >
                <ArrowRightShort size={18} />
              </button>
            )}
          </div>

          {"Notice Board".split("").map((char, i) => (
            <span key={i} className="text-sm text-white">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        {showNoticeBoard && (
          <div className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quis expedita, assumenda est perspiciatis praesentium alias porro
            obcaecati cupiditate quod similique sunt mollitia vitae corporis
            voluptatibus fugiat consectetur maxime aut!
          </div>
        )}
      </div>
      {scrollDirection == "up" && (
        <div className="fixed bottom-5 right-2 ">
          <Link href={""} className="block my-2">
            <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400">
              <Question size={24} />
            </div>
          </Link>
          <Link href={""} className="block my-2">
            <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400">
              <People size={24} />
            </div>
          </Link>
          <Link href={""} className="block my-2">
            <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400">
              <Calendar2Event size={24} />
            </div>
          </Link>
        </div>
      )}
    </main>
  );
}
