$(function(){
    // ページがロードされたときに実行される処理
    $(window).on('load', function(){
        // id属性が'target'の要素に'class'属性に'heading'クラスを追加する
        $('#target').addClass('heading');
    });
});