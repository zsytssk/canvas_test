import { init } from 'lightCanvas/main';
import { testPivot } from './matrix/pivot';
import { testScale } from './node/scale';

function main() {
    const { stage } = init(1334, 750, { bg_color: '#fff' });
    testPivot(stage);
}
main();
