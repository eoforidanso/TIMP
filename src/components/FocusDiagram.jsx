import { useEffect, useRef, useState } from 'react';
import './FocusDiagram.css';

export default function FocusDiagram() {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      setDimensions({ width: rect.width, height: rect.height });
      drawDiagram();
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const drawDiagram = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio;
    ctx.scale(dpr, dpr);

    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.clearRect(0, 0, width, height);

    const nodeRadius = 4;
    const centerSpacing = width / 2;

    // Gold color to match TIMP theme
    const goldColor = '#c9973a';
    const nodeColor = 'rgba(201, 151, 58, 0.6)';
    const lineColor = 'rgba(201, 151, 58, 0.3)';
    const highlightColor = '#c9973a';

    // Draw left side (scattered - no focus)
    const leftCenterX = centerSpacing * 0.25;
    const leftCenterY = height / 2;

    // Scattered nodes
    const scatteredNodes = [
      { x: leftCenterX - 35, y: leftCenterY - 35 },
      { x: leftCenterX + 15, y: leftCenterY - 40 },
      { x: leftCenterX - 45, y: leftCenterY - 5 },
      { x: leftCenterX + 25, y: leftCenterY - 10 },
      { x: leftCenterX - 30, y: leftCenterY + 30 },
      { x: leftCenterX + 35, y: leftCenterY + 35 },
      { x: leftCenterX - 15, y: leftCenterY + 15 },
      { x: leftCenterX + 10, y: leftCenterY + 45 },
      { x: leftCenterX + 40, y: leftCenterY + 10 },
    ];

    // Draw scattered nodes
    scatteredNodes.forEach((node) => {
      ctx.fillStyle = nodeColor;
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw right side (focused)
    const rightCenterX = centerSpacing * 0.75;
    const rightCenterY = height / 2;

    // Focused nodes - arranged in a network pattern
    const focusedNodes = [
      { x: rightCenterX - 25, y: rightCenterY - 25 },
      { x: rightCenterX + 20, y: rightCenterY - 30 },
      { x: rightCenterX - 35, y: rightCenterY },
      { x: rightCenterX + 30, y: rightCenterY },
      { x: rightCenterX - 20, y: rightCenterY + 30 },
      { x: rightCenterX + 25, y: rightCenterY + 25 },
      { x: rightCenterX, y: rightCenterY - 10 }, // Center node
      { x: rightCenterX, y: rightCenterY + 40 },
      { x: rightCenterX - 10, y: rightCenterY - 40 },
    ];

    // Draw connections for focused nodes
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1.2;
    const centerNode = focusedNodes[6]; // The center node

    focusedNodes.forEach((node, index) => {
      if (index !== 6) {
        // Don't draw line from center to itself
        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      }
    });

    // Draw focused nodes
    focusedNodes.forEach((node, index) => {
      if (index === 6) {
        // Center node - highlighted
        ctx.fillStyle = highlightColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius + 1, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'center';

    ctx.fillText("Scattered", leftCenterX, leftCenterY + 70);
    ctx.fillText("Focused", rightCenterX, rightCenterY + 70);
  };

  return (
    <div className="focus-diagram-container scroll-fade-up" style={{ animationDelay: '1.5s' }}>
      <canvas ref={canvasRef} className="focus-canvas" />
      <div className="focus-labels">
        <div className="focus-label left">
          <p className="focus-label-title">Without Focus</p>
          <p className="focus-label-text">More Time ≠ Better Results</p>
        </div>
        <div className="focus-label right">
          <p className="focus-label-title">With Focus</p>
          <p className="focus-label-text">Directed Effort = Real Impact</p>
        </div>
      </div>
    </div>
  );
}
