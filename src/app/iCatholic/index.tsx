import React from "react";

export default function ICatholic() {
  return (
    <div className="iCatholic">
      <div className="relative flex justify-center h-16 m-4">
        <div className="text-6xl text-center ml-1 mt-1 text-neutral-1000 fixed mx-auto">
          iCatholic
        </div>
        <div className="text-6xl text-center text-blue-500 fixed">
          iCatholic
        </div>
      </div>
      <div className="text-center text-xl text-neutral-1000 mt-6">
        Your daily Catholic companion app
      </div>

      <ul className="mt-12 flex justify-center flex-col items-center">
        <li className="mb-4">
          <span className="text-neutral-1000 text-2xl border-b-2 border-blue-500 p-1">
            Current Features:
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">Daily Examen</span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Examination of Conscience
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">Daily Mass readings</span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Set custom reminders to pray
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">Study Holy Scripture</span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Prayers in English and in Latin
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">Litanies & Devotions</span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">The Holy Bible</span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Divine office
            <span className="text-sm text-neutral-800"> *Coming soon!*</span>
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Catechism
            <span className="text-sm text-neutral-800"> *Coming soon!*</span>
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Mass Finder
            <span className="text-sm text-neutral-800"> *Coming soon!*</span>
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">
            Divine office
            <span className="text-sm text-neutral-800"> *Coming soon!*</span>
          </span>
        </li>
        <li className="">
          <span className="text-neutral-950 text-xl">And more!</span>
        </li>
      </ul>

      <div className="flex justify-center mt-6">
        {/* <div className="text-center text-base text-neutral-1000 mt-2 border-b border-blue-400 w-fit justify p-1">
          Sign up for beta now
        </div> */}
        <div className="text-center text-2xl text-neutral-1000 mt-6 border-2 border-blue-500 rounded-full py-2 px-4">
          Coming soon!
        </div>
      </div>
    </div>
  );
}
