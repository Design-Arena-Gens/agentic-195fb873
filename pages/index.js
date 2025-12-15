import { useState, useEffect } from 'react'
import Head from 'next/head'

const poems = [
  {
    title: "Morning Light",
    author: "Sarah Chen",
    lines: [
      "Dawn breaks through the window pane,",
      "Golden rays dance on morning dew,",
      "A new day whispers soft and true,",
      "Washing away yesterday's pain."
    ]
  },
  {
    title: "Ocean's Song",
    author: "Marcus Rivera",
    lines: [
      "Waves crash upon the sandy shore,",
      "Eternal rhythm, ancient beat,",
      "Where sky and water gently meet,",
      "The ocean sings forevermore."
    ]
  },
  {
    title: "Autumn Leaves",
    author: "Emma Thompson",
    lines: [
      "Crimson, gold, and amber bright,",
      "Falling softly to the ground,",
      "Nature's carpet all around,",
      "Dancing in the fading light."
    ]
  },
  {
    title: "City Dreams",
    author: "James Park",
    lines: [
      "Concrete jungle, steel and stone,",
      "Million stories yet untold,",
      "Dreams of silver, dreams of gold,",
      "In this place I call my own."
    ]
  },
  {
    title: "Silent Night",
    author: "Lucia Martinez",
    lines: [
      "Stars illuminate the sky,",
      "Moon casts shadows soft and deep,",
      "While the weary world finds sleep,",
      "Night birds sing their lullaby."
    ]
  },
  {
    title: "Mountain Peak",
    author: "David Chen",
    lines: [
      "Rising high above the clouds,",
      "Ancient sentinels of time,",
      "Peaks that touch the sublime,",
      "Standing tall and proud."
    ]
  },
  {
    title: "Spring Rain",
    author: "Aisha Kumar",
    lines: [
      "Gentle droplets kiss the earth,",
      "Awakening the sleeping seeds,",
      "Nature tends to all its needs,",
      "Celebrating life's rebirth."
    ]
  }
]

export default function Home() {
  const [dailyPoem, setDailyPoem] = useState(null)
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const today = new Date()
    const dateString = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    setCurrentDate(dateString)

    // Use date as seed for consistent daily poem
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
    const poemIndex = dayOfYear % poems.length
    setDailyPoem(poems[poemIndex])
  }, [])

  if (!dailyPoem) {
    return (
      <div className="container">
        <div className="loading">Loading today's poem...</div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Poetry Run Daily - Your Daily Poem</title>
        <meta name="description" content="A new poem for inspiration every day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <header className="header">
          <h1 className="main-title">Poetry Run Daily</h1>
          <p className="subtitle">Your daily dose of inspiration</p>
          <p className="date">{currentDate}</p>
        </header>

        <main className="main">
          <div className="poem-card">
            <h2 className="poem-title">{dailyPoem.title}</h2>
            <p className="poem-author">by {dailyPoem.author}</p>

            <div className="poem-content">
              {dailyPoem.lines.map((line, index) => (
                <p key={index} className="poem-line">{line}</p>
              ))}
            </div>
          </div>

          <div className="info">
            <p>✨ A new poem appears each day</p>
            <p>📖 Come back tomorrow for fresh inspiration</p>
          </div>
        </main>

        <footer className="footer">
          <p>Poetry Run Daily © 2025</p>
        </footer>
      </div>
    </>
  )
}
