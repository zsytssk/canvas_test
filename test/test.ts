import { init } from 'lightCanvas/main';
import { drawImage } from './image';
import { testPivot } from './matrix/pivot';
import { testScale } from './node/scale';

function main() {
    const { stage } = init(750, 1334, { bg_color: '#000' });
    drawImage(stage);
}
main();
