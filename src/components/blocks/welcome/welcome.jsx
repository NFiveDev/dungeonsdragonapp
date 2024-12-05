import cls from './welcome.module.css';
import { Button } from '../../base/button/button';

export function WelcomeBlock() {
    return (
        <div className={cls.wrapper}>
            <div className={cls.burning_text}>
                <h1>Welcome to the Forge of Heroes</h1>
            </div>

            <p className={cls.sub_heading}>
                In the heart of every legend lies a daring soul
            </p>
            <Button variant="burning" size="large">
                Begin generating monsters!
            </Button>
        </div>
    );
}
