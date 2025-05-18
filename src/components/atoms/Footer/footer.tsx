// components/Footer.tsx
const Footer = () => {
  return (
    <section className="w-full bg-[#1F3C70] text-white py-6 px-6 md:px-20">
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
    </section>
  );
};

export default Footer;