// js保留两位小数，自动补充零
export function returnFloat(value) {
  var value = Math.round(parseFloat(value) * 100) / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

// 千分位分割
export function segmentationNum(str) {
  return str.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
