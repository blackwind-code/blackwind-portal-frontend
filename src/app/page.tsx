"use client";

import React, { useEffect, useState, useRef } from "react";
import { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";

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
          <div>paragraph1</div>
        </section>
        <section className="h-screen snap-start bg-gray-100 text-black p-10 pt-[64px]">
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
        <section className="h-screen snap-start bg-gray-100 text-black p-10 pt-[64px]">
          <div>paragraph2</div>
        </section>
        <section className="h-screen snap-start bg-gray-300 text-black p-10 pt-[64px]">
          <div>paragraph3</div>
        </section>  
      </div>
        <div className="w-full bg-[#1F3C70] text-gray-300 py-6 px-6 md:px-20">
          <div className="text-left space-y-4">
            <h2 className="text-xl font-bold">Blackwind</h2>
            <div className="text-sm leading-relaxed">
              대구광역시 달성군 유가읍 테크노중앙대로 333 E10 B131호<br />
              <a
                href="mailto:blackwind@dgist.ac.kr"
                className="underline hover:text-gray-300"
              >
                blackwind@dgist.ac.kr
                </a>
                </div>
                <div className="text-sm text-gray-300">
                   인스타, 깃허브, 노션, 이메일
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;