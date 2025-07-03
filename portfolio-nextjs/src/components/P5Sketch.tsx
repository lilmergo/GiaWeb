import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

const P5Sketch: React.FC = () => {
    let angle = 0; 
    const centers: { x: number; y: number }[] = [];

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(600,p5.displayHeight).parent(canvasParentRef);
        p5.fill(0, 0, 0, 10);
   
        for (let i = 30; i <= 500; i += 30) {
            centers.push({ x: p5.width / 2, y: p5.height / 2 });
        }
    };

    const draw = (p5: p5Types) => {
        p5.clear(0, 0, 0, 0);

        let phaseOffset = 0; 

        centers.forEach((center, index) => {
            const targetX =
                p5.width / 2 +
                (p5.mouseX - p5.width / 2) * 0.2 * Math.sin(angle + phaseOffset);
            const targetY =
                p5.height / 2 +
                (p5.mouseY - p5.height / 2) * 0.2 * Math.sin(angle + phaseOffset);
     
            center.x = p5.lerp(center.x, targetX, 0.06 * (1 + Math.sin(phaseOffset)) / 2);
            center.y = p5.lerp(center.y, targetY, 0.06 * (1 + Math.sin(phaseOffset)) / 2);

            const sizeFactor = (Math.sin(angle + phaseOffset) + 1) / 2;

            p5.ellipse(center.x, center.y, (index * 40 + 30) * sizeFactor, (index * 40 + 30) * sizeFactor);

            phaseOffset += Math.PI / 4; 
        });
        angle += 0.005;
    };

    return <Sketch setup={setup} draw={draw} />;
};


export default P5Sketch;
