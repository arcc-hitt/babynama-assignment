'use client'

import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import WebinarCard, { Webinar } from '../components/WebinarCard'

const webinars: Webinar[] = [
  { id: 1, title: 'Nutrition Tips for Newborns', speaker: 'Dr. Sumitra Meena', date: '2025-07-10' },
  { id: 2, title: 'Managing Sleep with a Growing Baby', speaker: 'Dr. Rajiv Patel', date: '2025-07-17' },
  { id: 3, title: 'Postpartum Mental Health', speaker: 'Dr. Anjali Rao', date: '2025-07-24' },
]

const WebinarsPage: NextPage = () => {
  const handleViewDetails = (id: number) => {
    console.log(`Viewing details for webinar ID: ${id}`)
  }

  return (
    <>
      <Head>
        <title>Upcoming Webinars | Babynama</title>
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Live Webinars
          </h1>
          <div className="space-y-6">
            {webinars.map((w) => (
              <WebinarCard
                key={w.id}
                webinar={w}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default WebinarsPage
