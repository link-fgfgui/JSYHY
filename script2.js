let chaxun = () => chaxun2();

async function chaxun2() {
    try {
        let json;
        showtishi('请稍后');
        document.getElementById("buttoncha").disabled = true;
        let response = await axios.get('finished.txt');
        // console.log(response);
        json = response["data"];
        // console.log(json);
        json = JSON.parse(atob(json))
        let user = document.getElementById('shuru').value;
        if (!(user in json)) {
            showtishi('没有找到此人');
            document.getElementById("buttoncha").disabled = false;
            return;
        }
        response = await axios.get('https://api.sl.willanddo.com/api/msg/getMsgList?lastId=0', {
            headers: {
                'token': '78178859698a5459c23443c7015c8ab6'
            }
        });
        let rl = response.data.result;
        let k;
        for (k in rl) {
            let s = rl[k].content;
            if (json[s] !== undefined) {
                json[s] = 'OVER';
            }
        }
        // console.log(json);
        if (json[user] === 'OVER') {
            showtishi('您已经查询过！');
            document.getElementById("buttoncha").disabled = false;
            return;
        }
        await axios.post("https://api.sl.willanddo.com/api/msg/pushMsg?token=6YjOewzLb5rG93TaAgmdC0hFctZUNVnv1yJkQ24HuSpIDMWP78qKfxREsliBoX", {
            'from': 'JavaScript',
            'content': user
        });


        let ob = JSON.stringify({
            'user': user,
            'sea': json[user],
            'time': String(new Date().getTime())
        });
        let str = btoa(ob);
        location.href = 'last.html?main=' + str;
    } catch (error) {
        showtishi('发生错误!<br/>错误原因:' + error);
        document.getElementById("buttoncha").disabled = false;
        return;
    }
}