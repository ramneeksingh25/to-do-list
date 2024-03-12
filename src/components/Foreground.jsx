import { useRef, useState } from "react";
import Task from "./Task";
import NewTask from "./NewTask";
import { IoMdAdd } from "react-icons/io";
function Foreground() {
	const [tasks, setTasks] = useState([]);

	const [newTaskWindow, setNewTaskWindow] = useState(false);

	const ref = useRef(null);
	const addNewTask = () => {
		setNewTaskWindow(true);
	};
	return (
		<div
			ref={ref}
			className="h-screen w-[100%] flex flex-col items-center accent-[#f3ca7f]">
			<div className="fixed h-screen w-[100%] flex items-center justify-center" >
				{newTaskWindow && (
					<div className="z-[100]">
					<div className="bg-zinc-200 h-[100%] w-[100%]" onClick={()=>{
						setNewTaskWindow()
					}}/>
					<NewTask
						index={tasks.length}
						hide={setNewTaskWindow}
						setNewTask={setTasks}
						tasks={tasks}
						reference={ref}
					/>
					</div >
				)}
			</div>
			<button
				className="new-task text-sky-100 text-[5vw] bg-slate-500 hover:bg-slate-700 font-bold py-1 px-4 rounded-[100%] z-40 ease-in-out duration-300 hover:text-[#f3ca7f] absolute top-[5vh] left-[80vw] h-[7.5vw] w-[7.5vw] flex items-center justify-center"
				onClick={addNewTask}>
				<IoMdAdd />
			</button>
			<div className="tasks h-screen w-[100%] top-10">
				{!tasks.length && (
					<h1 className="fixed text-[#fffffe97] text-[3vw] font-light bg-stone-900/20 p-5 m-10 border-2 hover:border-[#f3ca7f] hover:text-[#f3ca7f] tracking-tighter rounded-[10vh] ease-in-out duration-300">
						No Tasks Present.
					</h1>
				)}
				{tasks.map((task, index) => {
					return (
						<Task
							data={task}
							key={index}
							tasks={tasks}
							setTasks={setTasks}
							reference={ref}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Foreground;
