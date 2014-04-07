 var array = new Array();
//点菜操作
function down(id, name, price) {
    var b = $("#total").text();
    var reg = new RegExp("^[0-9]*$");
    var total = Number(price) + Number(b);
    var nu = $("#number").text();
    var num = Number(nu) + 1;
    document.getElementById("number").textContent = num;
    document.getElementById("total").textContent = total;
    var numb= $("#ware" + id).text();
    if (numb == "") {

    } else {

    }
    document.getElementById("ware" + id).textContent = 1;
    if (array.length == 0) {
        array[array.length] = "{name:'" + name + "',id:'" + id + "',number:'" + 1 + "',price:'" + price + "'}";
    } else {
        var a = 0;
        for (var i = 0; i < array.length; i++) {
            var array_t = new Array();
            array_t = array[i].split(',');
            for (var j = 0; j < 1; j++) {
                var param = array_t[1].split(':');
                var u = "'" + id + "'";
                if (param[1] == u) {
                    a = 1;
                    var pa = array_t[2].split(':');
                    pa[1] = pa[1].replace(/\'/g, "");
                    var nu = Number(pa[1]) + 1;
                    array[i] = "{name:'" + name + "',id:'" + id + "',number:'" + nu + "',price:'" + price + "'}";
                    break;
                }
            }
            if (a == 1) {
                break;
            }
        }
        if (a == 0) {
            array[array.length] = "{name:'" + name + "',id:'" + id + "',number:'" + 1 + "',price:'" + price + "'}";
        }
    }
}
//点击加号
function add(id, price) {
    var b = $("#to").text();
    var total = Number(price) + Number(b);
    document.getElementById("to").textContent = total;
    var numb = $("#nu").text();
    document.getElementById("#nu").textContent = Number(numb)++;
    for (var i = 0; i < array.length; i++) {
        var array_t = new Array();
        array_t = array[i].split(','); 
        for (var j = 0; j < 1; j++) {
            var param = array_t[1].split(':');
            var u = "'" + id + "'";
            if (param[1] == u) {
                //份数
                var pa = array_t[2].split(':');
                pa[1] = pa[1].replace(/\'/g, "");
                var nu = Number(pa[1]) + 1;
                //菜品名称
                var cai = array_t[0].split(':');
                var na = cai[1].replace(/\'/g, "");
                //主键
                var ids = array_t[1].split(':');
                var idt = ids[1].replace(/\'/g, "");
                //价格
                var prr = array_t[3].split(':');
                var pr = prr[1].replace(/\'/g, "");
                pr = pr.replace(/\}/g, "");
                array[i] = "{name:'" + na + "',id:'" + idt + "',number:'" + nu + "',price:'" + pr + "'}";
                break;
            }
        }

    }
    var dataorders = JSON.stringify(array);;
    dataorders = dataorders.replace(/\"/g, "");
    var dataorder = eval('(' + dataorders + ')');
    var objListView = document.getElementById("orderlist");
    objListView.innerHTML = "";
    $.each(dataorder, function (i, n) {
        var good = '';
        good = '<li data-icon="false"><a herf="#">' + n.name + '| ￥' + n.price + '<label id="Label1" name="Label1" class="jz" onclick="add(' + n.id + ',' + n.price + ')" >+</label><label id="label2" class="so">' + n.number + '</label><label id="Label3" class="jo" onclick="min(' + n.id + ',' + n.price + ')">-</label></a></li>';
        $("#orderlist").append(good);
    });

    $("#order").page();
    $("#orderlist").listview('refresh');
}
//点击减号
function min(id, price) {
    var b = $("#to").text();
    var total = Number(b) - Number(price);
    document.getElementById("to").textContent = total;
    var numb = $("#nu").text();
    document.getElementById("#nu").textContent = Number(numb)--;
    for (var i = 0; i < array.length; i++) {
        var array_t = new Array();
        array_t = array[i].split(',');
        for (var j = 0; j < 1; j++) {
            var param = array_t[1].split(':');
            var u = "'" + id + "'";
            if (param[1] == u) {
                var pa = array_t[2].split(':');
                pa[1] = pa[1].replace(/\'/g, "");
                if (Number(pa[1]) > 0) {

                    //份数
                    var pa = array_t[2].split(':');
                    pa[1] = pa[1].replace(/\'/g, "");
                    var nu = Number(pa[1]) - 1;
                    //菜品名称
                    var cai = array_t[0].split(':');
                    var na = cai[1].replace(/\'/g, "");
                    //主键
                    var ids = array_t[1].split(':');
                    var idt = ids[1].replace(/\'/g, "");
                    //价格
                    var prr = array_t[3].split(':');
                    var pr = prr[1].replace(/\'/g, "");
                    pr = pr.replace(/\}/g, "");
                    array[i] = "{name:'" + na + "',id:'" + idt + "',number:'" + nu + "',price:'" + pr + "'}";
                    break;
                }
            }
        }
    }
    var dataorders = JSON.stringify(array);;
    dataorders = dataorders.replace(/\"/g, "");
    var dataorder = eval('(' + dataorders + ')');
    var objListView = document.getElementById("orderlist");
    objListView.innerHTML = "";
    $.each(dataorder, function (i, n) {
        var good = '';
        good = good = '<li data-icon="false"><a herf="#">' + n.name + '| ￥' + n.price + '<label id="Label1" name="Label1" class="jz" onclick="add(' + n.id + ',' + n.price + ')" >+</label><label id="label2" class="so">' + n.number + '</label><label id="Label3" class="jo" onclick="min(' + n.id + ',' + n.price + ')">-</label></a></li>';
        $("#orderlist").append(good);
    });

    $("#order").page();
    $("#orderlist").listview('refresh');
}
var fkorderid = "";
var nuorder = "";
var prices = "";
//打开订单
function oring(id, nu, shopid, price) {
    fkorderid = id;
    nuorder = nu;
    prices = price
    shopID = shopid;
}

var addname = "";
var addphone = "";
var addaddress = "";
var addcuid = "";
var cuaddress = "";
//选择地址
function seladdress(name, phone, address, cuid,addaddressid) {
    
    addname = name;
    addphone = phone;
    addaddress = address;
    addcuid = cuid;
    if (cuaddress == "") {
        document.getElementById("cuadd" + addaddressid).style.display = "block";
        cuaddress = "cuadd" + addaddressid;
    } else {
        document.getElementById(cuaddress).style.display = "none";
        document.getElementById("cuadd" + addaddressid).style.display = "block";
        cuaddress = "cuadd" + addaddressid;
    }
    
}
//释放地址
function setaddress() {
    addname = "";
    addphone = "";
    addaddress = "";
    addcuid = "";
}
//删除地址
function deladdress() {
    var objListView = document.getElementById("addre");
    objListView.innerHTML = "";
    $.post("../Phone/deladdress", { shopid: shopID, weiid: WeiXinID, param: deladdresssid }, function (data) {
        var addressdata = data;
        $.each(addressdata, function (i, n) {
            var good = '';
            good = '<li data-icon="false"><a herf="#" onclick="seladdress(' + "&quot;" + n.NvrContactName + "&quot;" + ',' + n.NvrContactPhone + ',' + "&quot;" + n.NvrContactAddress + "&quot;" + ',' + n.FkCUCustomerID + ')" ><p>姓名:' + n.NvrContactName + '</p><p>电话:' + n.NvrContactPhone + '</p><p>地址:' + n.NvrContactAddress + '</p><a onclick="deladdress(' + n.Pk_CUAddress_ID + ')">删除</a></a></li>';
            $("#addre").append(good);
        });
        $("#secadress").page();
        $("#addre").listview('refresh');
        $('#addpop').popup('close');
    }, "json");
}
function hidenpop() {
    $('#addpop').popup('close');
}

$(document).ready(function (e) {



    //提交评价
    $("#evaltion").click(function () {
        var ev = $("#info").text();
        $.post("../Phone/Evaluation", { shopid: shopID, weiid: WeiXinID, param: ev }, function (data) {
            fkorderid = "";
            nuorder = "";
            prices = "";
        }, "");
    })
    //取消订单

    $("#resetor").click(function () {

        $.post("../Phone/Uordering", { orderid: fkorderid, statu: "3" }, function (data) {
            fkorderid = "";
            nuorder = "";
            prices = "";
            alert(data);
        }, "");

    })
    //确认订单
    $("#receiptor").click(function () {

        $.post("../Phone/Qordering", { orderid: fkorderid, statu: "4" }, function (data) {
            fkorderid = "";
            nuorder = "";
            prices = "";
        }, "");

    })

    //删除订单
    $("#delor").click(function () {

        $.post("../Phone/Dordering", { orderid: fkorderid }, function (data) {
            fkorderid = "";
            nuorder = "";
            alert(data);
        }, "");

    })

    //下单
    $("#placeder").click(function () {
        $.post("../Phone/Gaddress", { shopid: shopID, weiid: WeiXinID }, function (data) {

            var addr = data;
            if (addr == "") {
                document.getElementById("Aconfirm").style.display = "block";
                document.getElementById("Aconfir").style.display = "none";
            } else {
                document.getElementById("Aconfirm").style.display = "none";
                document.getElementById("Aconfir").style.display = "block";
            }


        }, "json");

    });

    $("#btnWare").click(function () {
        $("#wareList").show();
        $("#shopMsg").hide();
    })
    $("#btnShop").click(function () {
        $("#wareList").hide();
        $("#shopMsg").show();
    })
    $("#shopMsg").hide();
    //下拉菜单
    $("#waretype").change(function () {
        var a = $(this).val();
        var pos = $("#"+a).offset().top;
        $("html,body").animate({scrollTop: pos}, 1);
    });


    //提交
    $("#suborder").click(function () {
        var dataorders = JSON.stringify(array);;
        dataorders = dataorders.replace(/\"/g, "");
        var pri = $("#to").text();
        if (addaddress == "") {
            alert("请选择地址");
        } else {
            $.post("../Phone/ConOrder", { param: dataorders, weiid: WeiXinID, shopid: shopID, price: pri }, function (data) {
                var or = data.split(',');
                var address = addaddress;
                var ph = addphone;
                var na = addname;
                var re = document.getElementById("remark").value;
                $.post("../Phone/AddDelivered", { orderid: or[0], addr: address, phone: ph, name: na, remark: re, cuid: or[1], pa: "2" }, function (data) {
                    array = "";
                    addname = "";
                    addphone = "";
                    addaddress = "";
                    addcuid = "";
                    document.getElementById("remark").value = "";
                    $('#addpup').popup('open');

                }, "")

            }, " ")
        }
    });

    //提交
    $("#submit").click(function () {
        var dataorders = JSON.stringify(array);
        dataorders = dataorders.replace(/\"/g, "");
        var pri = $("#to").text();
        $.post("../Phone/ConOrder", { param: dataorders, weiid: WeiXinID, shopid: shopID, price: pri }, function (data) {

            var address = document.getElementById("addr").value;
            var ph = document.getElementById("phone").value;
            var na = document.getElementById("name").value;
            var re = document.getElementById("remark").value;

            var or = data.split(',');
            $.post("../Phone/AddDelivered", { orderid: or[0], addr: address, phone: ph, name: na, remark: re, cuid: or[1], pa: "1" }, function (data) {
                array = "";
                document.getElementById("remark").value = "";
                document.getElementById("addr").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("name").value = "";
                document.getElementById("remark").value = "";
                $('#uedcool').popup('open');

            }, "")

        }, "")

    });



    //加载商品
    $(document).on("pageshow", "#ware", function (event) {
        var num = document.getElementById("number").textContent;
        if (num == "") {
            document.getElementById("number").textContent = "0";

        }
        var tot = document.getElementById("total").textContent;
        if (tot == "") {
            document.getElementById("total").textContent = "0";
        }

        $.post("../Phone/warelist", { shopid: shopID }, function (data) {
            var dataStore = data;
            var objListView = document.getElementById("goodlist");
            objListView.innerHTML = "";
            var classid = '';
            $.each(dataStore, function (i, n) {
                var good = '';
                
                if (classid == '') {

                    classid = n.fkWAWareClassifyID;
                    good = '<li data-role="list-divider" data-icon="false" id="' + n.fkWAWareClassifyID + '">' + n.nvrName + '</li>'
                    good += '<li data-icon="false"><a href="#" rel="external" id="wareid" >' + n.nvrWareName + ' </a><span class="ui-li-count"  onclick="down(' + n.pk_WAWare_ID + ',' + "&quot;" + n.nvrWareName + "&quot;" + ',' + n.mnyPrice + ')" >￥ ' + n.mnyPrice + ' </span><span id="ware'+n.pk_WAWare_ID+'" ></span></li>';
                } else {
                    if (n.fkWAWareClassifyID == classid) {
                        good = '<li data-icon="false"><a href="#" rel="external" id="wareid" >' + n.nvrWareName + ' </a><span class="ui-li-count"  onclick="down(' + n.pk_WAWare_ID + ',' + "&quot;" + n.nvrWareName + "&quot;" + ',' + n.mnyPrice + ')" >￥ ' + n.mnyPrice + ' </span><span id="ware' + n.pk_WAWare_ID + '" ></li>';
                    } else {
                        classid = n.fkWAWareClassifyID;
                        good = '<li data-role="list-divider" data-icon="false" id="' + n.fkWAWareClassifyID + '">' + n.nvrName + '</li>'
                        good += '<li data-icon="false"><a href="#" rel="external" id="wareid" >' + n.nvrWareName + ' </a><span class="ui-li-count"  onclick="down(' + n.pk_WAWare_ID + ',' + "&quot;" + n.nvrWareName + "&quot;" + ',' + n.mnyPrice + ')" >￥ ' + n.mnyPrice + ' </span><span id="ware' + n.pk_WAWare_ID + '" ></li>';
                    }
                }
               
                $("#goodlist").append(good);
            });
            $("#ware").page();
            $("#goodlist").listview('refresh');          
        }, "json");


        $.post("../Phone/waretype", { shopid: shopID }, function (datas) {
            var datatype = datas;
            var objListView = document.getElementById("waretype");
            objListView.innerHTML = "";

            $.each(datatype, function (i, n) {
                var good = '';
                good = "<option value='" + n.Pk_WAWareClassify_ID + "'>" + n.NvrName + "</option>";
                $(good).appendTo("#waretype");

            });
            $("#waretype").selectmenu("refresh");

        }, "json");


    });
    //加载订单
    $(document).on("pageshow", "#order", function (event) {
        var b = $("#total").text();
        document.getElementById("to").textContent = b;
        var tot = $("#number").text();
        document.getElementById("nu").textContent = tot;
        var dataorders = JSON.stringify(array);
        dataorders = dataorders.replace(/\"/g, "");
        var dataorder = eval('(' + dataorders + ')');
        var objListView = document.getElementById("orderlist");
        objListView.innerHTML = "";

        $.each(dataorder, function (i, n) {
            var good = '';
            good = '<li data-icon="false"><a herf="#">' + n.name + '| ￥' + n.price + '<label id="Label1" name="Label1" class="jz" onclick="add(' + n.id + ',' + n.price + ')" >+</label><label id="label2" class="so">' + n.number + '</label><label id="Label3" class="jo" onclick="min(' + n.id + ',' + n.price + ')">-</label></a></li>';
            $("#orderlist").append(good);
        });

        $("#order").page();
        $("#orderlist").listview('refresh');
    });
    //我的订单
    $(document).on("pageshow", "#ordering", function (event) {
        var objListView = document.getElementById("orderinglist");
        objListView.innerHTML = "";
        var objListView = document.getElementById("Norderinglist");
        objListView.innerHTML = "";
        $.post("../Phone/Gordering", { weiid: WeiXinID }, function (data) {
            var dataordering = data;
            var orderid = "";
            $.each(dataordering, function (i, n) {
                var good = '';
                var goods = '';
                var mdata = Date(n.dtmOrderTime);
                var dat = new Date(mdata).toLocaleDateString().replace(/年|月/g, '-').replace('日', '');
                if (orderid == "") {
                    orderid = n.fkOROrderID;
                    good = '<li data-role="list-divider"><a herf="#">最新订单</a></li>';
                    goods = '<li data-role="list-divider"><a herf="#">历史订单</a></li>';
                    if (n.nvrStatusName == "已下单" || n.nvrStatusName == "确认订单") {
                        good += ' <li data-icon="false"><a href="#orderDetail" onclick="oring(' + n.fkOROrderID + ',1,' + n.pk_SEShop_ID + ',' + n.mnyOrderTotal + ')"  >' + n.nvrShopName + dat + n.nvrStatusName + '￥' + n.mnyOrderTotal + ' </a></li>';
                    } else {
                        goods += ' <li data-icon="false"><a href="#orderDetail" onclick="oring(' + n.fkOROrderID + ',2,' + n.pk_SEShop_ID + ',' + n.mnyOrderTotal + ')" >' + n.nvrShopName + dat + n.nvrStatusName + '￥' + n.mnyOrderTotal + '</a></li>';
                    }
                } else {
                    if (orderid == n.fkOROrderID) {


                    } else {
                        orderid = n.fkOROrderID;
                        if (n.nvrStatusName == "已完成订单" || n.nvrStatusName == "无效订单") {
                            goods = '<li data-icon="false"><a href="#orderDetail" onclick="oring(' + n.fkOROrderID + ',2,' + n.pk_SEShop_ID + ',' + n.mnyOrderTotal + ')" >' + n.nvrShopName + dat + n.nvrStatusName + '￥' + n.mnyOrderTotal + '</a></li>';
                        } else {
                            good = '<li  data-icon="false"><a href="#orderDetail" onclick="oring(' + n.fkOROrderID + ',1,' + n.pk_SEShop_ID + ',' + n.mnyOrderTotal + ')" >' + n.nvrShopName + dat + n.nvrStatusName + '￥' + n.mnyOrderTotal + '</a></li>';
                        }
                    }
                }
                $("#Norderinglist").append(good);
                $("#orderinglist").append(goods);

            });
            $("#ordering").page();
            $("#orderinglist").listview('refresh');
            $("#Norderinglist").listview('refresh');
        }, "json");

    });


});


//订单详情
$(document).on("pageshow", "#orderDetail", function (event) {
    var objListView = document.getElementById("receiptgood");
    objListView.innerHTML = "";
    document.getElementById("ordertotal").textContent = "";
    document.getElementById("ordertotal").textContent = prices;
   
    if (nuorder == 2) {
        document.getElementById("delor").style.display = "block";//删除
        document.getElementById("receiptor").style.display = "none";//确认
        document.getElementById("resetor").style.display = "none";//取消
    }
    $.post("../Phone/Gorderdetail", { orderid: fkorderid }, function (data) {
        var dataorder = data;
        $.each(dataorder, function (i, n) {
            var good = '';
            var total = '';
            var type = '';
            type = n.nvrStatusName;
            document.getElementById("remarktext").value = "";
            document.getElementById("remarktext").value = n.nvrContactDescription;
            if (type == "已下单") {
                document.getElementById("receiptor").style.display = "none";//确认
                document.getElementById("resetor").style.display = "block";//取消
                document.getElementById("delor").style.display = "none";//删除
            } else if (type == "确认订单") {
                document.getElementById("receiptor").style.display = "block";//确认
                document.getElementById("resetor").style.display = "none";//取消
                document.getElementById("delor").style.display = "none";//删除
            }
            total = n.mnyOrderTotal;
            document.getElementById("ordertotal").value = total;
            good = '<li data-icon="false"><a herf="#">' + n.nvrWareName + '| ￥' + n.mnyWarePrice + '<label id="label2" class="so">' + n.fltWareNum + '份</label></a></li>';
            $("#receiptgood").append(good);
        });

        $("#orderDetail").page();
        $("#receiptgood").listview('refresh');
    }, "json");
});
var deladdresssid = "";
//地址列表加载
$(document).on("pageshow", "#secadress", function (event) {

    var objListView = document.getElementById("addre");
    objListView.innerHTML = "";
    $.post("../Phone/Gaddress", { shopid: shopID, weiid: WeiXinID }, function (data) {
        var addressdata = data;
        $.each(addressdata, function (i, n) {
            var good = '';
            good = '<li data-icon="false"><a herf="#" id="addressid' + i + '" onclick="seladdress( &quot;' + n.NvrContactName + '&quot;,' + n.NvrContactPhone + ',&quot;' + n.NvrContactAddress + '&quot;,' + n.FkCUCustomerID + ',' + n.Pk_CUAddress_ID + ')" ><p>姓名:' + n.NvrContactName + '</p><p>电话:' + n.NvrContactPhone + '</p><p>地址:' + n.NvrContactAddress + '</p></a><label style="display:none"  id="cuadd' + n.Pk_CUAddress_ID + '">已选择</label></li>';
            $("#addre").append(good);
            var bgg = "#addressid" + i;
            $(bgg).on("taphold", function () {
                deladdresssid = n.Pk_CUAddress_ID;
                $('#addpop').popup('open');
            });
        });
        $("#secadress").page();
        $("#addre").listview('refresh');

    }, 'json');

});

//--------------------------------------------------分割线，下半部分为HXL所用----------------------------------------------------------------------------------------------
//店铺详情
var shopID = ''//店铺ID
var WeiXinID = '19890311'//微信号
var tempShopList = ''//店铺列表

//获取店铺信息
$(document).on("pageshow", "#ware", function (event) {
    $("#ShopImg").html("<img id='ShopImg'src='#' style='max-width:320px' />");
    $("#shopNotice").val("");
    $("#shopName").html("店铺名称： ");
    $("#shopStatu").html("店铺状态： ");
    $("#shopClassify").html("店铺分类： ");
    $("#shopOpenTime").html("营业时间： ");
    $("#shopAddress").html("店铺地址：");
    $("#shopPhone").html("电 话：");
    $("#FloorPrice").html("起送价格：");
    $("#shopScope").html("服务半径： ");
    $("#shopArea").html("配送区域： ");
    $.post("../MobileShop/ShopMessage", { shopid: shopID, WeiXinID: WeiXinID }, function (data) {
        $("#shopName").append(data.ShopName);
        $("#ShopImg").attr('src', data.ImageUrl);//赋值图片
        $("#shopNotice").val(data.shopNotice);//店铺公告
        $("#shopStatu").append(data.shopStatu);//店铺状态
        $("#shopClassify").append(data.shopClassify);//店铺分类
        $("#shopArea").append(data.shopArea);//配送区域
        $("#shopOpenTime").append(data.shopOpenTime);//营业时间
        $("#shopAddress").append(data.Address);//店铺地址
        $("#shopPhone").append(data.shopPhone);//店铺电话
        $("#FloorPrice").append(data.FloorPrice);//店铺起送价格
        $("#shopScope").append(data.shopScope);//服务半径
        if (data.ISCollection != 0) {
            $("#shoucang").html("取消收藏");
        }
        else {
            $("#shoucang").html("收藏");
        }
        shopID = data.shopID;
        $("#ware").page();
    }, "json");
});

//shop页面的加载事件_加载店铺列表
$("#shop").ready(
    window.shopList = shopList
    );
//shop页面的加载事件_加载店铺分类列表
$("#shop").ready(
    window.GetShopType = GetShopType
    );
//店铺列表
function shopList(event) {
    $.post("../MobileShop/ShopList", function (data) {
        var Store = data;
        tempShopList = data;
        $("#shopList").html("");
        $.each(Store, function (i, m) {
            var shop = '';
            shop = '<li onClick="getShopID(' + m.shopID + ')" id=message"' + m.shopID + ' name="' + m.shopClassifyID + '""><a href="#ware"><img src="' + m.ImageUrl + '"><h2>' + m.ShopName + '</h2>'
            shop += '<p>' + m.Address + " |" + m.Delivery + "元|" + m.shopBusinessStatu + '</p></a></li>';
            $("#shopList").append(shop);
        });
        $("#shop").page();
        $("#shopList").listview('refresh');
    }, "json");
}
//我的收藏
function MyCollection() {
    $.post("../MobileShop/CollectionList", { id: WeiXinID }, function (data) {
        var Store = data;
        $("#shopList").html("");
        $.each(Store, function (i, m) {
            var shop = '';
            shop = '<li onClick="getShopID(' + m.shopID + ')" id=message"' + m.shopID + '" data-icon="plus"><a href="#ware"><img src="' + m.ImageUrl + '"><h2>' + m.ShopName + '</h2>'
            shop += '<p>' + m.Address + " |" + m.Delivery + "元|" + m.shopBusinessStatu + '</p></a></li>';
            $("#shopList").append(shop);
        });
        $("#shop").page();
        $("#shopList").listview('refresh');
    }, "json");
}

//获取店铺ID
function getShopID(id) {
    shopID = id;
    var arr = new Array();
    array = arr;
    document.getElementById("total").textContent = "";
    document.getElementById("number").textContent = "";
};

//收藏店铺
function collection() {
    $.post("../MobileShop/CollectionShop", { WeiXinID: WeiXinID, ShopID: shopID }, function (data) {
        if ($("#shoucang").html().trim() == "收藏") {
            $("#shoucang").html("取消收藏");
        }
        else {
            $("#shoucang").html("收藏");
        }
    }, "json")
};

//获取店铺留言
function GetShopWord() {
    $.post("../MobileShop/GetCustomerWordByShopID", { shopID: shopID }, function (data) {
        var Store = data;
        $("#shopWord").html("");
        $.each(Store, function (i, m) {
            var word = '';
            word = '<li><h2>' + m.createTime + '</h2><p>' + m.customerWord + '</p></li>';
            $("#shopWord").append(word);
        });
    }, "json")
}

//获取用户的个人信息
function GetCustomer() {
    $.post("../MobileShop/GetCustomer", { WeiXinID: WeiXinID }, function (data) {
        $("#CustomerName").val(data.CustomerName);
        $("#CustomerPhone").val(data.CustomerPhone);
        $("#CustomerAddress").val(data.CustomerAddress);
        $("#CustomerImg").attr('src', data.CustomerPhoto);//赋值图片
        $("#customerFooter").html("");
        $("#customerFooter").append(data.CustomerName + "的个人资料");
    }, "json")
}

//更改用户的个人信息
function EditCustomer() {
    var customerName = $("#CustomerName").val();
    var customerPhone = $("#CustomerPhone").val();
    var customerAddress = $("#CustomerAddress").val();
    $.post("../MobileShop/EditCustomer", { WeiXinID: WeiXinID, CustomerName: customerName, CustomerPhone: customerPhone, CustomerAddress: customerAddress }, function (data) {
        //如果data大于0，更新成功
        //等于0，更新失败
    }, "json")
}

//店铺列表_加载店铺分类
function GetShopType(event) {
    $.post("../MobileShop/ShopType", function (data) {
        var datatype = data;
        var objListView = document.getElementById("SelShopType");
        objListView.innerHTML = "";
        $.each(datatype, function (i, n) {
            var shopType = '';
            shopType = "<option value='" + i + "'>" + data[i] + "</option>";
            $(shopType).appendTo("#SelShopType");

        });
        $("#SelShopType").selectmenu("refresh");
    }, "json");
}

//店铺列表_下拉菜单
$("#shop").ready(function () {
    $("#SelShopType").change(function () {
        var classify = $(this).val();
        $("#shopList").html("");
        $.each(tempShopList, function (i, m) {
            var shop = '';
            if (classify == 0) {
                shop = '<li onClick="getShopID(' + m.shopID + ')" id=message"' + m.shopID + ' name="' + m.shopClassifyID + '""><a href="#ware"><img src="' + m.ImageUrl + '"><h2>' + m.ShopName + '</h2>'
                shop += '<p>' + m.Address + " |" + m.Delivery + "元|" + m.shopBusinessStatu + '</p></a></li>';
                $("#shopList").append(shop);
            }
            else if (m.shopClassifyID == classify) {
                shop = '<li onClick="getShopID(' + m.shopID + ')" id=message"' + m.shopID + ' name="' + m.shopClassifyID + '""><a href="#ware"><img src="' + m.ImageUrl + '"><h2>' + m.ShopName + '</h2>'
                shop += '<p>' + m.Address + " |" + m.Delivery + "元|" + m.shopBusinessStatu + '</p></a></li>';
                $("#shopList").append(shop);
            }
        });
        $("#shop").page();
        $("#shopList").listview('refresh');
    });
});
