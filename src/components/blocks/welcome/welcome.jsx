import cls from './welcome.module.css';

export function WelcomeBlock() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.burning_text}>
                <h1>Welcome to the Forge of Heroes</h1>
            </div>

            <p>In the heart of every legend lies a daring soul</p>
            <button>Begin generating monsters!</button>
        </div>
    );
}
