$(document).ready(function() {
    // 自有樣式：下拉式選單
    $('.menu > ul > li > a').click(function(event) {
        $(this).parent().find('ul').slideToggle();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).toggleClass('dropdownlist-active');
        $(this).parent().siblings().find('a').removeClass('dropdownlist-active');
    });
    // 插件樣式：LightBox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "%1 張圖片的第 %2 張",
        'positionFromTop':400,
    })
    /* 插件樣式：NivoSlider */
    // 為相容jQuery3以上，將$(window).load(function() {置換為：
    $(window).on('load', function() {
        $('#nivoslider').nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown' 
            slices: 15, // For slice animations 
            boxCols: 8, // For box animations 
            boxRows: 4, // For box animations 
            animSpeed: 500, // Slide transition speed 
            pauseTime: 3000, // How long each slide will show 
            startSlide: 0, // Set starting Slide (0 index) 
            directionNav: true, // Next & Prev navigation 
            controlNav: true, // 1,2,3... navigation 
            controlNavThumbs: true, // Use thumbnails for Control Nav 
            pauseOnHover: true, // Stop animation while hovering 
            manualAdvance: false, // Force manual transitions 
            prevText: 'Prev', // Prev directionNav text 
            nextText: 'Next', // Next directionNav text 
            randomStart: false, // Start on a random slide 
            beforeChange: function() {}, // Triggers before a slide transition 
            afterChange: function() {}, // Triggers after a slide transition 
            slideshowEnd: function() {}, // Triggers after all slides have been shown 
            lastSlide: function() {}, // Triggers when last slide is shown 
            afterLoad: function() {} // Triggers when slider has loaded 
        });
    });
});