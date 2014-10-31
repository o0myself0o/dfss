
var util = {
    sendPost: function(strUrl, strData, callback) {
        $.ajax({
            type: "Post",
            url: strUrl,
            data: strData,
            async: false,
            success: callback
        });
    },

    sendGet: function(strUrl, strData, callback) {
        $.ajax({
            type: "Get",
            url: strUrl,
            data: strData,
            async: false,
            success: callback
        });
    }
};
