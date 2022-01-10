import { init } from 'lightCanvas/main';
import { drawImage } from './image';
import { testPivot } from './matrix/pivot';
import { testScale } from './node/scale';

function main() {
    const { stage } = init(1334, 750, { bg_color: '#000' });
    drawImage(stage);
}
main();
