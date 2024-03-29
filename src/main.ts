import { destroy, init, Opt } from 'lightCanvas/main';
import { setLogo } from './setLogo';
import { NodeData, startScene, xmlToNode } from './startScene';

export type StartPot = Opt & {
    logo?: string;
    xml: NodeData;
};
function start(width: number, height: number, start_opt = {} as StartPot) {
    const { logo, xml, ...opt } = start_opt;
    const { stage } = init(width, height, opt);
    setLogo(logo, width, height);

    return startScene(stage);
}
// start(1334, 750);
// export { load, xmlToNode, start, destroy };
