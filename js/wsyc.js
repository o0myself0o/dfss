
var start = "17";
var end = "19";
var day = "2014-11-03";
var trainsessionid="04";

var wsyc = {
    totalCount_: 0,
    url_: 'http://111.204.39.58:8080/Ajax/StuHdl.ashx?' +
        'loginType=2&' +
        'method=yueche&' + 
        'start=' + start + '&' +
        'end=' + end + '&' +
        'lessionid=001&' +
        'lesstypeid=02&' +
        'date=' + day + '&' +
        'id=1&' +
        'carid=&' + 
        'ycmethod=03&' +
        'cartypeid=02&' +
        'trainsessionid=' + trainsessionid + '&' +
        'ReleaseCarID=',

    btnWsycClick: function() {
        var stuid = $("#fchrStudentID").val();
        var bmnum = $("#fchrRegistrationID").val();
        var trainpriceid = $("#fchrTrainPriceID").val();
        var url = this.url_ + '&stuid=' + stuid + '&bmnum=' + bmnum + '&trainpriceid=' + trainpriceid;
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
        console.log(day + " " + start + " " + end + " " + wsyc.totalCount_ + ": " + data);
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

var divWsyc = $(".ZF_xy_main");
//$('<input type="button" class="submit" value="约车" onclick="" />').appendTo(divWsyc);
var btnWsyc = document.createElement("input");
btnWsyc.id = "btnWsyc";
btnWsyc.type = "button";
btnWsyc.setAttribute("class", "submit");
btnWsyc.value = "约车";
divWsyc.append(btnWsyc);

btnWsyc.onclick = function() {
    wsyc.btnWsycClick();    
};
