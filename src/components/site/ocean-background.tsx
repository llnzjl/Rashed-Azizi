"use client";

import { useEffect, useRef } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function OceanBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let deviceScale = 1;
    const motionReduced = prefersReducedMotion();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      deviceScale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * deviceScale));
      canvas.height = Math.max(1, Math.floor(height * deviceScale));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    };

    const drawWave = (
      time: number,
      startY: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string,
      heightOffset: number,
    ) => {
      context.beginPath();
      context.moveTo(0, height);

      for (let x = 0; x <= width + 18; x += 18) {
        const deepSwell = Math.sin(x * frequency + time * speed) * amplitude;
        const glassRipple = Math.sin(x * frequency * 2.7 - time * speed * 1.25) * (amplitude * 0.38);
        const shimmer = Math.sin(x * frequency * 7.5 + time * speed * 2.2) * 2.8;
        context.lineTo(x, startY + deepSwell + glassRipple + shimmer);
      }

      context.lineTo(width, height);
      context.closePath();
      context.fillStyle = color;
      context.fill();

      context.save();
      context.globalAlpha = 0.34;
      context.strokeStyle = "rgba(255,255,255,0.68)";
      context.lineWidth = 1;
      context.beginPath();

      for (let x = 0; x <= width + 24; x += 24) {
        const highlight =
          startY +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 2.7 - time * speed * 1.25) * (amplitude * 0.38) +
          heightOffset;

        if (x === 0) {
          context.moveTo(x, highlight);
        } else {
          context.lineTo(x, highlight);
        }
      }

      context.stroke();
      context.restore();
    };

    const draw = (now: number) => {
      const time = motionReduced ? 18 : now * 0.001;
      const horizon = height * 0.39;

      const sky = context.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "#173b67");
      sky.addColorStop(0.26, "#6f88bf");
      sky.addColorStop(0.45, "#f0a265");
      sky.addColorStop(0.58, "#ffcf8a");
      sky.addColorStop(1, "#063a4b");
      context.fillStyle = sky;
      context.fillRect(0, 0, width, height);

      const sunX = width * 0.72;
      const sunY = horizon * 0.92;
      const sunGlow = context.createRadialGradient(sunX, sunY, 12, sunX, sunY, width * 0.44);
      sunGlow.addColorStop(0, "rgba(255, 248, 194, 0.98)");
      sunGlow.addColorStop(0.13, "rgba(255, 181, 103, 0.62)");
      sunGlow.addColorStop(0.42, "rgba(244, 114, 182, 0.2)");
      sunGlow.addColorStop(1, "rgba(6, 78, 104, 0)");
      context.fillStyle = sunGlow;
      context.fillRect(0, 0, width, height);

      context.save();
      context.globalAlpha = 0.92;
      context.beginPath();
      context.arc(sunX, sunY, Math.max(36, width * 0.045), 0, Math.PI * 2);
      context.fillStyle = "#ffe7a8";
      context.fill();
      context.restore();

      const water = context.createLinearGradient(0, horizon, 0, height);
      water.addColorStop(0, "#30c7d3");
      water.addColorStop(0.28, "#0e9eb4");
      water.addColorStop(0.55, "#086f8f");
      water.addColorStop(0.78, "#07435d");
      water.addColorStop(1, "#031f31");
      context.fillStyle = water;
      context.fillRect(0, horizon, width, height - horizon);

      const reflection = context.createLinearGradient(sunX, horizon, sunX, height);
      reflection.addColorStop(0, "rgba(255, 235, 170, 0.5)");
      reflection.addColorStop(0.32, "rgba(255, 147, 105, 0.27)");
      reflection.addColorStop(0.7, "rgba(80, 230, 220, 0.1)");
      reflection.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.save();
      context.globalCompositeOperation = "screen";
      context.beginPath();
      context.ellipse(sunX, horizon + height * 0.24, width * 0.12, height * 0.38, 0, 0, Math.PI * 2);
      context.fillStyle = reflection;
      context.fill();
      context.restore();

      drawWave(time, horizon + height * 0.05, 16, 0.006, 0.52, "rgba(108, 249, 235, 0.32)", 6);
      drawWave(time, horizon + height * 0.16, 24, 0.0048, 0.72, "rgba(12, 171, 190, 0.46)", 8);
      drawWave(time, horizon + height * 0.3, 32, 0.004, 0.9, "rgba(5, 108, 145, 0.64)", 10);
      drawWave(time, horizon + height * 0.49, 42, 0.0034, 1.1, "rgba(2, 52, 78, 0.72)", 12);

      context.save();
      context.globalCompositeOperation = "screen";
      context.globalAlpha = 0.48;
      for (let i = 0; i < 36; i += 1) {
        const y = horizon + ((i + 1) / 38) * (height - horizon);
        const rippleWidth = width * (0.04 + i * 0.009);
        const offset = Math.sin(time * 1.6 + i * 0.75) * width * 0.025;
        context.beginPath();
        context.ellipse(sunX + offset, y, rippleWidth, 1.2 + i * 0.025, 0, 0, Math.PI * 2);
        context.fillStyle = i % 3 === 0 ? "rgba(255, 236, 183, 0.42)" : "rgba(165, 243, 252, 0.3)";
        context.fill();
      }
      context.restore();

      const vignette = context.createRadialGradient(width * 0.5, height * 0.45, height * 0.2, width * 0.5, height * 0.45, width * 0.85);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.72, "rgba(3, 7, 18, 0.18)");
      vignette.addColorStop(1, "rgba(3, 7, 18, 0.46)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);

      if (!motionReduced) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);

    if (!motionReduced) {
      animationFrame = window.requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="ocean-background" />;
}
