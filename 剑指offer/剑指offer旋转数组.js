function minNumberInRotateArray(rotateArray) {
    const length = rotateArray.length;
    if (!length) {
        return 0;
    }

    return Math.min(...rotateArray);
}

function minNumberInRotateArray(rotateArray) {
    const length = rotateArray.length;
    if (!length) {
        return 0
    }
    let left = 0;
    let right = length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (rotateArray[left] < rotateArray[right]) {
            return rotateArray[left];
        }
        if (rotateArray[left] < rotateArray[mid]) {
            left = mid + 1;
        } else if (rotateArray[mid] < rotateArray[right]) {
            right = mid;
        } else {
            left++;
        }
    }

}