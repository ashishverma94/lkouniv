"use client";
import Link from "next/link";
import Image from "next/image";
import LeftImg from "@/assets/left.png";
import ThirdImg from "@/assets/third.png";
import FirstImg from "@/assets/first.jpg";
import RightImg from "@/assets/right.png";
import SecondImg from "@/assets/second.png";
import FooterImg from "@/assets/footer.png";
import { useEffect, useState } from "react";
import SitemapImg from "@/assets/sitemap.png";
import FooterUp1 from "@/assets/footerup1.png";
import FooterUp2 from "@/assets/footerup2.png";
import DownloadImg from "@/assets/skiptocontent.png";
import ScreeReader from "@/assets/screen-reader.png";

// CAROUSEL IMAGES
import C1 from "@/assets/carousel/1.jpg";
import C2 from "@/assets/carousel/2.jpg";
import C3 from "@/assets/carousel/3.jpg";
import C4 from "@/assets/carousel/4.jpg";
import C5 from "@/assets/carousel/5.jpg";
import C6 from "@/assets/carousel/6.jpg";
import C7 from "@/assets/carousel/7.jpg";
import C8 from "@/assets/carousel/8.jpg";
import { useGlobalStore } from "@/store/useGlobalStore";

const firstNavTabs = [
  "ABOUT THE UNIVERSITY",
  "ACADEMICS",
  "FACILITIES",
  "RESEARCH",
  "LIBRARY",
  "ADMISSION",
  "EXAMINATION",
  "MEDIA",
  "CAREER",
  "ANTI RAGGING",
  "CONTACT",
  "LOGIN",
];

const carouselData = [
  {
    image: C1,
    desc: "Lucknow University",
  },
  {
    image: C2,
    desc: "University of Lucknow, Night View",
  },
  {
    image: C3,
    desc: "VC greeting Honourable CM Shri Yogi Adityanath Ji",
  },
  {
    image: C4,
    desc: "विवेकानंद द्वार",
  },
  {
    image: C5,
    desc: "Honourable Chancellor, Smt. Anandiben Patel, unveiling Gate No. 1 and Gate No. 2 at the second campus.",
  },
  {
    image: C6,
    desc: "Inauguration of Cycle Yatra",
  },
  {
    image: C7,
    desc: "Vice chancellor Prof. Alok Kumar Rai welcomes Honble governor Anandiben Patel at 26th Educational Film Festival.",
  },
  {
    image: C8,
    desc: "International Yoga Day Celebration at Lucknow University on June 21, 2025",
  },
];

export default function Home() {
  const { setResTitle } = useGlobalStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [active, setActive] = useState(0);
  const [openSec, setOpenSec] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setFade(true); // start fade in
      }, 500); // fade out duration
    }, 4000); // time between transitions

    return () => clearInterval(interval);
  }, []);

  const { image, desc } = carouselData[currentIndex];

  const handleOpenPopup = (index: number) => {
    setActive(index);

    if (index === 6) {
      console.log("hi");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[white] text-[#393939]">
      {/* TOP BAR  */}
      <div className="w-full h-[50px] bg-[#f4f4f4] flex flex-row gap-3 items-center justify-between">
        <div className="flex flex-row gap-3 items-center ml-5">
          <div>
            <span className="text-[13px] text-[#232323]">Quick Links </span>
            <Image
              src={
                "https://img.icons8.com/?size=100&id=n5ktqRhw2GBX&format=png&color=000000"
              }
              alt="icon"
              width={20}
              height={20}
              className=" inline-block w-[13px]"
            />
          </div>

          <span className="text-[13px] text-[#232323]">Alumni</span>
          <span className="text-[13px] text-[#d10404] font-semibold">
            Fee Portal
          </span>
          <span className="text-[13px] text-[#232323]">FAQs</span>
          <span className="text-[13px] text-[#232323]">
            Download Android Mobile App
          </span>
          <span className="text-[13px] text-[#d10404] font-semibold">
            Notices & Circulars
          </span>
        </div>
        <div className="flex flex-row gap-4 mr-5 items-center">
          <Image
            src={DownloadImg}
            alt="Download"
            width={20}
            height={20}
            className="h-[20px] w-[20px]"
          />
          <Image
            src={ScreeReader}
            alt="Download"
            width={20}
            height={20}
            className="h-[20px] w-[20px]"
          />
          <Image
            src={SitemapImg}
            alt="Download"
            width={20}
            height={20}
            className="h-[20px] w-[20px]"
          />
          <div className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[13px]">
            A-
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[13px]">
            A
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center text-[13px]">
            A+
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-[#003c72] flex justify-center items-center text-[13px] text-white">
            T
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-black flex justify-center items-center text-[13px] text-white">
            T
          </div>
          <Image
            src={
              "https://img.icons8.com/?size=100&id=59878&format=png&color=000000"
            }
            alt="Download"
            width={20}
            height={20}
            className="h-[18px] w-[18px]"
          />
        </div>
      </div>
      {/* THREE IMAGES  */}
      <div className="h-[100px] w-full flex justify-between items-center px-6">
        <Image
          src={FirstImg}
          alt="First"
          width={300}
          height={100}
          className="w-[86px] h-[86px]"
        />
        <Image
          src={SecondImg}
          alt="First"
          width={300}
          height={100}
          className="w-[368px] h-[86px]"
        />
        <Image
          src={ThirdImg}
          alt="First"
          width={300}
          height={100}
          className="w-[86px] h-[86px]"
        />
      </div>
      {/* FIRST NAV BAR  */}
      <div className="w-full h-[50px] bg-[#003c72] flex flex-row gap-3 items-center justify-between">
        <div className="flex flex-row items-center ml-5 font-[roboto] h-full ">
          <div className="gap-2 flex flex-row items-center bg-[#e0ab1b] cursor-pointer h-full px-2.5">
            <Image
              src={
                "https://img.icons8.com/?size=100&id=Gk6G1mJKWBoY&format=png&color=ffffff"
              }
              alt="icon"
              width={40}
              height={40}
              className=" inline-block w-[30px]"
            />
          </div>
          {firstNavTabs.map((tab, index) => (
            <div
              key={index}
              className="gap-2 relative flex flex-row items-center hover:bg-[#e0ab1b] cursor-pointer h-full px-2.5"
              onClick={() => handleOpenPopup(index)}
            >
              <span className="text-[13px] text-white">{tab}</span>
              <Image
                src={
                  "https://img.icons8.com/?size=100&id=n5ktqRhw2GBX&format=png&color=ffffff"
                }
                alt="icon"
                width={20}
                height={20}
                className=" inline-block w-[13px]"
              />
              {index === active && index === 6 && (
                <div className=" absolute z-[20] p-4 min-w-[224px] h-[330px] bg-[white] shadow-sm top-[49px] left-0">
                  <div className="py-[5px] text-sm text-[#d10404] font-semibold hover:border-b border-[orange]">
                    Even Semester Examination Admit Card (2024-25)
                  </div>
                  <div className="py-[5px] text-sm text-[#d10404] font-semibold hover:border-b border-[orange]">
                    Even Semester Examination Form Submission (2024-25)
                  </div>
                  <div className="py-[5px] text-sm text-[#d10404] font-semibold hover:border-b border-[orange]">
                    Rashtragaurav Examination Form Submission (2024-25)
                  </div>
                  <div className="py-[5px] text-sm text-[black] flex flex-row items-center justify-between">
                    <span>Login&apos;s</span>
                    <Image
                      src={
                        "https://img.icons8.com/?size=100&id=n5ktqRhw2GBX&format=png&color=000000"
                      }
                      alt="icon"
                      width={20}
                      height={20}
                      className=" inline-block w-[13px] -rotate-90"
                    />
                  </div>
                  <div
                    onClick={() => setOpenSec(true)}
                    className="py-[5px] text-[#d10404] border-b border-[orange] relative"
                  >
                    <span className="text-sm font-semibold">Results</span>
                    {/* NEW POPUP  */}
                    {openSec && (
                      <div className=" absolute w-[227px] h-[331px] flex flex-col justify-between bg-white shadow-sm top-0 left-[180px] z-[30] p-4">
                        <Link
                          href="/Results/LU_OddResult2025"
                          onClick={() =>
                            setResTitle("Even Semester Result 2024-25")
                          }
                          target="_blank"
                          className="py-[5px] text-sm text-[#d10404] font-semibold hover:border-b border-[orange]"
                        >
                          Even Semester Result 2024-25
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          onClick={() =>
                            setResTitle("Odd Semester Result 2024-25")
                          }
                          target="_blank"
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Odd Semester Result 2024-25
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() =>
                            setResTitle("Even Semester Result 2023-24")
                          }
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Even Semester Result 2023-24
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() =>
                            setResTitle("Odd Semester Result 2023-24")
                          }
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Odd Semester Result 2023-24
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() =>
                            setResTitle("Even Semester Result 2022-23")
                          }
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Even Semester Result 2022-23
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() =>
                            setResTitle("Odd Semester Result 2022-23")
                          }
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Odd Semester Result 2022-23
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() =>
                            setResTitle("Annual Result (M.D. & M.S.) 2022")
                          }
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        > 
                          Annual Result (M.D. & M.S.) 2022
                        </Link>
                        <Link
                          href="/Results/LU_OddResult2025"
                          target="_blank"
                          onClick={() => setResTitle("Results (2018-2021)")}
                          className="py-[5px] text-sm hover:border-b text-black border-[orange]"
                        >
                          Results (2018-2021)
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="py-[5px] text-sm text-[black] hover:border-b border-[orange]">
                    Examination Notices
                  </div>
                  <div className="py-[5px] text-sm text-[black] hover:border-b border-[orange]">
                    Examination Schedule
                  </div>
                  <div className="py-[5px] text-sm text-[black] hover:border-b border-[orange]">
                    Online Services (EASE)
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* CAROUSEL SECTION  */}
      <div className="h-[463px] flex flex-row justify-between">
        <Image src={LeftImg} alt="left-img" className="h-full w-[237px]" />
        <div className="w-full h-full px-5 relative">
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-75"
            }`}
          >
            <Image
              src={image}
              alt={`carousel-${currentIndex}`}
              className="h-[422px] w-full object-cover"
            />
            <div className="w-full h-[34px] bg-black text-white text-center flex justify-center items-center">
              {desc}
            </div>
          </div>
        </div>
        <Image src={RightImg} alt="right-img" className="h-full w-[237px]" />
      </div>
      {/* FOOTER IMAGES  */}
      <div className="w-full flex flex-col">
        <Image
          src={FooterUp1}
          alt="Footer"
          width={1920}
          height={300}
          className="w-full h-auto"
        />
        <Image
          src={FooterUp2}
          alt="Footer"
          width={1920}
          height={300}
          className="w-full h-auto"
        />
      </div>
      {/* FOOTER SECTION  */}
      <div className="w-full">
        <Image
          src={FooterImg}
          alt="Footer"
          width={1920}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
