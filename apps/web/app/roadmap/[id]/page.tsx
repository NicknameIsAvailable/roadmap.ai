"use client";

import "@xyflow/react/dist/style.css";
import { RoadMap } from "@/components/roadmap";

export default function RoadmapPage() {
  return (
    <main className="h-screen p-4">
      <RoadMap.Flow />
    </main>
  );
}
