import * as cv from "opencv4nodejs";

import { getAveragePoint } from "../average_point";
import { Point } from "../average_point/average_point_types";
import extractResults from "./extract_results";

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function detectFacesUsingNetFromMat(mat: any): BoundingBox[] {
  const proto = "./model/deploy.prototxt.txt";
  const model = "./model/res10_300x300_ssd_iter_140000.caffemodel";
  const net = cv.readNetFromCaffe(proto, model);

  const resizedMat = mat.resize(new cv.Size(300, 300));
  const blob = cv.blobFromImage(
    resizedMat,
    1,
    new cv.Size(300, 300),
    // @ts-ignore
    new cv.Vec(104.0, 177.0, 123.0)
  );

  net.setInput(blob);

  const outputBlob = net.forward();
  const flatOutputBlob = outputBlob.flattenFloat(
    outputBlob.sizes[2],
    outputBlob.sizes[3]
  );

  const results = extractResults(flatOutputBlob, mat);
  const highConfidenceResults = results.filter((result: any) => {
    return result.confidence > 0.5;
  });

  // @ts-ignore
  return highConfidenceResults;
}

function detectGoodFeaturesFromMat(mat: any): Point[] {
  const greyMat = mat.cvtColor(cv.COLOR_RGB2GRAY);
  const points = greyMat.goodFeaturesToTrack(20, 0.04, 1.0);

  return points.map(
    (point: any): Point => {
      return { x: point.x, y: point.y };
    }
  );
}

function detectFacesFromMat(mat: any): BoundingBox[] {
  return [{ x: 0, y: 0, width: 100, height: 100 }];
}

export function getFocalPointFromImage(src: string) {
  const mat = cv.imread(src);
}
