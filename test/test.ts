import { init } from 'lightCanvas/main';
import { drawImage } from './image';
import { testPivot, testPivot2 } from './matrix/pivot';
import { testScale } from './node/scale';

function main() {
    const { stage } = init(750, 1334, { bg_color: '#000' });
    testPivot2(stage);
}
main();
