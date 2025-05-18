"use client";

import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../components/atoms/Footer/footer";

const HomePage: NextPage = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const { scrollY } = useScroll({ container: scrollRef });

  const containerHeight = useTransform(scrollY, [0, 300], [`${viewportHeight}px`, "64px"]);
  const textScale      = useTransform(scrollY, [0, 300], [1, 0.6]);
  const subtextOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const textY          = useTransform(scrollY, [0, 300], ["-50%", "-30%"]);

  return (
    <div className="w-full h-full">
      {/* 고정 헤더 전체에 pointer-events-none 적용 */}
      <motion.div
        style={{ height: containerHeight }}
        className="bg-[#06192F] fixed top-0 left-0 w-full z-40 overflow-hidden pointer-events-none"
      >
        {/* 내부 텍스트에는 pointer-events-auto 제거 */}
        <motion.div
          style={{ scale: textScale, y: textY, x: "-50%", transformOrigin: "center center" }}
          className="absolute top-1/2 left-1/2 text-white text-center flex flex-col items-center"
        >
          <span className="text-[64px] font-semibold leading-none mb-3">BLACKWIND</span>
          <motion.span
            style={{ opacity: subtextOpacity }}
            className="text-[28px] font-semibold leading-tight block"
          >
            DGIST <br /> ONE AND ONLY <br /> COMPUTING CLUB
          </motion.span>
        </motion.div>
      </motion.div>

      {/* 실제 스크롤 컨테이너 */}
      <div
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <section className="h-screen snap-start bg-white text-black p-10 pt-[64px]">
          <div></div>
        </section>
        <section className="h-screen snap-start bg-white text-black p-10 pt-[64px]">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">ABOUT</h2>
            <h3 className="text-xl font-semibold">다양한 문제를 컴퓨터 기술로 해결하자</h3>
            <p className="text-base leading-relaxed">
              현풍전산은 2018년에 창설되어 다양한 문제를 컴퓨터로 해결하고자 하는 DGIST 슈퍼컴퓨팅시 교육연구센터 산하의 동아리입니다.
              프로젝트와 교류를 통해 개인적 역량을 지속 가능하고 꾸준한 성장을 목표로 합니다.
            </p>
            <ul className="list-disc list-inside text-base">
              <li>자체 클라우드 구축</li>
              <li>타 대학과 교류</li>
            </ul>
          </div>
        </section>
        <section className="h-screen snap-start bg-white text-black p-10 pt-[64px]">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* 제목 + 부제목 */}
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">PROJECTS</h2>
              <h3 className="text-xl font-semibold text-[#1E293B]">다양한 문제를 컴퓨터 기술로 해결하자</h3>
            </div>

            {/* 프로젝트 카드들 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {/* 첫 번째 카드 - 이미지 */}
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="/images/images.png"
                  alt="프로젝트1"
                  className="rounded-lg w-full aspect-square object-cover"
                />
                <span className="text-sm font-semibold">프로젝트1</span>
              </div>

              {/* 나머지 카드들 - placeholder */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="rounded-lg w-full aspect-square bg-[#34558B]" />
                  <span className="text-sm font-semibold">프로젝트1</span>
                </div>
              ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="flex justify-end">
            <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
              더보기
            </button>
          </div>
          </div>
        </section>
        <section className="h-screen snap-start bg-white text-black p-10 pt-[64px]">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* 제목 */}
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">ACTIVITIES</h2>
              <h3 className="text-xl font-semifold text-[#1E293B]">다양한 문제를 컴퓨터 기술로 해결하자</h3>  
            </div>

            {/* 콘텐츠 본문 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* 왼쪽 텍스트 */}
              <div className="space-y-3">
                <h4 className="text-xl font-bold">해커톤</h4>
                <p className="text-base text-black">해커톤 안했어요 ^^</p>
                </div>

                {/* 오른쪽 파란 박스 */}
                <div className="bg-[#34558B] w-full aspect-video rounded-lg" />  
              </div>  
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;