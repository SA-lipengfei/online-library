document.writeln("<header class=\'header_area\'>");
document.writeln("        <div class=\'classy-nav-container breakpoint-off d-flex align-items-center justify-content-between\'>");
document.writeln("            <!-- Classy Menu -->");
document.writeln("            <nav class=\'classy-navbar\' id=\'essenceNav\'>");
document.writeln("                <!-- Logo -->");
document.writeln("                <a class=\'nav-brand\' href=\'index.html\'><img src=\'show/img/core-img/logo.png\' alt=\'\'></a>");
document.writeln("                <!-- Navbar Toggler -->");
document.writeln("                <div class=\'classy-navbar-toggler\'>");
document.writeln("                    <span class=\'navbarToggler\'><span></span><span></span><span></span></span>");
document.writeln("                </div>");
document.writeln("                <!-- Menu -->");
document.writeln("                <div class=\'classy-menu\'>");
document.writeln("                    <!-- close btn -->");
document.writeln("                    <div class=\'classycloseIcon\'>");
document.writeln("                        <div class=\'cross-wrap\'><span class=\'top\'></span><span class=\'bottom\'></span></div>");
document.writeln("                    </div>");
document.writeln("                    <!-- Nav Start -->");
document.writeln("                    <div class=\'classynav\'>");
document.writeln("                        <ul>");
document.writeln("                            <li><a href=\'#\'>分类</a>");
document.writeln("                                <div class=\'megamenu\'>");
document.writeln("                                    <ul class=\'single-mega cn-col-4\'>");
document.writeln("                                        <li class=\'title\'>文艺书架</li>");
document.writeln("                                        <li><a href=\'javascript:void(0);\' onclick='enCodeUrl(\"小说\")'>小说</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"文学\")'>文学</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"传记\")'>传记</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"青春文学\")'>青春文学</a></li>");
document.writeln("                                    </ul>");
document.writeln("                                    <ul class=\'single-mega cn-col-4\'>");
document.writeln("                                        <li class=\'title\'>励志书架</li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"心灵修养\")'>心灵修养</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"人生哲学\")'>人生哲学</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"职场\")'>职场</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"人际交往\")'>人际交往</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"口才\")'>口才</a></li>");
document.writeln("                                    </ul>");
document.writeln("                                    <ul class=\'single-mega cn-col-4\'>");
document.writeln("                                        <li class=\'title\'>科技</li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"计算机\")'>计算机</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"网络\")'>网络</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"科普读物\")'>科普读物</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"建筑\")'>建筑</a></li>");
document.writeln("                                        <li><a href='javascript:void(0);' onclick='enCodeUrl(\"自然科学\")'>自然科学</a></li>");
document.writeln("                                    </ul>");
document.writeln("                                    <div class=\'single-mega cn-col-4\'>");
document.writeln("                                        <img src=\'show/img/bg-img/bg-6.jpg\' alt=\'\'>");
document.writeln("                                    </div>");
document.writeln("                                </div>");
document.writeln("                            </li>");
document.writeln("                            <li id='backEnter' style='visibility: hidden'><a href=\'#\'>管理</a>");
document.writeln("                                <ul class=\'dropdown\'>");
document.writeln("                                    <li><a href=\'./back/starter.html\'>后台管理</a></li>");
document.writeln("                                </ul>");
document.writeln("                            </li>");
document.writeln("                        </ul>");
document.writeln("                    </div>");
document.writeln("                    <!-- Nav End -->");
document.writeln("                </div>");
document.writeln("            </nav>");
document.writeln("");
document.writeln("            <!-- Header Meta Data -->");
document.writeln("            <div class=\'header-meta d-flex clearfix justify-content-end\'>");
document.writeln("                <!-- Search Area -->");
document.writeln("                <div class=\'search-area\'>");
document.writeln("                    <form action='show/template/shop.html'>");
document.writeln("                        <input type=\'search\' name=\'search\' id=\'headerSearch\' placeholder=\'搜索\'>");
document.writeln("                        <button type=\'button\' onclick='code()'><i class=\'fa fa-search\' aria-hidden=\'true\'></i></button>");
document.writeln("                    </form>");
document.writeln("                </div>");
document.writeln("                <!-- Favourite Area -->");
document.writeln("                <!-- <div class=\'favourite-area\'>");
document.writeln("                    <a href=\'#\'><img src=\'img/core-img/heart.svg\' alt=\'\'></a>");
document.writeln("                </div> -->");
document.writeln("                <!-- User Login Info -->");
document.writeln("                <!-- <div class=\'user-login-info\'>");
document.writeln("                    <a href=\'#\'><img src=\'img/core-img/user.svg\' alt=\'\'></a>");
document.writeln("                </div> -->");
document.writeln("                <!-- Cart Area -->");
document.writeln("                <div class=\'cart-area\'>");
document.writeln("                    <a href=\'#\' id=\'essenceCartBtn\'><img src=\'show/img/core-img/user.svg\' alt=\'\'></a>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("");
document.writeln("        </div>");
document.writeln("    </header>");
function enCodeUrl(bookClass) {
    window.location.href=encodeURI("show/template/shop.html?bookClass="+bookClass);
}
function code() {
    var bookName = document.getElementById("headerSearch").value;
    if (bookName===""||bookName===null){
        return
    }
    window.location.href=encodeURI("show/template/shop.html?search="+bookName);
}