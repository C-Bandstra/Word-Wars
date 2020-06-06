export const randomize = () => {
  const nums = [0, 1, 2, 3]
  let i = nums.length
  let j = 0
  let temp;

    while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

    }
  return nums
}