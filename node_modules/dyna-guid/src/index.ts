
export const guid = (randomBlocks: number = 2): string => {
  const datePart = (Date.now() * 3).toString(16);
  const timeZone: any = new Date().getTimezoneOffset();
  const timeZonePart = Number(`${timeZone < 0 ? "7" : "6"}${Math.abs(timeZone)}`).toString(16);
  const outputSize = (randomBlocks * 9) + 3 + 15;

  let output = "";
  for (let i = 0; i < randomBlocks; i++) output += randomBlock() + "-";
  output += timeZonePart;
  output += datePart;
  while (output.length < outputSize) output += randomBlock();

  return output.substring(0, outputSize);
};

const randomBlock = (): string => {
  return Number(Math.random().toString()
    .substring(2)).toString(16)
    .substring(0, 8);
};

export const isGuid = (guid: string, blocks = 2): string | true => {
  const parts = guid.split("-");
  const isV1 = isNumber(parts[parts.length - 1]);

  if (parts.length - 1 !== blocks) return "Invalid guid, invalid number of blocks";
  const correctRandomBlocks =
    parts
      .concat()
      .slice(0, -1)
      .reduce((acc: boolean, block) => {
        return acc && block.length === 8 && !block.includes(" ");
      }, true);
  if (!correctRandomBlocks) return "Invalid guid, one or more random blocks are invalid";
  if (!isV1 && parts[parts.length - 1].length !== 18) return "Invalid guid, last date block has invalid size";
  return true;
};

const isNumber = (n: any): boolean => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
