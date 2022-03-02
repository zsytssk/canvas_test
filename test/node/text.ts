import { Image } from 'lightCanvas/node/image';
import { Stage } from 'lightCanvas/node/stage';
import { Text } from 'lightCanvas/node/text';

export function testText(stage: Stage) {
    const hello = new Text();
    hello.text = 'hello world';
    hello.font = 'Arial';
    hello.align = 'left';
    hello.valign = 'bottom';
    hello.fontSize = 50;
    hello.stroke = 10;
    hello.strokeColor = 'blue';
    hello.color = '#fff';
    hello.x = 100;
    hello.y = 100;
    hello.width = 250;
    hello.height = 100;
    stage.addChild(hello);
}
