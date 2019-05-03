document.writeln("<a data-toggle=\'modal\' data-target=\'#loginModal\' id=\'login\' onclick=\'return false;\'></a>");
document.writeln("        <div class=\'modal fade\' id=\'loginModal\' tabindex=\'-1\' role=\'dialog\' aria-labelledby=\'loginModalLabel\' data-backdrop=\'static\'>");
document.writeln("            <div class=\'modal-dialog\' role=\'document\'>");
document.writeln("                <div class=\'modal-content\'>");
document.writeln("                    <div class=\'modal-header\'>");
document.writeln("                        <h4 class=\'modal-title\' id=\'loginModalLabel\'>登录</h4>");
document.writeln("                        <button type=\'button\' class=\'close\' data-dismiss=\'modal\' aria-label=\'Close\'><span aria-hidden=\'true\'>&times;</span></button>");
document.writeln("                    </div>");
document.writeln("                    <div class=\'modal-body\'>");
document.writeln("                        <form id=\'loginForm\' method=\'POST\' enctype=\'multipart/form-data\'>");
document.writeln("                            <div class=\'form-group\'>");
document.writeln("                                <label for=\'id\' class=\'control-label\'>账号</label>");
document.writeln("                                <input type=\'text\' class=\'form-control\' id=\'userId\' maxlength=\'200\' placeholder=\'不能超过20字符...\' name=\'id\'>");
document.writeln("                            </div>");
document.writeln("                            <div class=\'form-group\'>");
document.writeln("                                <label for=\'name\' class=\'control-label\'>密码</label>");
document.writeln("                                <input type=\'password\' class=\'form-control\' id=\'userPassword\' maxlength=\'200\' placeholder=\'不能超过20字符...\' name=\'password\'>");
document.writeln("                            </div>");
document.writeln("                        </form>");
document.writeln("                    </div>");
document.writeln("                    <div class=\'modal-footer\'>");
document.writeln("                        <button type=\'button\' class=\'btn btn-default\' data-dismiss=\'modal\' id=\'closeLogin\'>关闭</button>");
document.writeln("                        <button type=\'button\' class=\'btn btn-primary\'  onclick=\'login()\'>添加</button>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");



document.writeln("<div class=\'right-side-cart-area\'>");
document.writeln("");
document.writeln("        <!-- Cart Button -->");
document.writeln("        <div class=\'cart-button\'>");
document.writeln("            <a href=\'#\' id=\'rightSideCart\'><img src=\'show/img/core-img/user.svg\' alt=\'\'></a>");
document.writeln("        </div>");
document.writeln("");
document.writeln("        <div class=\'cart-content d-flex\'>");
document.writeln("            <div class=\'cart-list\'>");
document.writeln("                <div class=\'single-cart-item\' id='myBorrowBook'>");
document.writeln("                    <a href=\'#\' class=\'product-image\'>");
document.writeln("                        <img src=\'show/img/product-img/product-1.jpg\' class=\'cart-thumb\' alt=\'\'>");
document.writeln("                        <div class=\'cart-item-desc\'>");
document.writeln("                            <span class=\'badge\'>xxx</span>");
document.writeln("                            <h6>xxxxx</h6>");
document.writeln("                            <p class=\'size\'>作者: xx</p>");
document.writeln("                            <p class=\'color\'>出版社: xxxxxx</p>");
document.writeln("                            <p class=\'price\'>xx</p>");
document.writeln("                        </div>");
document.writeln("                    </a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("");
document.writeln("            <!-- Cart Summary -->");
document.writeln("            <div class=\'cart-amount-summary\' id=\'user\'>");
document.writeln("                <div class=\'checkout-btn mt-100\'>");
document.writeln("                    <a onclick=\'clickLogin()\' class=\'btn essence-btn\'>登录</a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("        </div>");
document.writeln("    </div>");
function clickLogin() {
    document.getElementById("rightSideCart").click();
    document.getElementById("login").click();
}