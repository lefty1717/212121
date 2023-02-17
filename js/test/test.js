console.log(12);
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

    // function linkCreateMockData(data) {
    //     $.ajax({
    //         url: "https://1cdzzu09id.execute-api.us-east-1.amazonaws.com/test/read",
    //         method: "get",
    //         //上傳json格式需加入以下兩行
    //         dataType: "json",
    //         contentType: "application/json",
    //         data: data,
    //         success: function (res) {
    //             console.log("y");
    //         },
    //         error: function (data) {
    //             console.log("N");
    //         }
    //     });
    // }