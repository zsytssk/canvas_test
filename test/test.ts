import { init } from 'lightCanvas/main';
import { testDialog } from './dialog';
import { drawImage } from './image';
import { testSizeGrid } from './image/sizeGrid';
import { testAlphaGrid } from './node/alpha';
import { testPivot, testPivot2 } from './node/pivot';
import { testPos } from './node/pos';
import { testScale } from './node/scale';
import { testText } from './node/text';

function main() {
    const { stage } = init(1334, 750, { bg_color: '#000' });
    testPivot2(stage);

    (window as any).test = {
        testPivot: () => {
            stage.removeChildren();
            testPivot(stage);
        },
        testPivot2: () => {
            stage.removeChildren();
            testPivot2(stage);
        },
        testAlphaGrid: () => {
            stage.removeChildren();
            testAlphaGrid(stage);
        },
        testPos: () => {
            stage.removeChildren();
            testPos(stage);
        },
        testScale: () => {
            stage.removeChildren();
            testScale(stage);
        },
        drawImage: () => {
            stage.removeChildren();
            drawImage(stage);
        },
        testText: () => {
            stage.removeChildren();
            testText(stage);
        },
        testSizeGrid: () => {
            stage.removeChildren();
            testSizeGrid(stage);
        },
        testDialog: () => {
            stage.removeChildren();
            testDialog(stage);
        },
    };
}

main();
