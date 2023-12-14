"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };
  let rendertask = <h2>No task Available</h2>;

const deletehandler=(i)=>{
 let copytask = [...maintask]
 copytask.splice(i,1);
 setmaintask(copytask)
}
   
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <li className="flex justify-between items-center mb-2">
          <div className="flex justify-between mb-5 w-2/3">
            <h4 className=" text-2xl font-semibold">{t.title}</h4>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deletehandler(i);
          }} className=" bg-red-400 font-bold rounded text-white p-2">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className=" bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded-md  "
          placeholder="Enter task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded-md  "
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className=" text-2xl px-4 py-3 font-bold text-white bg-black rounded m-4">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300 ">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
