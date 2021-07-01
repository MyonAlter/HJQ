//url 地址验证
function isExal(url){
    var reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    if(reg.test(url)){
        return true;
    }else{
        return false
    }
}
String.prototype.isExal = isExal

//日期格式化处理
function format(data){

}


//数组合并 数组去重