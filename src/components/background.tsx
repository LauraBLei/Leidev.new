import { useEffect, useRef } from "react";

const FallingLettersBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);

    // Function to get a random character
    const getRandomChar = () => {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    // Draw function to update canvas
    function draw() {
      if (!ctx || !canvas) return;

      // Background effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Semi-transparent black background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#5D8EA4"; // Green text color for the "Matrix" effect
      ctx.font = "20px monospace";

      // Loop through columns and generate random characters
      for (let i = 0; i < drops.length; i++) {
        const char = getRandomChar();
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(char, x, y);

        // Reset drop to top when it reaches bottom
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        // Increase drop position
        drops[i]++;
      }
    }

    // Draw the animation continuously
    const drawInterval = setInterval(draw, 100);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(drawInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default FallingLettersBackground;
