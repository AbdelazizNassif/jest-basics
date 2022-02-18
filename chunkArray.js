const chunkArray = (arr, len) =>
{
    const chunkArr = [];
    arr.forEach(val => {
        // get last array element
        const last = chunkArr[chunkArr.length - 1];
        // 
        if (!last || last.length == len) {
            chunkArr.push([val]);
        } else{
            last.push(val);
        }
    });
    return chunkArr;
}

module.exports = chunkArray;