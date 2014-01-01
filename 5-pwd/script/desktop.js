"use strict"
var desktop = {

    init: function () {
        var a = document.getElementById("menuicon");
        var clickable = 0;
        
        a.onclick = function (e) {
            e.preventDefault();
            if (clickable === 0) {
                var div = document.getElementById("desktop");
                var window = document.createElement("div");
                window.setAttribute("id", "window");

                var header = document.createElement("div");
                header.setAttribute("id", "header");
                var camera = document.createElement("img");
                camera.src = "pics/camera.png";
                var t = document.createTextNode("Image viewer");
                var ax = document.createElement("a");
                ax.setAttribute("id", "closeimageviewer");
                var x = document.createElement("img");
                x.src = "pics/x.png";

                var content = document.createElement("div");
                content.setAttribute("id", "content");

                var footer = document.createElement("div");
                footer.setAttribute("id", "footer");

                div.appendChild(window);

                window.appendChild(header);
                header.appendChild(camera);
                header.appendChild(t);
                header.appendChild(ax);
                ax.appendChild(x);

                window.appendChild(content);
                window.appendChild(footer);
                
                desktop.renderImages();

                clickable += 1;
            }
            ax.onclick = function (e) {
                e.preventDefault();
                var div = document.getElementById("desktop");
                div.removeChild(window);
                clickable -= 1;
            }
        }
    },

    renderImages: function () {
        //appends the pictures correctly and then returns nothing. Also handles the loading gif.
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        var loader = document.createElement("img");
        loader.src = "pics/ajax-loader.gif";
        footer.appendChild(loader);

        new AjaxCon(url, function (data) {
            footer.removeChild(loader);
            var imageInfo = JSON.parse(data);

            var heightAndWidth = desktop.getHighestWidthAndHeight(imageInfo);
            
            for (var i = 0; i < imageInfo.length; i++) {
                var a = document.createElement("a");
                var img = document.createElement("img");
                a.style.width = heightAndWidth[0] + 5 + "px";
                a.style.height = heightAndWidth[1] + 5 + "px";
                a.href = "#";
                img.src = imageInfo[i].thumbURL;

                desktop.changeBackground(imageInfo[i].URL, a);

                content.appendChild(a);
                a.appendChild(img);

            }

        });
    },

    changeBackground: function (info, a) {
        a.onclick = function (e) {
            e.preventDefault();

            var d = document.getElementById("desktop");
            d.style.backgroundImage = "url('" + info + "')";
        }
    },

    getHighestWidthAndHeight: function (info) {
		var arr = new Array(0, 0);

        for (var i in info) {
            if (info[i].thumbWidth > arr[0]) {
                arr[0] = info[i].thumbWidth;
            }
            if (info[i].thumbHeight > arr[1]) {
                arr[1] = info[i].thumbHeight;
            }
        }
		return arr;
    }
}
window.onload = desktop.init;