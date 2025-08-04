// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer' || 'Green Garden':
      return 1.5;
      
    case 'Green Garden':
      return 1.5;
      
    case 'Tropical Island':
      return 3;
      
    case 'All or Nothing':
      return 5;
      
    default:
      return 2.5;
      
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeCount = 0 ;
  for(let i = 0 ; i < limes.length ; i++) {    
    if(wedgesNeeded <= 0) {
        break
      }else{
          if(limes[i] === 'small'){
            wedgesNeeded -= 6
          }else if (limes[i] === 'medium'){
            wedgesNeeded -= 8
          }else{
            wedgesNeeded -= 10
          };
          limeCount++
            }
    }
  return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0 ;
  while (timeLeft > 0 ) {    
        if(orders[i] === 'Energizer'){
        timeLeft-= 1.5;        
      }else if(orders[i] === 'Green Garden'){
        timeLeft -= 1.5;
      }else if (orders[i] === 'Pure Strawberry Joy') {
        timeLeft -= 0.5;
      }else if (orders[i] === 'Tropical Island') {
        timeLeft -= 3;
      }else if (orders[i] === 'All or Nothing') {
        timeLeft -= 5;
      }else{
        timeLeft -= 2.5;
      }
      console.log('the juice in the array: ' + orders[i])
      console.log('timeLeft: ' + timeLeft)
      orders.splice(i, 1);
    console.log('orders: ' + orders);
      
    console.log('increment: ' + i);    
     
  }
  return orders;
}


