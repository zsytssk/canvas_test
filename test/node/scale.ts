import { Image } from 'lightCanvas/node/image';
import { Stage } from 'lightCanvas/node/stage';

export function testScale(stage: Stage) {
    const img1 = new Image();
    img1.skin = './image/test.jpg';
    img1.x = 0;
    img1.y = 0;
    img1.scaleX = 0.2;
    img1.scaleY = 0.2;
    stage.addChild(img1);

    const img2 = new Image();
    img2.skin = './image/test.jpg';
    img2.x = 100;
    img2.y = 100;
    img2.scaleX = 0.4;
    img2.scaleY = 0.4;
    stage.addChild(img2);

    const img3 = new Image();
    img3.skin = './image/test.jpg';
    img3.x = 300;
    img3.y = 300;
    img3.scaleX = 0.6;
    img3.scaleY = 0.6;
    stage.addChild(img3);
}
