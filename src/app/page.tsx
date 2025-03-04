import Image from "next/image"
import Link from "next/link"
import { ChevronUp, Facebook, Instagram, Mail, MapPin, Phone, Youtube, Music } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/MobileMenu"
import { ScrollToTopButton } from "@/components/ScrollToTopButton"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "뷰네(Buehne) - 예술의 무대를 꿈꾸다",
  description: "클래식 연주 및 공연기획 단체 뷰네입니다. 무대 위에서 펼쳐지는 클래식 음악의 순수한 아름다움을 전하고자 합니다.",
  openGraph: {
    title: "뷰네(Buehne) - 예술의 무대를 꿈꾸다",
    description: "클래식 연주 및 공연기획 단체 뷰네입니다. 무대 위에서 펼쳐지는 클래식 음악의 순수한 아름다움을 전하고자 합니다.",
    url: "https://buehne.kr",
    siteName: "뷰네(Buehne)",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "뷰네(Buehne) - 예술의 무대를 꿈꾸다",
    description: "클래식 연주 및 공연기획 단체 뷰네입니다. 무대 위에서 펼쳐지는 클래식 음악의 순수한 아름다움을 전하고자 합니다.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#1F2937]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1F2937]/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            <Music className="h-6 w-6 text-[#C9A668]" />
            <span className="font-serif">뷰네</span>
            <span className="text-sm font-normal text-[#C9A668]/80">(Buehne)</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-white hover:text-[#C9A668] transition-colors">
              About
            </Link>
            <Link href="#founder" className="text-sm font-medium text-white hover:text-[#C9A668] transition-colors">
              Founder
            </Link>
            <Link href="#activities" className="text-sm font-medium text-white hover:text-[#C9A668] transition-colors">
              Activities
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-white hover:text-[#C9A668] transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-[#C9A668] transition-colors">
              Contact
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero 섹션 */}
        <section className="relative flex min-h-screen items-center justify-center bg-[#1F2937] pt-16">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-30"
            >
              <source
                src="https://media.istockphoto.com/id/1288908205/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A6%B0-%EC%B2%BC%EB%A1%9C-%ED%8A%B8%EB%9F%BC%ED%8E%AB-%EC%97%B0%EC%A3%BC-%EA%B3%B5%EC%97%B0%EC%9E%90%EC%99%80-%ED%95%A8%EA%BB%98-%EC%8B%AC%ED%8F%AC%EB%8B%88-%EC%98%A4%EC%BC%80%EC%8A%A4%ED%8A%B8%EB%9D%BC%EB%A5%BC-%EC%97%B0%EC%B6%9C%ED%95%98%EB%8A%94-%EC%A7%80%ED%9C%98%EC%9E%90%EC%9D%98-%EC%8B%9C%EB%84%A4%EB%A7%88%ED%8B%B1-%EC%83%B7.mp4?s=mp4-640x640-is&k=20&c=47YwCtv6fO4_1prTuIrwVzOY9BFpknJokx85VATmCPc="
                type="video/mp4"
              />
            </video>
          </div>
          <div className="container relative z-10 mx-auto px-4 py-24 text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">무대에서 피어나는</span>
              <span className="mt-2 block text-[#C9A668]">클래식의 감동</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">클래식 연주 및 공연기획 단체 뷰네</p>
            <div className="mx-auto mt-10 max-w-sm">
              <Link
                href="#contact"
                className="flex w-full items-center justify-center rounded-md bg-[#C9A668] px-8 py-3 text-base font-medium text-white hover:bg-[#B89658] md:py-4 md:text-lg"
              >
                공연 문의하기
              </Link>
            </div>
          </div>
        </section>

        {/* About 섹션 */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">
                뷰네(Bühne) - 예술의 무대를 꿈꾸다
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                '뷰네'는 독일어로 '무대(Bühne)'를 의미합니다. 우리는 무대 위에서 펼쳐지는 클래식 음악의 순수한
                아름다움을 전하고자 하는 클래식 음악 연주 및 공연기획 단체입니다.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                뷰네는 단순한 공연을 넘어, 클래식 음악이 가진 감동과 열정을 관객과 연주자가 함께 공유하는 특별한 순간을
                만들어갑니다. 무대 위에서 펼쳐지는 소리의 울림은 관객들의 가슴 속에 잔잔한 파동을 일으키고, 우리는 그
                순간을 통해 서로가 하나가 되는 경험을 지향합니다.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">예술의 감동을 나누는 무대</h3>
                <p className="mt-4 text-gray-600">
                  뷰네는 무대 위에서 펼쳐지는 클래식 음악의 감동을 모든 이와 나누고자 합니다. 예술의 순수한 아름다움은
                  무대에서 빛을 발하며, 연주자와 관객이 함께 만들어가는 감동의 순간은 뷰네의 가장 중요한 가치입니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">다양성을 존중하는 음악적 여정</h3>
                <p className="mt-4 text-gray-600">
                  우리는 전통적인 클래식 레퍼토리뿐만 아니라 영화음악, 만화와 애니메이션의 OST, 동요 등 모든 세대와
                  장르를 아우르는 음악을 연주합니다. 다양한 음악을 통해 서로 다른 세대와 문화가 공존하는 무대를 만들고,
                  예술의 경계를 확장하는 데 앞장섭니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">지속 가능한 예술적 비전</h3>
                <p className="mt-4 text-gray-600">
                  뷰네는 예술을 통해 사회에 긍정적인 영향을 미치고, 클래식 음악의 가치를 지속적으로 이어가는 것을 목표로
                  합니다. 안정적인 예술 활동 기반을 마련하여 예술가들이 자유롭게 창작하고, 더 많은 사람들이 음악의
                  아름다움을 경험할 수 있도록 노력합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder 섹션 */}
        <section id="founder" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">
                    대표자 소개
                  </h2>
                  <h3 className="mt-2 text-xl font-medium text-[#C9A668]">한동윤</h3>
                  <p className="mt-4 text-lg text-gray-600">
                    한동윤 대표는 클래식 음악의 깊이를 대중과 나누기 위해 뷰네를 설립하였습니다. 그는 독일의 Hochschule
                    für Musik und Tanz Köln에서 클라리넷을 전공하고, 다수의 오케스트라 및 앙상블에서 연주 경험을 쌓아온
                    음악가입니다.
                  </p>
                  <p className="mt-4 text-lg text-gray-600">
                    또한, 음악 아카데미와 학교에서의 강사 및 디렉터로서 풍부한 지도 경험을 갖추고 있으며, 클래식 음악의
                    저변을 넓히기 위한 열정을 가지고 있습니다. 한동윤 대표는 클래식 음악의 가치를 많은 이들에게
                    전달하고자 하는 목표로 뷰네를 이끌어가고 있습니다.
                  </p>
                  <blockquote className="mt-6 border-l-4 border-[#C9A668] pl-4 italic text-gray-600">
                    "안녕하세요, 뷰네의 대표 한동윤입니다. '뷰네'는 독일어로 '무대'라는 뜻을 담고 있으며, 저희 단체는 그
                    이름처럼 무대 위에서 펼쳐지는 예술의 감동을 여러분과 나누고자 합니다. 클래식 음악은 우리의 일상에 큰
                    울림과 영감을 주는 예술입니다. 저와 뷰네는 단순히 음악을 연주하는 것을 넘어, 그 음악을 통해 사람들
                    간의 마음을 잇고, 모든 세대와 장르를 아우르는 무대를 만들기 위해 노력하고 있습니다."
                  </blockquote>
                </div>
                <div className="order-1 md:order-2">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/profile.jpg"
                      alt="한동윤 대표"
                      width={600}
                      height={600}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities 섹션 */}
        <section id="activities" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">뷰네의 활동</h2>
              <p className="mt-4 text-lg text-gray-600">
                뷰네는 클래식 음악의 무대를 통해 예술의 가치를 더 많은 사람들과 나누고, 모든 세대가 음악의 아름다움을
                경험할 수 있도록 다양한 활동을 전개하고 있습니다.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">공연 및 연주 활동</h3>
                <p className="mt-2 text-gray-600">
                  다양한 무대에서 클래식 음악의 순수한 아름다움을 전하며 관객들과 소통합니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a6 6 0 016 6c0 1.419-.5 2.725-1.333 3.751C15.667 12.775 14 13.5 12 13.5s-3.667-.725-4.667-1.749A5.981 5.981 0 016 8a6 6 0 016-6z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13.5V21" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17h6" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">지원사업</h3>
                <p className="mt-2 text-gray-600">
                  클래식 음악과 문화예술을 널리 알리기 위한 다양한 지원사업을 기획하고 추진합니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">기업/기관/단체 초청 연주</h3>
                <p className="mt-2 text-gray-600">
                  기업 및 기관, 단체 등의 초청 연주를 통해 클래식 음악의 감동을 더 많은 이들과 나눕니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">공연 기획</h3>
                <p className="mt-2 text-gray-600">
                  창의적인 공연 기획을 통해 색다른 음악적 경험을 제공하고, 무대의 다채로운 매력을 선보입니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">콘텐츠 생산</h3>
                <p className="mt-2 text-gray-600">
                  음악과 예술의 가치를 담은 콘텐츠를 제작하여 온라인 및 오프라인을 통해 예술의 감동을 전달합니다.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F2937] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1F2937]">
                  음악 및 문화 예술 전반에 긍정적인 영향
                </h3>
                <p className="mt-2 text-gray-600">
                  클래식 음악을 통해 사회 전반에 긍정적인 영향을 미치고, 예술을 통해 더 나은 세상을 만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio 섹션 */}
        <section id="portfolio" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">포트폴리오</h2>
              <p className="mt-4 text-lg text-gray-600">뷰네의 다양한 공연과 활동을 소개합니다.</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "https://media.istockphoto.com/id/483692035/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EC%A7%91%EC%9D%8C%EA%B8%B0-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4-symphony-orchestra.mp4?s=mp4-640x640-is&k=20&c=zeDMYrcznkN6V_nbw2l3HAbEqNIn2_VS8NieS0okb94=",
                "https://media.istockphoto.com/id/498540594/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EB%B0%94%EC%9D%B4%EC%98%AC%EB%A6%B0-%EC%88%98%ED%96%89.mp4?s=mp4-640x640-is&k=20&c=LEEJ2EWMc-bdBMWv6TYCCs0BLlJbJ5Tbp9P4Dc35Ebg=",
                "https://media.istockphoto.com/id/1209056845/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EC%BD%98%EC%84%9C%ED%8A%B8%EC%97%90%EC%84%9C-%ED%8A%B8%EB%9F%BC%ED%8E%AB%EC%9D%84-%EC%97%B0%EC%A3%BC%ED%95%98%EB%8A%94-%EC%9D%8C%EC%95%85%EA%B0%80.mp4?s=mp4-640x640-is&k=20&c=bJ2YzZCY2mnQQi3dgudw2dhjniT2k3RhPOYvHtEVymo=",
                "https://media.istockphoto.com/id/1408032256/ko/%EB%B9%84%EB%94%94%EC%98%A4/%ED%95%84-%ED%95%98%EB%AA%A8%EB%8B%89-%ED%99%80%EC%9D%98-%ED%99%A9%EB%8F%99-%EC%98%A4%EC%BC%80%EC%8A%A4%ED%8A%B8%EB%9D%BC-%ED%94%8C%EB%A3%A8%ED%8B%B0%EC%8A%A4%ED%8A%B8%EA%B0%80-%ED%94%8C%EB%A3%A8%ED%8A%B8%EB%A5%BC-%EC%97%B0%EC%A3%BC%ED%95%98%EA%B3%A0-%EC%9E%88%EC%9C%BC%EB%A9%B0-%EA%B4%80%EC%95%85%EA%B8%B0%EC%9D%98-%ED%81%B4%EB%A1%9C%EC%A6%88%EC%97%85-%EB%B7%B0.mp4?s=mp4-640x640-is&k=20&c=6dStlGEo4D6oCev4yRvfHNTCibvUNrhs5UTyujPvt3I=",
                "https://media.istockphoto.com/id/502793567/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EC%A7%81%EC%9B%90%EA%B4%80%EB%A6%AC-%EA%B2%8C%EC%9E%84%ED%95%98%EA%B8%B0-instruments-in-orchestra.mp4?s=mp4-640x640-is&k=20&c=LVtiyYpE6FZf-d2nkh09KRZ4lLOTwhlt0MNrqkUQLGc=",
                "https://media.istockphoto.com/id/915445126/ko/%EB%B9%84%EB%94%94%EC%98%A4/%EB%AE%A4%EC%A7%80%EC%85%98-%EC%97%B0%EC%A3%BC-%EB%B0%98%EC%9B%90.mp4?s=mp4-640x640-is&k=20&c=2S0tCKUlYtwy9J4cPNXY7aHVlw2Ob0PXwtHdX3tgdQY="
              ].map((url, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="relative h-64">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    >
                      <source src={url} type="video/mp4" />
                    </video>
                  </div>
                  <div className="bg-white p-4">
                    <h3 className="font-serif text-lg font-semibold text-[#1F2937]">공연 제목 {index + 1}</h3>
                    <p className="mt-2 text-sm text-gray-600">2023년 공연</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#1F2937] hover:bg-[#374151]">더 많은 자료 요청</Button>
            </div>
          </div>
        </section>

        {/* Contact 섹션 */}
        <section id="contact" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">문의하기</h2>
              <p className="mt-4 text-lg text-gray-600">공연 문의 및 협업 제안을 환영합니다.</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#C9A668]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">주소</p>
                      <p className="mt-1 text-sm text-gray-600">경기도 광주시 양벌로 173</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#C9A668]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">이메일</p>
                      <p className="mt-1 text-sm text-gray-600">info@buehne.kr</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#C9A668]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">전화</p>
                      <p className="mt-1 text-sm text-gray-600">010-1234-5678</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-base font-medium text-gray-900">SNS</p>
                  <div className="mt-4 flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-[#C9A668]">
                      <span className="sr-only">Instagram</span>
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#C9A668]">
                      <span className="sr-only">Facebook</span>
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#C9A668]">
                      <span className="sr-only">YouTube</span>
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#1F2937] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} 뷰네(Buehne). All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-400">대표자: 한동윤 | 소재지: 경기도 광주시 양벌로 173</p>
            </div>
            <div>
              <ScrollToTopButton />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


