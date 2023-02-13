function calcSumm(oneNum, twoNum, more, less, same) {
    let getSumm = oneNum + twoNum;

    if (getSumm > 3) {
        more()
    } else if (getSumm < 3) {
        less()
    } else {
        same()
    }


}
function showMoreMess () {
    console.log('сумма больше 3');
}
function showLessMess () {
    console.log('сумма меньше 3');
}
function showSameMess () {
    console.log('сумма равна 3');
}
calcSumm(1, 2, showMoreMess, showLessMess, showSameMess)
