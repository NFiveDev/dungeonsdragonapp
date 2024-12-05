import './App.css';
import dragonJpg from '../public/firedragon.jpg';
function App() {
    return (
        <main className="app-root">
            <div className="app-background">
                <img src={dragonJpg} alt="" />
            </div>
            <div className="app-container"></div>
        </main>
    );
}

export default App;
