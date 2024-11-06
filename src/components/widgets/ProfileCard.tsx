import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import avatarImage from '../../assets/avatar.png';

const ProfileCard = () => {
  // Состояния
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Текстовый контент
  const fullText = "Привет! Я frontend разработчик и увлекаюсь кибербезопасностью. Создаю веб-приложения и изучаю новые технологии.";

  // Эффект печатающегося текста
  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setInterval>;

    const startTyping = () => {
      timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
        }
      }, 30);
    };

    startTyping();

    // Очистка при размонтировании
    return () => {
      if (timer) {
        clearInterval(timer);
        setText('');
        setIsTypingComplete(false);
      }
    };
  }, []); // Убран fullText из зависимостей, так как он не меняется

  return (
    <Card>
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Аватар со статусом */}
        <div className="relative w-32 h-32 flex-shrink-0">
          <img 
            src={avatarImage}
            alt="Avatar"
            className="w-full h-full rounded-full object-cover border-2 border-accent/80"
          />
          {/* Индикатор онлайн */}
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary" />
        </div>

        {/* Текст */}
        <div className="flex-1 w-full">
          <div className="bg-secondary/80 backdrop-blur-sm rounded-lg p-6 font-mono text-xl leading-relaxed">
            <div className="relative">
              <div className="invisible">{fullText}</div>
              <div className="absolute top-0 left-0">
                {text}
                <span className={`
                  inline-block w-2.5 h-5 ml-1 bg-white
                  ${isTypingComplete ? 'animate-pulse' : 'animate-pulse'}
                `}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;