// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  // [[0,2], [3,4]]
  // [0, 2]
  // [3, 4]
  // ->
  // [0, 0]
  // [0, 4]
  // [[1, 2, 3], [4, 5, 6], [7, 0, 9],]
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 0, 9],

  // Intente pero tampoco logre hacer este.
  let array: Array<[number, number]> = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        array.push([row, col]);
      }
    }
  }

  array.forEach((coord) => {
    const [x, y] = coord;
    matrix[x] = Array(matrix[x].length).fill(0);

    for (let row = 0; row < matrix.length; row++) {
      matrix[row][y] = 0;
    }
    return matrix;
  });

  return matrix;
}
