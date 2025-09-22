import { Roadmap } from "@workspace/protos/model/roadmap";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";
import { GridBeams } from "@workspace/ui/components/magicui/grid-beams";
import { NodeProps as XYNodeProps, Position, Handle } from "@xyflow/react";

export interface PromptNodeProps extends Omit<XYNodeProps, "data"> {
  data: Roadmap;
}

function PromptNode({ data }: PromptNodeProps) {
  return (
    <Card className="p-0 aspect-square h-96 w-96">
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="rounded-xl h-full w-full"
      >
        <CardHeader className="p-4">
          <h1 className="text-2xl font-bold">Изучение GoLang</h1>
        </CardHeader>
        <CardContent className="px-4">
          <p className="text-xl text-muted-foreground">
            Изучение основного синтаксиса и концепций Go, включая типы данных,
            функции, структуры и интерфейсы.
          </p>
        </CardContent>
      </GridBeams>
      <Handle type={"source"} position={Position.Right} />
    </Card>
  );
}

export default PromptNode;
