import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { Box } from '@mui/material';

const P5Background: React.FC = () => {
    const dots: Dot[] = [];
    const border = 20;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(200, p5.displayHeight - 70).parent(canvasParentRef);

        p5.textFont('Arial'); 
        p5.textSize(30); 
        p5.textAlign(p5.CENTER, p5.CENTER); 

        for (let layer = 1; layer <= 3; layer++) {
            for (let i = 0; i < 3; i++) {
                dots.push(new Dot(layer, p5, border));
            }
        }
    };

    const draw = (p5: p5Types) => {
        p5.background(255); 

     
        p5.blendMode(p5.DIFFERENCE);

        dots.forEach((dot) => {
            dot.draw(p5, border);
        });
        p5.fill(255);
        const text = "Experience";
        const x = p5.width / 2;
        const startY = p5.height / 2 - (text.length * 40) / 2;

        for (let i = 0; i < text.length; i++) {
            p5.text(text[i], x, startY + i * 40); 
        }


        p5.blendMode(p5.BLEND);
    };

    class Dot {
        layer: number;
        x: number;
        y: number;
        speedX: number;
        speedY: number; 

        constructor(layer: number, p5: p5Types, border: number) {
            this.layer = layer;
            this.x = p5.random(-border, p5.width + border);
            this.y = p5.random(-border, p5.height + border);


            this.speedX = p5.random(-1, 1) / layer;
            this.speedY = p5.random(-1, 1) / layer;
        }

        draw(p5: p5Types, border: number) {

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < -border) {
                this.x = p5.width + p5.random(border);
                this.y = p5.random(0, p5.height);
            } else if (this.x > p5.width + border) {
                this.x = -p5.random(border);
                this.y = p5.random(0, p5.height);
            }

            if (this.y < -border) {
                this.y = p5.height + p5.random(border);
                this.x = p5.random(0, p5.width);
            } else if (this.y > p5.height + border) {
                this.y = -p5.random(border);
                this.x = p5.random(0, p5.width);
            }

            p5.circle(this.x, this.y, 100 / (4 - this.layer)); 
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                position: 'relative',
                border: 1,
                borderTop:0,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Sketch setup={setup} draw={draw} />
            </Box>
        </Box>
    );
};

export default P5Background;
