import { useState } from 'react'
import { Button } from './components/ui/Button'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col h-screen bg-background text-foreground select-none">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-muted-foreground">
            Simple Counter
          </h2>
          <Button 
            size="lg" 
            className="w-full min-w-[200px] rounded-2xl shadow-xl shadow-primary/20"
            onClick={() => setCount((c) => c + 1)}
          >
            Count is {count}
          </Button>
          <p className="text-sm text-muted-foreground">
            Click to increment the counter
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
