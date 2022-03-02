import { Image } from 'lightCanvas/node/image';
import { Stage } from 'lightCanvas/node/stage';
import { tweenProps } from 'lightCanvas/utils/tweenProps';
import { setProps } from 'lightCanvas/utils/utils';

export async function testSizeGrid(stage: Stage) {
    const grid = new Image();
    grid.width = 500;
    grid.height = 500;
    grid.x = 100;
    grid.y = 100;
    grid.sizeGrid = '15, 15, 15, 15';
    grid.skin = 'image/grid.png';
    stage.addChild(grid);

    tweenProps({
        start_props: { width: 32, height: 32 },
        end_props: { width: 700, height: 500 },
        callback: () => {},
        step_fun: (props: ClassProps<Node>) => {
            setProps(grid, props);
        },
        time: 5000,
    });
}
