function changeCSS(page_name) {
    var head = document.head;
    var link0 = head.getElementsByTagName("link")[0];
    var link1 = head.getElementsByTagName("link")[1];

    if (page_name === "product_page") {
        if (link1.href.substr(link1.href.length-10,link1.href.length) === "header.css") {
            link1.href = "../header_sale.css";
            link0.href = "../" + page_name + "_sale.css";
        } else {
            link1.href = "../header.css";
            link0.href = "../" + page_name + ".css";
        }
    } else {
        if (link1.href.substr(link1.href.length-10,link1.href.length) === "header.css") {
            link1.href = "header_sale.css";
            link0.href = "./" + page_name + "_sale.css";
        } else {
            link1.href = "./header.css";
            link0.href = "./" + page_name + ".css";
        }
    }


}