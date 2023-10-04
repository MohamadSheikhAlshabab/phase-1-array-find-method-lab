function superbowlWin(arrayOfRecord) {
    const winRecord = arrayOfRecord.find(ele => ele.result === 'W')
    return winRecord ? winRecord.year : undefined;
}