'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Home, BarChart2, Settings, LogOut, FileText, DollarSign, TrendingUp, Calendar, Clock } from 'lucide-react'

// 임시 데이터 (실제로는 서버에서 가져와야 합니다)
const categoryData = [
  { category: '인건비', amount: 5000000, lastMonth: 4800000 },
  { category: '운영비', amount: 2000000, lastMonth: 2200000 },
  { category: '마케팅비', amount: 1500000, lastMonth: 1000000 },
  { category: 'IT 인프라', amount: 800000, lastMonth: 750000 },
  { category: '출장 경비', amount: 500000, lastMonth: 600000 },
]

const monthlyData = [
  { month: '1월', amount: 8000000 },
  { month: '2월', amount: 7500000 },
  { month: '3월', amount: 8200000 },
  { month: '4월', amount: 9000000 },
  { month: '5월', amount: 9500000 },
  { month: '6월', amount: 10000000 },
]

const COLORS = ['#3498db', '#2ecc71', '#f39c12', '#e74c3c', '#9b59b6']

export default function AnalyticsPage() {
  const totalSpending = categoryData.reduce((sum, item) => sum + item.amount, 0)
  const lastMonthSpending = categoryData.reduce((sum, item) => sum + item.lastMonth, 0)
  const spendingChange = ((totalSpending - lastMonthSpending) / lastMonthSpending) * 100

  return (
    <div className="min-h-screen bg-background text-foreground">
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
      `}</style>

      {/* Navigation Bar */}
      <nav className="bg-card text-card-foreground p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">SnapScanner</Link>
          <Link href="/dashboard" className="flex items-center space-x-2 hover:text-primary">
            <Home size={20} />
            <span>홈</span>
          </Link>
          <Link href="/analytics" className="flex items-center space-x-2 text-primary">
            <BarChart2 size={20} />
            <span>분석</span>
          </Link>
          <Link href="/downloads" className="flex items-center space-x-2 hover:text-primary">
            <FileText size={20} />
            <span>다운로드</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 hover:text-primary">
            <Settings size={20} />
            <span>설정</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <span>안녕하세요, 관리자님</span>
          <Button variant="outline" size="sm">
            <LogOut size={16} className="mr-2" />
            로그아웃
          </Button>
        </div>
      </nav>

      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">지출 분석</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 지출</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSpending.toLocaleString()}원</div>
              <p className="text-xs text-muted-foreground">
                {spendingChange >= 0 ? (
                  <span className="text-green-400 flex items-center">
                    <TrendingUp className="mr-1" />
                    {spendingChange.toFixed(1)}% 증가
                  </span>
                ) : (
                  <span className="text-red-400 flex items-center">
                    <TrendingUp className="mr-1" />
                    {Math.abs(spendingChange).toFixed(1)}% 감소
                  </span>
                )}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">가장 큰 지출 항목</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{categoryData.sort((a, b) => b.amount - a.amount)[0].category}</div>
              <p className="text-xs text-muted-foreground">전체 지출의 {((categoryData.sort((a, b) => b.amount - a.amount)[0].amount / totalSpending) * 100).toFixed(1)}%</p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">월간 평균 지출</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(monthlyData.reduce((sum, item) => sum + item.amount, 0) / monthlyData.length).toLocaleString()}원</div>
              <p className="text-xs text-muted-foreground">최근 6개월 기준</p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">지출 증가율</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{((monthlyData[monthlyData.length - 1].amount / monthlyData[0].amount - 1) * 100).toFixed(1)}%</div>
              <p className="text-xs text-muted-foreground">6개월간 증가율</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>카테고리별 지출</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="amount"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>월별 지출 추이</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="amount" stroke="#3498db" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>지출 분석 및 제안</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">이번 달의 지출 패턴을 분석한 결과, 다음과 같은 인사이트를 얻었습니다:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>인건비가 가장 높은 지출 항목으로, 전체 지출의 50%를 차지합니다. 인력 운영 효율성을 검토해 볼 필요가 있습니다.</li>
              <li>월별 지출 추이를 보면, 최근 6개월간 지출이 꾸준히 증가하고 있습니다. 장기적인 비용 관리 전략이 필요해 보입니다.</li>
              <li>IT 인프라 비용이 전체 지출의 8%를 차지하고 있습니다. 클라우드 서비스 최적화를 통해 비용 절감의 여지가 있어 보입니다.</li>
            </ul>
            <p className="font-semibold">개선 제안:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>인력 운영 효율성을 높이기 위해 업무 프로세스 개선 및 자동화 도구 도입을 고려해 보세요.</li>
              <li>IT 인프라 비용을 절감하기 위해 클라우드 서비스 사용을 최적화하거나 장기 계약을 통한 할인을 고려해 보세요.</li>
              <li>출장 경비를 줄이기 위해 화상 회의 등의 원격 협업 도구 사용을 늘리는 것이 좋겠습니다.</li>
              <li>월별 예산을 설정하고 정기적으로 지출을 검토하여 불필요한 비용을 줄이는 노력이 필요합니다.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}