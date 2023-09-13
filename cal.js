function displayData(data) {
    result.value+=data
}
function allClear() {
    result.value=""
}
function backSpace() {
    result.value=result.value.slice(0,-1)
}
function findOut() {
    result.value=eval(result.value)
}