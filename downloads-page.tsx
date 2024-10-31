'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, BarChart2, Settings, LogOut, Download, FileText } from 'lucide-react'


const uploadedData = [
  { id: 1, name: '5월 영수증 데이터', date: '2023-05-31', size: '2.3 MB', type: 'CSV' },
  { id: 2, name: '4월 지출 보고서', date: '2023-04-30', size: '1.8 MB', type: 'PDF' },
  { id: 3, name: '3월 세금 계산서', date: '2023-03-31', size: '3.1 MB', type: 'XLS' },
  { id: 4, name: '2월 급여 명세서', date: '2023-02-28', size: '1.5 MB', type: 'PDF' },
  { id: 5, name: '1월 영수증 데이터', date: '2023-01-31', size: '2.1 MB', type: 'CSV' },
]

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const filteredData = uploadedData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'all' || item.type.toLowerCase() === filterType.toLowerCase())
  )

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
          <Link href="/analytics" className="flex items-center space-x-2 hover:text-primary">
            <BarChart2 size={20} />
            <span>분석</span>
          </Link>
          <Link href="/downloads" className="flex items-center space-x-2 text-primary">
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
        <h1 className="text-4xl font-bold mb-8">업로드된 데이터</h1>

        <Card className="bg-card text-card-foreground mb-8">
          <CardHeader>
            <CardTitle>데이터 검색 및 필터링</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="파일명으로 검색"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="파일 형식 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">모든 형식</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="xls">XLS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>다운로드 가능한 파일 목록</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>파일명</TableHead>
                  <TableHead>업로드 날짜</TableHead>
                  <TableHead>크기</TableHead>
                  <TableHead>형식</TableHead>
                  <TableHead>다운로드</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        <Download size={16} className="mr-2" />
                        다운로드
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
