module.exports = function parseStringAsArraw(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim())
}