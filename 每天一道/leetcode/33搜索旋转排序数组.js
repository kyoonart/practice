/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    let peakIndex = findPeakIndex(nums)
    if (target >= nums[0] && target <= nums[peakIndex]) {
        return binarySearch(nums, 0, peakIndex, target)
    } else {
        return binarySearch(nums, peakIndex + 1, nums.length - 1, target)
    }
};

function findPeakIndex(nums) {
    if (nums.length === 1) {
        return 0;
    }
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] >= nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        return 0;
    }
}

function binarySearch(nums, left, right, target) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1;
}



var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.ceil((start + end) / 2);
        // 首尾中全部验证
        if (nums[mid] === target) return mid;
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;
        // 说明前半部分有序
        if (nums[start] < nums[mid]) {
            // 说明目标值存在于有序部分，将末尾设置为mid
            // 继续执行二分查找
            if (nums[start] < target && target < nums[mid]) {
                end = mid - 1;
            } else {
                // 说明目标值存在于后半段
                start = mid + 1;
            }
        } else {
            // 说明后半部分有序
            // 判断目标值是否在后半部分
            if (nums[mid] < target && target < nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};