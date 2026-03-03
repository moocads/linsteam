"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface PropertyGalleryProps {
  images: string[]
  title: string
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)

  if (!images || images.length === 0) {
    return null
  }

  const mainImage = images[0]
  const otherImages = images.slice(1)

  const handleOpen = (index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const showNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-3">
        {/* Main image */}
        <button
          type="button"
          onClick={() => handleOpen(0)}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-border bg-card text-left md:col-span-2"
        >
          <Image src={mainImage} alt={title} fill className="object-cover" />
        </button>

        {/* Thumbnails */}
        <div className="grid gap-4">
          {otherImages.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => handleOpen(index + 1)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-border bg-card"
            >
              <Image
                src={image}
                alt={`${title} photo ${index + 2}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl border-0 bg-black/95 p-4 shadow-none">
          <div className="flex flex-col gap-4">
            {/* Large image with arrows */}
            <div className="relative mx-auto w-full max-w-5xl">
              <div className="relative aspect-[3/2] w-full max-h-[80vh]">
                <Image
                  src={images[activeIndex]}
                  alt={`${title} large photo ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                onClick={showPrev}
                className="bg-black/60 hover:bg-black/80 absolute left-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-2 text-light transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="bg-black/60 hover:bg-black/80 absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-2 text-light transition"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Thumbnails inside lightbox */}
            <div className="mx-auto flex max-w-5xl gap-3 overflow-x-auto pt-1">
              {images.map((image, index) => {
                const isActive = index === activeIndex
                return (
                  <button
                    key={image + index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border ${
                      isActive ? "border-tertiary ring-2 ring-tertiary" : "border-gray-border"
                    }`}
                    aria-label={`Show photo ${index + 1}`}
                  >
                    <Image src={image} alt={`${title} thumbnail ${index + 1}`} fill className="object-cover" />
                  </button>
                )
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

