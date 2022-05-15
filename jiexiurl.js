function jietu() {
    html2canvas(document.body).then(function (canvas) {
        // console.log(canvas);
        let img = canvas.toDataURL("image/jpeg");
        // console.log(img);
        const obj = document.createElement('a');
        obj.style.display = "none"
        obj.href = img;
        obj.setAttribute('download', 'Screenshot-sea');
        obj.click();
    })
}

function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
}
const url = new URL(location);
let str = url.searchParams.get('main');
str = atob(str);
let dic = JSON.parse(str);
document.getElementById('b').innerHTML = "您的海洋为:<br/>" + dic.sea
document.getElementById('p').innerHTML = "每人仅可查询一次，建议及时截图保存！查询时间:" + timestampToTime(parseInt(dic.time))