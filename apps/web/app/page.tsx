import { Textarea } from "@workspace/ui/components/textarea";
import { InteractiveHoverButton } from "@workspace/ui/components/magicui/interactive-hover-button";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { SettingsIcon } from "lucide-react";
import { GridBeams } from "@workspace/ui/components/magicui/grid-beams";
import Link from "next/link";
import { mockRoadmap } from "@/shared/mocks/roadmaps";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <Card className="p-0">
        <CardContent className="p-0">
          <GridBeams
            gridSize={0}
            gridColor="rgba(255, 255, 255, 0.2)"
            rayCount={20}
            rayOpacity={0.55}
            raySpeed={1.5}
            rayLength="40vh"
            gridFadeStart={5}
            gridFadeEnd={90}
            className="h-full w-full"
          >
            <div className="container mx-auto min-h-screen flex items-center justify-center">
              <div className="w-3/4 min-w-96 relative">
                {/* <SparklesText className="mb-4">Хочу изучить...</SparklesText> */}
                <Textarea
                  placeholder="Тема для изучения"
                  className="resize-none p-4 pb-14 min-w-96 min-h-32 text-4xl font-bold"
                />
                <div className="absolute w-full bottom-0 p-2 flex justify-between">
                  <div className="flex gap-4 items-center">
                    <Button size="icon" variant="ghost">
                      <SettingsIcon />
                    </Button>
                  </div>
                  <Link href={"/roadmap/1"}>
                    <InteractiveHoverButton>
                      Создать роадмап
                    </InteractiveHoverButton>
                  </Link>
                </div>
              </div>
            </div>
          </GridBeams>
        </CardContent>
      </Card>
    </main>
  );
}
