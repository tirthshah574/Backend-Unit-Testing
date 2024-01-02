exports.sum = (a, b) => a + b;

exports.deleteUserById = (array, id) => {
    return array.filter((user) => user.id !== id);
};
