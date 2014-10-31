
var wsyc = {
    totalCount_: 0,
    url_: 'http://111.204.39.58:8080/Ajax/StuHdl.ashx?' +
        'loginType=2&' +
        'method=yueche&' + 
        'lesstypeid=02&' +
        'id=1&' +
        'carid=&' + 
        'ycmethod=03&' +
        'cartypeid=02&' +
        'ReleaseCarID=',

    btnWsycClick: function() {
        var stuid = $("#fchrStudentID").val();
        var bmnum = $("#fchrRegistrationID").val();
        var trainpriceid = $("#fchrTrainPriceID").val();
        var day = $("#date").val();
        var start = $("#start").val();
        var end = $("#end").val();
        var trainsessionid = $("#trainsessionid").val();
        var lessionid = $("#lessionid").val();
        var url = this.url_ + '&stuid=' + stuid + '&bmnum=' + bmnum + '&trainpriceid=' + trainpriceid;
        url = url + '&start=' + start + '&end=' + end + '&date=' + day;
        url = url + '&trainsessionid=' + trainsessionid + '&lessionid=' + lessionid;
        $.ajax({
            type: "post",
            cache: false,
            url: url,
            success: function(data) {
                wsyc.btnWsycClickSucc_(data);
            }});
    },

    btnWsycClickSucc_: function(data) { 
        wsyc.totalCount_++;
        var log = wsyc.totalCount_ + " response: " + data;
        console.log(log);
        var divLog = $("#divLog");
        divLog.html(divLog.html() + log + "<br />");
        if(data == "success") {
            alert("success");
        } else if(data != "Timeout") {
            var timeout = 60000 + parseInt(15 * Math.random());
            if(wsyc.totalCount_ >= 15) {
                timeout = 300000;
            };
            setTimeout("wsyc.btnWsycClick()", timeout);
        } else {
            alert("timeout"); 
        }
    }
};

var html = '<table> <tr> <td>日期:</td> <td><input type="text" id="date" value="2014-11-03" /></td> <td>格式: 2014-01-01 </td> </tr> <tr> <td>开始时段:</td> <td><input type="text" id="start" value="17" /></td> <td>格式: 17 </td> </tr> <tr> <td>结束时段:</td> <td><input type="text" id="end" value="19" /></td> <td>格式: 19 </td> </tr> <tr> <td>时段编号:</td> <td><input type="text" id="trainsessionid" value="04" /></td> <td>01(7-9) 02(9-13) 03(13-17) 04(17-19) 05(19-21) </td> </tr> <tr> <td>训练阶段编号:</td> <td><input type="text" id="lessionid" value="001" /></td> <td>001(散段) 002(桩训) 003(法培) 006(模拟机) 007(综合训练) 008(考前培训) </td> </tr> </table>'

var divWsyc = $(".ZF_xy_main");
$(html).appendTo(divWsyc);
var btnWsyc = document.createElement("input");
btnWsyc.id = "btnWsyc";
btnWsyc.type = "button";
btnWsyc.setAttribute("class", "submit");
btnWsyc.value = "约车";
divWsyc.append(btnWsyc);
$('<div id="divLog" style="width:500; height:500;"></div>').appendTo(divWsyc);

btnWsyc.onclick = function() {
    wsyc.btnWsycClick();    
};
