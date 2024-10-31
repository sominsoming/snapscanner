'use client'

import React from 'react'
import Link from 'next/link'
import { Moon, Sun, Menu, X, CheckCircle, ArrowRight, Star, BarChart, PieChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <style jsx global>{`
        :root {
          --background: 240 30% 10%;
          --foreground: 240 10% 95%;
          --card: 240 25% 15%;
          --card-foreground: 240 10% 95%;
          --popover: 240 25% 15%;
          --popover-foreground: 240 10% 95%;
          --primary: 240 100% 60%;
          --primary-foreground: 240 10% 95%;
          --secondary: 280 100% 60%;
          --secondary-foreground: 280 10% 95%;
          --muted: 240 20% 20%;
          --muted-foreground: 240 10% 70%;
          --accent: 200 100% 60%;
          --accent-foreground: 200 10% 95%;
          --destructive: 0 100% 50%;
          --destructive-foreground: 240 10% 95%;
          --border: 240 20% 30%;
          --input: 240 20% 30%;
          --ring: 240 100% 60%;
        }
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="fixed w-full bg-muted/95 backdrop-blur supports-[backdrop-filter]:bg-muted/60 z-50 border-b border-muted">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">SnapScanner</span>
              <nav className="hidden md:flex space-x-4">
                <a href="#features" className="text-foreground/60 hover:text-foreground">기능</a>
                <a href="#how-it-works" className="text-foreground/60 hover:text-foreground">사용방법</a>
                <a href="#pricing" className="text-foreground/60 hover:text-foreground">가격</a>
                <a href="#testimonials" className="text-foreground/60 hover:text-foreground">후기</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
              </Button>
              <Link href="/receipt-upload">
                <Button>무료 체험 시작</Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-20">
          <div className="container">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                영수증 스캔으로 시작하는<br />스마트한 경비 관리
              </h1>
              <p className="mx-auto max-w-[700px] text-foreground/60 md:text-xl">
                SnapScanner로 영수증을 스캔하고, AI가 자동으로 데이터를 분석해 드립니다. 
                중소기업과 개인의 경비 관리를 더 쉽고 정확하게 만들어 드립니다.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/receipt-upload">
                  <Button size="lg">무료로 시작하기</Button>
                </Link>
                <Button variant="outline" size="lg">자세히 알아보기</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
            <div className="grid gap-6 md:grid-cols-3 justify-items-center">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sun className="w-6 h-6 mr-2 text-yellow-400" />
                    AI 영수증 인식
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>고성능 AI가 영수증의 모든 정보를 정확하게 인식하고 분류합니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart className="w-6 h-6 mr-2 text-green-400" />
                    자동 데이터 분석
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>수집된 데이터를 자동으로 분석하여 지출 패턴과 예산 관리에 도움을 줍니다.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-6 h-6 mr-2 text-pink-400" />
                    실시간 리포트
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>언제 어디서나 실시간으로 경비 현황을 확인하고 리포트를 생성할 수 있습니다.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">사용 방법</h2>
            <div className="grid gap-6 md:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-400/20 p-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. 영수증 스캔</h3>
                <p>스마트폰으로 영수증을 촬영하거나 파일을 업로드합니다.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-green-400/20 p-3">
                  <ArrowRight className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. AI 분석</h3>
                <p>AI가 자동으로 영수증 정보를 추출하고 분류합니다.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-pink-400/20 p-3">
                  <Star className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. 결과 확인</h3>
                <p>분석된 데이터와 리포트를 대시보드에서 확인합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 md:py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">가격 정책</h2>
            <div className="grid gap-6 md:grid-cols-3 justify-items-center">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>개인 사용자용</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">₩10,000<span className="text-sm font-normal">/월</span></p>
                  <ul className="mt-4 space-y-2">
                    <li>월 100건 스캔</li>
                    <li>기본 리포트</li>
                    <li>이메일 지원</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">선택하기</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>소규모 비즈니스용</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">₩30,000<span className="text-sm font-normal">/월</span></p>
                  <ul className="mt-4 space-y-2">
                    <li>월 500건 스캔</li>
                    <li>고급 리포트</li>
                    <li>우선 지원</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">선택하기</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>대규모 기업용</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">문의</p>
                  <ul className="mt-4 space-y-2">
                    <li>무제한 스캔</li>
                    <li>맞춤형 리포트</li>
                    <li>전담 매니저</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">문의하기</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">고객 후기</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <Card>
                <CardHeader>
                  <CardTitle>김규리</CardTitle>
                  <CardDescription>프리랜서 디자이너</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>"SnapScanner 덕분에 경비 정리 시간이 절반으로 줄었어요. 정말 편하고 사용하기 쉬워요!"</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>최소민</CardTitle>
                  <CardDescription>소규모 IT 기업 대표</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>"직원들의 경비 처리가 훨씬 빨라졌고, 회계 업무도 간소화되었습니다."</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>손민지</CardTitle>
                  <CardDescription>세무사</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>"클라이언트들에게 자신 있게 추천할 수 있는 서비스입니다. 정확도가 매우 높아요."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>SnapScanner는 어떤 형식의 영수증을 지원하나요?</AccordionTrigger>
                <AccordionContent>
                  SnapScanner는 종이 영수증, 전자 영수증, 그리고 카드 매출전표 등 다양한 형식의 영수증을 지원합니다. 
                  사진으로 찍거나 PDF  파일로 업로드하면 모두 인식 가능합니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>데이터의 보안은 어떻게 유지되나요?</AccordionTrigger>
                <AccordionContent>
                  모든 데이터는 암호화되어 안전하게 저장됩니다. 또한, 정기적인 보안 감사를 통해 
                  최고 수준의 데이터 보호를 제공하고 있습니다.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>다른 회계 소프트웨어와 연동이 가능한가요?</AccordionTrigger>
                <AccordionContent>
                  네, 가능합니다. SnapScanner는 주요 회계 소프트웨어들과 API 연동을 지원하고 있어, 
                  원활한 데이터 통합이 가능합니다.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 md:py-0 bg-muted">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 SnapScanner. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground">이용약관</a>
              <a href="#" className="text-foreground/60 hover:text-foreground">개인정보처리방침</a>
              <a href="#" className="text-foreground/60 hover:text-foreground">문의하기</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}