/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
const NewTask = ({ reference, tasks, setNewTask, hide, index }) => {
	const [taskName, setTaskName] = useState("");

	return (
		<div>
			<div className="bg-zinc-200 h-screen w-[100%] z-[150]" />
			<motion.div
				drag
				dragConstraints={reference}
				className="bg-zinc-900/90 h-[50%] w-[25em] rounded-[50px] z-[100] fixed flex flex-col gap-[1vh] items-center justify-center left-[25%] top-[25%]">
				<h1 className="text-[3em] absolute top-[10%] text-slate-300/50 font-bold tracking-tighter hover:text-[rgb(243, 202, 127)] ">
					New Task
				</h1>
				<textarea
					type="text"
					className="h-[20vh] w-[60%] text-xl mt-[10%] rounded-[20px] bg-slate-700 text-slate-200 caret-[#f3ca7f] border-2 border-[#f3ca7f]/20 p-2 focus:border-[#f3ca7f] resize-none break-words"
					placeholder="Enter Task Here..."
					onChange={(event) => {
						setTaskName(event.target.value);
					}}
				/>
				<button
					className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-1 px-4 rounded ease-in-out duration-300 hover:text-[#f3ca7f]"
					onClick={() => {
						!taskName;
						setNewTask([
							...tasks,
							{ taskName, isCompleted: false, index: { index } },
						]);
						console.log(taskName);
						hide(false);
					}}>
					Add Task
				</button>
				<span
					className="text-white text-[2vh] bg-zinc-950 hover:bg-slate-900 font-bold py-1 px-4 rounded-[100%] z-40 ease-in-out duration-200 text-slate-300/50  hover:text-[#f3ca7f] absolute top-[7%] left-[86%] h-[4vh] w-[4vh] "
					onClick={() => {
						hide(false);
					}}>
					<IoClose className="absolute left-[25%] top-2" />
				</span>
			</motion.div>
		</div>
	);
};

export default NewTask;
