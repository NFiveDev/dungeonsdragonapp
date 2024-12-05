import './App.css';
import dragonJpg from '../public/firedragon.jpg';
import { WelcomeBlock } from './components/blocks/Welcome/welcome';
import { Section } from './components/base/section/section';
function App() {
    return (
        <main className="app-root">
            <div className="app-background"></div>
            <div className="app-container">
                <Section>
                    <WelcomeBlock />
                </Section>
            </div>
        </main>
    );
}

export default App;
