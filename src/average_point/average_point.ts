import { Point, PointMass } from "./average_point_types";

/**
 * Get a point which is affected by the mass of an array of points.
 */
export function getMassAveragePoint(points: PointMass[]): Point {
  let totalMass = 0;

  return points.reduce(
    (mem: Point, point: PointMass, index) => {
      mem.x += point.x * point.mass;
      mem.y += point.y * point.mass;
      totalMass += point.mass;

      if (index === points.length - 1) {
        mem.x = Math.round(mem.x / totalMass);
        mem.y = Math.round(mem.y / totalMass);
      }

      return mem;
    },
    { x: 0, y: 0 }
  );
}

/**
 * Get the avergae point among an array of points.
 */
export function getAveragePoint(points: Point[]): Point {
  return points.reduce(
    (mem: Point, point: Point) => {
      const x = point.x;
      const y = point.y;

      mem.x += Math.round(x / points.length);
      mem.y += Math.round(y / points.length);

      return mem;
    },
    { x: 0, y: 0 }
  );
}
