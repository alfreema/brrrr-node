/**
 * Checks whether a given strategy object contains the specified properties.
 *
 * @param {Object} strategy - The strategy object to be checked.
 * @param {Array} properties - An array of strings representing the property paths to be verified.
 * @throws {Error} Throws an error if any specified property is not found in the strategy object.
 * @returns {boolean} Returns true if all specified properties exist in the strategy object.
 * @notes
 * - The function checks each property path in the properties array, throwing an error if any property is not found.
 * - The property paths should be specified using dot notation (e.g., 'buy.property.price').
 * - Use this function to ensure that the required properties are present in the strategy object before further processing.
 */
function verifyProperties(strategy, properties) {
  for (let i = 0; i < properties.length; i++) {
    const propertyPath = properties[i].split('.');
    let currentObj = strategy;

    for (let j = 0; j < propertyPath.length; j++) {
      const propertyName = propertyPath[j];
      if (currentObj.hasOwnProperty(propertyName)) {
        currentObj = currentObj[propertyName];
      } else {
        const error = `"strategy" must include strategy.${properties[i]}`
        console.error(error)
        throw new Error(error)
      }
    }
  }
  return true;
}

module.exports = {
  verifyProperties
};
