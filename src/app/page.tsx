"use client";
import { useEffect, useState } from "react";
import TaskCard from "@/components/task-card";
import mockdata from "@/mock-data/mock.json";
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
import { motion } from "framer-motion";

export default function Home() {
  const [data, setData] = useState<typeof mockdata | null>(null);
  const [loading, setLoading] = useState(true);
  const [showJourneyBoard, setShowJourneyBoard] = useState(false);
  const [showNoticeBoard, setShowNoticeBoard] = useState(false);
  const scrollDirection = useScrollDirection();
  async function fetchDataFromAPI() {
    return mockdata;
  }
  useEffect(() => {
    setTimeout(() => {
      fetchDataFromAPI().then((data) => {
        setData(data);
        setLoading(false);
      });
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div role="status">
          <svg
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-2 min-h-screen w-full max-w-5xl mx-auto my-8 space-y-10"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl md:text-2xl text-primary pr-4">
            {data?.title}
          </h1>
          <button className="bg-primary px-2 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-200  flex-shrink-0">
            <span className="text-white text-sm">Submit Task</span>
          </button>
        </div>
        <div className="p-4 bg-blue-100 rounded">
          <h2 className="font-bold text-lg">{data?.tasks[0].task_title}</h2>
          <p className="text-neutral-700">{data?.tasks[0].task_description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {data?.tasks[0].assets.map((asset) => {
            return (
              <TaskCard
                key={asset.asset_id}
                title={asset.asset_title}
                description={asset.asset_description.replaceAll("\r\n", " ")}
                contentSrc={
                  asset.asset_content.trim() !== ""
                    ? asset.asset_content
                    : undefined
                }
              />
            );
          })}
        </div>
        <motion.div layout className="hidden xl:block fixed top-10 left-0 shadow-lg rounded-r-xl overflow-hidden  h-96 bg-white">
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
              <div className="border border-blue-500 px-3 py-1 rounded-lg">
                1
              </div>
            </div>
          ) : (
            <div className="p-4">
              <ul className="list-disc list-inside">
                <li className="font-semibold">{data?.tasks[0].task_title}</li>
                {data?.tasks[0].assets.map((asset) => {
                  return <li key={asset.asset_id}>{asset.asset_title}</li>;
                })}
              </ul>
            </div>
          )}
        </motion.div>
        <motion.div
          layout
          className="hidden xl:flex fixed top-10 right-0 shadow-lg rounded-l-xl overflow-hidden max-w-sm   bg-white"
        >
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
        </motion.div>
        {
          <div
            className={`fixed bottom-5 right-2 ${
              scrollDirection == "up" || scrollDirection == null
                ? "block"
                : "hidden"
            }  `}
          >
            <Link href={""} className="block my-2">
              <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                <Question size={24} />
              </div>
            </Link>
            <Link href={""} className="block my-2">
              <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                <People size={24} />
              </div>
            </Link>
            <Link href={""} className="block my-2">
              <div className="p-2 bg-primary text-white rounded-full hover:bg-blue-400 transition-colors duration-200">
                <Calendar2Event size={24} />
              </div>
            </Link>
          </div>
        }
      </motion.main>
    );
  }
}
