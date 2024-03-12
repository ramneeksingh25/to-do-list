/* eslint-disable react/prop-types */
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
function Task({ data, reference, setTasks, tasks }) {
	const [isCompleted, setIsCompleted] = useState(data.isCompleted);
	const deleteTask = () => {
		setTasks(
			tasks.filter((element) => {
				return element.index !== data.index;
			})
		);
		console.log(data.index.index + " deleted tasks: " + tasks.length);
	};
	return (
		<motion.div
			drag
			// dragConstraints={reference}
			dragConstraints={{ left: 0, right: 1000,top: 0, bottom:500}}
			dragTransition={{ bounceStiffness: 1200, bounceDamping: 100 }}
			dragElastic={0.75}
			whileDrag={{ scale: 1.1 }}
			className="absolute w-[100vw]"
			>
			<div
				className={`task h-[10%] w-[10%] m-1 p-1 rounded-[1em] ${
					isCompleted ? "bg-zinc-600/40" : "bg-zinc-400/40"
				} flex flex-col gap-1 justify-center items-center`}>
				<h2
					className={`text-white ${isCompleted && `line-through`} text-[30px]`}>
					{data.taskName}
				</h2>
				<div className="flex gap-3 z-10">
					<button
						className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-4 z-10 rounded ease-in-out duration-300"
						onClick={() => {
							console.log("Task: " + data.taskName + " completed");
							setIsCompleted(!isCompleted);
						}}>
						{isCompleted ? (
							<div>
								<span className="font-light flex flex-col items-center">
									<FaArrowRotateRight />
								</span>
							</div>
						) : (
							<span>
								<MdDone />
							</span>
						)}
					</button>
					{isCompleted && (
						<button>
							<span
								className="flex flex-col text-white p-2 items-center bg-red-700 hover:bg-red-800 rounded-xl cursor-pointer"
								onClick={deleteTask}>
								<MdDelete />
							</span>
						</button>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default Task;
