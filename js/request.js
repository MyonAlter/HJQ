


//构造函数
function axios(config) {
    // 初始化构造函数
    this.default = config;
    // 添加网络通信实例
    this.intercaptals = {
        request: {}, // 请求上下文对象
        response: {} //响应上下文对象
    }

    //     config.method = config.method.toUpperCase();
    //     if(config.method == 'GET') this.get(config.url,config.data,config.sucess);
    //     if(config.method == 'POST') this.post(config.url,config.data,sucess);
}

//request
axios.prototype.request = function (config) {
    console.log(`发起了请求，请求类型为${config.method}`);
    var xhr = new XMLHttpRequest();
    var url = this.default.baseurl + config.url;
    var method = config.method;
    var data = config.data;

    if (method == 'GET') {
        // 如果有parmas 参数，将参数拼接到url地址中 并发送给服务器
        if (data.parmas) {
            var parmas = data.params; // 获取parmas 参数
            url = url + '?';                 // 给url拼接 ?
            for (var x in parmas) {
                url = url + x + '=' + parmas[x] + '&';// 遍历参数 拼接到url上
            }
            url = url.slice(0, url.length - 1);// 去除地址中最后一个&符号
        }
        xhr.open(method, url, true)
        xhr.send();
    }

    if (config.method === 'POST') {
        var query = '';
        for (var key in data) {
            query = query + key + '=' + data[key] + '&';
        }
        query = query.slice(0, query.length - 1)
        //设置请求头
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        xhr.send(query)
    }

    // 服务器做出响应的时候触发
    xhr.onreadystatechange = function () {

        this.intercaptals.response.status = xhr.status;

        this.intercaptals.response.status = xhr.readyState;

        if (xhr.readyState === 4 && xhr.status === 200) {
            this.intercaptals.response.data = JSON.parse(xhr.responseText);

            // typeof 在 es5 中百分百正确
            if (typeof config.success === 'function') config.success(this.intercaptals.response.data)
        }
    }.bind(this)
}

//get
axios.prototype.get = function (url, data, success) {
    var config = {
        url: url,
        data: data,
        method: 'GET',
        success: success
    }
    return this.request(config);
}

//post
axios.prototype.post = function (config) {
    return this.request({ method: 'POST' });
}

//创建一个生成 axios 实例的函数
function createAxios(config) {
    var conteext = new axios(config);
    return conteext;

}
var REQUEST = createAxios({
    baseurl: 'http://49.232.47.192:9527'
})






















// // 完成发送请求 api 的时候


// var a = createAxioxs({
//     baseurl: 'http://192.168.1.114/'
// });
// // http://192.168.1.114/api/goodList

// a.post();

// a.get('/api/goodList', {
//     params: {},

// }, function () {

// });


// axios({
//     url: '',
//     methods: '',
//     data: {},
//     success: function () {

//     }
// })

