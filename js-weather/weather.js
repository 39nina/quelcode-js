const request = new XMLHttpRequest();

const getdata = function() {
    // プルダウンで選択されている都市名を取得
    const city = document.getElementById("select").value;

    // 選択された都市データを参照
    request.open ('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b5774e9f3d2a07b84f0f2f88e486224`, true);
    request.responseType = 'json';

    request.send();

    request.onload = () => {
        const data = request.response;

        const name = data["name"];
        const weather = data["weather"][0]["main"];
        const weather2 = data["weather"][0]["icon"];
        const hightemp = data["main"]["temp_max"];
        const lowtemp = data["main"]["temp_min"];
        document.getElementById("city").innerHTML = name;
        document.getElementById("weather").innerHTML = weather;
        document.getElementById("hightemp").innerHTML = ((Math.round((hightemp - 273.15)*10)/10).toFixed(1)) + "℃";
        document.getElementById("lowtemp").innerHTML = ((Math.round((lowtemp - 273.15)*10)/10).toFixed(1)) + "℃";
    };
}

// 初期状態で選択されているロンドンの内容を表示
getdata();

// プルダウンが変更される都度表示を変更
document.getElementById("select").onchange = function() {
    getdata();
};

