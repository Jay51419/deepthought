import { ReactNode } from "react";
import { Info } from "react-bootstrap-icons";

interface TaskCardProps {
  title: string;
  description: string;
  contentSrc?: string;
}

export default function TaskCard({
  title,
  description,
  contentSrc,
}: TaskCardProps) {
  return (
    <div className="w-full max-w-5xl shadow-lg rounded-xl">
      <div className="bg-black w-full flex justify-between items-center py-1 rounded-tr-xl rounded-tl-xl px-2">
        <div></div>
        <span className="font-semibold text-white">{title}</span>
        <div className=" bg-white rounded-full">
          <Info size={18} />
        </div>
      </div>
      <div className="flex space-x-2 p-4 shadow-sm">
        <span className="font-semibold">Description: </span>
        <p>{description}</p>
      </div>
      <div className="w-full h-80 rounded-br-xl rounded-bl-xl">
        {contentSrc? (
          <iframe className="w-full h-full" src={contentSrc}></iframe>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-red-800">Some Error Occured</span>
          </div>
        )}
      </div>
    </div>
  );
}
