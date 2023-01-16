// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix
        .map((array, index) => {
            if (index % 2 !== 0) return array.sort((a, b) => b - a);
            return array;
        })
        .flat();
};
