import { Roadmap } from '@workspace/protos/api/generated/ts/model/roadmap';
import typia from 'typia';

export const mockRoadmap = typia.random<Roadmap>()
export const mockRoadmaps = Array.from({ length: 100 }, () => typia.random<Roadmap>());