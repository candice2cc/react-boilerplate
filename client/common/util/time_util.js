/**
 * Created by candice on 17/2/4.
 */
const startYear = 2016;
const startMonth = 1;
const endYear = new Date().getFullYear();
const endMonth = new Date().getMonth() + 1;//getMonth 从 Date 对象返回月份 (0 ~ 11)。

/**
 * 时间常用工具函数
 * Created by candice on 16/11/2.
 */
function autoPadNum(num, len) {
    num = num + '';
    let pad = len - num.length;
    for (let i = 0; i < pad; i++) {
        num = '0' + num;
    }
    return num;
}

function calcMonthArray(sep = '-') {
    let monthArray = [];
    for (let year = startYear; year <= endYear; year++) {

        for (let month = startMonth; month <= 12; month++) {
            let monthStr = year + '';
            monthStr += (sep + autoPadNum(month, 2));
            monthArray[monthArray.length] = monthStr;
            if (year === endYear && month === endMonth) {
                return monthArray.reverse();
            }
        }
    }


}

export  {calcMonthArray, autoPadNum, endYear, endMonth}