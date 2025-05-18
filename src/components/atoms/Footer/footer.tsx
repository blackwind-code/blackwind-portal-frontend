// components/atoms/Footer/footer.tsx

const Footer = () => {
  return (
    <section className="snap-start bg-[#1F3C70] text-white p-10 pt-[64px]">
      <div className="max-w-4xl mx-auto space-y-6">
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
    </section>
  );
};

export default Footer;