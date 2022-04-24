const random = function (): string {
  return Math.floor(
    1000000000 + (Math.random() * 0x10000000 /* 65536 */)
  ).toString(18).substr(0, 8);
};

export const guid = (blocks: number = 2): string => {
  let date = new Date();
  let datePart = (Number(date) * 3).toString().split("").reverse().join("");
  let timeZonePart: any = new Date().getTimezoneOffset();
  if (timeZonePart < 0) {
    timeZonePart = -timeZonePart;
    timeZonePart = '7' + timeZonePart;
  }
  else {
    timeZonePart = '3' + timeZonePart;
  }

  let output = '';
  for (let i = 0; i < blocks; i++) output += random() + '-';
  output += datePart;
  output += timeZonePart;

  return output
};

