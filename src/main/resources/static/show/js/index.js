function showBookTop() {
    var topNumber = 4;
        $.ajax({
            url: "/getBookTopNumber?topNumber=" + topNumber,
            type: "GET",
            cache: false,
            processData: false,
            contentType: false,
            success: function (data) {
                data=JSON.parse(data);
                var result = data.result;
                if (result!=="success"){
                    alert(result);
                    return;
                }
                var bookList = data.data;
                var length = bookList.length;
                var str="";
                for(var count=0; count<length; count++){
                    str += "<!-- Single Product -->\n" +
                        "                            <div class=\"col-12 col-sm-6 col-lg-3\">\n" +
                        "                                <div class=\"single-product-wrapper\">\n" +
                        "                                    <!-- Product Image -->\n" +
                        "                                    <div class=\"product-img\">\n" +
                        "                                        <img src=\""+bookList[count].imgWebUrl +"\" alt=\"\">\n" +
                        "                                    </div>\n" +
                        "                                    <!-- Product Description -->\n" +
                        "                                    <div class=\"product-description\">\n" +
                        "                                        <span>"+bookList[count].bookClass +"</span>\n" +
                        "                                            <h6>"+ bookList[count].name +"</h6>\n" +
                        "                                        <p class=\"product-price\">余量: "+ bookList[count].restNumber +"</p>\n" +
                        "\n" +
                        "                                        <!-- Hover Content -->\n" +
                        "                                        <div class=\"hover-content\">\n" +
                        "                                            <!-- Add to Cart -->\n" +
                        "                                            <div class=\"add-to-cart-btn\">\n" +
                        "                                                <a href=\"show/template/detail.html?bookId="+ bookList[count].id +"\" class=\"btn essence-btn\">书籍介绍</a>\n" +
                        "                                            </div>\n" +
                        "                                        </div>\n" +
                        "                                    </div>\n" +
                        "                                </div>\n" +
                        "                            </div>";
                }
                document.getElementById("bookList").innerHTML=str;
            },
            error: function () {
                alert("ajaxError: 获取前几个书籍失败");
            }
        });
}
$(document).ready(function () {
    showBookTop();
    init();
});