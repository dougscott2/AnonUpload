function getFiles(filesData) {
    for (var i in filesData){
        var elem = $("<a>");
        var elem2 = $("<br>");
        elem.attr("href", filesData[i].name);
        elem.text(filesData[i].originalName);
        $("#fileList").append(elem);
        $("#fileList").append(elem2);
    }
}

$.get("/files", getFiles);