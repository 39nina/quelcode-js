const request = new XMLHttpRequest();
let data = "";

const getdata = function() {
    // プルダウンで選択されている都市名を取得
    const city = document.getElementById("select").value;

    // 選択された都市データを参照
    request.open ('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4b5774e9f3d2a07b84f0f2f88e486224', true);
    request.responseType = 'json';

    request.send();

    request.onload = function() {
        data = this.response;

        const dataStringify1 = (JSON.stringify(data["name"])).split('\"').join('');
        const dataStringify2 = (JSON.stringify(data["weather"][0]["main"])).split('\"').join('');
        const dataStringify3 = JSON.stringify(data["main"]["temp_max"]);
        const dataStringify4 = JSON.stringify(data["main"]["temp_min"]);
        document.getElementById("output1").innerHTML = dataStringify1;
        document.getElementById("output2").innerHTML = dataStringify2 ;
        document.getElementById("output3").innerHTML = ((Math.round((dataStringify3 - 273.15)*10)/10).toFixed(1)) + "℃";
        document.getElementById("output4").innerHTML = ((Math.round((dataStringify4 - 273.15)*10)/10).toFixed(1)) + "℃";
    };
}

// 初期状態で選択されているロンドンの内容を表示
getdata();

// プルダウンが変更される都度表示を変更
document.getElementById("select").onchange = function() {
    getdata();
};
