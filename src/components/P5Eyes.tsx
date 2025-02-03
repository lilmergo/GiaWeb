import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';

const P5Eyes: React.FC = () => {

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(500, 150).parent(canvasParentRef);
    };

    let targetX = 0; 
    let targetY = 0;

    const draw = (p5: p5Types) => {
        p5.background(255, 255);
        p5.translate(p5.width / 2, p5.height / 2);

        p5.strokeWeight(1);
        p5.beginShape();
        p5.vertex(-160, 0);
        p5.bezierVertex(-60, -80, 60, -80, 160, 0);
        p5.bezierVertex(60, 80, -60, 80, -160, 0);
        p5.endShape();

        targetX = p5.lerp(targetX, p5.mouseX - p5.width / 2, 0.1); 
        targetY = p5.lerp(targetY, p5.mouseY - p5.height / 2, 0.1); 

 
        let xc = p5.constrain(targetX / 10, -22, 22);
        let xs = p5.constrain(targetY / 10, -9, 9);

    
        p5.fill(0, 0, 0); 
        p5.ellipse(xc, xs, 100, 100);

        p5.fill(255, 255, 255); 

    };


    return <Sketch setup={setup} draw={draw} />;
}
export default P5Eyes;