import { Button } from './components/Button';
import { Card } from './components/Card';

export default function App() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px', display: 'grid', gap: 18 }}>
      <h1>Arun Design System</h1>
      <Card heading="Composable Components" interactive>
        Start with primitives and evolve your own consistent UI language.
      </Card>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost" size="lg">
          Ghost
        </Button>
      </div>
    </main>
  );
}
