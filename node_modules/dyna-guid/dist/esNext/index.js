export var guid = function (randomBlocks) {
    if (randomBlocks === void 0) { randomBlocks = 2; }
    var datePart = (Date.now() * 3).toString(16);
    var timeZone = new Date().getTimezoneOffset();
    var timeZonePart = Number("".concat(timeZone < 0 ? "7" : "6").concat(Math.abs(timeZone))).toString(16);
    var outputSize = (randomBlocks * 9) + 3 + 15;
    var output = "";
    for (var i = 0; i < randomBlocks; i++)
        output += randomBlock() + "-";
    output += timeZonePart;
    output += datePart;
    while (output.length < outputSize)
        output += randomBlock();
    return output.substring(0, outputSize);
};
var randomBlock = function () {
    return Number(Math.random().toString()
        .substring(2)).toString(16)
        .substring(0, 8);
};
export var isGuid = function (guid, blocks) {
    if (blocks === void 0) { blocks = 2; }
    var parts = guid.split("-");
    var isV1 = isNumber(parts[parts.length - 1]);
    if (parts.length - 1 !== blocks)
        return "Invalid guid, invalid number of blocks";
    var correctRandomBlocks = parts
        .concat()
        .slice(0, -1)
        .reduce(function (acc, block) {
        return acc && block.length === 8 && !block.includes(" ");
    }, true);
    if (!correctRandomBlocks)
        return "Invalid guid, one or more random blocks are invalid";
    if (!isV1 && parts[parts.length - 1].length !== 18)
        return "Invalid guid, last date block has invalid size";
    return true;
};
var isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
//# sourceMappingURL=index.js.map