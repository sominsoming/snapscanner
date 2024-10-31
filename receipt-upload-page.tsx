'use client'

import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDropzone } from 'react-dropzone'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Upload, Camera, ArrowLeft, File, Home, BarChart2, FileText, Settings, LogOut } from 'lucide-react'

export default function ReceiptUpload() {
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    multiple: false
  })

  const handleCameraCapture = () => {
    // 실제 구현에서는 카메라 API를 사용하여 사진을 촬영
    console.log('카메라로 영수증 촬영')
  }

  const handleScanStart = () => {
    if (file) {
      console.log('스캔 시작:', file.name)
      // 스캔 프로세스가 완료되면 다운로드 페이지로 이동
      router.push('/downloads')
    }
  }

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

      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">영수증 업로드</CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              경비 관리를 시작하려면 영수증을 업로드하거나 촬영하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/25 hover:border-primary/50'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              {isDragActive ? (
                <p className="text-primary">파일을 여기에 놓으세요...</p>
              ) : (
                <p>영수증 파일을 이 영역에 드래그하거나 클릭하여 선택하세요.</p>
              )}
              <p className="text-sm text-muted-foreground mt-2">
                지원 형식: JPEG, PNG, PDF
              </p>
            </div>
            {file && (
              <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                <File className="h-4 w-4" />
                <span>{file.name}</span>
              </div>
            )}
            <div className="flex justify-center space-x-4">
              <Button onClick={() => document.getElementById('fileInput')?.click()} variant="secondary">
                파일 선택
              </Button>
              <input
                id="fileInput"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => e.target.files && setFile(e.target.files[0])}
                className="hidden"
              />
              <Button onClick={handleCameraCapture} variant="secondary">
                <Camera className="mr-2 h-4 w-4" />
                카메라로 촬영
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              뒤로 가기
            </Button>
            <Button onClick={handleScanStart} disabled={!file}>
              <Upload className="mr-2 h-4 w-4" />
              스캔 시작
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
