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