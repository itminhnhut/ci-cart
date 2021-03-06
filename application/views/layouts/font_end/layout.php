<!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7" lang="en-US"> <![endif]-->
<!--[if IE 8]><html class="ie ie8" lang="en-US"> <![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html lang="en-US">
<!--<![endif]-->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test CI Application</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/ci_cart.css">
     <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/plugin_1.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/style.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/menu.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/icon.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/reponsive.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/plugin.css">
    <link rel="stylesheet" href="<?=base_url()?>assets/css/trangchu/plugin_2.css">
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="http://demo.roadthemes.com/maroko/xmlrpc.php" />
    <link rel="icon" type="image/png" href="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/07/favicon.ico">
    <script type="text/javascript">
        var road_brandnumber = 5,
        road_brandscroll = true,
        road_brandscrollnumber = 2,
        road_brandpause = 3000,
        road_brandanimate = 2000;
        var road_catenumber = 4,
        road_catescroll = false,
        road_catescrollnumber = 1,
        road_catepause = 3000,
        road_cateanimate = 2000;
        var road_blogscroll = false,
        road_blogpause = 3000,
        road_bloganimate = 2000;
        var road_rtl = false
    </script>
    <script type="text/javascript">
        document.documentElement.className = document.documentElement.className + ' yes-js js_active js'
    </script>
    <title>Maroko &#8211; WooCommerce Theme</title>
    <style>
    .wishlist_table .add_to_cart,
    a.add_to_wishlist.button.alt {
        border-radius: 16px;
        -moz-border-radius: 16px;
        -webkit-border-radius: 16px
    }
</style>
<script type="text/javascript">
    var yith_wcwl_plugin_ajax_web_url = 'http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php' /*tpa=http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php*/ ;
</script>
<script>
    if (typeof WebFontConfig === "undefined") {
        WebFontConfig = new Object();
    }
    WebFontConfig['google'] = {
        families: ['Raleway:100,200,300,400,500,600,700,800,900', 'Montserrat:400,700']
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js' /*tpa=https://ajax.googleapis.com/ajax/libs/webfont/1.5.3/webfont.js*/ ;
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
</script>
<script type="text/javascript">
    /*<![CDATA[*/
    window._wpemojiSettings = {
        "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/",
        "ext": ".png",
        "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/",
        "svgExt": ".svg",
        "source": {
            "concatemoji": "http:\/\/demo.roadthemes.com\/maroko\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.4"
        }
    };
    ! function(a, b, c) {
        function d(a) {
            var b, c, d, e, f = String.fromCharCode;
            if (!k || !k.fillText) return !1;
            switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) {
                case "flag":
                return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), !(j.toDataURL().length < 3e3) && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57331, 65039, 8205, 55356, 57096), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57331, 55356, 57096), 0, 0), c = j.toDataURL(), b !== c);
                case "emoji4":
                return k.fillText(f(55357, 56425, 55356, 57341, 8205, 55357, 56507), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55357, 56425, 55356, 57341, 55357, 56507), 0, 0), e = j.toDataURL(), d !== e
            }
            return !1
        }

        function e(a) {
            var c = b.createElement("script");
            c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
        }
        var f, g, h, i, j = b.createElement("canvas"),
        k = j.getContext && j.getContext("2d");
        for (i = Array("flag", "emoji4"), c.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
            c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
                c.DOMReady = !0
            }, c.supports.everything || (g = function() {
                c.readyCallback()
            }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
                "complete" === b.readyState && c.readyCallback()
            })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
        }(window, document, window._wpemojiSettings); /*]]>*/
    </script>
    <style type="text/css">
    img.wp-smiley,
    img.emoji {
        display: inline !important;
        border: none !important;
        box-shadow: none !important;
        height: 1em !important;
        width: 1em !important;
        margin: 0 .07em !important;
        vertical-align: -0.1em !important;
        background: none !important;
        padding: 0 !important
    }
</style>
<style id='rs-plugin-settings-inline-css' type='text/css'>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,800,300,700)
/*tpa=http://fonts.googleapis.com/css?family=Open+Sans:400,800,300,700*/

;
.tp-caption.roundedimage img {
    -webkit-border-radius: 300px;
    -moz-border-radius: 300px;
    border-radius: 300px
}

.tp-caption a {
    color: #ff7302;
    text-shadow: none;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out
}

.tp-caption a:hover {
    color: #ffa902
}

.largeredbtn {
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 60px;
    color: #fff !important;
    text-decoration: none;
    padding-left: 40px;
    padding-right: 80px;
    padding-top: 22px;
    padding-bottom: 22px;
    background: rgb(234, 91, 31);
    background: -moz-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(234, 91, 31, 1)), color-stop(100%, rgba(227, 58, 12, 1)));
    background: -webkit-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -o-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -ms-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: linear-gradient(to bottom, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ea5b1f', endColorstr='#e33a0c', GradientType=0)
}

.largeredbtn:hover {
    background: rgb(227, 58, 12);
    background: -moz-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(227, 58, 12, 1)), color-stop(100%, rgba(234, 91, 31, 1)));
    background: -webkit-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -o-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -ms-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: linear-gradient(to bottom, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#e33a0c', endColorstr='#ea5b1f', GradientType=0)
}

.fullrounded img {
    -webkit-border-radius: 400px;
    -moz-border-radius: 400px;
    border-radius: 400px
}

.tp-caption a {
    color: #ff7302;
    text-shadow: none;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    -o-transition: all 0.2s ease-out;
    -ms-transition: all 0.2s ease-out
}

.tp-caption a:hover {
    color: #ffa902
}

.largeredbtn {
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    font-size: 16px;
    line-height: 60px;
    color: #fff !important;
    text-decoration: none;
    padding-left: 40px;
    padding-right: 80px;
    padding-top: 22px;
    padding-bottom: 22px;
    background: rgb(234, 91, 31);
    background: -moz-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(234, 91, 31, 1)), color-stop(100%, rgba(227, 58, 12, 1)));
    background: -webkit-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -o-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: -ms-linear-gradient(top, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    background: linear-gradient(to bottom, rgba(234, 91, 31, 1) 0%, rgba(227, 58, 12, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ea5b1f', endColorstr='#e33a0c', GradientType=0)
}

.largeredbtn:hover {
    background: rgb(227, 58, 12);
    background: -moz-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(227, 58, 12, 1)), color-stop(100%, rgba(234, 91, 31, 1)));
    background: -webkit-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -o-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: -ms-linear-gradient(top, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    background: linear-gradient(to bottom, rgba(227, 58, 12, 1) 0%, rgba(234, 91, 31, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#e33a0c', endColorstr='#ea5b1f', GradientType=0)
}

.fullrounded img {
    -webkit-border-radius: 400px;
    -moz-border-radius: 400px;
    border-radius: 400px
}
</style>
<link rel='stylesheet' id='tp-raleway-css' href="http://fonts.googleapis.com/css?family=Raleway%3A400%2C900%2C800%2C700%2C600%2C500%2C200%2C100%2C300&ver=4.7.4" tppabs="http://fonts.googleapis.com/css?family=Raleway%3A400%2C900%2C800%2C700%2C600%2C500%2C200%2C100%2C300&ver=4.7.4" type='text/css'
media='all' />
<link rel='stylesheet' id='roadthemes-fonts-css' href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700&subset=latin,latin-ext" tppabs="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700&subset=latin,latin-ext" type='text/css'
media='all' />
<!--[if lte IE 9]><link rel='stylesheet' id='roadthemes-ie-css'  href="ie1.css-ver=20121010.css" tppabs="http://demo.roadthemes.com/maroko/wp-content/themes/maroko/css/ie1.css?ver=20121010" type='text/css' media='all' /> <![endif]-->
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/slide.js"></script>
<script type='text/javascript'>
    var wc_add_to_cart_params = {
        "ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/?wc-ajax=%%endpoint%%",
        "i18n_view_cart": "View Cart",
        "cart_url": "http:\/\/demo.roadthemes.com\/maroko\/cart\/",
        "is_cart": "",
        "cart_redirect_after_add": "no"
    };
</script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/js1.js"></script>
<link rel='https://api.w.org/' href='http://demo.roadthemes.com/maroko/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://demo.roadthemes.com/maroko/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://demo.roadthemes.com/maroko/wp-includes/wlwmanifest.xml" />
<meta name="generator" content="WordPress 4.7.4" />
<meta name="generator" content="WooCommerce 2.4.7" />
<link rel='shortlink' href='http://demo.roadthemes.com/maroko/' />
<link rel="alternate" type="application/json+oembed" href="http://demo.roadthemes.com/maroko/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fdemo.roadthemes.com%2Fmaroko%2F" />
<link rel="alternate" type="text/xml+oembed" href="http://demo.roadthemes.com/maroko/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fdemo.roadthemes.com%2Fmaroko%2F&#038;format=xml" />
<script type="text/javascript">
    jQuery(document).ready(function() {
        var ajaxRevslider = function(obj) {
            var content = "";
            data = {};
            data.action = 'revslider_ajax_call_front';
            data.client_action = 'get_slider_html';
            data.token = 'aa3bc6af31';
            data.type = obj.type;
            data.id = obj.id;
            data.aspectratio = obj.aspectratio;
            jQuery.ajax({
                type: "post",
                url: "http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php" /*tpa=http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php*/ ,
                dataType: 'json',
                data: data,
                async: false,
                success: function(ret, textStatus, XMLHttpRequest) {
                    if (ret.success == true) content = ret.data;
                },
                error: function(e) {
                    console.log(e);
                }
            });
            return content;
        };
        var ajaxRemoveRevslider = function(obj) {
            return jQuery(obj.selector + " .rev_slider").revkill();
        };
        var extendessential = setInterval(function() {
            if (jQuery.fn.tpessential != undefined) {
                clearInterval(extendessential);
                if (typeof(jQuery.fn.tpessential.defaults) !== 'undefined') {
                    jQuery.fn.tpessential.defaults.ajaxTypes.push({
                        type: "revslider",
                        func: ajaxRevslider,
                        killfunc: ajaxRemoveRevslider,
                        openAnimationSpeed: 0.3
                    });
                }
            }
        }, 30);
    });
</script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/addthis_widget.js"></script>
<script type="text/javascript">
    var ajaxurl = 'http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php' /*tpa=http://demo.roadthemes.com/maroko/wp-admin/admin-ajax.php*/ ;
</script>
<meta name="generator" content="Powered by Visual Composer - drag and drop page builder for WordPress." />
<!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="vc_lte_ie9.css" tppabs="http://demo.roadthemes.com/maroko/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.css" media="screen"><![endif]-->
<!--[if IE  8]><link rel="stylesheet" type="text/css" href="vc-ie8.css" tppabs="http://demo.roadthemes.com/maroko/wp-content/plugins/js_composer/assets/css/vc-ie8.css" media="screen"><![endif]-->
<style type="text/css" title="dynamic-css" class="options-output">
body {
    font-family: Raleway;
    line-height: 20px;
    font-weight: 400;
    font-style: normal;
    color: #848484;
    font-size: 13px;
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.24s ease-in-out;
    -moz-transition: opacity 0.24s ease-in-out;
    transition: opacity 0.24s ease-in-out
}

.wf-loading body,
{
    opacity: 0
}

.ie.wf-loading body,
{
    visibility: hidden
}
</style>
<style type="text/css" data-type="vc_shortcodes-custom-css">
.vc_custom_1436002762836 {
    margin-right: 0px !important;
    margin-left: 0px !important
}

.vc_custom_1436002772838 {
    margin-top: 50px !important;
    margin-right: 0px !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
    padding-top: 30px !important;
    padding-bottom: 30px !important;
    background-image: url(http://demo.roadthemes.com/maroko/wp-content/uploads/2014/12/bg_newsletter.jpg)/*tpa=http://demo.roadthemes.com/maroko/wp-content/uploads/2014/12/bg_newsletter.jpg?id=3213*/
    !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important
}
</style>
<noscript>
    <style>
    .wpb_animate_when_almost_visible{opacity:1}
</style>
</noscript>
<?php echo $styles;?>
</head>
<body>
    <div id="yith-wcwl-popup-message" style="display:none;">
        <div id="yith-wcwl-message"></div>
    </div>
    <div class="wrapper">
        <div class="page-wapper">
            <div class="header-container">
                <div class="top-bar">
                    <div class="container">
                        <div class="topbar-content">
                            <div class="row">
                                <div class="col-xs-12 col-md-12">
                                    <div id="mega_main_menu_first" class="topmenu primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-disable dropdowns_trigger-hover dropdowns_animation-none no-logo no-search no-woo_cart no-buddypress responsive-disable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-0-7 mega_main mega_main_menu">
                                        <div class="menu_holder">
                                            <div class="mmm_fullwidth_container"></div>
                                            <div class="menu_inner">
                                                <span class="nav_logo">
                                                    <a class="mobile_toggle">
                                                        <span class="mobile_button">Menu &nbsp; <span class="symbol_menu">&equiv;</span> <span class="symbol_cross">&#x2573;</span> </span>
                                                    </a>
                                                </span>
                                                <ul id="mega_main_menu_ul_first" class="mega_main_menu_ul">
                                                    <li id="menu-item-3069" class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-3069 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                        <a href="index-4.htm" tppabs="http://demo.roadthemes.com/maroko/cart/" class="item_link  with_icon" tabindex="0"> <i class="im-icon-cart"></i> <span class="link_content"> <span class="link_text"> Shopping Cart </span> </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-md-3">
                                <div class="global-table">
                                    <div class="global-row">
                                        <div class="global-cell">
                                            <div class="logo">
                                                <a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/" title="Maroko" rel="home">
                                                    <img src="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/logo.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/logo.png" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-7">
                                <div class="horizontal-menu">
                                    <div class="global-table">
                                        <div class="global-row">
                                            <div class="global-cell">
                                                <div class="visible-large">
                                                    <div id="mega_main_menu" class="primary primary_style-flat icons-left first-lvl-align-left first-lvl-separator-smooth direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-disable dropdowns_trigger-hover dropdowns_animation-anim_5 no-logo no-search no-woo_cart no-buddypress responsive-disable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-0-7 mega_main mega_main_menu">
                                                        <div class="menu_holder">
                                                            <div class="mmm_fullwidth_container"></div>
                                                            <div class="menu_inner"> <span class="nav_logo"> <a class="mobile_toggle"> <span class="mobile_button"> Menu &nbsp; <span class="symbol_menu">&equiv;</span> <span class="symbol_cross">&#x2573;</span> </span>
                                                            </a>
                                                        </span>
                                                        <ul id="mega_main_menu_ul" class="mega_main_menu_ul">
                                                            <li id="menu-item-3265" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1860 current_page_item menu-item-has-children first menu-item-3265 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                <a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Home </span> </span>
                                                                </a>
                                                                <ul class="mega_dropdown">
                                                                    <li id="menu-item-3264" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3264 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                        <a href="index-5.htm" tppabs="http://demo.roadthemes.com/maroko/home-shop-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Home Shop 2 </span> </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-3482" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3482 multicolumn_dropdown default_style drop_to_center submenu_default_width columns4">
                                                                <a href="index-6.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Women </span> </span>
                                                                </a>
                                                                <ul class="mega_dropdown">
                                                                    <li id="menu-item-3504" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3504 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:25%;">
                                                                        <a href="index-7.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Accessories </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3505" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3505 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-8.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/baseball-caps/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Baseball Caps </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3506" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3506 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-9.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/gloves-mittens/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Gloves &#038; Mittens </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3507" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3507 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-10.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/skullies-beanies/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Skullies &#038; Beanies </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3509" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3509 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-11.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/sunglasses/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sunglasses </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3510" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3510 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:25%;">
                                                                        <a href="index-12.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Bags </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3511" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3511 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-13.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/backpacks-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Backpacks </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3512" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3512 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-14.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/bucket-bags-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Bucket Bags </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3513" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3513 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-15.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/bucket-bags-3/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Bucket Bags </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3514" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3514 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-16.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/clutches-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Clutches </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3515" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3515 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:25%;">
                                                                        <a href="index-17.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> clothings </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3516" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3516 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-18.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/jackets-coats-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Jackets &#038; Coats </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3517" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3517 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-19.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/jeans-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Jeans </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3518" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3518 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-20.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/shorts-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Shorts </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3519" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3519 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-21.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/t-shirts-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> T-shirts </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3520" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3520 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:25%;">
                                                                        <a href="index-22.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> shoes </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3521" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3521 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-23.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/pumps-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Pumps </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3522" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3522 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-24.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/sandals-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sandals </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3523" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3523 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-25.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/sneakers-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sneakers </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3524" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3524 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-26.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/wedges-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Wedges </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-3488" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3488 multicolumn_dropdown default_style drop_to_center submenu_default_width columns3">
                                                                <a href="index-27.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Men </span> </span>
                                                                </a>
                                                                <ul class="mega_dropdown">
                                                                    <li id="menu-item-3489" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3489 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="index-28.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Bags </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3490" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3490 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-29.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/backpacks/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Backpacks </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3491" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3491 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-30.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/bucket-bags/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Bucket Bags </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3492" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3492 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-31.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/clutches/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Clutches </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3493" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3493 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-32.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/crossbody-bags/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Crossbody Bags </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3494" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3494 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="index-33.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> clothings </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3495" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3495 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-34.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/jackets-coats/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Jackets &#038; Coats </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3496" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3496 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-35.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/jeans/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Jeans </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3497" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3497 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-36.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/shorts/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Shorts </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3498" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3498 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-37.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/t-shirts/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> T-shirts </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3499" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3499 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="index-38.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Shoes </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3500" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3500 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-39.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/pumps/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Pumps </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3501" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3501 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-40.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/sandals/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sandals </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3502" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3502 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-41.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/sneakers/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sneakers </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3503" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3503 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-42.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/wedges/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Wedges </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-3286" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3286 multicolumn_dropdown default_style drop_to_center submenu_default_width columns3">
                                                                <a href="index-43.htm" tppabs="http://demo.roadthemes.com/maroko/blog/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Blog </span> </span>
                                                                </a>
                                                                <ul class="mega_dropdown">
                                                                    <li id="menu-item-3291" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3291 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="#" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Blog Layouts </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3287" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="-layout=nosidebar.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=nosidebar" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> None Sidebar </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3289" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3289 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="-layout=sidebar&sidebar=left.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=sidebar&sidebar=left" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sidebar Left </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3290" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3290 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="-layout=sidebar&sidebar=right.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=sidebar&sidebar=right" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Sidebar Right </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3292" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3292 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="#" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Blog Paes </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3293" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3293 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-44.htm" tppabs="http://demo.roadthemes.com/maroko/author/admin/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Author </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3294" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3294 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-45.htm" tppabs="http://demo.roadthemes.com/maroko/2014/12/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Archive </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3295" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3295 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-46.htm" tppabs="http://demo.roadthemes.com/maroko/category/wordpress/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Category </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3296" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3296 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-47.htm" tppabs="http://demo.roadthemes.com/maroko/tag/travel-2/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Blog Tag </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li id="menu-item-3298" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3298 default_dropdown default_style drop_to_right submenu_default_width columns1" style="width:33.3333333333%;">
                                                                        <a href="#" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Post Formats </span> </span>
                                                                        </a>
                                                                        <ul class="mega_dropdown">
                                                                            <li id="menu-item-3299" class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3299 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-48.htm" tppabs="http://demo.roadthemes.com/maroko/type/audio/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Audio </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3300" class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3300 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-49.htm" tppabs="http://demo.roadthemes.com/maroko/type/gallery/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Gallery </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3301" class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3301 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-50.htm" tppabs="http://demo.roadthemes.com/maroko/type/image/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Image </span> </span>
                                                                                </a>
                                                                            </li>
                                                                            <li id="menu-item-3302" class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3302 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                                <a href="index-51.htm" tppabs="http://demo.roadthemes.com/maroko/type/video/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Video </span> </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li id="menu-item-3304" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3304 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                <a href="index-52.htm" tppabs="http://demo.roadthemes.com/maroko/about-us/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> About Us </span> </span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-3305" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3305 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                <a href="index-53.htm" tppabs="http://demo.roadthemes.com/maroko/contact/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> Contact </span> </span>
                                                                </a>
                                                            </li>
                                                            <li id="menu-item-3328" class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-3328 default_dropdown default_style drop_to_right submenu_default_width columns1">
                                                                <a href="index-54.htm" tppabs="http://demo.roadthemes.com/maroko/faqs/" class="item_link  disable_icon" tabindex="0"> <i class=""></i> <span class="link_content"> <span class="link_text"> FAQS </span> </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="visible-small mobile-menu">
                                            <div class="nav-container">
                                                <div class="mbmenu-toggler">Menu<span class="mbmenu-icon"></span>
                                                </div>
                                                <div class="mobile-menu-container">
                                                    <ul id="menu-megamenu" class="nav-menu">
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1860 current_page_item menu-item-has-children first menu-item-3265"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/">Home</a>
                                                            <ul class="sub-menu">
                                                                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3264"><a href="index-5.htm" tppabs="http://demo.roadthemes.com/maroko/home-shop-2/">Home Shop 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3482"><a href="index-6.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/">Women</a>
                                                            <ul class="sub-menu">
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3504"><a href="index-7.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/">Accessories</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3505"><a href="index-8.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/baseball-caps/">Baseball Caps</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3506"><a href="index-9.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/gloves-mittens/">Gloves &#038; Mittens</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3507"><a href="index-10.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/skullies-beanies/">Skullies &#038; Beanies</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3509"><a href="index-11.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/accessories/sunglasses/">Sunglasses</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3510"><a href="index-12.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/">Bags</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3511"><a href="index-13.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/backpacks-2/">Backpacks</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3512"><a href="index-14.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/bucket-bags-2/">Bucket Bags</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3513"><a href="index-15.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/bucket-bags-3/">Bucket Bags</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3514"><a href="index-16.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/bags-2/clutches-2/">Clutches</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3515"><a href="index-17.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/">clothings</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3516"><a href="index-18.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/jackets-coats-2/">Jackets &#038; Coats</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3517"><a href="index-19.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/jeans-2/">Jeans</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3518"><a href="index-20.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/shorts-2/">Shorts</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3519"><a href="index-21.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/clothings-2/t-shirts-2/">T-shirts</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3520"><a href="index-22.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/">shoes</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3521"><a href="index-23.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/pumps-2/">Pumps</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3522"><a href="index-24.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/sandals-2/">Sandals</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3523"><a href="index-25.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/sneakers-2/">Sneakers</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3524"><a href="index-26.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/women/shoes-2/wedges-2/">Wedges</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3488"><a href="index-27.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/">Men</a>
                                                            <ul class="sub-menu">
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3489"><a href="index-28.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/">Bags</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3490"><a href="index-29.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/backpacks/">Backpacks</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3491"><a href="index-30.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/bucket-bags/">Bucket Bags</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3492"><a href="index-31.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/clutches/">Clutches</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3493"><a href="index-32.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/bags/crossbody-bags/">Crossbody Bags</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3494"><a href="index-33.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/">clothings</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3495"><a href="index-34.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/jackets-coats/">Jackets &#038; Coats</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3496"><a href="index-35.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/jeans/">Jeans</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3497"><a href="index-36.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/shorts/">Shorts</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3498"><a href="index-37.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/clothings/t-shirts/">T-shirts</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-3499"><a href="index-38.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/">Shoes</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3500"><a href="index-39.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/pumps/">Pumps</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3501"><a href="index-40.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/sandals/">Sandals</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3502"><a href="index-41.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/sneakers/">Sneakers</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-3503"><a href="index-42.htm" tppabs="http://demo.roadthemes.com/maroko/product-category/men/shoes/wedges/">Wedges</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3286"><a href="index-43.htm" tppabs="http://demo.roadthemes.com/maroko/blog/">Blog</a>
                                                            <ul class="sub-menu">
                                                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3291"><a href="#">Blog Layouts</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3287"><a href="-layout=nosidebar.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=nosidebar">None Sidebar</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3289"><a href="-layout=sidebar&sidebar=left.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=sidebar&sidebar=left">Sidebar Left</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3290"><a href="-layout=sidebar&sidebar=right.htm" tppabs="http://demo.roadthemes.com/maroko/blog/?layout=sidebar&sidebar=right">Sidebar Right</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3292"><a href="#">Blog Paes</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3293"><a href="index-44.htm" tppabs="http://demo.roadthemes.com/maroko/author/admin/">Author</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3294"><a href="index-45.htm" tppabs="http://demo.roadthemes.com/maroko/2014/12/">Archive</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3295"><a href="index-46.htm" tppabs="http://demo.roadthemes.com/maroko/category/wordpress/">Category</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3296"><a href="index-47.htm" tppabs="http://demo.roadthemes.com/maroko/tag/travel-2/">Blog Tag</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3298"><a href="#">Post Formats</a>
                                                                    <ul class="sub-menu">
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3299"><a href="index-48.htm" tppabs="http://demo.roadthemes.com/maroko/type/audio/">Audio</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3300"><a href="index-49.htm" tppabs="http://demo.roadthemes.com/maroko/type/gallery/">Gallery</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3301"><a href="index-50.htm" tppabs="http://demo.roadthemes.com/maroko/type/image/">Image</a>
                                                                        </li>
                                                                        <li class="menu-item menu-item-type-taxonomy menu-item-object-post_format menu-item-3302"><a href="index-51.htm" tppabs="http://demo.roadthemes.com/maroko/type/video/">Video</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3304"><a href="index-52.htm" tppabs="http://demo.roadthemes.com/maroko/about-us/">About Us</a>
                                                        </li>
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3305"><a href="index-53.htm" tppabs="http://demo.roadthemes.com/maroko/contact/">Contact</a>
                                                        </li>
                                                        <li class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-3328"><a href="index-54.htm" tppabs="http://demo.roadthemes.com/maroko/faqs/">FAQS</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-2">
                        <div class="global-table">
                            <div class="global-row">
                                <div class="global-cell">
                                    <div class="top-link">
                                        <div class="widget woocommerce widget_shopping_cart">
                                            <h2 class="widgettitle">Cart</h2>
                                            <div class="widget_shopping_cart_content">
                                                <div class="cart-toggler">
                                                    <a href="http://demo.roadthemes.com/maroko/cart/">
                                                        <span class="mini-cart-link">
                                                            <i class="fa fa-shopping-cart"></i>
                                                        </span>
                                                        <span class="cart-quantity">
                                                        0       </span>
                                                        <!--<span class="cart-total"><span class="amount">&pound;0.00</span></span>-->
                                                    </a>
                                                </div>
                                                <div class="mini_cart_content" style="height: 0px;">
                                                    <div class="mini_cart_inner">
                                                        <div class="mini_cart_arrow"></div>
                                                        <ul class="cart_empty ">
                                                            <li>You have no items in your shopping cart</li>
                                                            <li class="total">Subtotal: <span class="amount">£0.00</span></li>
                                                        </ul>

                                                    </div>
                                                    <div class="loading"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sidebar-toggler"> <i class="fa fa-bars"></i>
                                        </div>
                                        <div class="header-search">
                                            <div class="widget woocommerce widget_product_search">
                                                <h2 class="widgettitle">Search</h2>
                                                <form role="search" method="get" id="searchform" action="http://demo.roadthemes.com/maroko/">
                                                    <div>
                                                        <input type="text" value="Search product..." name="s" id="ws" placeholder="" />
                                                        <button class="btn btn-primary" type="submit" id="wsearchsubmit"><i class="fa fa-search"></i>
                                                        </button>
                                                        <input type="hidden" name="post_type" value="product" />
                                                    </div>
                                                </form>
                                                <script type="text/javascript">
                                                    jQuery(document).ready(function() {
                                                        jQuery("#ws").focus(function() {
                                                            if (jQuery(this).val() == "Search product...") {
                                                                jQuery(this).val("");
                                                            }
                                                        });
                                                        jQuery("#ws").focusout(function() {
                                                            if (jQuery(this).val() == "") {
                                                                jQuery(this).val("Search product...");
                                                            }
                                                        });
                                                        jQuery("#wsearchsubmit").click(function() {
                                                            if (jQuery("#ws").val() == "Search product..." || jQuery("#ws").val() == "") {
                                                                jQuery("#ws").focus();
                                                                return false;
                                                            }
                                                        });
                                                    });
                                                </script>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class= "main-container front-page">
       <div class="page-content">
        <?php echo $contents;?>
    </div>
</div>
<div class="footer">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="product-shortcode">
                        <h3 class="widget-title">Sale Off</h3>
                        <div class="woocommerce columns-4">
                            <div class="shop-products row grid-view">
                                <div class="first  item-col col-xs-12 col-sm-3 post-1156 product type-product status-publish has-post-thumbnail product_cat-backpacks product_cat-bags product_cat-bucket-bags product_cat-clothings product_cat-clutches product_cat-crossbody-bags product_cat-jackets-coats product_cat-jeans product_cat-men product_cat-pumps product_cat-sandals product_cat-shoes product_cat-shorts product_cat-sneakers product_cat-t-shirts product_cat-wedges product_tag-electronic product_tag-phone pa_color-black pa_color-blue pa_color-red pa_color-white sale featured shipping-taxable purchasable product-type-variable product-cat-backpacks product-cat-bags product-cat-bucket-bags product-cat-clothings product-cat-clutches product-cat-crossbody-bags product-cat-jackets-coats product-cat-jeans product-cat-men product-cat-pumps product-cat-sandals product-cat-shoes product-cat-shorts product-cat-sneakers product-cat-t-shirts product-cat-wedges product-tag-electronic product-tag-phone instock">
                                    <div class="product-wrapper">
                                        <div class="list-col4">
                                            <div class="product-image">
                                                <a href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/" title="Auctor gravida enim"> <img width="480" height="635" src="<?=base_url()?>assets/img/anh/1-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/1-480x635.jpg" class="primary_image wp-post-image" alt="" /><img width="480" height="635" src="<?=base_url()?>assets/img/anh/4-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/4-480x635.jpg" class="secondary_image" alt="" /> </a>
                                                <div class="price-box"><span class="special-price"><span class="amount">&pound;195.00</span></span><span class="old-price"><span class="amount">&pound;200.00</span></span>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;195.00</span></span><span class="old-price"><span class="amount">&pound;200.00</span></span> <a href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/" rel="nofollow" data-product_id="1156" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_variable">Select options</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1156">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1156  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1156%27" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1156" rel="nofollow" data-product-id="1156" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1156&_wpnonce=c83a2e58df" class="compare button" data-product_id="1156">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1156" href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/" title="Auctor gravida enim">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span class="onsale"><span class="sale-bg"></span><span class="sale-text">Sale</span></span>
                                            </div>
                                        </div>
                                        <div class="list-col8">
                                            <div class="gridview">
                                                <h2 class="product-name"> <a href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/">Auctor gravida enim</a></h2>
                                                <div class="ratings">
                                                    <div class="star-rating" title="Rated 4.00 out of 5"><span style="width:80%"><strong class="rating">4.00</strong> out of 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listview">
                                                <h2 class="product-name"> <a href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/">Auctor gravida enim</a></h2>
                                                <div class="price-rate">
                                                    <div class="price-box"><span class="special-price"><span class="amount">&pound;195.00</span></span><span class="old-price"><span class="amount">&pound;200.00</span></span>
                                                    </div>
                                                    <div class="ratings">
                                                        <div class="star-rating" title="Rated 4.00 out of 5"><span style="width:80%"><strong class="rating">4.00</strong> out of 5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;195.00</span></span><span class="old-price"><span class="amount">&pound;200.00</span></span> <a href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/" rel="nofollow" data-product_id="1156" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_variable">Select options</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1156">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1156  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1156%27" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1156" rel="nofollow" data-product-id="1156" data-product-type="variable" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1156&_wpnonce=c83a2e58df" class="compare button" data-product_id="1156">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1156" href="index-63.htm" tppabs="http://demo.roadthemes.com/maroko/product/auctor-gravida-enim/" title="Auctor gravida enim">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <div class=" item-col col-xs-12 col-sm-3 post-1159 product type-product status-publish has-post-thumbnail product_cat-backpacks product_cat-bags product_cat-bucket-bags product_cat-clothings product_cat-clutches product_cat-crossbody-bags product_cat-jackets-coats product_cat-jeans product_cat-men product_cat-pumps product_cat-sandals product_cat-shoes product_cat-shorts product_cat-sneakers product_cat-t-shirts product_cat-wedges product_tag-camera-2 product_tag-electronic sale featured shipping-taxable purchasable product-type-simple product-cat-backpacks product-cat-bags product-cat-bucket-bags product-cat-clothings product-cat-clutches product-cat-crossbody-bags product-cat-jackets-coats product-cat-jeans product-cat-men product-cat-pumps product-cat-sandals product-cat-shoes product-cat-shorts product-cat-sneakers product-cat-t-shirts product-cat-wedges product-tag-camera-2 product-tag-electronic instock">
                                    <div class="product-wrapper">
                                        <div class="list-col4">
                                            <div class="product-image">
                                                <a href="index-62.htm" tppabs="http://demo.roadthemes.com/maroko/product/habitasse-dictumst/" title="Habitasse dictumst"> <img width="480" height="635" src="<?=base_url()?>assets/img/anh/111-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/111-480x635.jpg" class="primary_image wp-post-image" alt="" /><img width="480" height="635" src="<?=base_url()?>assets/img/anh/12-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/12-480x635.jpg" class="secondary_image" alt="" /> </a>
                                                <div class="price-box"><span class="special-price"><span class="amount">&pound;65.00</span></span><span class="old-price"><span class="amount">&pound;68.00</span></span>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;65.00</span></span><span class="old-price"><span class="amount">&pound;68.00</span></span> <a href="-add-to-cart=1159.htm" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=1159" rel="nofollow" data-product_id="1159" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1159">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="-add_to_wishlist=1159.htm" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1159" rel="nofollow" data-product-id="1159" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1159&_wpnonce=c83a2e58df" class="compare button" data-product_id="1159">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1159" href="index-62.htm" tppabs="http://demo.roadthemes.com/maroko/product/habitasse-dictumst/" title="Habitasse dictumst">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span class="onsale"><span class="sale-bg"></span><span class="sale-text">Sale</span></span>
                                            </div>
                                        </div>
                                        <div class="list-col8">
                                            <div class="gridview">
                                                <h2 class="product-name"> <a href="index-62.htm" tppabs="http://demo.roadthemes.com/maroko/product/habitasse-dictumst/">Habitasse dictumst</a></h2>
                                                <div class="ratings">
                                                    <div class="star-rating" title="Rated 4.00 out of 5"><span style="width:80%"><strong class="rating">4.00</strong> out of 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listview">
                                                <h2 class="product-name"> <a href="index-62.htm" tppabs="http://demo.roadthemes.com/maroko/product/habitasse-dictumst/">Habitasse dictumst</a></h2>
                                                <div class="price-rate">
                                                    <div class="price-box"><span class="special-price"><span class="amount">&pound;65.00</span></span><span class="old-price"><span class="amount">&pound;68.00</span></span>
                                                    </div>
                                                    <div class="ratings">
                                                        <div class="star-rating" title="Rated 4.00 out of 5"><span style="width:80%"><strong class="rating">4.00</strong> out of 5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;65.00</span></span><span class="old-price"><span class="amount">&pound;68.00</span></span> <a href="-add-to-cart=1159.htm" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=1159" rel="nofollow" data-product_id="1159" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1159">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="-add_to_wishlist=1159.htm" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1159" rel="nofollow" data-product-id="1159" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1159&_wpnonce=c83a2e58df" class="compare button" data-product_id="1159">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1159" href="index-62.htm" tppabs="http://demo.roadthemes.com/maroko/product/habitasse-dictumst/" title="Habitasse dictumst">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="product-shortcode">
                        <h3 class="widget-title">Best Seller</h3>
                        <div class="woocommerce columns-4">
                            <div class="shop-products row grid-view">
                                <div class="first  item-col col-xs-12 col-sm-3 post-1158 product type-product status-publish has-post-thumbnail product_cat-backpacks product_cat-bags product_cat-bucket-bags product_cat-clothings product_cat-clutches product_cat-crossbody-bags product_cat-jackets-coats product_cat-jeans product_cat-pumps product_cat-sandals product_cat-shoes product_cat-shorts product_cat-sneakers product_cat-t-shirts product_cat-wedges product_tag-electronic product_tag-laptop sale shipping-taxable purchasable product-type-simple product-cat-backpacks product-cat-bags product-cat-bucket-bags product-cat-clothings product-cat-clutches product-cat-crossbody-bags product-cat-jackets-coats product-cat-jeans product-cat-pumps product-cat-sandals product-cat-shoes product-cat-shorts product-cat-sneakers product-cat-t-shirts product-cat-wedges product-tag-electronic product-tag-laptop instock">
                                    <div class="product-wrapper">
                                        <div class="list-col4">
                                            <div class="product-image">
                                                <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/%27" tppabs="http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/" title="Tincidunt malesuada"> <img width="480" height="635" src="<?=base_url()?>assets/img/anh/10-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/10-480x635.jpg" class="primary_image wp-post-image" alt="" /><img width="480" height="635" src="<?=base_url()?>assets/img/anh/2-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/2-480x635.jpg" class="secondary_image" alt="" /> </a>
                                                <div class="price-box"><span class="special-price"><span class="amount">&pound;50.00</span></span><span class="old-price"><span class="amount">&pound;80.00</span></span>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;50.00</span></span><span class="old-price"><span class="amount">&pound;80.00</span></span> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add-to-cart=1158  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add-to-cart=1158%27" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=1158" rel="nofollow" data-product_id="1158" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1158">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1158  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1158%27" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1158" rel="nofollow" data-product-id="1158" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df%27" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df" class="compare button" data-product_id="1158">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1158" href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/%27" tppabs="http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/" title="Tincidunt malesuada">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> <span class="onsale"><span class="sale-bg"></span><span class="sale-text">Sale</span></span>
                                            </div>
                                        </div>
                                        <div class="list-col8">
                                            <div class="gridview">
                                                <h2 class="product-name"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/%27" tppabs="http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/">Tincidunt malesuada</a></h2>
                                                <div class="ratings">
                                                    <div class="star-rating" title="Rated 5.00 out of 5"><span style="width:100%"><strong class="rating">5.00</strong> out of 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listview">
                                                <h2 class="product-name"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/%27" tppabs="http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/">Tincidunt malesuada</a></h2>
                                                <div class="price-rate">
                                                    <div class="price-box"><span class="special-price"><span class="amount">&pound;50.00</span></span><span class="old-price"><span class="amount">&pound;80.00</span></span>
                                                    </div>
                                                    <div class="ratings">
                                                        <div class="star-rating" title="Rated 5.00 out of 5"><span style="width:100%"><strong class="rating">5.00</strong> out of 5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;50.00</span></span><span class="old-price"><span class="amount">&pound;80.00</span></span> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add-to-cart=1158  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add-to-cart=1158%27" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=1158" rel="nofollow" data-product_id="1158" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-1158">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1158  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?add_to_wishlist=1158%27" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=1158" rel="nofollow" data-product-id="1158" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df%27" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=1158&_wpnonce=c83a2e58df" class="compare button" data-product_id="1158">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="1158" href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/%27" tppabs="http://demo.roadthemes.com/maroko/product/tincidunt-malesuada/" title="Tincidunt malesuada">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                                <div class=" item-col col-xs-12 col-sm-3 post-615 product type-product status-publish has-post-thumbnail product_cat-accessories product_cat-backpacks-2 product_cat-bags-2 product_cat-baseball-caps product_cat-bucket-bags-2 product_cat-bucket-bags-3 product_cat-clothings-2 product_cat-clutches-2 product_cat-gloves-mittens product_cat-jackets-coats-2 product_cat-jeans-2 product_cat-pumps-2 product_cat-sandals-2 product_cat-shoes product_cat-shoes-2 product_cat-shorts-2 product_cat-skullies-beanies product_cat-skullies-beanies-2 product_cat-sneakers-2 product_cat-sunglasses product_cat-t-shirts-2 product_cat-wedges-2 product_cat-women product_tag-electronic product_tag-laptop featured shipping-taxable purchasable product-type-simple product-cat-accessories product-cat-backpacks-2 product-cat-bags-2 product-cat-baseball-caps product-cat-bucket-bags-2 product-cat-bucket-bags-3 product-cat-clothings-2 product-cat-clutches-2 product-cat-gloves-mittens product-cat-jackets-coats-2 product-cat-jeans-2 product-cat-pumps-2 product-cat-sandals-2 product-cat-shoes product-cat-shoes-2 product-cat-shorts-2 product-cat-skullies-beanies product-cat-skullies-beanies-2 product-cat-sneakers-2 product-cat-sunglasses product-cat-t-shirts-2 product-cat-wedges-2 product-cat-women product-tag-electronic product-tag-laptop instock">
                                    <div class="product-wrapper">
                                        <div class="list-col4">
                                            <div class="product-image">
                                                <a href="index-58.htm" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/" title="Condimentum posuere"> <img width="480" height="635" src="<?=base_url()?>assets/img/anh/19-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/19-480x635.jpg" class="primary_image wp-post-image" alt="" /><img width="480" height="635" src="<?=base_url()?>assets/img/anh/20-480x635.jpg" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2014/10/20-480x635.jpg" class="secondary_image" alt="" /> </a>
                                                <div class="price-box"><span class="special-price"><span class="amount">&pound;115.00</span></span>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;115.00</span></span> <a href="-add-to-cart=615.htm" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=615" rel="nofollow" data-product_id="615" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-615">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="-add_to_wishlist=615.htm" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=615" rel="nofollow" data-product-id="615" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=615&_wpnonce=c83a2e58df" class="compare button" data-product_id="615">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="615" href="index-58.htm" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/" title="Condimentum posuere">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-col8">
                                            <div class="gridview">
                                                <h2 class="product-name"> <a href="index-58.htm" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/">Condimentum posuere</a></h2>
                                                <div class="ratings">
                                                    <div class="star-rating" title="Rated 5.00 out of 5"><span style="width:100%"><strong class="rating">5.00</strong> out of 5</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listview">
                                                <h2 class="product-name"> <a href="index-58.htm" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/">Condimentum posuere</a></h2>
                                                <div class="price-rate">
                                                    <div class="price-box"><span class="special-price"><span class="amount">&pound;115.00</span></span>
                                                    </div>
                                                    <div class="ratings">
                                                        <div class="star-rating" title="Rated 5.00 out of 5"><span style="width:100%"><strong class="rating">5.00</strong> out of 5</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                </div>
                                                <div class="actions">
                                                    <div class="action-buttons">
                                                        <div class="add-to-cart">
                                                            <p class="product woocommerce add_to_cart_inline " style="border:4px solid #ccc; padding: 12px;"><span class="special-price"><span class="amount">&pound;115.00</span></span> <a href="-add-to-cart=615.htm" tppabs="http://demo.roadthemes.com/maroko/?add-to-cart=615" rel="nofollow" data-product_id="615" data-product_sku="" data-quantity="1" class="button add_to_cart_button product_type_simple">Add to cart</a>
                                                            </p>
                                                        </div>
                                                        <div class="add-to-links">
                                                            <div class="yith-wcwl-add-to-wishlist add-to-wishlist-615">
                                                                <div class="yith-wcwl-add-button show" style="display:block"> <a href="-add_to_wishlist=615.htm" tppabs="http://demo.roadthemes.com/maroko/?add_to_wishlist=615" rel="nofollow" data-product-id="615" data-product-type="simple" class="add_to_wishlist"> Add to Wishlist</a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistaddedbrowse hide" style="display:none;"> <span class="feedback">Product added!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div class="yith-wcwl-wishlistexistsbrowse hide" style="display:none"> <span class="feedback">The product is already in the wishlist!</span> <a href="-wishlist-action=view.htm" tppabs="http://demo.roadthemes.com/maroko/wishlist/?wishlist-action=view"> Browse Wishlist </a>
                                                                </div>
                                                                <div style="clear:both"></div>
                                                                <div class="yith-wcwl-wishlistaddresponse"></div>
                                                            </div>
                                                            <div class="clear"></div>
                                                            <div class="woocommerce product compare-button"><a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/?action=yith-woocompare-add-product&id=615&_wpnonce=c83a2e58df" class="compare button" data-product_id="615">Compare</a>
                                                            </div>
                                                            <div class="quickviewbtn"><a class="detail-link quickview" data-quick-id="615" href="index-58.htm" tppabs="http://demo.roadthemes.com/maroko/product/condimentum-posuere/" title="Condimentum posuere">Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget-product-tags">
                        <h3 class="widget-title">Popular Tags</h3>
                        <div class="widget woocommerce widget_product_tag_cloud">
                            <h2 class="widgettitle">Product Tags</h2>
                            <div class="tagcloud"><a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/blouse/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/blouse/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/blouse/" class='tag-link-24 tag-link-position-1' title='4 topics' style='font-size: 17.3333333333pt;'>blouse</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/camera-2/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/camera-2/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/camera-2/" class='tag-link-25 tag-link-position-2' title='1 topic' style='font-size: 8pt;'>camera</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/electronic/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/electronic/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/electronic/" class='tag-link-27 tag-link-position-3' title='7 topics' style='font-size: 22pt;'>electronic</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/fashion/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/fashion/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/fashion/" class='tag-link-28 tag-link-position-4' title='5 topics' style='font-size: 19.2pt;'>fashion</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/handbag/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/handbag/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/handbag/" class='tag-link-30 tag-link-position-5' title='1 topic' style='font-size: 8pt;'>handbag</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/laptop/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/laptop/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/laptop/" class='tag-link-34 tag-link-position-6' title='3 topics' style='font-size: 15pt;'>laptop</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/maroko/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/maroko/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/maroko/" class='tag-link-87 tag-link-position-7' title='1 topic' style='font-size: 8pt;'>maroko</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/phone/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/phone/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/phone/" class='tag-link-36 tag-link-position-8' title='2 topics' style='font-size: 12.2pt;'>phone</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/sale/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/sale/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/sale/" class='tag-link-86 tag-link-position-9' title='1 topic' style='font-size: 8pt;'>sale</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/sex/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/sex/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/sex/" class='tag-link-82 tag-link-position-10' title='1 topic' style='font-size: 8pt;'>sex</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/shoes-2/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/shoes-2/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/shoes-2/" class='tag-link-39 tag-link-position-11' title='1 topic' style='font-size: 8pt;'>shoes</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/shoes-for-men/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/shoes-for-men/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/shoes-for-men/" class='tag-link-85 tag-link-position-12' title='1 topic' style='font-size: 8pt;'>shoes for men</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/t-shirt/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/t-shirt/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/t-shirt/" class='tag-link-84 tag-link-position-13' title='1 topic' style='font-size: 8pt;'>t-shirt</a> <a href="javascript:if(confirm(%27http://demo.roadthemes.com/maroko/product-tag/tablet/  \n\nThis file was not retrieved by Teleport Ultra, because it was unavailable, or its retrieval was aborted, or the project was stopped too soon.  \n\nDo you want to open it from the server?%27))window.location=%27http://demo.roadthemes.com/maroko/product-tag/tablet/%27" tppabs="http://demo.roadthemes.com/maroko/product-tag/tablet/" class='tag-link-41 tag-link-position-14' title='1 topic' style='font-size: 8pt;'>tablet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget-latest-tweets">
                        <h3 class="widget-title">Latest Tweets</h3>
                        <div class='rotatingtweets wp_debug rotatingtweets_format_0' id='rotatingtweets_4000_scrollUp_1000_5913ff6528996' data-cycle-auto-height="calc" data-cycle-fx="scrollUp" data-cycle-pause-on-hover="true" data-cycle-timeout="4000" data-cycle-speed="1000" data-cycle-easing="swing" data-cycle-slides="div.rotatingtweet">
                            <div class='rotatingtweet'>
                                <p class='rtw_main'>Our best WordPress theme for your online store is here <a href="javascript:if(confirm(%27https://t.co/BYA8Bn8A6f  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/BYA8Bn8A6f%27" tppabs="https://t.co/BYA8Bn8A6f" title='https://themeforest.net/item/expert-clearn-ecommerce-wordpress-theme/17100286' class='rtw_url_link'>themeforest.net/item/expert-c&hellip;</a> <a href="javascript:if(confirm(%27https://t.co/qtVhWOH5PU  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/qtVhWOH5PU%27" tppabs="https://t.co/qtVhWOH5PU" title='https://twitter.com/RoadThemes/status/779246718000869380/photo/1' class='rtw_media_link'>pic.twitter.com/qtVhWOH5PU</a>
                                </p>
                                <p class='rtw_meta'><a href="javascript:if(confirm(%27https://twitter.com/twitterapi/status/779246718000869380  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/twitterapi/status/779246718000869380%27" tppabs="https://twitter.com/twitterapi/status/779246718000869380">About 8 months ago</a> from <a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=2985432625  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=2985432625%27" tppabs="https://twitter.com/intent/user?user_id=2985432625" title='Kevin Sobo'>Kevin Sobo's Twitter</a> via <a href="javascript:if(confirm(%27http://twitter.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://twitter.com/%27" tppabs="http://twitter.com/" rel="nofollow">Twitter Web Client</a>
                                </p>
                            </div>
                            <div class='rotatingtweet' style='display:none'>
                                <p class='rtw_main'><a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=99012703  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=99012703%27" tppabs="https://twitter.com/intent/user?user_id=99012703" title='oluwasoji sanyaolu' lang='en'>@soujisama</a> Hi, It will available soon, We're moving it to another account.</p>
                                <p class='rtw_meta'><a href="javascript:if(confirm(%27https://twitter.com/twitterapi/status/773369129407438849  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/twitterapi/status/773369129407438849%27" tppabs="https://twitter.com/twitterapi/status/773369129407438849">About 9 months ago</a> from <a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=2985432625  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=2985432625%27" tppabs="https://twitter.com/intent/user?user_id=2985432625" title='Kevin Sobo'>Kevin Sobo's Twitter</a> via <a href="javascript:if(confirm(%27http://twitter.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://twitter.com/%27" tppabs="http://twitter.com/" rel="nofollow">Twitter Web Client</a>
                                </p>
                            </div>
                            <div class='rotatingtweet' style='display:none'>
                                <p class='rtw_main'>Furniture theme for your online store here ttp://goo.gl/2PD2BC <a href="javascript:if(confirm(%27https://t.co/ypsvLw1Jlb  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/ypsvLw1Jlb%27" tppabs="https://t.co/ypsvLw1Jlb" title='https://twitter.com/RoadThemes/status/773368524735524864/photo/1' class='rtw_media_link'>pic.twitter.com/ypsvLw1Jlb</a>
                                </p>
                                <p class='rtw_meta'><a href="javascript:if(confirm(%27https://twitter.com/twitterapi/status/773368524735524864  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/twitterapi/status/773368524735524864%27" tppabs="https://twitter.com/twitterapi/status/773368524735524864">About 9 months ago</a> from <a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=2985432625  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=2985432625%27" tppabs="https://twitter.com/intent/user?user_id=2985432625" title='Kevin Sobo'>Kevin Sobo's Twitter</a> via <a href="javascript:if(confirm(%27http://twitter.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://twitter.com/%27" tppabs="http://twitter.com/" rel="nofollow">Twitter Web Client</a>
                                </p>
                            </div>
                            <div class='rotatingtweet' style='display:none'>
                                <p class='rtw_main'>Building a new fashion accessories online store? Check out our new theme <a href="javascript:if(confirm(%27https://t.co/c5bhy9VNaj  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/c5bhy9VNaj%27" tppabs="https://t.co/c5bhy9VNaj" title='https://goo.gl/7sfFxz' class='rtw_url_link'>goo.gl/7sfFxz</a> <a href="javascript:if(confirm(%27https://t.co/w4iVfi4guR  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/w4iVfi4guR%27" tppabs="https://t.co/w4iVfi4guR" title='https://twitter.com/RoadThemes/status/761734170062184449/photo/1' class='rtw_media_link'>pic.twitter.com/w4iVfi4guR</a>
                                </p>
                                <p class='rtw_meta'><a href="javascript:if(confirm(%27https://twitter.com/twitterapi/status/761734170062184449  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/twitterapi/status/761734170062184449%27" tppabs="https://twitter.com/twitterapi/status/761734170062184449">About 10 months ago</a> from <a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=2985432625  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=2985432625%27" tppabs="https://twitter.com/intent/user?user_id=2985432625" title='Kevin Sobo'>Kevin Sobo's Twitter</a> via <a href="javascript:if(confirm(%27http://twitter.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://twitter.com/%27" tppabs="http://twitter.com/" rel="nofollow">Twitter Web Client</a>
                                </p>
                            </div>
                            <div class='rotatingtweet' style='display:none'>
                                <p class='rtw_main'>Purchase our new WordPress WooCommerce theme - TimePlus <a href="javascript:if(confirm(%27https://t.co/xFCCRgntPO  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/xFCCRgntPO%27" tppabs="https://t.co/xFCCRgntPO" title='https://goo.gl/yKV13B' class='rtw_url_link'>goo.gl/yKV13B</a> <a href="javascript:if(confirm(%27https://t.co/poSdAZhvBE  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://t.co/poSdAZhvBE%27" tppabs="https://t.co/poSdAZhvBE" title='https://twitter.com/RoadThemes/status/756714903595999232/photo/1' class='rtw_media_link'>pic.twitter.com/poSdAZhvBE</a>
                                </p>
                                <p class='rtw_meta'><a href="javascript:if(confirm(%27https://twitter.com/twitterapi/status/756714903595999232  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/twitterapi/status/756714903595999232%27" tppabs="https://twitter.com/twitterapi/status/756714903595999232">About 10 months ago</a> from <a href="javascript:if(confirm(%27https://twitter.com/intent/user?user_id=2985432625  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27https://twitter.com/intent/user?user_id=2985432625%27" tppabs="https://twitter.com/intent/user?user_id=2985432625" title='Kevin Sobo'>Kevin Sobo's Twitter</a> via <a href="javascript:if(confirm(%27http://twitter.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://twitter.com/%27" tppabs="http://twitter.com/" rel="nofollow">Twitter Web Client</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-middle">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget widget_menu">
                        <h3 class="widget-title">My Account</h3>
                        <div class="menu-my-account-container">
                            <ul id="menu-my-account" class="nav_menu">
                                <li id="menu-item-2960" class="menu-item menu-item-type-custom menu-item-object-custom first menu-item-2960"><a href="#">My Account</a>
                                </li>
                                <li id="menu-item-2961" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2961"><a href="#">Login</a>
                                </li>
                                <li id="menu-item-3081" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3081"><a href="#">My Cart</a>
                                </li>
                                <li id="menu-item-3082" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3082"><a href="#">Wishlist</a>
                                </li>
                                <li id="menu-item-3083" class="menu-item menu-item-type-custom menu-item-object-custom last menu-item-3083"><a href="#">Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget widget_menu">
                        <h3 class="widget-title">Infomation</h3>
                        <div class="menu-infomation-container">
                            <ul id="menu-infomation" class="nav_menu">
                                <li id="menu-item-3234" class="menu-item menu-item-type-post_type menu-item-object-page first menu-item-3234"><a href="index-52.htm" tppabs="http://demo.roadthemes.com/maroko/about-us/">About Us</a>
                                </li>
                                <li id="menu-item-2968" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2968"><a href="#">About Our Shop</a>
                                </li>
                                <li id="menu-item-2969" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2969"><a href="#">Secure Shopping</a>
                                </li>
                                <li id="menu-item-2970" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2970"><a href="#">Privacy Policy</a>
                                </li>
                                <li id="menu-item-2971" class="menu-item menu-item-type-custom menu-item-object-custom last menu-item-2971"><a href="#">Delivery infomation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget widget_menu">
                        <h3 class="widget-title">Our services</h3>
                        <div class="menu-our-services-container">
                            <ul id="menu-our-services" class="nav_menu">
                                <li id="menu-item-2956" class="menu-item menu-item-type-custom menu-item-object-custom first menu-item-2956"><a href="#">Shipping &#038; Returns</a>
                                </li>
                                <li id="menu-item-2957" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2957"><a href="#">Secure Shopping</a>
                                </li>
                                <li id="menu-item-2958" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2958"><a href="#">International Shipping</a>
                                </li>
                                <li id="menu-item-2959" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2959"><a href="#">Affiliates</a>
                                </li>
                                <li id="menu-item-3085" class="menu-item menu-item-type-custom menu-item-object-custom last menu-item-3085"><a href="#">Advance Search</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-3 col-sm-6 col-sms-6">
                    <div class="widget widget_menu">
                        <h3 class="widget-title">Custom Links</h3>
                        <div class="menu-custom-links-container">
                            <ul id="menu-custom-links" class="nav_menu">
                                <li id="menu-item-3532" class="menu-item menu-item-type-post_type menu-item-object-page first menu-item-3532"><a href="index-52.htm" tppabs="http://demo.roadthemes.com/maroko/about-us/">About Us</a>
                                </li>
                                <li id="menu-item-3534" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3534"><a href="index-53.htm" tppabs="http://demo.roadthemes.com/maroko/contact/">Contact</a>
                                </li>
                                <li id="menu-item-3533" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3533"><a href="index-43.htm" tppabs="http://demo.roadthemes.com/maroko/blog/">Blog</a>
                                </li>
                                <li id="menu-item-3535" class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-3535"><a href="index-54.htm" tppabs="http://demo.roadthemes.com/maroko/faqs/">FAQS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-link">
        <div class="container">
            <div class="logo-footer">
                <a href="index.htm" tppabs="http://demo.roadthemes.com/maroko/" title="Maroko" rel="home"><img src="<?=base_url()?>assets/img/anh/logo_footer.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/logo_footer.png" alt="" />
                </a>
            </div>
            <div class="widget bottom_menu">
                <div class="menu-bottom-menu-container">
                    <ul id="menu-bottom-menu" class="nav_menu">
                        <li id="menu-item-2976" class="menu-item menu-item-type-custom menu-item-object-custom first menu-item-2976"><a href="#">Site Map</a>
                        </li>
                        <li id="menu-item-2977" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2977"><a href="#">Search Terms</a>
                        </li>
                        <li id="menu-item-2978" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2978"><a href="#">Advanced Search</a>
                        </li>
                        <li id="menu-item-2979" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2979"><a href="#">Orders and Returns</a>
                        </li>
                        <li id="menu-item-2980" class="menu-item menu-item-type-custom menu-item-object-custom last menu-item-2980"><a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="copyright-info"> Copyright © 2015 <a href="javascript:if(confirm(%27http://www.roadthemes.com/  \n\nThis file was not retrieved by Teleport Ultra, because it is addressed on a domain or path outside the boundaries set for its Starting Address.  \n\nDo you want to open it from the server?%27))window.location=%27http://www.roadthemes.com/%27" tppabs="http://www.roadthemes.com/">Roadthemes.</a> All Rights Reserved</div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="bottom-right">
                        <a href="payment1.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment1.png"><img src="<?=base_url()?>assets/img/anh/payment1.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment1.png" alt="payment1" />
                        </a>
                        <a href="payment2.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment2.png"><img src="<?=base_url()?>assets/img/anh/payment2.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment2.png" alt="payment2" />
                        </a>
                        <a href="payment3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment3.png"><img src="<?=base_url()?>assets/img/anh/payment3.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment3.png" alt="payment3" />
                        </a>
                        <a href="payment4.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment4.png"><img src="<?=base_url()?>assets/img/anh/payment4.png" tppabs="http://demo.roadthemes.com/maroko/wp-content/uploads/2015/06/payment4.png" alt="payment4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<div id="secondary" class="col-xs-12 col-md-3 sidebar-sub">
    <aside id="nav_menu-2" class="widget widget_nav_menu">
        <h3 class="widget-title"><span>Custom Menu</span></h3>
        <div class="menu-custom-links-container">
            <ul id="menu-custom-links-1" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page first menu-item-3532"><a href="http://demo.roadthemes.com/maroko/about-us/">About Us</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3534"><a href="http://demo.roadthemes.com/maroko/contact/">Contact</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3533"><a href="http://demo.roadthemes.com/maroko/blog/">Blog</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page last menu-item-3535"><a href="http://demo.roadthemes.com/maroko/faqs/">FAQS</a>
                </li>
            </ul>
        </div>
    </aside>
    <aside id="text-5" class="widget widget_text">
        <h3 class="widget-title"><span>Keep your shopping</span></h3>
        <div class="textwidget">We always provide the latest fashion style and the low price and sale product for your choice. With all clothes, bag, hat and other fashion accessories, make your new today</div>
    </aside>
    <aside id="easy_facebook_page_plugin-2" class="widget widget_easy_facebook_page_plugin">
        <h3 class="widget-title"><span>Find us on Facebook</span></h3>
        <div id="fb-root"></div>
        <script>
            /*<![CDATA[*/
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=395202813876688";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk')); /*]]>*/
        </script>
        <div class="fb-page " data-href="https://www.facebook.com/roadthemes" data-hide-cover=false data-width="250" data-height="" data-show-facepile=true data-show-posts=false data-adapt-container-width=true data-hide-cta=false data-small-header="false"></div>
    </aside>
</div>
<div id="back-top" class="hidden-xs hidden-sm hidden-md"></div>
<script type="text/javascript" src="<?php echo base_url();?>assets/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/plugin_1.js"></script>
<script type='text/javascript'>
    var _wpcf7 = {
        "loaderUrl": "http:\/\/ciapplycation.vn\/assets\/img\/anh\/ajax-loader.gif",
        "sending": "Sending ...",
        "cached": "1"
    };
</script>
<!-- <script type="text/javascript" src="<?=base_url()?>assets/js/jquery/plugin_2.js"></script>
<script type='text/javascript'>
    var woocommerce_params = {
        "ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/?wc-ajax=%%endpoint%%"
    };
</script> -->
<script type='text/javascript'>
    var wc_cart_fragments_params = {
        "ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/wp-admin\/admin-ajax.php",
        "wc_ajax_url": "http:\/\/demo.roadthemes.com\/maroko\/?wc-ajax=%%endpoint%%",
        "fragment_name": "wc_fragments"
    };
</script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/breadcum.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/widgets.js-ver=4.7.4.js"></script>
<script type='text/javascript'>
    var icl_vars = {
        "current_language": "en",
        "icl_home": "http:\/\/demo.roadthemes.com\/maroko"
    };
</script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/price_slider.js"></script>
<script type='text/javascript'>
    var woocommerce_price_slider_params = {
        "currency_symbol": "\u00a3",
        "currency_pos": "left",
        "min_price": "",
        "max_price": ""
    };
</script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/plugin_9.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/plugin_11.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/slick.js"></script>
<script type="text/javascript" src="<?=base_url()?>assets/js/jquery/trangchu.js"></script>
<?php echo $scripts_header;?>
</body>
</html>