const LetterFx = forwardRef<HTMLSpanElement, LetterFxProps>(
  (
    {
      children,
      trigger = "hover",
      speed = "medium",
      charset = defaultCharset,
      onTrigger,
      className,
      style,
    },
    ref,
  ) => {
    const [text, setText] = useState<string>(typeof children === "string" ? children : "");
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    const originalText = useRef<string>(typeof children === "string" ? children : "");

    const eventHandler = useCallback(() => {
      const speedSettings = {
        fast: {
          BASE_DELAY: 10,
          REVEAL_DELAY: 10,
          INITIAL_RANDOM_DURATION: 100,
        },
        medium: {
          BASE_DELAY: 30,
          REVEAL_DELAY: 30,
          INITIAL_RANDOM_DURATION: 300,
        },
        slow: {
          BASE_DELAY: 60,
          REVEAL_DELAY: 60,
          INITIAL_RANDOM_DURATION: 600,
        },
      };

      const { BASE_DELAY, REVEAL_DELAY, INITIAL_RANDOM_DURATION } = speedSettings[speed];

      const getRandomCharacter = (charset: string[]): string => {
        const randomIndex = Math.floor(Math.random() * charset.length);
        return charset[randomIndex];
      };

      const generateRandomText = () =>
        originalText.current
          .split("")
          .map((char) => (char === " " ? " " : getRandomCharacter(charset)))
          .join("");

      if (inProgress) return;

      setInProgress(true);

      let randomizedText = generateRandomText();
      const endTime = Date.now() + INITIAL_RANDOM_DURATION;

      const animate = async () => {
        while (Date.now() < endTime) {
          setText(randomizedText);
          await new Promise((resolve) => setTimeout(resolve, BASE_DELAY));
          randomizedText = generateRandomText();
        }

        for (let i = 0; i < originalText.current.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, REVEAL_DELAY));
          setText(`${originalText.current.substring(0, i + 1)}${randomizedText.substring(i + 1)}`);
        }

        setInProgress(false);
        if (trigger === "instant" && !hasAnimated) {
          setHasAnimated(true);
        }
      };

      animate();
    }, [inProgress, trigger, speed, charset, hasAnimated]);

    useEffect(() => {
      if (typeof children === "string") {
        setText(children);
        originalText.current = children;

        if (trigger === "instant" && !hasAnimated) {
          eventHandler();
        }
      }
    }, [children, trigger, eventHandler, hasAnimated]);

    useEffect(() => {
      if (trigger === "custom" && onTrigger) {
        onTrigger(eventHandler);
      }
    }, [trigger, onTrigger, eventHandler]);

    return (
      <span
        ref={ref}
        className={classNames(className)}
        style={style}
        onMouseOver={trigger === "hover" ? eventHandler : undefined}
      >
        {text}
      </span>
    );
  },
);

LetterFx.displayName = "LetterFx";

export { LetterFx };
