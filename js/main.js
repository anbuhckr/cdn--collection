$(function() {
    $("#popup_register nav a").click(function () {
        if (!$(this).hasClass("select")) {
            $("#popup_register nav a").removeClass("select");
            $("#popup_register nav a").removeClass("pselect");
            $(this).addClass("select");
        }
    });
    

    
    $(".close2").click(function() {
        $("#hidpopup").fadeOut();
        $("#popup_register").fadeOut();
    });
    
    $('.news-menu li').click(function() {
        $('.news-menu li').removeClass('active');
        $(this).addClass('active');
        $liIndex = $(this).index() + 1;
        $('.block-news .tab').removeClass('active');
        $('.block-news .tab:nth-child('+$liIndex+')').addClass('active');
    });
     
     $('.wrapper2 ul li').click(function () {
        if (!$(this).hasClass('selected_sv')) {
            $('.wrapper2 ul li').removeClass('selected_sv');
            $(this).addClass('selected_sv');
        }
    });
    
    $(".selected").hover(function () {
        var hoverImg = HoverImgOf($(this).attr("src"));
        $(this).attr("src", hoverImg);
    }, function () {
        var normalImg = NormalImgOf($(this).attr("src"));
        $(this).attr("src", normalImg);
    });

    $('#form_login, #form_login2').submit(function() {
        var form = $(this);
        $.ajax({
            type: "POST",
            dataType: "JSON",
            data: form.serialize(),
            xhrFields: { withCredentials: true },
            crossDomain: true,
            url: form.data('action'),
            success: function(json) {
                if (!json.status) {
                    alert(json.msg);
                } else {
                    window.location.reload(true);
                }
            }
        });
    });
    $('form').submit(function() {
        var submitBtn = $(this).find('[type="submit"]');
        submitBtn.prop("disabled", true);
        setTimeout(function() {
            submitBtn.prop("disabled", false);
        }, 5000);
    });
});

function HoverImgOf(filename) {
    var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
    return filename.replace(re, "$1_hover.$2");
}
function NormalImgOf(filename) {
    var re = new RegExp("(.+)_hover\\.(gif|png|jpg)", "g");
    return filename.replace(re, "$1.$2");
}
function changetab(id) {
    document.getElementById("flogin").style.display = "none";
    document.getElementById("freg").style.display = "none";
    if (id != '') {
        document.getElementById(id).style.display = "block";
    }
}
function ChangeTabSV(id) {
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'none';
    document.getElementById('page4').style.display = 'none';
    document.getElementById('page5').style.display = 'none';
    document.getElementById('page6').style.display = 'none';
    document.getElementById('page7').style.display = 'none';
    document.getElementById('page8').style.display = 'none';
    if (id != '') {
        document.getElementById(id).style.display = 'block';
    }
}
