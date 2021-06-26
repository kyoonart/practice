/* @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const n = matrix.length,
        m = matrix[0] && matrix[0].length;
    let row = n - 1,
        col = 0;
    if (m == 0 && n == 0) { return false }
    while (row >= 0 && col < m) {
        if (matrix[row][col] > target) {
            row--
        } else if (matrix[row][col] < target) {
            col++
        } else {
            return true
        }
    }
    return false
};



function findNumberIn2DArray(arr, target) {
    let n = arr.length;
    let m = arr[0] && arr[0].length
    let row = n - 1;
    let col = 0;
    if (row == 0 && col == 0) return false;
    while (col < m && row >= 0) {
        if (arr[row][col] > target) {
            row--
        } else if (arr[row][col] < target) {
            col++
        } else {
            return true
        }
    }
    return false
}