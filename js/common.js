var e = 62;
var e1 = 106;
var e2 = 219;
var e3 = 300;
$(function(){
	$(".height-noheader").height($(window).height() - e);
	$(".main-content").height($(window).height() - e1);
	$(".board").css("min-height", $(window).height() - e2);
	$(".Container").css("height", $(window).height() - e3);
	$("#Scroller-1").css("height", $(window).height() - e3);
	$(".Scrollbar-Track").css("height", $(window).height() - e3);
	$(window).on('resize', function(){
        $(".height-noheader").height($(window).height() - e);
        $(".main-content").height($(window).height() - e1);
        $(".board").css("min-height", $(window).height() - e2);
        $(".Container").css("height", $(window).height() - e3);
		$("#Scroller-1").css("height", $(window).height() - e3);
		$(".Scrollbar-Track").css("height", $(window).height() - e3);
    });
    //搜索框事件
    $("input[name='Keyword']").bind("focus", function () {
        if($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).bind("blur", function () {
        if($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    })
    //鼠标经过显示问题类型
    $("#item-state").hover(function() {
    	if(!$(".item-state-list").is(":animated")) {
            $(".item-state-list").show();
        }
    }, function() {
    	$(".item-state-list").hide();
    })
    //点击选择问题类型
    $(".item-state-list a").on("click", function() {
    	var _class = $(this)
    					.parent()
    					.attr("class");
    	var _state = $(this).html();
		$("#item-state")
			.attr("class", _class);
			$("#item-state span").html(_state);
		$(".item-state-list").hide();
    })
})