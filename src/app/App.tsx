import imgBackground from "figma:asset/8a64a84ca204cd4bc4f075371baa76192838cc82.png";
import imgDeviceFrame from "figma:asset/cb539a879451a5eaca6ab6323fd7d52c1d9326af.png";
import imgImage1 from "figma:asset/a5bb04c6e51fb144f4a45175d6a40a4d57122eb0.png";
import imgImage2 from "figma:asset/34824412ee030057b26013f4987a47f91c1638ea.png";
import imgImage3 from "figma:asset/5df41fc0f915f3e9049eb5c49b269edb1ef4ab76.png";
import imgImage4 from "figma:asset/f98ac66209e6ec4bf25b18555c89ea6aa800fc64.png";
import imgAuthor1 from "figma:asset/6480a52b4ccf55f226f31501e403af0ce0530229.png";
import imgAuthor2 from "figma:asset/3c8413f5b8f065f5e119be497bd42be5d5fa1dfe.png";
import imgFooterBg from "figma:asset/ec9ece07e59d387940a98bfe1f094d83aab63bc3.png";

/* ─────────── Hero Section ─────────── */
function HeroSection() {
  return (
    <div
      className="relative shrink-0 w-full h-[528px] sm:h-[654px] lg:h-[750px] overflow-hidden"
      aria-hidden="false"
    >
      {/* Background image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgBackground}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center size-full pt-[96px] pb-[64px] px-[24px] gap-[64px] sm:pt-[120px] sm:pb-[96px] sm:px-[64px] sm:gap-[96px] lg:pt-[120px] lg:pb-[96px] lg:px-[120px] lg:gap-[120px]">
        {/* Text + Buttons */}
        <div className="flex flex-col gap-[48px] sm:gap-[40px] lg:gap-[48px] items-center w-full">
          <h1
            className="text-white text-center font-['Inter:Bold',sans-serif] font-bold tracking-[-1.1px] sm:tracking-[-1.4px] lg:tracking-[-1.6px] leading-[1.1] w-full"
            style={{ fontSize: "clamp(44px, 6vw, 64px)" }}
          >
            Landing page
          </h1>

          {/* Buttons — stacked on mobile, row on sm+ */}
          <div className="flex flex-col w-full gap-[16px] sm:flex-row sm:w-auto sm:flex-wrap sm:justify-center sm:items-end">
            {/* Primary */}
            <button className="bg-white text-black font-['Inter:Medium',sans-serif] font-medium text-[18px] tracking-[-0.09px] px-[16px] py-[12px] rounded-[12px] leading-[1.45] w-full sm:w-auto cursor-pointer hover:bg-gray-100 transition-colors">
              Your main offer
            </button>
            {/* Secondary */}
            <button className="relative text-white font-['Inter:Medium',sans-serif] font-medium text-[18px] tracking-[-0.09px] px-[16px] py-[12px] rounded-[12px] leading-[1.45] border-2 border-[rgba(255,255,255,0.15)] w-full sm:w-auto cursor-pointer hover:border-[rgba(255,255,255,0.35)] transition-colors">
              Optional second
            </button>
          </div>
        </div>

        {/* Device Frame */}
        <div className="relative w-full aspect-[922/599] rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] pointer-events-none">
          <img
            alt="Product detail"
            className="absolute inset-0 w-full h-full object-cover rounded-[inherit]"
            src={imgDeviceFrame}
          />
          <div className="absolute inset-0 rounded-[inherit] border-8 border-white shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
        </div>
      </div>
    </div>
  );
}

/* ─────────── Feature Gallery ─────────── */
function FeatureGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start w-full pb-[40px] pt-[64px] px-[24px] sm:p-[64px] lg:px-[120px] lg:py-[80px]">
        {/* Text + CTA */}
        <div className="flex flex-col gap-[32px] items-start w-full pb-[48px] sm:pb-[64px] lg:pb-[80px]">
          <div className="flex flex-col gap-[16px] w-full">
            <h2
              className="text-black font-['Inter:Bold',sans-serif] font-bold tracking-[-0.56px] sm:tracking-[-0.64px] lg:tracking-[-0.72px] leading-[1.2] w-full"
              style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
            >
              A really compelling headline
            </h2>
            <p
              className="text-[rgba(0,0,0,0.55)] font-['Inter:Medium',sans-serif] font-medium tracking-[-0.08px] sm:tracking-[-0.09px] lg:tracking-[-0.1px] leading-[1.45] w-full"
              style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
            >
              Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.
            </p>
          </div>
          <button className="bg-black text-white font-['Inter:Medium',sans-serif] font-medium text-[16px] sm:text-[18px] tracking-[-0.09px] px-[24px] py-[12px] rounded-[12px] leading-[1.45] cursor-pointer hover:bg-gray-800 transition-colors">
            Call to action
          </button>
        </div>

        {/* Image gallery — single col on mobile, two cols on sm+ */}
        <div className="flex flex-col sm:flex-row gap-[32px] items-start w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-[32px] items-start w-full sm:flex-1">
            <div className="relative w-full h-[265px] sm:h-[293px] lg:h-[390px] rounded-[16px] overflow-hidden">
              <img
                alt="Gallery image"
                className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                src={imgImage1}
              />
            </div>
            <div className="relative w-full h-[265px] sm:h-[293px] lg:h-[390px] rounded-[16px] overflow-hidden">
              <img
                alt="Gallery image"
                className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                src={imgImage2}
              />
            </div>
          </div>

          {/* Column 2 — offset on sm+ */}
          <div className="flex flex-col gap-[32px] items-start w-full sm:flex-1 sm:pt-[96px]">
            <div className="relative w-full h-[265px] sm:h-[293px] lg:h-[390px] rounded-[16px] overflow-hidden">
              <img
                alt="Gallery image"
                className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                src={imgImage3}
              />
            </div>
            <div className="relative w-full h-[265px] sm:h-[293px] lg:h-[390px] rounded-[16px] overflow-hidden">
              <img
                alt="Gallery image"
                className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                src={imgImage4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Testimonials ─────────── */
function TestimonialCard({
  imgSrc,
  name,
  role,
  quote,
}: {
  imgSrc: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="relative bg-white rounded-[16px] w-full sm:flex-1">
      <div className="flex flex-col gap-[24px] items-start p-[32px]">
        {/* Author */}
        <div className="flex gap-[16px] items-start w-full">
          <div className="relative shrink-0 size-[48px] rounded-[8px] overflow-hidden">
            <img
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              src={imgSrc}
            />
          </div>
          <div className="flex flex-col gap-[4px] flex-1">
            <p className="text-black font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] tracking-[-0.08px] leading-[1.5]">
              {name}
            </p>
            <p className="text-[rgba(0,0,0,0.55)] font-['Inter:Medium',sans-serif] font-medium text-[16px] tracking-[-0.08px] leading-[1.4]">
              {role}
            </p>
          </div>
        </div>
        {/* Quote */}
        <h2 className="text-black font-['Inter:Medium',sans-serif] font-medium text-[16px] sm:text-[18px] tracking-[-0.09px] leading-[1.45] w-full">
          {quote}
        </h2>
      </div>
      <div className="absolute inset-0 rounded-[16px] border border-[rgba(0,0,0,0.1)] pointer-events-none shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </div>
  );
}

function Testimonials() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col gap-[32px] items-center w-full px-[24px] pt-[40px] pb-[64px] sm:px-[64px] sm:pt-[64px] sm:pb-[80px] lg:px-[120px] lg:pt-[80px] lg:pb-[120px]">
        {/* Header */}
        <div className="flex flex-col gap-[12px] sm:gap-[16px] items-start w-full">
          <h2
            className="text-black font-['Inter:Bold',sans-serif] font-bold tracking-[-0.56px] sm:tracking-[-0.64px] lg:tracking-[-0.72px] leading-[1.2] w-full"
            style={{ fontSize: "clamp(28px, 3.5vw, 36px)" }}
          >
            Testimonials
          </h2>
          <p
            className="text-[rgba(0,0,0,0.55)] font-['Inter:Medium',sans-serif] font-medium tracking-[-0.08px] sm:tracking-[-0.09px] leading-[1.45] w-full"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            A little line about what's being said and who's saying it.
          </p>
        </div>

        {/* Cards — stacked on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row gap-[32px] items-start w-full">
          <TestimonialCard
            imgSrc={imgAuthor1}
            name="Carl Caterpillar"
            role="Growth at Cocoon & Co."
            quote="Using this product felt like it transformed me completely."
          />
          <TestimonialCard
            imgSrc={imgAuthor2}
            name="Wanda Wingleton"
            role="Lepidopterist at Butterflai"
            quote="Your expectations will fly sky high. I felt like I was soaring."
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────── Footer ─────────── */
function FooterNavColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <nav className="flex flex-col gap-[8px] items-start">
      <p className="text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] tracking-[-0.08px] leading-[1.45] pb-[8px]">
        {title}
      </p>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-[rgba(255,255,255,0.6)] font-['Inter:Regular',sans-serif] font-normal text-[16px] tracking-[-0.08px] leading-[1.45] hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative w-full">
      {/* Background image */}
      <img
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src={imgFooterBg}
      />

      {/* Content */}
      <div className="relative w-full px-[24px] sm:px-[64px] lg:px-[120px]">
        {/* Top border line */}
        <div className="absolute top-0 left-0 right-0 border-t border-[rgba(255,255,255,0.15)]" />

        <div className="flex flex-col sm:flex-row sm:justify-between gap-[32px] items-start py-[64px] sm:pb-[96px] lg:py-[80px]">
          {/* Brand */}
          <p className="text-white font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] tracking-[-0.48px] leading-[1.2] whitespace-nowrap shrink-0">
            Namedly
          </p>

          {/* Nav columns */}
          <div className="flex flex-col gap-[24px] sm:flex-row sm:gap-[32px] lg:gap-[96px] flex-wrap">
            <FooterNavColumn
              title="Platform"
              links={["Individuals", "Teams", "Admins", "Developers"]}
            />
            <FooterNavColumn
              title="Features"
              links={["Core features", "Pro experience", "Integrations"]}
            />
            <FooterNavColumn
              title="Learn more"
              links={["Blog", "Case studies", "Customer stories", "Best practices"]}
            />
            <FooterNavColumn
              title="Support"
              links={["Contact", "Support", "Legal"]}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────── App ─────────── */
export default function App() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col">
      <main className="flex flex-col items-start w-full">
        <HeroSection />
        <FeatureGallery />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
