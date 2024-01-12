//给数字(钱数)字符串由右至左每三位添加逗号的方法
const money_amount = (str) => {
  //字符串切割为数组反转再转字符串
  let reverse_str = str.split("").reverse().join("");
  let arr = [];
  //循环下标
  for (let i in reverse_str) {
    //与3取模
    if (i % 3 == 0) {
      //开始三三分割字符串并反转，推入数组
      arr.push(reverse_str.substr(i, 3).split("").reverse().join(""));
    }
  }
  // 返回 反转后三三加入逗号的字符串
  return arr.reverse().join(",");
};
export default money_amount;
