"use client";
import React, { useState } from "react";
import ResultImg from "@/assets/result.png";
import Image from "next/image";
import { useGlobalStore } from "@/store/useGlobalStore";
import Res2021 from "@/assets/results/2021.jpg";
import Res2022 from "@/assets/results/2022.jpg";
import BCA2023 from "@/assets/results/BCA-2023.jpg";
import BCA2024 from "@/assets/results/BCA-2024.jpg";
import BCA2025 from "@/assets/results/BCA-2025.jpg";

const Page = () => {
  const { resTitle } = useGlobalStore();
  const [showPopup, setShowPopup] = useState(false);

  const [form, setForm] = useState({
    course: "",
    semester: "",
    examType: "", 
    rollNo: "",
    dob: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm({
      course: "",
      semester: "",
      examType: "",
      rollNo: "",
      dob: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
    // You can add routing or API calls here

    if (
      resTitle === "Results (2018-2021)" &&
      form.course === "BCOM" &&
      form.rollNo === "190530060048"
    ) {
      window.open(Res2021.src, "_blank");
    } else if (
      resTitle === "Odd Semester Result 2022-23" &&
      form.course === "BCOM" &&
      form.rollNo === "190530060048"
    ) {
      window.open(Res2022.src, "_blank");
    } else if (
      resTitle === "Odd Semester Result 2022-23" &&
      form.course === "BCA" &&
      form.rollNo === "2250084040048"
    ) {
      window.open(BCA2023.src, "_blank");
    } else if (
      resTitle === "Odd Semester Result 2023-24" &&
      form.course === "BCA" &&
      form.rollNo === "2250084040048"
    ) {
      window.open(BCA2024.src, "_blank");
    } else if (
      resTitle === "Odd Semester Result 2024-25" &&
      form.course === "BCA" &&
      form.rollNo === "2250084040048"
    ) {
      window.open(BCA2025.src, "_blank");
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="w-full relative min-h-screen bg-white flex justify-between flex-col pt-7">
      <div className="w-full h-full flex justify-center items-center flex-col">
        <Image src={ResultImg} alt="result" className="w-[561px]" />
        <div className="w-[561px] shadow-lg border border-[#d3cfcf] py-3 px-8">
          <div className="text-lg text-[#333333] font-semibold mb-2 flex flex-col text-center">
            <h2>Student&apos;s Result</h2>
            <h2>({resTitle})</h2>
          </div>

          {/* Form Start */}
          <form onSubmit={handleSubmit} className="space-y-3 text-[#1e1d1d]">
            {/* Course Name */}
            <div className="flex flex-row items-center justify-between">
              <label className="text-sm font-semibold mb-1 text-[#333]">
                Course name
              </label>
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="border border-[gray] w-[364px] px-3 py-2"
                required
              >
                <option value="">Select Course</option>
                <option value="Acharya">Acharya</option>
                <option value="BA (YOGA)">BA (YOGA)</option>
                <option value="BA (YOGA)(NEP)">BA (YOGA)(NEP)</option>
                <option value="B.A.M.S. FINAL PROFESSIONAL NEW COURSE">
                  B.A.M.S. FINAL PROFESSIONAL NEW COURSE
                </option>
                <option value="B.A.M.S. FIRST PROFESSIONAL NEW COURSE">
                  B.A.M.S. FIRST PROFESSIONAL NEW COURSE
                </option>
                <option value="B.A.M.S. SECOND PROFESSIONAL NEW COURSE">
                  B.A.M.S. SECOND PROFESSIONAL NEW COURSE
                </option>
                <option value="B.A.M.S. THIRD PROFESSIONAL NEW COURSE">
                  B.A.M.S. THIRD PROFESSIONAL NEW COURSE
                </option>
                <option value="B. COM">B. COM</option>

                <option value="ADVANCED DIPLOMA">ADVANCED DIPLOMA</option>
                <option value="BBA">BBA</option>
                <option value="BCOM">BCOM</option>
                <option value="BCA">BCA</option>
                <option value="BCOM(HONS)">BCOM(HONS)</option>
              </select>
            </div>

            {/* Semester */}
            <div className="flex flex-row items-center justify-between">
              <label className="text-sm mb-1 text-[#333] font-semibold">
                Semester
              </label>
              <select
                name="semester"
                value={form.semester}
                onChange={handleChange}
                className="border border-[gray] px-3 w-[364px] py-2"
                required
              >
                <option value="">Select Semester</option>
                {["I", "II", "III", "IV", "V", "VI", "VII", "VIII"].map(
                  (sem) => (
                    <option key={sem} value={sem}>
                      {sem}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* Exam Type */}
            <div className="flex flex-row items-center justify-between">
              <label className="text-sm mb-1 text-[#333] font-semibold">
                Exam Type
              </label>
              <select
                name="examType"
                value={form.examType}
                onChange={handleChange}
                className="border border-[gray] w-[364px] px-3 py-2"
                required
              >
                <option value="">Exam Type</option>
                <option value="BACK">BACK</option>
                <option value="EXEMPT">EXEMPT</option>
              </select>
            </div>

            {/* Subject Name (Fixed to COMMERCE) */}
            <div className="flex flex-row justify-between items-center">
              <label className="text-sm mb-1 text-[#333] font-semibold">
                Subject Name
              </label>
              <input
                type="text"
                name="Subject Name"
                placeholder="Select Subject"
                className="border border-[gray] px-3 py-2 w-[364px] text-gray-700"
              />
            </div>

            {/* Roll No */}
            <div className="flex flex-row justify-between items-center">
              <label className="text-sm mb-1 text-[#333] font-semibold">
                Roll No.
              </label>
              <input
                type="text"
                name="rollNo"
                placeholder="Roll No."
                value={form.rollNo}
                onChange={handleChange}
                className="border border-[gray] w-[364px] px-3 py-2"
                required
              />
            </div>

            {/* DOB */}
            <div className="flex flex-row justify-between items-center">
              <label className="text-sm mb-1 text-[#333] font-semibold flex flex-col">
                <span>Date of Birth</span>
                <span>(DD/MM/YYYY)</span>
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="border border-[gray] w-[364px] px-3 py-2"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-1 h-[41px] gap-8">
              <button
                type="submit"
                className="bg-[#088af9] hover:bg-green-600 cursor-pointer text-white w-1/2"
              >
                SUBMIT
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#d9534f] hover:bg-amber-900 cursor-pointer text-white w-1/2"
              >
                RESET
              </button>
            </div>
          </form>
          {/* Form End */}
        </div>
      </div>

      <div className="h-[43px] w-full bg-[#c2c2c2] flex justify-between items-center px-5">
        <span className="text-[13px] text-[#333333]">
          REFUND POLICY | PRIVACY POLICY
        </span>
        <span className="text-[13px] text-[#333333]">
          © UNIVERSITY OF LUCKNOW | All rights reserved
        </span>
      </div>

      {showPopup && (
        <div className="w-full h-screen bg-[#5453533d] absolute z-[100] top-0 left-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700 text-3xl"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=6fgafQM9FFqb&format=png&color=000000"
                }
                alt="result"
                width={100}
                height={100}
                className="w-[50px] mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-[#5eb9f6] mb-2">
                Result Not Declared Yet
              </h2>
              <p className="text-gray-600 text-sm">No data found</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
