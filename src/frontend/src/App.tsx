import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current || !yesButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const noButton = noButtonRef.current.getBoundingClientRect();
    const yesButton = yesButtonRef.current.getBoundingClientRect();

    const padding = 20;
    const maxX = Math.max(container.width - noButton.width - padding, padding);
    const maxY = Math.max(container.height - noButton.height - padding, padding);

    let newX, newY;
    let attempts = 0;
    const maxAttempts = 50;

    do {
      newX = Math.random() * (maxX - padding) + padding;
      newY = Math.random() * (maxY - padding) + padding;
      attempts++;

      const noLeft = newX;
      const noRight = newX + noButton.width;
      const noTop = newY;
      const noBottom = newY + noButton.height;

      const yesLeft = yesButton.left - container.left;
      const yesRight = yesLeft + yesButton.width;
      const yesTop = yesButton.top - container.top;
      const yesBottom = yesTop + yesButton.height;

      const overlap = !(
        noRight < yesLeft ||
        noLeft > yesRight ||
        noBottom < yesTop ||
        noTop > yesBottom
      );

      if (!overlap) break;
    } while (attempts < maxAttempts);

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleNoTouch = (e: React.TouchEvent | React.PointerEvent) => {
    e.preventDefault();
    moveNoButton();
  };

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  useEffect(() => {
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const noButton = noButtonRef.current.getBoundingClientRect();
      const initialX = Math.min(container.width / 2 + 100, container.width - noButton.width - 20);
      const initialY = container.height / 2 - noButton.height / 2;
      setNoButtonPosition({ x: initialX, y: initialY });
    }
  }, []);

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 flex flex-col">
        <ScrollArea className="flex-1">
          <div className="max-w-6xl mx-auto w-full space-y-6 py-8 px-4 pb-24">
            <div className="text-center space-y-6 animate-in fade-in duration-1000">
              <div className="flex justify-center gap-2 mb-6">
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse delay-100" />
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse delay-200" />
              </div>

              <div className="bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-rose-200 dark:border-rose-800">
                <img
                  src="/assets/generated/valentine-meme-forever-warda.dim_1600x900.png"
                  alt="You are my forever, Warda"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>

              <div className="bg-white/80 dark:bg-rose-900/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-200 dark:border-rose-800 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-rose-600 dark:text-rose-400 mb-6 text-center">
                  I Love You, Warda
                </h2>
                <div className="prose prose-rose dark:prose-invert max-w-none space-y-4 text-base md:text-lg leading-relaxed text-rose-900 dark:text-rose-100">
                  <p>
                    My love, every day with you feels like a gift I don't deserve but am endlessly grateful for. You are my safe place, my biggest blessing, and the reason ordinary moments feel magical. Loving you has taught me patience, joy, and what it truly means to feel at home in another person's heart.
                  </p>
                  <p>
                    On this Valentine's Day—and every day—I choose you, I cherish you, and I thank the universe for making you my wife. I love you more deeply than words can ever fully say.
                  </p>
                  <p>
                    When I first saw you, something changed. I seen what true happiness looks like. I also saw my future. And now, every time I look at you, I see my world, my everything, my past present and future. I see everything I want. You are my everything. You are my world.
                  </p>
                  <p>
                    You are constantly in my mind. You know how to brighten up my day just by saying hi. You are the most amazing girlfriend I could ever want. You've truly made me happier than I thought I could be. I am so in love with you. And the best part is, I fall in love with you more and more every day and with every word you say.
                  </p>
                  <p>
                    You've helped me do things I never thought I could do. You've helped me be happy. You've helped pick me up. You've helped cheer me up. You've helped show me what love really is. You've helped with so much more too. I could be here for the next week saying everything you've done and helped me. I love you so much. So much more than I could ever explain. So much more than you will ever know.
                  </p>
                  <p>
                    You actually mean so much to me. I wouldn't trade you for anything. And the fact that we've been together for one year, one FREAKIN month, is actually crazy. I can't wait to spend the rest of my life with you. I know that waking up to you, rolling over, and giving you a kiss every morning will be truly absolutely amazing.
                  </p>
                  <p>
                    Thank you for everything you have done for me. I still remember that day last year when I said "Will you be my Valentine?" and you said "I need time." And see now, today we are a couple—the best couple, the perfect couple. And today we are husband and wife. So cool, right?
                  </p>
                  <p>
                    Warda, you are my life, my everything. Without you, I have no one. I'll always be loyal to you—that's my promise to you and to Allah. I only want you, I only love you, and I am only yours. I will always be yours.
                  </p>
                  <p className="text-center font-semibold text-xl text-rose-600 dark:text-rose-400 mt-8">
                    I'll forever love you. You are my life. ❤️
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce" />
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce delay-100" />
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce delay-200" />
              </div>
            </div>
          </div>
        </ScrollArea>

        <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-rose-600/60 dark:text-rose-400/60 bg-gradient-to-t from-rose-50/80 dark:from-rose-950/80 backdrop-blur-sm">
          © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 fill-rose-500 text-rose-500" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          >
            caffeine.ai
          </a>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-red-100 dark:from-rose-950 dark:via-pink-950 dark:to-red-950 flex items-center justify-center p-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-2xl min-h-[600px] bg-white/90 dark:bg-rose-900/40 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-rose-200 dark:border-rose-800"
      >
        <div className="text-center space-y-8">
          <div className="flex justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-16 h-16 text-rose-600 fill-rose-600 animate-pulse delay-100" />
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse delay-200" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-rose-600 dark:text-rose-400 leading-tight">
            Will you be my Valentine, my love?
          </h1>

          <div className="flex justify-center items-center gap-8 mt-12 relative">
            <Button
              ref={yesButtonRef}
              onClick={handleYesClick}
              size="lg"
              className="text-2xl px-12 py-8 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 font-bold"
            >
              Yes
            </Button>

            <Button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoTouch}
              onPointerDown={handleNoTouch}
              size="lg"
              variant="outline"
              className="absolute text-2xl px-12 py-8 border-2 border-rose-300 text-rose-600 dark:text-rose-400 rounded-2xl shadow-lg transition-all duration-200 font-bold cursor-pointer"
              style={{
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transform: 'translate(0, 0)',
              }}
            >
              No
            </Button>
          </div>

          <div className="mt-12 flex justify-center gap-2">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce delay-100" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-bounce delay-200" />
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-rose-600/60 dark:text-rose-400/60 bg-gradient-to-t from-rose-100/80 dark:from-rose-950/80">
        © {new Date().getFullYear()} · Built with <Heart className="inline w-4 h-4 fill-rose-500 text-rose-500" /> using{' '}
        <a
          href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
            typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
