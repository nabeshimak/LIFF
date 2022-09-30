function parseCSV(data) {
    // CSVを配列で読み込む
    const csv = $.csv.toArrays(data);

    $(csv).each(function (i) {
        if ($(csv).length > 1 && i > 0) {
            console.log("$(csv).length: " + $(csv).length);
            const columnLen = $(this).length;
            let text = '';
            $(this).each(function (j) {
                console.log(j);
                if (j >= columnLen - 1) {
                    text += this;
                } else {
                    text += this + '/';
                }
                console.log(text);
            });
            //追加するとき
            const selectboxId = "#class_type";
            $(selectboxId).append($('<option>').html(text).val(text));
        }
        else if ($(csv).length < 1) {
            alert("CSV Error: Invalid CSV file contents. Please confirm your 'CSV file'. (No data)");
        }
    });
}
