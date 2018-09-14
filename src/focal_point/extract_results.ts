import * as cv from "opencv4nodejs";

export default function extractResults(outputBlob: any, imgDimensions: any) {
  return (
    Array(outputBlob.rows)
      // @ts-ignore
      .fill(0)
      // @ts-ignore
      .map((res, i) => {
        const classLabel = outputBlob.at(i, 1);
        const confidence = outputBlob.at(i, 2);
        // @ts-ignore
        const bottomLeft = new cv.Point(
          outputBlob.at(i, 3) * imgDimensions.cols,
          outputBlob.at(i, 6) * imgDimensions.rows
        );
        // @ts-ignore
        const topRight = new cv.Point(
          outputBlob.at(i, 5) * imgDimensions.cols,
          outputBlob.at(i, 4) * imgDimensions.rows
        );
        const rect = new cv.Rect(
          bottomLeft.x,
          topRight.y,
          topRight.x - bottomLeft.x,
          bottomLeft.y - topRight.y
        );

        return {
          classLabel,
          confidence,
          rect
        };
      })
  );
}
