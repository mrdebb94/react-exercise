export const MODIFY_NUMBERS = 'MODIFY_NUMBERS'

export function modifyNumbers(numbers, sums) {
  
  return {
    type: MODIFY_NUMBERS,
    numbers: numbers,
    sums: sums
  }

}
