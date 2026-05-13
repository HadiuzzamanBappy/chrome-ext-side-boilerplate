import { useState } from 'react'
import { Button } from './components/ui/Button'
import { ThemeToggle } from './components/ui/ThemeToggle'
import {
  Scan,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Zap,
  ShieldCheck,
  TrendingUp,
  Search
} from 'lucide-react'

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

function App() {
  const [isScanning, setIsScanning] = useState(false)
  const [hasScanned, setHasScanned] = useState(false)
  const [detectedPlans, setDetectedPlans] = useState<Plan[]>([])

  const startScan = () => {
    setIsScanning(true)
    // Simulate scan delay
    setTimeout(() => {
      setDetectedPlans([
        {
          id: '1',
          name: 'Starter',
          price: '$9/mo',
          features: ['5 Projects', 'Basic Analytics', 'Community Support'],
        },
        {
          id: '2',
          name: 'Professional',
          price: '$29/mo',
          features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support'],
          recommended: true
        }
      ])
      setIsScanning(false)
      setHasScanned(true)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground select-none">
      {/* Compact Header */}
      <header className="flex items-center justify-between px-4 h-14 border-b bg-card/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground fill-current" />
          </div>
          <span className="font-bold tracking-tight">PageMind</span>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">

        {!hasScanned ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <div className="p-6 bg-accent/30 rounded-full animate-pulse">
              <Search className="w-12 h-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Pricing Analyzer</h2>
              <p className="text-sm text-muted-foreground px-6">
                Scan the current page to detect and compare pricing structures.
              </p>
            </div>
            <Button
              size="lg"
              className="w-full max-w-[200px] rounded-2xl"
              onClick={startScan}
              disabled={isScanning}
            >
              {isScanning ? (
                <span className="flex items-center gap-2">
                  <Scan className="w-4 h-4 animate-spin" /> Scanning...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Scan className="w-4 h-4" /> Start Scan
                </span>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Status Card */}
            <div className="glass p-4 rounded-2xl flex items-center gap-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Analysis Complete</p>
                <p className="text-sm font-semibold">2 Plans Detected</p>
              </div>
            </div>

            {/* Plans List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground px-1">DETECTED STRUCTURES</h3>
              {detectedPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative overflow-hidden group border rounded-2xl p-4 transition-all hover:border-primary/50 bg-card ${plan.recommended ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                      BEST VALUE
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{plan.name}</h4>
                      <p className="text-2xl font-black text-primary">{plan.price}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0 rounded-full">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary opacity-70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Insights Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground px-1">INSIGHTS</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass p-3 rounded-2xl space-y-1">
                  <TrendingUp className="w-4 h-4 text-blue-500 mb-1" />
                  <p className="text-[10px] text-muted-foreground uppercase">Market Avg</p>
                  <p className="text-sm font-bold">$19/mo</p>
                </div>
                <div className="glass p-3 rounded-2xl space-y-1">
                  <ShieldCheck className="w-4 h-4 text-green-500 mb-1" />
                  <p className="text-[10px] text-muted-foreground uppercase">Security</p>
                  <p className="text-sm font-bold">Standard</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full rounded-2xl border-dashed" onClick={() => setHasScanned(false)}>
              Reset Analysis
            </Button>
          </div>
        )}
      </main>

      {/* Footer / Quick Actions */}
      <footer className="p-4 border-t bg-card/30">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            V1.0.0 Alpha
          </div>
          <a href="#" className="hover:text-primary transition-colors">Documentation</a>
        </div>
      </footer>
    </div>
  )
}

export default App
