
function parseCSV(data) {
    // CSVを配列で読み込む
    const csv = $.csv.toArrays(data);

    $(csv).each(function (i) {
        if(this.length > 1 && i > 0){
            let text = '';
            $(this).each(function (j) {
                if (j == this.length - 1) {
                    text += this;
                } else {
                    text += this + '/';
                }
            });
            //追加するとき
            const selectboxId = "#class_type";
            $(selectboxId).append($('<option>').html(text).val(text));
        } else {
            alert("CSV Error: Invalid CSV file contents. Please confirm your 'CSV file'");
        }
    });
}
