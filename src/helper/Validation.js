const InputCheck = (input) => {
    if(input.trim().length === 0) {
        return true
    }
    return false;
}

module.exports = {
    InputCheck
}