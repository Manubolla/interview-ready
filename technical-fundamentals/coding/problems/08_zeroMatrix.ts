// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  const zeroRows = Array(rows).fill(false);
  const zeroCols = Array(cols).fill(false);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        zeroRows[r] = true;
        zeroCols[c] = true;
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    if (zeroRows[r]) {
      for (let c = 0; c < rows; c++) {
        matrix[r][c] = 0;
      }
    }
  }

  for (let c = 0; c < cols; c++) {
    if (zeroCols[c]) {
      for (let r = 0; r < cols; r++) {
        matrix[r][c] = 0;
      }
    }
  }

  return matrix;
}
