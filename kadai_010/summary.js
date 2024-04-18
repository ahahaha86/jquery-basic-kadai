$(document).click(function() {
    // 文字色変化
    $('#change-color').click(function() {
        $('#target').css('color', 'red'); // 任意の色に更新（ここでは赤色に設定）
    });

    // 文字内容変化
    $('#change-text').click(function() {
        $('#target').text('Hello!'); // 任意の文字内容に更新
    });

    // フェードアウト
    $('#fade-out').click(function() {
        $('#target').fadeOut(); // フェードアウト
    });

    // フェードイン
    $('#fade-in').click(function() {
        $('#target').fadeIn(); // フェードイン
    });
});