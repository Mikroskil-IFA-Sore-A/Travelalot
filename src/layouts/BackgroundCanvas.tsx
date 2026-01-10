import { useEffect, useRef } from "react";

export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        if (!canvas) return;

        const ctx = canvas.getContext("2d")!;
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        let angle = 0;
        let animationFrameId: number;

        function frame() {
            angle += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const size = 80;

            const rotY = angle;
            const rotX = angle * 0.7;

            const vertices: [number, number, number][] = [
                [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
                [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
            ];

            const projected = vertices.map(([x, y, z]) => {
                let x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
                let z1 = x * Math.sin(rotY) + z * Math.cos(rotY);

                let y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
                let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

                const scale = 200 / (200 + z2 * 50);
                return [
                    cx + x1 * size * scale,
                    cy + y1 * size * scale,
                    z2
                ];
            });

            const edges: [number, number][] = [
                [0, 1], [1, 2], [2, 3], [3, 0],
                [4, 5], [5, 6], [6, 7], [7, 4],
                [0, 4], [1, 5], [2, 6], [3, 7]
            ];

            ctx.strokeStyle = "#0037DA";
            ctx.lineWidth = 2;
            edges.forEach(([start, end]) => {
                ctx.beginPath();
                ctx.moveTo(projected[start][0], projected[start][1]);
                ctx.lineTo(projected[end][0], projected[end][1]);
                ctx.stroke();
            });

            ctx.fillStyle = "#0037DA";
            projected.forEach(([x, y]) => {
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(frame);
        }

        frame();

        const handleResize = () => {
            setCanvasSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-screen h-screen z-10 pointer-events-none bg-transparent"
        />
    );
}