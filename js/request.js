 

function axios(config) {
    // 初始化构造函数
    this.default = config
    // 添加网络通信实例
    this.instarcaptars = {
        request:{}, // 请求上下文对象
        response:{} //响应上下文对象
    }
}


axios.prototype.request = function (config) {
    console.log(`发起了请求，请求类型为${config.method}`);
}
axios.prototype.get = function (config) {
    return this.request({method:'GET'})
}
axios.prototype.post = function (config) {
    return this .request({method:'POST'})
}
//创建一个生成 axios 实例的函数
function createAxioxs() {
    
    var conteext = new axios();
    return conteext

}

// 完成发送请求 api 的时候


var a = createAxioxs();

a.post();
a.get();


axios({
    url: '',
    methods: '',
    data: {},
    success: function () {

    }
})