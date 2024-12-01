import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
// @ts-ignore
import * as LucideIcons from 'lucide-react'
// @ts-ignore
import { Button } from "@/components/ui/button"
// @ts-ignore
import { Card, CardContent } from "@/components/ui/card"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] bg-gradient-to-b from-[#FF9B50] to-[#FFB178]">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            確かな技術と信頼で<br />未来を築く
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            解体と建築の専門家として、安全で確実な施工をお約束します
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#FF9B50] hover:bg-gray-100"
          >
            <Link href="https://tomisu-co.com/contact">
              お問い合わせ
              <LucideIcons.ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">事業内容</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="家を建てる"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.Home className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  家を建てる
                </h3>
                <p className="text-muted-foreground">
                  お客様の夢を形にする家づくり。高品質な素材と確かな技術で、
                  快適で長く愛される住まいを提供します。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="土地探しのポイント"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.Search className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  土地探しのポイント
                </h3>
                <p className="text-muted-foreground">
                  理想の土地選びをサポート。立地、環境、将来性など、
                  多角的な視点からベストな選択をお手伝いします。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="リフォームする"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.PenToolIcon className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  リフォームする
                </h3>
                <p className="text-muted-foreground">
                  既存の住まいに新たな価値を。機能性と美しさを兼ね備えた
                  リフォームで、暮らしをより快適に変えます。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="収納"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.Package className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  収納
                </h3>
                <p className="text-muted-foreground">
                  空間を最大限に活用する収納プランニング。
                  使いやすさと美しさを両立した、暮らしやすい住空間を実現します。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="アパート建設"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.Building className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  アパート建設
                </h3>
                <p className="text-muted-foreground">
                  収益性と居住性を両立したアパート建設。
                  長期的な資産価値を考慮した設計と施工で、オーナー様の投資を支えます。
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="賃貸管理"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold flex items-center">
                  <LucideIcons.Key className="mr-2 h-6 w-6 text-[#FF9B50]" />
                  賃貸管理
                </h3>
                <p className="text-muted-foreground">
                  オーナー様と入居者様双方に安心を提供する賃貸管理サービス。
                  適切な運営とメンテナンスで、長期的な資産価値の維持をサポートします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="社長写真"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">企業理念</h2>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  私たちは、「安全」「信頼」「技術」を企業活動の柱とし、
                  地域社会の発展に貢献することを使命としています。
                </p>
                <p className="text-lg text-muted-foreground">
                  一つ一つの工事に真摯に向き合い、お客様の満足を追求し続けることで、
                  より良い未来の創造に携わってまいります。
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold">社長の想い</h3>
                <blockquote className="border-l-4 border-[#FF9B50] pl-4 italic">
                  <p className="text-lg text-muted-foreground">
                    "私たちの仕事は、単に建物を建てることではありません。人々の夢と希望を形にし、
                    安心して暮らせる空間を創り出すことです。社会の変化に柔軟に対応しながら、
                    常に技術を磨き、お客様に最高の満足を提供し続けることが私たちの使命です。
                    一人一人の社員が誇りを持って働ける会社、そして地域に愛される企業であり続けたいと思います。"
                  </p>
                </blockquote>
                <p className="text-right text-muted-foreground">- 代表取締役 〇〇 〇〇</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">採用情報</h2>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <LucideIcons.HardHat className="h-6 w-6 text-[#FF9B50]" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">募集職種</h3>
                    <p className="text-muted-foreground">
                      ・解体工事スタッフ<br />
                      ・建築施工管理技士<br />
                      ・営業職
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LucideIcons.Users className="h-6 w-6 text-[#FF9B50]" />
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">求める人材</h3>
                    <p className="text-muted-foreground">
                      ・チームワークを大切にできる方<br />
                      ・向上心を持って仕事に取り組める方<br />
                      ・安全意識の高い方
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">会社概要</h2>
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="font-semibold">会社名</h3>
                    <p className="text-muted-foreground">株式会社〇〇</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">設立</h3>
                    <p className="text-muted-foreground">20XX年XX月</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">代表者</h3>
                    <p className="text-muted-foreground">代表取締役 〇〇 〇〇</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">資本金</h3>
                    <p className="text-muted-foreground">〇,〇〇〇万円</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">所在地</h3>
                    <p className="text-muted-foreground">〒XXX-XXXX<br />〇〇県〇〇市〇〇町X-X-X</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">事業内容</h3>
                    <p className="text-muted-foreground">解体工事<br />建築工事</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">お問い合わせ</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            お気軽にお問い合わせください。専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="mx-auto max-w-md">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#FF9B50] text-white hover:bg-[#FF8B40]"
            >
              <Link href="https://tomisu-co.com/contact" className="flex items-center justify-center">
                <LucideIcons.Send className="mr-2 h-5 w-5" />
                お問い合わせフォームへ
              </Link>
            </Button>
            <div className="mt-6 flex items-center justify-center gap-2 text-lg">
              <LucideIcons.Phone className="h-5 w-5" />
              <span>0120-XX-XXXX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-xl font-bold">株式会社〇〇</div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                サイトマップ
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
