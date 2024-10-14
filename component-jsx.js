import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function YouTubeDownloader() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">YouTube Video Downloader</CardTitle>
          <p className="text-center text-muted-foreground">download online videos, download online video to mp3 for free</p>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input placeholder="Search keywords or paste video link here" className="flex-grow" />
            <Button variant="default" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            YouTube is the biggest YouTube video sharing platform in the world, and provide an excellent experience for users to upload, view, and share videos. What it can't provide is a YouTube video download. That is why ytld is here to help you out!
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            With our YouTube video downloader, you can fastly search for your favorite YouTube videos and easily download them for free! You can download YouTube videos to MP4, YouTube Video to MP3, and other formats, with high-quality SD, HD, 1080p, and even 4K. Compatible with mac, Android, iOS, and Windows.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
