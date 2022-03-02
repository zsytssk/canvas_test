import { setLogo } from './setLogo';
import { Stage } from 'lightCanvas/node/stage';
import { startScene } from './startScene';

export function testDialog(stage: Stage) {
    setLogo(
        'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
        1334,
        750,
    );

    return startScene(stage);
}
