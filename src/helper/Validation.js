const InputCheck = (input) => {
    if(input.trim().length === 0) {
        return true
    }
    else {
        return false;
    }
}

module.exports = {
    InputCheck
}