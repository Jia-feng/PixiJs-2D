/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;
        /******/
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            exports: {},
            /******/
            id: moduleId,
            /******/
            loaded: false
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.loaded = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // __webpack_public_path__
    /******/
    // __webpack_require__.p = "//g.mdcdn.cn/wp/dist/m_sale/";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';

        var $ = __webpack_require__(21);
        var Scroller = __webpack_require__(24).Scroller;


        function isMobile() {
            return !(!/iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(navigator.userAgent.toLowerCase()) || /pc=1/.test(location.search));
        }

        function isWX() {
            var e = window.navigator.userAgent.toLowerCase();
            return "micromessenger" == e.match(/MicroMessenger/i);
        }

        function playBgmAfterLoading(e) {
            var i = document.getElementById(e);
            i.play();
            var n = function n() {
                document.removeEventListener("WeixinJSBridgeReady", n);
                i.play();
            };
            document.addEventListener("WeixinJSBridgeReady", n, false);
        }

        function audioReady(e) {
            var i = document.getElementById(e);

            var n = function n() {
                document.removeEventListener("WeixinJSBridgeReady", n);
                i.play();
                i.pause();
            };
            document.addEventListener("WeixinJSBridgeReady", n, false);
        }

        var userNick = window.userNick;
        var curUserNick = window.curUserNick;
        var total = window.total;

        //var text_script = [userNick + '居然会来这么偏僻的地方', '这家还亮着灯，' + userNick + '会在里面吗？', '他们说的难道是' + userNick + '？我得去看看', '去四壹山必须经过这个林子…咦！…那是什么？\n', '这是' + userNick + '的背包，还有一本笔记…\n', '这一定就是笔记里的山洞了！' + userNick + '会在里面吗？\n', '好黑啊，什么都看不到…\n', '我的天哪！这是什么，快跑…', '那是………' + userNick + '！\n', '真的有宝藏吗，去传送门后面看看！', ''];
        var text_script = [];
        var isTouching = false;
        var scrollX = 7008 + 7500 + 5938 + 5778;
        var distXAxisforW750,
            stageContainer,
            actContainerArr,
            act_sprites_list,
            scriptText_con,
            openTextAnimate = false,
            spriteArr = [],
            act_4_sprites_arr,
            Act_4,
            act_3_sprites_arr,
            Act_3,
            act_2_sprites_arr,
            Act_2,
            act_1_sprites_arr,
            Act_1;
        var GlobalRotation = 0;
        var screenScaleRito,
            windowHeight = window.innerHeight,
            windowWidth = window.innerWidth,
            scrollerTop = 0,
            scrollerLeft = 0,
            pixiContainer = PIXI.Container,
            pixiLoader = PIXI.loader,
            pixiSprite = PIXI.Sprite,
            pixiGraphics = (PIXI.Rectangle, PIXI.Graphics),
            urlPadding = "/img/",
            urlPadding2 = "/images/";

        var objPixiContainer = new pixiContainer();
        objPixiContainer.width = windowWidth;
        objPixiContainer.height = windowHeight;

        window.onorientationchange = pageOrientationChange;

        var smallBookSprite = void 0;
        var startPosition = void 0;
        var leftLimit = void 0;
        var smallBookMove = 300;
        var openBookSprite = void 0;

        var onceBat = void 0;

        var startPositionW = void 0;
        var startPositionWw = void 0;

        var scrollerAnimatingIn2 = false;
        var scrollerAnimating = false;
        var hasOpen = false;
        var scrollerAnimatingClose = false;

        var runningWolf = void 0;
        var scrollerAnimatingWolfRunning = false;

        var wW = void 0;
        var scrollerAnimatingWolfWalking = false;

        var wolfSprite = void 0;
        var wolfShowAnimating = false;

        var outDoorAnimate;
        var leftWall = void 0,
            rightWall = void 0;

        var hasJumpTo3 = false;
        var hasJumpTo4 = false;
        var hasJumpTo7 = false;
        var hasJumpTo9 = false;
        var hasJumpTo10 = false;

        var o_point = {
            x: 675,
            y: 375
        },
            tmp_x = 0,
            s = 0,
            scale_v = void 0,
                start_X = void 0,
                    hasScaled = false;
        var o_point_3_4 = {
            x: 200,
            y: 355
        },
            tmp_x_3_4 = 0,
            s_3_4 = 0,
            scale_v_3_4 = void 0;
        var o_point_67 = {
            x: 400,
            y: 240
        },
            tmp_x_67 = 0,
            s_67 = 0,
            scale_v_67 = void 0,
                start_X_67 = void 0,
                    hasScaled_67 = false;
        var o_point_89 = {
            x: 0,
            y: 340
        },
            tmp_x_89 = 0,
            s_89 = 0,
            scale_v_89 = void 0;
        var o_point_910 = {
            x: 440,
            y: 50
        },
            tmp_x_910 = 0,
            s_910 = 0,
            scale_v_910 = void 0;

        var bfPlaying = false;
        var bfInter = null;

        var handSprite,
            handSpriteAnimating = false;

        var birdInter = null;

        var faceShowing = false;
        var face = void 0;
        var showFaceTouch = 0;

        var yjInter = null;
        var yjPlaying = false;

        var tmp_x1 = 0,
            tmp_x2 = 0;
        var s1 = 0,
            s2 = 0;

        var pixiRender = new PIXI.CanvasRenderer(windowWidth, windowHeight);
        $(".game_con_wrap")[0].appendChild(pixiRender.view);

        function restart() {}

        function initTextScript() {
            objPixiContainer.removeChild(scriptText_con);
            scriptText_con = new pixiContainer();
            scriptText_con.position.set(0, 628);

            for (var i = 0, len = text_script.length; i < len; i++) {
                var textSample;

                if (i == 11) {
                    textSample = new PIXI.Text(text_script[i], {
                        fontSize: '22px',
                        fill: 'white',
                        align: 'center'
                    });
                    textSample.position.y = -320 - 40;
                    textSample.position.x = distXAxisforW750 / 2 + 20;
                } else {
                    textSample = new PIXI.Text(text_script[i], {
                        fontSize: '30px',
                        fill: 'white',
                        align: 'center'
                    });
                    textSample.position.x = distXAxisforW750 / 2;
                }
                textSample.anchor.x = 0.5;

                textSample.visible = false;
                textSample.alpha = 0;

                scriptText_con.addChild(textSample);
            }
            objPixiContainer.addChild(scriptText_con);
        }

        function onTouchStart(e) {
            var i = e.data.originalEvent;
            isTouching = true;
            objScroller.doTouchStart(i.touches, i.timeStamp);
        }

        function onTouchMove(e) {
            if (isTouching) {
                var i = e.data.originalEvent;
                objScroller.doTouchMove(i.touches, i.timeStamp, i.scale);
            }
        }

        function onTouchEnd(e) {
            var i = e.data.originalEvent;
            objScroller.doTouchEnd(i.timeStamp);
            isTouching = false;
        }

        var utils = {
            debounce: function debounce(func, delay) {
                var timer = null;
                return function () {
                    var context = this,
                        args = arguments;
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        func.apply(context, args);
                    }, delay);
                };
            }
        };

        function detectOrient() {
            var storage = localStorage;
            var data = storage.getItem('J-recordOrientX');
            var cw = document.documentElement.clientWidth;
            var _Width = 0,
                _Height = 0;
            if (!data) {
                var sw = window.screen.width;
                var sh = window.screen.height;

                _Width = sw < sh ? sw : sh;
                _Height = sw >= sh ? sw : sh;
                storage.setItem('J-recordOrientX', _Width + ',' + _Height);
            } else {
                var str = data.split(',');
                _Width = str[0];
                _Height = str[1];
            }
            if (cw == _Width) {
                return 'portrait';
            }
            if (cw == _Height) {
                return 'landscape';
            }
        }
        var screenOritation;

        window.onresize = utils.debounce(pageOrientationChange, 300);


        function pageOrientationChange() {
            var afterLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


            screenOritation = detectOrient();

            if (screenOritation == 'portrait') {
                setTimeout(function () {
                    windowHeight = window.innerHeight;
                    windowWidth = window.innerWidth;
                    screenScaleRito = windowWidth / 750;

                    if (afterLoading) {
                        GlobalRotation = Math.PI / 2;
                        objPixiContainer.rotation = GlobalRotation;
                        objPixiContainer.scale.set(screenScaleRito, screenScaleRito);
                        pixiRender.resize(windowWidth, windowHeight);
                        objPixiContainer.position.set(windowWidth, 0);
                        scrollerLeft = objScroller.__scrollLeft;
                        setTimeout(function () {
                            objScroller.setDimensions(windowWidth, windowHeight, windowWidth, scrollX + windowHeight);
                            objScroller.scrollTo(0, scrollerLeft, false);
                            distXAxisforW750 = windowHeight / screenScaleRito;
                            restart();
                        }, 200);
                    } else {
                        /*  $("#loading").css({
                            "-webkit-transform": "rotate(90deg) scale(" + screenScaleRito + ") translate3d(0,-750px,0)",
                            width: windowHeight / screenScaleRito,
                            height: "750px"
                        })*/
                        $("#loading").removeClass('hide');
                    }
                }, 200);
            } else {
                windowHeight = window.innerHeight;
                windowWidth = window.innerWidth;
                screenScaleRito = windowHeight / 750;
                setTimeout(function () {
                    if (afterLoading) {
                        GlobalRotation = 0;
                        objPixiContainer.rotation = GlobalRotation;
                        objPixiContainer.scale.set(screenScaleRito, screenScaleRito);
                        pixiRender.resize(windowWidth, windowHeight);
                        objPixiContainer.position.set(0, 0);
                        scrollerTop = objScroller.__scrollTop;
                        setTimeout(function () {
                            objScroller.setDimensions(windowWidth, windowHeight, scrollX + windowWidth, windowHeight);
                            objScroller.scrollTo(scrollerTop, 0, false);
                            distXAxisforW750 = windowWidth / screenScaleRito;
                            restart();
                        }, 200);
                    } else {
                        /* $("#loading").css({
                            "-webkit-transform": "rotate(0deg) scale(" + screenScaleRito + ") translate3d(0,0,0)",
                            width: windowWidth / screenScaleRito,
                            height: "750px"
                        });*/
                        $("#loading").removeClass('hide');
                    }
                }, 200);
            }

            distXAxisforW750 = windowWidth < windowHeight ? windowHeight / screenScaleRito : windowWidth / screenScaleRito;
        }

        var act_1_animate_bg_img_arr = [],
            act_1_qiu_animate_img_arr = [],
            act_1_qiaom_animate_img_arr = [],
            act_2_heade_animate_img_arr = [],
            act_2_men_animate_img_arr = [],
            act_2_zoulu_animate_img_arr = [];
        for (var $e = 0; $e < 5; $e++) {
            act_1_animate_bg_img_arr.push(urlPadding2 + "qi-" + ($e + 1) + ".png");
        }
        for (var _$e = 0; _$e < 5; _$e++) {
            act_1_qiu_animate_img_arr.push(urlPadding2 + "qiu-" + (_$e + 1) + ".png");
        }
        for (var _$e = 0; _$e < 5; _$e++) {
            act_1_qiaom_animate_img_arr.push(urlPadding2 + "qiaom-" + (_$e + 1) + ".png");
        }
        for (var _$e = 0; _$e < 4; _$e++) {
            act_2_heade_animate_img_arr.push(urlPadding2 + "page2/bangta-" + (_$e + 1) + ".png");
        }
        for (var _$e = 0; _$e < 5; _$e++) {
            act_2_men_animate_img_arr.push(urlPadding2 + "page2/men-" + (_$e + 1) + ".png");
            act_2_zoulu_animate_img_arr.push(urlPadding2 + "page2/zoulu-" + (_$e + 1) + ".png");
        }


        function storyInit() {

            pixiLoader.add(urlPadding2 + "pagebg1.jpg")
                .add(urlPadding2 + "page1-2.png")
                .add(urlPadding2 + "page1-3.png?t=1")
                .add(urlPadding2 + "page2-1.png")

                .add(urlPadding2 + "pagebg2.jpg")
                .add(urlPadding2 + "page2-2.png")
                .add(urlPadding2 + "page2-3.png")
                .add(urlPadding2 + "page2-4.png")
                .add(urlPadding2 + "page2-5.png")
                .add(urlPadding2 + "page2-6.png")
                .add(urlPadding2 + "page2-7.png")
                .add(urlPadding2 + "page2-8.png")
                .add(urlPadding2 + "page2-9.png")
                .add(urlPadding2 + 'xtzj.png') 
                .add(urlPadding2 + "page2/pagebg3.jpg")
                .add(urlPadding2 + "page2/page3-text2.png")
                .add(urlPadding2 + "page2/page3-text1.png")
                .add(urlPadding2 + 'page2/jiche-1.png')
                .add(urlPadding2 + "page2/diantikuang.png")
                .add(urlPadding2 + "page2/dianti-1.png")
                .add(urlPadding2 + "page2/zhan.png")
                .add(urlPadding2 + "page2/zhan1.png")

                .add(urlPadding2 + "page3/pagebg4.png")

                .add(urlPadding + "new-1-2.png")
                .add(act_1_animate_bg_img_arr)
                .add(act_1_qiu_animate_img_arr)
                .add(act_1_qiaom_animate_img_arr)
                .add(act_2_heade_animate_img_arr)
                .add(act_2_men_animate_img_arr)
                .add(act_2_zoulu_animate_img_arr)
                .on("progress", setProgress).load(loadingFinish);
        }

        act_1_sprites_arr = [
            {
                name: "mid-1",
                url: urlPadding2 + "pagebg1.jpg",
                position: {
                    x: 0,
                    y: 0
                },
                speed: {
                    x: 1,
                    y: 0
                },
                gif: false
            }, {
                name: "bg-1",
                url: urlPadding2 + "qi-1.png",
                position: {
                    x: 0,
                    y: 114
                },
                speed: {
                    x: .04,
                    y: 1
                },
                gif: true,
                fromImages: act_1_animate_bg_img_arr
            }, {
                name: "front-1",
                url: urlPadding2 + "page1-2.png",
                position: {
                    x: 980,
                    y: 234
                },
                speed: {
                    x: .3,
                    y: 0
                },
                gif: false
            }, {
                name: "front-2",
                url: urlPadding2 + "page1-3.png?t=1",
                position: {
                    x: 1395,
                    y: 176
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "qiu",
                url: urlPadding2 + "qiu-1.png",
                position: {
                    x: 1518,
                    y: 220
                },
                speed: {
                    x: .005,
                    y: 1
                },
                gif: true,
                fromImages: act_1_qiu_animate_img_arr
            }, {
                name: "feiji-1",
                url: urlPadding2 + "page2-1.png",
                position: {
                    x: 1844,
                    y: 90
                },
                speed: {
                    x: .003,
                    y: 0
                },
                gif: false
            }, {
                name: "bg-2",
                url: urlPadding2 + "pagebg2.jpg",
                position: {
                    x: 3333,
                    y: 0
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-2",
                url: urlPadding2 + "page2-2.png",
                position: {
                    x: 2844,
                    y: 195
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-3",
                url: urlPadding2 + "page2-3.png",
                position: {
                    x: 3230,
                    y: 310
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-4",
                url: urlPadding2 + "page2-4.png",
                position: {
                    x: 2970,
                    y: 605
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-5",
                url: urlPadding2 + "page2-5.png",
                position: {
                    x: 3510,
                    y: 340
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-6",
                url: urlPadding2 + "page2-6.png",
                position: {
                    x: 3278,
                    y: 20
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-7",
                url: urlPadding2 + "page2-7.png",
                position: {
                    x: 3970,
                    y: 240
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-8",
                url: urlPadding2 + "page2-8.png",
                position: {
                    x: 6460,
                    y: 515
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "text-2-9",
                url: urlPadding2 + "page2-9.png",
                position: {
                    x: 3620,
                    y: 575
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "xtzj-btn1",
                url: urlPadding2 + "xtzj.png",
                position: {
                    x: 4396,
                    y: 633
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "qiaom-1",
                url: urlPadding2 + "qiaom-1.png",
                position: {
                    x: 6345,
                    y: 80
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "qiaom-2",
                url: urlPadding2 + "qiaom-1.png",
                position: {
                    x: 6345,
                    y: 80
                },
                speed: {
                    x: 0.8,
                    y: 0
                },
                gif: true,
                fromImages: act_1_qiaom_animate_img_arr
            }, {
                name: "xtzj-btn2",
                url: urlPadding2 + "xtzj.png",
                position: {
                    x: 6058,
                    y: 633
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }];

        act_2_sprites_arr = [
            {
                name: "bg-3",
                url: urlPadding2 + "page2/pagebg3.jpg",
                position: {
                    x: 7008,
                    y: 0
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "zoulu-1",
                url: urlPadding2 + "page2/zoulu-1.png",
                position: {
                    x: 7008 + 743,
                    y: 405
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "zoulu-2",
                url: urlPadding2 + "page2/zoulu-2.png",
                position: {
                    x: 7008+805,
                    y: 405
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "zoulu-3",
                url: urlPadding2 + "page2/zoulu-3.png",
                position: {
                    x: 7008+905,
                    y: 405
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "zoulu-4",
                url: urlPadding2 + "page2/zoulu-4.png",
                position: {
                    x: 7008+1005,
                    y: 405
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "zoulu-5",
                url: urlPadding2 + "page2/zoulu-5.png",
                position: {
                    x: 7008+1105,
                    y: 405
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "ditiemen-1",
                url: urlPadding2 + "page2/men-1.png",
                position: {
                    x: 7008 + 2458,
                    y: 248
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "ditiemen-2",
                url: urlPadding2 + "page2/men-2.png",
                position: {
                    x: 7008 + 2458,
                    y: 248
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "ditiemen-3",
                url: urlPadding2 + "page2/men-3.png",
                position: {
                    x: 7008 + 2458,
                    y: 248
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "ditiemen-4",
                url: urlPadding2 + "page2/men-4.png",
                position: {
                    x: 7008 + 2458,
                    y: 248
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "ditiemen-5",
                url: urlPadding2 + "page2/men-5.png",
                position: {
                    x: 7008 + 2458,
                    y: 248
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, 
            {
                name: "zhan-1",
                url: urlPadding2 + "page2/zhan.png",
                position: {
                    x: 7008 + 2300,
                    y: 0
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            },
            {
                name: "zhan-2",
                url: urlPadding2 + "page2/zhan1.png",
                position: {
                    x: 7008 + 2300,
                    y: 0
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "jiche-1",
                url: urlPadding2 + "page2/jiche-1.png",
                position: {
                    x: 7008 + 2626,
                    y: 340
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            },{
                name: "head-2",
                url: urlPadding2 + "page2/bangta-1.png",
                position: {
                    x: 7008 + 2665,
                    y: 505
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: true,
                fromImages: act_2_heade_animate_img_arr
            }, {
                name: "page3-text-1",
                url: urlPadding2 + "page2/page3-text1.png",
                position: {
                    x: 7008 + 2462,
                    y: 175
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "page3-text-2",
                url: urlPadding2 + "page2/page3-text2.png",
                position: {
                    x: 7008 + 2980,
                    y: 245
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }, {
                name: "xtzj-btn2",
                url: urlPadding2 + "xtzj.png",
                position: {
                    x: 7008 +3116,
                    y: 633
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            },{
                name: "diantiren-1",
                url: urlPadding2 + "page2/dianti-1.png",
                position: {
                    x: 7008 + + 4643 ,
                    y: 340
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            },{
                name: "diantikuang-1",
                url: urlPadding2 + "page2/diantikuang.png",
                position: {
                    x: 7008 + 4044,
                    y: 0
                },
                speed: {
                    x: 0,
                    y: 0
                },
                gif: false
            }];
        act_3_sprites_arr = [{
            name: "bg-4",
            url: urlPadding2 + "page3/pagebg4.png",
            position: {
                x: 7008 + 5938 ,
                y: 0
            },
            speed: {
                x: 0,
                y: 0
            },
            gif: false
        }];

        act_4_sprites_arr = [{
            name: "bg-6",
            url: urlPadding + "new-1-2.png",
            position: {
                x: 41900 + 500,
                y: 0
            },
            speed: {
                x: 0,
                y: 0
            },
            gif: false
        }];

        function setProgress(e, i) {
            var n = parseInt(e.progress);
            $("#percent .yellow").width(0.054 * n + "rem");
            $("#percent .mao").css('left', 0.05 * n + "rem");
        }

        function loadingFinish() {
            $("#percent .yellow").width("5.4rem");
            $("#percent .mao").css('left', "5rem");
            setTimeout(function () {
                $("#loading").fadeOut(300);
            }, 300);

            playBgmAfterLoading("ms_scared_bgm");
            stageContainer = new pixiContainer();

            var scenes = [Act_1, Act_2, Act_3, Act_4];

            act_sprites_list = [act_1_sprites_arr, act_2_sprites_arr, act_3_sprites_arr, act_4_sprites_arr];

            for (var _j = 0; _j < scenes.length; _j++) {
                scenes[_j] = new pixiContainer();
                scenes[_j].pivot.set(act_sprites_list[_j][0].position.x, 0);
                scenes[_j].position.set(act_sprites_list[_j][0].position.x, 0);
            }

            actContainerArr = scenes;
            Act_1 = scenes[0];
            Act_2 = scenes[1];
            Act_3 = scenes[2];
            Act_4 = scenes[3];

            for (var i = 0; i < actContainerArr.length; i++) {
                spriteArr[i] = [];
                for (var j = 0; j < act_sprites_list[i].length; j++) {

                    var act_n_bg_sprite = void 0;

                    if (!act_sprites_list[i][j].gif) {

                        act_n_bg_sprite = new pixiSprite(pixiLoader.resources[act_sprites_list[i][j].url].texture);
                        act_n_bg_sprite.position.set(act_sprites_list[i][j].position.x, act_sprites_list[i][j].position.y);
                        act_n_bg_sprite.name = act_sprites_list[i][j].name;
                        act_n_bg_sprite.data = act_sprites_list[i][j];
                        spriteArr[i].push(act_n_bg_sprite);
                    } else {
                        var imgsAnimatedSprite = act_sprites_list[i][j].fromImages;
                        act_n_bg_sprite = new PIXI.extras.AnimatedSprite.fromImages(imgsAnimatedSprite);

                        act_n_bg_sprite.position.set(act_sprites_list[i][j].position.x, act_sprites_list[i][j].position.y);
                        act_n_bg_sprite.name = act_sprites_list[i][j].name;
                        act_n_bg_sprite.data = act_sprites_list[i][j];
                    }

                    actContainerArr[i].addChild(act_n_bg_sprite);
                }
            }

            objPixiContainer.addChild(stageContainer);
            GlobalRotation = Math.PI / 2;
            objPixiContainer.rotation = GlobalRotation;
            objPixiContainer.position.set(windowWidth, 0);
            objPixiContainer.scale.set(screenScaleRito, screenScaleRito);
            objPixiContainer.interactive = true;
            objPixiContainer.buttonMode = true;

            stageContainer.addChild(Act_1, Act_2, Act_3, Act_4);
            //心疼自己1
            Act_1.children[15].interactive = true;
            Act_1.children[15].buttonMode = true;
            Act_1.children[15].on("touchstart", function (e) {
                console.log('点击了');
                /* Act_1.children[15].visible=false;
                Act_1.children[15].alpha=0;*/

            });
            //敲门互动
            Act_1.children[16].interactive = true;
            Act_1.children[16].buttonMode = true;
            Act_1.children[16].on("touchstart", function (e) {
                console.log('点击了');
                Act_1.children[16].visible = false;
                Act_1.children[16].alpha = 0;
                Act_1.children[17].visible = true;
                Act_1.children[17].animationSpeed = 0.1;
                Act_1.children[17].play();
                Act_1.children[13].visible = true;
            });
            // 点击帮他上地铁
            Act_2.children[14].interactive = true;
            Act_2.children[14].buttonMode = true;
            Act_2.children[14].on("touchstart", function (e) {
                console.log('点击帮他上地铁');
                var number = 1,number2 = 0;
                Act_2.children[12].alpha = 0;
                Act_2.children[17].alpha = 0;
                Act_2.children[12].visible = true;
                Act_2.children[17].visible = true;
                var times = setInterval(function(){
                    if(number > 0){
                        Act_2.children[14].alpha = number;
                        Act_2.children[13].alpha = number;
                        Act_2.children[11].alpha = number;
                        Act_2.children[12].alpha = number2;
                        Act_2.children[17].alpha = number2;
                        number -= 0.01;
                        number2 += 0.01;
                    }else{
                        clearInterval(times);
                        Act_2.children[14].visible = false;
                        Act_2.children[13].visible = false;
                        Act_2.children[11].visible = false; 
                    }
                },10)
                // 打开滚动
                objScroller.options.scrollingX = true;  
            });
            //心疼自己2
            Act_2.children[17].on("touchstart", function (e) {
                console.log('点击心疼自己2！');  
            });
            Act_2.children[12].visible = false;
            Act_2.children[14].visible = false;
            Act_2.children[17].visible = false;

            objPixiContainer.on("touchstart", onTouchStart).on("touchmove", onTouchMove).on("touchend", onTouchEnd);

            pageOrientationChange(true);
            initTextScript();
            objScroller.setDimensions(windowWidth, windowHeight, windowWidth, scrollX);
            pixiRender.render(objPixiContainer); 

            //Act_3.visible = false;
            Act_4.visible = false; 

            //   Act_1.children[4].alpha = .6;

            for (var i = 7; i < 15; i++) {
                Act_1.children[i].visible = false;
            }
            pageUpdate();
        }

        $('.js_mask_share').on('click', function () {
            $(this).addClass('hide');
        });

        function pageUpdate() {
            TWEEN.update();

            if (openTextAnimate) {
                showText();
            }

            requestAnimationFrame(pageUpdate);
            pixiRender.render(objPixiContainer);
        }
        var wholeBGM = {
            dom_ref: $("#ms_scared_bgm")[0],
            isPlayed: true
        };

        var audio_array = [
            {
                dom_ref: $("#ms_crown")[0],
                start: 60,
                end: 160,
                isPlayed: false
            }, {
                dom_ref: $("#ms_wolf_bgm")[0],
                start: 4039,
                end: 4324,
                isPlayed: false
            }, {
                dom_ref: $("#ms_book")[0],
                start: 5520,
                end: 5700,
                isPlayed: false
            }, {
                dom_ref: $("#ms_bat")[0],
                start: 6790,
                end: 6900,
                isPlayed: false
            }, {
                dom_ref: $("#ms_heart_beating")[0],
                start: 7906,
                end: 8700,
                isPlayed: false
            }, {
                dom_ref: $("#ms_screaming")[0],
                start: 8500,
                end: 8900,
                isPlayed: false
            }, {
                dom_ref: $("#ms_canival_bgm")[0],
                start: 11935 - 80,
                end: 11945 - 80 + 1500,
                isPlayed: false
            }];
        var switchX = {
            to2: 5674,
            to3: 5938,
            to4: 5778
        };

        function sceneAnimation1(cur_X, left, top, s_1_sky, s_1_text1, s_1_text2, s_1_qiu) {
            var distance = cur_X - 0;
            var b = 0;
            var xFrame = Math.min((cur_X - (b + 750 + 200)) / 25, 19);
            s_1_sky.visible = true;
            s_1_sky.animationSpeed = 0.1;
            s_1_sky.play();
            s_1_text2.visible = false;
            Act_1.children[5].visible = false;
            Act_1.children[15].visible = false;
            Act_1.children[18].visible = false;       

            if (cur_X > 250) {
                s_1_text2.visible = true;
            }

            if (cur_X < 300 && cur_X > 150) {
                s_1_qiu.visible = true;
                s_1_qiu.animationSpeed = 0.1;
                s_1_qiu.play();
            }
            //飞机显示
            if (cur_X > 1000) {
                Act_1.children[5].visible = true;
            }
            //飞机音乐播放
            if (cur_X > 1450) {

            }
            //聊天部分
            if (cur_X > 2240) {
                Act_1.children[7].visible = true;
                setTimeout(function () {
                    if (!Act_1.children[11].visible) {
                        Act_1.children[11].visible = true;
                    }
                }, 400);
                setTimeout(function () {
                    if (!Act_1.children[8].visible) {
                        Act_1.children[8].visible = true;
                    }
                }, 700);
                setTimeout(function () {
                    if (!Act_1.children[9].visible) {
                        Act_1.children[9].visible = true;
                    }
                }, 1000);
                setTimeout(function () {
                    if (!Act_1.children[10].visible) {
                        Act_1.children[10].visible = true;
                    }
                }, 1200);
                setTimeout(function () {
                    if (!Act_1.children[12].visible) {
                        Act_1.children[12].visible = true;
                    }
                }, 1400);
                setTimeout(function () {
                    if (!Act_1.children[14].visible) {
                        Act_1.children[14].visible = true;
                    }
                }, 1600);
            } else {
                for (var i = 7; i < 15; i++) {
                    Act_1.children[i].visible = false;
                }
            }
            //心疼自己1
            if (cur_X > 3524) {
                Act_1.children[15].visible = true;
            }
            //心疼自己2
            if (cur_X > 5250) {
                Act_1.children[18].visible = true;
            }
            $(".timebox .time2").attr("src", 'images/time/7.png');
            $(".timebox .time3").attr("src", 'images/time/0.png');
            //时间显示
            if (cur_X > 4820 && $(".timebox").is(":hidden")) {
                $(".timebox").fadeIn(300); 
            }
            if (cur_X < 4720) {
                $(".timebox").fadeOut(100);
            }

            showNthCont(999, w, scriptText_con);

            if (cur_X < 300 + 200 && cur_X > 30) {
                showNthCont(0, w, scriptText_con);
            }
        }

        var noScroll  = true;
        function sceneAnimation2(cur_X, left, top,s_2_heade) {
            var distance = cur_X - switchX.to2;  
            s = tmp_x * tmp_x; 

            scale_v = 1 + s; 
            Act_2.scale.set(scale_v, scale_v);
            Act_2.x = 7008 - 1 * distance; 
            //时间切换
            if (cur_X > 6660 && cur_X < 8604) {
                $(".timebox .time2").attr("src", 'images/time/7.png');
                $(".timebox .time3").attr("src", 'images/time/3.png');  
            }

            if (cur_X > 8604) {
                $(".timebox .time2").attr("src", 'images/time/8.png');
                $(".timebox .time3").attr("src", 'images/time/0.png');
            }  
            if(cur_X > 9100 && noScroll){
                noScroll = false;
                // 关闭滚动
                objScroller.scrollTo(9297, 9297, false);
                objScroller.options.scrollingX = false;


            } 
            if(cur_X > 9100){
                s_2_heade.visible = true;
                s_2_heade.animationSpeed = 0.1;
                s_2_heade.play();

            }else{
                s_2_heade.visible = false;  
                Act_2.children[14].alpha = 1;
                Act_2.children[13].visible = true;
                Act_2.children[11].visible = true;
                Act_2.children[12].visible = false;
                Act_2.children[14].alpha = 1;
                Act_2.children[13].alpha = 1;
                Act_2.children[11].alpha = 1;

                Act_2.children[17].visible = false;
                noScroll = true;
            } 
            //侧梯人动
            if(cur_X > 10815 && cur_X < 11555){
                Act_2.children[18].x = 11651 + 0.84*(cur_X-10815);
                Act_2.children[18].y = 340 - 0.51*(cur_X-10815);
                Act_2.children[18].visible = true;
            }


            //走路
            for(var i = 1;i<6;i++){
                Act_2.children[i].visible = false;
            } 
            if (cur_X > 6620 && cur_X < 6758) {
                Act_2.children[1].visible = true;
            }else{
                Act_2.children[1].visible = false;    
            }
            if (cur_X > 6758 && cur_X < 6820) {
                Act_2.children[2].visible = true;
            }else{
                Act_2.children[2].visible = false;    
            }
            if (cur_X > 6820 && cur_X < 6920) {
                Act_2.children[3].visible = true;
            }else{
                Act_2.children[2].visible = false;    
            }
            if (cur_X > 6920 && cur_X < 7120) {
                Act_2.children[4].visible = true;
            }else{
                Act_2.children[2].visible = false;    
            }
            if (cur_X > 7120) {
                Act_2.children[5].visible = true;
            }

            //开地铁门
            for(var i = 7;i<11;i++){
                Act_2.children[i].visible = false;
            } 
            if ( cur_X < 8960) {
                Act_2.children[6].visible = true;    
            } else if (cur_X > 8960 && cur_X < 9060) {
                Act_2.children[6].visible = false;  
                Act_2.children[7].visible = true;
            }else if (cur_X > 9060 && cur_X < 9160) {
                Act_2.children[8].visible = true;
            }else if (cur_X > 9160 && cur_X < 9260) {
                Act_2.children[9].visible = true;
            }else if (cur_X > 9260 && cur_X < 9690) {
                Act_2.children[10].visible = true; 
            }else if (cur_X > 9690 && cur_X < 9790) {
                Act_2.children[9].visible = true;
            } else if (cur_X > 9790 && cur_X < 9890) {
                Act_2.children[8].visible = true;
            } else  if (cur_X > 9890 && cur_X < 9990) {
                Act_2.children[7].visible = true;
                Act_2.children[6].visible = false; 
            } else if (cur_X > 9990) {
                Act_2.children[6].visible = true; 
            } 
        }

        var buble3Shown = false;
        var bubbleing = false;
        var act_3_cover_hide = false;

        function sceneAnimation3(cur_X, left, top) {
            var distance = cur_X - switchX.to3;
            /*    s_3_mos.animationSpeed = 0.4;
            s_3_mos.play();

            s_3_tv.animationSpeed = 0.4;
            s_3_tv.play();

            Act_3.children[7].alpha = 1 - distance / 100;

            showNthCont(999, w, scriptText_con);

            if (distance > 100) {
                Act_3.children[5].visible = true;
                if (distance < 400) {
                    Act_3.children[6].visible = false;
                } else if (distance > 400) {
                    Act_3.children[6].visible = true;

                    if (distance > 650) {
                        showNthCont(2, w, scriptText_con);
                    }
                }
            } else {
                Act_3.children[5].visible = false;
                Act_3.children[6].visible = false;
            }

            var back1 = Act_3.children[0];

            if (distance > 800) {
                tmp_x_3_4 = (distance - 800) / 400;
                s_3_4 = tmp_x_3_4 * tmp_x_3_4 / 3;

                var _tmp_x = back1.data.position.x + 800;
                var tmp_y = back1.data.position.y;

                Act_3.pivot.set(_tmp_x - o_point_3_4.x * s_3_4, tmp_y - o_point_3_4.y * s_3_4);
                scale_v_3_4 = 1 + s_3_4;
                Act_3.scale.set(scale_v_3_4, scale_v_3_4);

                for (var i = 0; i < Act_3.children.length; i++) {
                    var p = Act_3.children[i];
                    p.x = p.data.position.x + 800 + o_point_3_4.x * -s_3_4;
                    p.y = p.data.position.y + o_point_3_4.y * -s_3_4;
                }

                Act_3.x = _tmp_x + o_point_3_4.x * -s_3_4;
                Act_3.y = tmp_y + o_point_3_4.y * -s_3_4;

                if (distance > 1000) {
                    Act_3.alpha = (1400 - distance) / 400;
                }

                if (cur_X > switchX.to4) {
                    if (!hasJumpTo4) {
                        Act_4.visible = true; 
                        Act_3.visible = false;
                        Act_2.visible = false;
                        hasJumpTo4 = true;
                    }
                } else {
                    if (hasJumpTo4) {
                        Act_4.visible = false; 
                        Act_3.visible = true;
                        Act_2.visible = false;
                        hasJumpTo4 = false;
                    }
                }
            } else {
                Act_3.x = back1.data.position.x + distance;
            }*/
        }

        function sceneAnimation4(cur_X, left, top) {
            var distance = cur_X - switchX.to4;


            /*        runningWolf.animationSpeed = 0.4;
            runningWolf.play();

            Act_4.children[5].alpha = 1 - distance / 100;

            for (var i = 0; i < Act_4.children.length; i++) {
                var p = Act_4.children[i];
                if (p.data.speed) {
                    p.x = p.data.position.x + p.data.speed.x * distance;
                    p.y = p.data.position.y + p.data.speed.y * distance;
                }
            }

            showNthCont(999, w, scriptText_con);
            if (cur_X > switchX.to4 + 100 && cur_X < switchX.to4 + 270) {
                showNthCont(3, w, scriptText_con);
            }

            if (cur_X > switchX.to4 + 200 && cur_X < switchX.to4 + 1500) {
                showWolfRunning();
            }

            if (cur_X > switchX.to4) {
                showWolfMove();
            }

            function showWolfMove() {
                var endX = wolfSprite.data.position.x;
                if (!wolfShowAnimating) {
                    wolfSprite.visible = true;
                    wolfShowAnimating = true;
                }
            }

            function showWolfWalking() {
                var endX = Act_4_sprites_arr[0].position.x;

                if (!scrollerAnimatingWolfWalking) {
                    wW.visible = true;
                    scrollerAnimatingWolfWalking = true;
                    new TWEEN.Tween(startPositionWw).to({
                        x: endX
                    }, 4 * 1000).onUpdate(function () {
                        wW.x = this.x;
                    }).onComplete(function () {
                        wW.visible = false;
                        scrollerAnimatingWolfWalking = false;
                        wW.x = rW.data.position.x;
                    }).start();
                }
            }

            function showWolfRunning() {

                var endX = act_6_sprites_arr[0].position.x;

                if (!scrollerAnimatingWolfRunning) {
                    runningWolf.visible = true;
                    scrollerAnimatingWolfRunning = true;
                    new TWEEN.Tween(startPositionW).to({
                        x: endX
                    }, 1 * 1000).onUpdate(function () {
                        runningWolf.x = this.x;
                    }).onComplete(function () {
                        runningWolf.visible = false;
                        scrollerAnimatingWolfRunning = false;
                        runningWolf.x = runningWolf.data.position.x;
                    }).start();
                }
            }*/
        }



        function showHandMove() {
            var endY = handSprite.data.position.y;
            if (!handSpriteAnimating) {
                handSprite.visible = true;
                handSpriteAnimating = true;
                new TWEEN.Tween({
                    y: 750
                }).to({
                    y: endY
                }, 2 * 1000).onUpdate(function () {
                    handSprite.y = this.y;
                }).onComplete(function () {
                    handSprite.visible = true;
                }).start();
            }
        }
        var faceinterval = null;

        var hasRunning = false;


        var hasShownBubble9 = false;
        var hasAnimated10Bubble = false;
        var animation10Inter = null;
        var r = 3;

        var w = text_script.length;

        function scrollerCallback(left, top, zoom) {
            var cur_Y, cur_X;
            if (GlobalRotation > 0) {
                cur_X = top;
                cur_Y = left;
            } else {
                cur_X = left;
                cur_Y = top;
            }

            openTextAnimate = false;

            var s_1_sky = Act_1.children[1],
                s_1_qiu = Act_1.children[4],
                s_1_text1 = Act_1.children[2],
                s_1_text2 = Act_1.children[3],
                s_1_bird = Act_1.children[3],
                s_2_heade = Act_2.children[14];
            console.log(cur_X);

            if (cur_X < switchX.to2) {
                sceneAnimation1(cur_X, left, top, s_1_sky, s_1_text1, s_1_text2, s_1_qiu);
            } else if (cur_X > switchX.to2 && cur_X < (switchX.to2 + switchX.to3)) {
                sceneAnimation2(cur_X, left, top,s_2_heade);
            } else if (cur_X > (switchX.to2 + switchX.to3) && cur_X < (switchX.to2 + switchX.to4 + switchX.to3)) {
                sceneAnimation3(cur_X, left, top);
            } else if (cur_X > (switchX.to2 + switchX.to4 + switchX.to3) && cur_X < (switchX.to2 + switchX.to4 + switchX.to3 + switchX.to4)) {
                sceneAnimation4(cur_X, left, top);
            }

            if (10700 >= cur_X) {
                hasAnimated10Bubble = false;
                clearInterval(animation10Inter);
            }
            if (cur_X >= 950 && cur_X < 1657) {
                clearInterval(birdInter);
            } else if (cur_X >= 1657) {
                clearInterval(birdInter);
            } else {}



            var carnivalPlay = audio_array[6];
            if (cur_X > 11935 - 80) {

                if (wholeBGM.isPlayed) {
                    $("#ms_scared_bgm")[0].pause();
                    wholeBGM.isPlayed = false;
                }
                if (!carnivalPlay.isPlayed) {
                    carnivalPlay.isPlayed = true;
                    try {
                        var carnival_bgm_obj = document.querySelector('#ms_canival_bgm');
                        carnival_bgm_obj.play();
                    } catch (e) {}
                }
            } else {
                if (!wholeBGM.isPlayed) {
                    $("#ms_scared_bgm")[0].play();
                    wholeBGM.isPlayed = true;
                }
                if (carnivalPlay.isPlayed) {
                    carnivalPlay.isPlayed = false;
                    $("#ms_canival_bgm")[0].pause();
                }
            }

            for (var I = 0; I < audio_array.length - 1; I++) {
                if (cur_X >= audio_array[I].start && cur_X < audio_array[I].end) {
                    if (!audio_array[I].isPlayed) {
                        audio_array[I].isPlayed = true;
                        audio_array[I].dom_ref.play();
                    } else {
                        audio_array[I].isPlayed = false;
                        audio_array[I].dom_ref.pause();
                    }
                }
            }
            stageContainer.position.x = -cur_X;
            stageContainer.position.y = -cur_Y;
        }

        var objScroller = new Scroller(scrollerCallback, {
            zooming: false,
            animating: true,
            bouncing: false,
            animationDuration: 1000
        });
        objScroller.__enableScrollY = true;

        function showNthCont(n, total, scriptText_con) {

            openTextAnimate = true;
            for (var i = 0; i < total; i++) {
                if (i == n && scriptText_con.children[i]) {
                    (function () {
                        var d = scriptText_con.children[i];
                        d.visible = true;
                        new TWEEN.Tween({
                            alpha: 0
                        }).to({
                            alpha: 1
                        }, 5000).onUpdate(function () {
                            d.alpha = this.alpha;
                        }).onComplete(function () {}).start();
                    })();
                } else {
                    scriptText_con.children[i].visible = false;
                }
            }
        }

        function showText() {

            for (var i = 0; i < scriptText_con.children.length; i++) {
                if (scriptText_con.children[i].visible == true && scriptText_con.children[i].alpha < 1) {

                    scriptText_con.children[i].alpha = 1;
                }
            }
        }

        function prepareAudio() {

            audioReady("ms_book");
            audioReady("ms_crown");
            audioReady("ms_heart_beating");
            audioReady("ms_scared_bgm");
            audioReady("ms_screaming");
            audioReady("ms_wolf_bgm");
            audioReady("ms_bat");

            audioReady("ms_canival_bgm");
        }
        pageOrientationChange(false);
        storyInit();
        prepareAudio();

        /***/
    }),
    /* 1 */
    /***/
    (function (module, exports) {

        var $Object = Object;
        module.exports = {
            create: $Object.create,
            getProto: $Object.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: $Object.getOwnPropertyDescriptor,
            setDesc: $Object.defineProperty,
            setDescs: $Object.defineProperties,
            getKeys: $Object.keys,
            getNames: $Object.getOwnPropertyNames,
            getSymbols: $Object.getOwnPropertySymbols,
            each: [].forEach
        };

        /***/
    }),
    /* 2 */
    /***/
    (function (module, exports, __webpack_require__) {

        var store = __webpack_require__(19)('wks'),
            uid = __webpack_require__(20),
            Symbol = __webpack_require__(4).Symbol;
        module.exports = function (name) {
            return store[name] || (store[name] =
                                   Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
        };

        /***/
    }),
    /* 3 */
    /***/
    (function (module, exports) {

        var core = module.exports = {
            version: '1.2.6'
        };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

        /***/
    }),
    /* 4 */
    /***/
    (function (module, exports) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

        /***/
    }),
    /* 5 */
    /***/
    (function (module, exports, __webpack_require__) {

        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(38),
            defined = __webpack_require__(6);
        module.exports = function (it) {
            return IObject(defined(it));
        };

        /***/
    }),
    /* 6 */
    /***/
    (function (module, exports) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };

        /***/
    }),
    /* 7 */
    /***/
    (function (module, exports, __webpack_require__) {

        var global = __webpack_require__(4),
            core = __webpack_require__(3),
            ctx = __webpack_require__(35),
            PROTOTYPE = 'prototype';

        var $export = function (type, name, source) {
            var IS_FORCED = type & $export.F,
                IS_GLOBAL = type & $export.G,
                IS_STATIC = type & $export.S,
                IS_PROTO = type & $export.P,
                IS_BIND = type & $export.B,
                IS_WRAP = type & $export.W,
                exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
                key, own, out;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && key in target;
                if (own && key in exports) continue;
                // export native or passed
                out = own ? target[key] : source[key];
                // prevent global pollution for namespaces
                exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                // bind timers to global for call from export context
                : IS_BIND && own ? ctx(out, global)
                // wrap global constructors for prevent change them in library
                : IS_WRAP && target[key] == out ? (function (C) {
                    var F = function (param) {
                        return this instanceof C ? new C(param) : C(param);
                    };
                    F[PROTOTYPE] = C[PROTOTYPE];
                    return F;
                    // make static versions for prototype methods
                })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                if (IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
            }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        module.exports = $export;

        /***/
    }),
    /* 8 */
    /***/
    (function (module, exports) {

        module.exports = function (exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };

        /***/
    }),
    /* 9 */
    /***/
    (function (module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
        };

        /***/
    }),
    /* 10 */
    /***/
    (function (module, exports, __webpack_require__) {

        var $ = __webpack_require__(1),
            createDesc = __webpack_require__(12);
        module.exports = __webpack_require__(15) ? function (object, key, value) {
            return $.setDesc(object, key, createDesc(1, value));
        } : function (object, key, value) {
            object[key] = value;
            return object;
        };

        /***/
    }),
    /* 11 */
    /***/
    (function (module, exports) {

        module.exports = {};

        /***/
    }),
    /* 12 */
    /***/
    (function (module, exports) {

        module.exports = function (bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };

        /***/
    }),
    /* 13 */
    /***/
    (function (module, exports, __webpack_require__) {

        var def = __webpack_require__(1).setDesc,
            has = __webpack_require__(9),
            TAG = __webpack_require__(2)('toStringTag');

        module.exports = function (it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };

        /***/
    }),
    /* 14 */
    /***/
    (function (module, exports) {

        var toString = {}.toString;

        module.exports = function (it) {
            return toString.call(it).slice(8, -1);
        };

        /***/
    }),
    /* 15 */
    /***/
    (function (module, exports, __webpack_require__) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(8)(function () {
            return Object.defineProperty({}, 'a', {
                get: function () {
                    return 7;
                }
            }).a != 7;
        });

        /***/
    }),
    /* 16 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';
        var LIBRARY = __webpack_require__(17),
            $export = __webpack_require__(7),
            redefine = __webpack_require__(18),
            hide = __webpack_require__(10),
            has = __webpack_require__(9),
            Iterators = __webpack_require__(11),
            $iterCreate = __webpack_require__(41),
            setToStringTag = __webpack_require__(13),
            getProto = __webpack_require__(1).getProto,
            ITERATOR = __webpack_require__(2)('iterator'),
            BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
        ,
            FF_ITERATOR = '@@iterator',
            KEYS = 'keys',
            VALUES = 'values';

        var returnThis = function () {
            return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function (kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS:
                        return function keys() {
                            return new Constructor(this, kind);
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor(this, kind);
                        };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + ' Iterator',
                DEF_VALUES = DEFAULT == VALUES,
                VALUES_BUG = false,
                proto = Base.prototype,
                $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                $default = $native || getMethod(DEFAULT),
                methods, key;
            // Fix native
            if ($native) {
                var IteratorPrototype = getProto($default.call(new Base));
                // Set @@toStringTag to native iterators
                setToStringTag(IteratorPrototype, TAG, true);
                // FF fix
                if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: !DEF_VALUES ? $default : getMethod('entries')
                };
                if (FORCED)
                    for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };

        /***/
    }),
    /* 17 */
    /***/
    (function (module, exports) {

        module.exports = true;

        /***/
    }),
    /* 18 */
    /***/
    (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(10);

        /***/
    }),
    /* 19 */
    /***/
    (function (module, exports, __webpack_require__) {

        var global = __webpack_require__(4),
            SHARED = '__core-js_shared__',
            store = global[SHARED] || (global[SHARED] = {});
        module.exports = function (key) {
            return store[key] || (store[key] = {});
        };

        /***/
    }),
    /* 20 */
    /***/
    (function (module, exports) {

        var id = 0,
            px = Math.random();
        module.exports = function (key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        /***/
    }),
    /* 21 */
    /***/
    (function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__;
        "use strict";

        var _typeof2 = __webpack_require__(28);

        var _typeof3 = _interopRequireDefault(_typeof2);

        var _getPrototypeOf = __webpack_require__(25);

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
            var Zepto = function () {
                function L(t) {
                    return null == t ? String(t) : j[S.call(t)] || "object";
                }

                function Z(t) {
                    return "function" == L(t);
                }

                function $(t) {
                    return null != t && t == t.window;
                }

                function _(t) {
                    return null != t && t.nodeType == t.DOCUMENT_NODE;
                }

                function D(t) {
                    return "object" == L(t);
                }

                function R(t) {
                    return D(t) && !$(t) && (0, _getPrototypeOf2.default)(t) == Object.prototype;
                }

                function M(t) {
                    return "number" == typeof t.length;
                }

                function k(t) {
                    return s.call(t, function (t) {
                        return null != t;
                    });
                }

                function z(t) {
                    return t.length > 0 ? n.fn.concat.apply([], t) : t;
                }

                function F(t) {
                    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
                }

                function q(t) {
                    return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
                }

                function H(t, e) {
                    return "number" != typeof e || c[F(t)] ? e : e + "px";
                }

                function I(t) {
                    var e, n;
                    return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t];
                }

                function V(t) {
                    return "children" in t ? o.call(t.children) : n.map(t.childNodes, function (t) {
                        return 1 == t.nodeType ? t : void 0;
                    });
                }

                function B(n, i, r) {
                    for (e in i) {
                        r && (R(i[e]) || A(i[e])) ? (R(i[e]) && !R(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e]);
                    }
                }

                function U(t, e) {
                    return null == e ? n(t) : n(t).filter(e);
                }

                function J(t, e, n, i) {
                    return Z(e) ? e.call(t, n, i) : e;
                }

                function X(t, e, n) {
                    null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
                }

                function W(e, n) {
                    var i = e.className,
                        r = i && i.baseVal !== t;
                    return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n);
                }

                function Y(t) {
                    var e;
                    try {
                        return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t;
                    } catch (i) {
                        return t;
                    }
                }

                function G(t, e) {
                    e(t);
                    for (var n = 0, i = t.childNodes.length; i > n; n++) {
                        G(t.childNodes[n], e);
                    }
                }
                var t,
                    e,
                    n,
                    i,
                    C,
                    N,
                    r = [],
                    o = r.slice,
                    s = r.filter,
                    a = window.document,
                    u = {},
                    f = {},
                    c = {
                        "column-count": 1,
                        columns: 1,
                        "font-weight": 1,
                        "line-height": 1,
                        opacity: 1,
                        "z-index": 1,
                        zoom: 1
                    },
                    l = /^\s*<(\w+|!)[^>]*>/,
                    h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                    p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                    d = /^(?:body|html)$/i,
                    m = /([A-Z])/g,
                    g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
                    v = ["after", "prepend", "before", "append"],
                    y = a.createElement("table"),
                    x = a.createElement("tr"),
                    b = {
                        tr: a.createElement("tbody"),
                        tbody: y,
                        thead: y,
                        tfoot: y,
                        td: x,
                        th: x,
                        "*": a.createElement("div")
                    },
                    w = /complete|loaded|interactive/,
                    E = /^[\w-]*$/,
                    j = {},
                    S = j.toString,
                    T = {},
                    O = a.createElement("div"),
                    P = {
                        tabindex: "tabIndex",
                        readonly: "readOnly",
                        "for": "htmlFor",
                        "class": "className",
                        maxlength: "maxLength",
                        cellspacing: "cellSpacing",
                        cellpadding: "cellPadding",
                        rowspan: "rowSpan",
                        colspan: "colSpan",
                        usemap: "useMap",
                        frameborder: "frameBorder",
                        contenteditable: "contentEditable"
                    },
                    A = Array.isArray || function (t) {
                        return t instanceof Array;
                    };
                return T.matches = function (t, e) {
                    if (!e || !t || 1 !== t.nodeType) return !1;
                    var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
                    if (n) return n.call(t, e);
                    var i,
                        r = t.parentNode,
                        o = !r;
                    return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i;
                }, C = function C(t) {
                    return t.replace(/-+(.)?/g, function (t, e) {
                        return e ? e.toUpperCase() : "";
                    });
                }, N = function N(t) {
                    return s.call(t, function (e, n) {
                        return t.indexOf(e) == n;
                    });
                }, T.fragment = function (e, i, r) {
                    var s, u, f;
                    return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function () {
                        f.removeChild(this);
                    })), R(r) && (u = n(s), n.each(r, function (t, e) {
                        g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e);
                    })), s;
                }, T.Z = function (t, e) {
                    return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t;
                }, T.isZ = function (t) {
                    return t instanceof T.Z;
                }, T.init = function (e, i) {
                    var r;
                    if (!e) return T.Z();
                    if ("string" == typeof e) {
                        if (e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i), e = null;
                        else {
                            if (i !== t) return n(i).find(e);
                            r = T.qsa(a, e);
                        }
                    } else {
                        if (Z(e)) return n(a).ready(e);
                        if (T.isZ(e)) return e;
                        if (A(e)) r = k(e);
                        else if (D(e)) r = [e], e = null;
                        else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;
                        else {
                            if (i !== t) return n(i).find(e);
                            r = T.qsa(a, e);
                        }
                    }
                    return T.Z(r, e);
                }, n = function n(t, e) {
                    return T.init(t, e);
                }, n.extend = function (t) {
                    var e,
                        n = o.call(arguments, 1);
                    return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
                        B(t, n, e);
                    }), t;
                }, T.qsa = function (t, e) {
                    var n,
                        i = "#" == e[0],
                        r = !i && "." == e[0],
                        s = i || r ? e.slice(1) : e,
                        a = E.test(s);
                    return _(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e));
                }, n.contains = a.documentElement.contains ? function (t, e) {
                    return t !== e && t.contains(e);
                } : function (t, e) {
                    for (; e && (e = e.parentNode);) {
                        if (e === t) return !0;
                    }
                    return !1;
                }, n.type = L, n.isFunction = Z, n.isWindow = $, n.isArray = A, n.isPlainObject = R, n.isEmptyObject = function (t) {
                    var e;
                    for (e in t) {
                        return !1;
                    }
                    return !0;
                }, n.inArray = function (t, e, n) {
                    return r.indexOf.call(e, t, n);
                }, n.camelCase = C, n.trim = function (t) {
                    return null == t ? "" : String.prototype.trim.call(t);
                }, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function (t, e) {
                    var n,
                        r,
                        o,
                        i = [];
                    if (M(t))
                        for (r = 0; r < t.length; r++) {
                            n = e(t[r], r), null != n && i.push(n);
                        } else
                            for (o in t) {
                                n = e(t[o], o), null != n && i.push(n);
                            }
                    return z(i);
                }, n.each = function (t, e) {
                    var n, i;
                    if (M(t)) {
                        for (n = 0; n < t.length; n++) {
                            if (e.call(t[n], n, t[n]) === !1) return t;
                        }
                    } else
                        for (i in t) {
                            if (e.call(t[i], i, t[i]) === !1) return t;
                        }
                    return t;
                }, n.grep = function (t, e) {
                    return s.call(t, e);
                }, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                    j["[object " + e + "]"] = e.toLowerCase();
                }), n.fn = {
                    forEach: r.forEach,
                    reduce: r.reduce,
                    push: r.push,
                    sort: r.sort,
                    indexOf: r.indexOf,
                    concat: r.concat,
                    map: function map(t) {
                        return n(n.map(this, function (e, n) {
                            return t.call(e, n, e);
                        }));
                    },
                    slice: function slice() {
                        return n(o.apply(this, arguments));
                    },
                    ready: function ready(t) {
                        return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function () {
                            t(n);
                        }, !1), this;
                    },
                    get: function get(e) {
                        return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length];
                    },
                    toArray: function toArray() {
                        return this.get();
                    },
                    size: function size() {
                        return this.length;
                    },
                    remove: function remove() {
                        return this.each(function () {
                            null != this.parentNode && this.parentNode.removeChild(this);
                        });
                    },
                    each: function each(t) {
                        return r.every.call(this, function (e, n) {
                            return t.call(e, n, e) !== !1;
                        }), this;
                    },
                    filter: function filter(t) {
                        return Z(t) ? this.not(this.not(t)) : n(s.call(this, function (e) {
                            return T.matches(e, t);
                        }));
                    },
                    add: function add(t, e) {
                        return n(N(this.concat(n(t, e))));
                    },
                    is: function is(t) {
                        return this.length > 0 && T.matches(this[0], t);
                    },
                    not: function not(e) {
                        var i = [];
                        if (Z(e) && e.call !== t) this.each(function (t) {
                            e.call(this, t) || i.push(this);
                        });
                        else {
                            var r = "string" == typeof e ? this.filter(e) : M(e) && Z(e.item) ? o.call(e) : n(e);
                            this.forEach(function (t) {
                                r.indexOf(t) < 0 && i.push(t);
                            });
                        }
                        return n(i);
                    },
                    has: function has(t) {
                        return this.filter(function () {
                            return D(t) ? n.contains(this, t) : n(this).find(t).size();
                        });
                    },
                    eq: function eq(t) {
                        return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
                    },
                    first: function first() {
                        var t = this[0];
                        return t && !D(t) ? t : n(t);
                    },
                    last: function last() {
                        var t = this[this.length - 1];
                        return t && !D(t) ? t : n(t);
                    },
                    find: function find(t) {
                        var e,
                            i = this;
                        return e = t ? "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) ? n(t).filter(function () {
                            var t = this;
                            return r.some.call(i, function (e) {
                                return n.contains(e, t);
                            });
                        }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function () {
                            return T.qsa(this, t);
                        }) : [];
                    },
                    closest: function closest(t, e) {
                        var i = this[0],
                            r = !1;
                        for ("object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) {
                            i = i !== e && !_(i) && i.parentNode;
                        }
                        return n(i);
                    },
                    parents: function parents(t) {
                        for (var e = [], i = this; i.length > 0;) {
                            i = n.map(i, function (t) {
                                return (t = t.parentNode) && !_(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0;
                            });
                        }
                        return U(e, t);
                    },
                    parent: function parent(t) {
                        return U(N(this.pluck("parentNode")), t);
                    },
                    children: function children(t) {
                        return U(this.map(function () {
                            return V(this);
                        }), t);
                    },
                    contents: function contents() {
                        return this.map(function () {
                            return o.call(this.childNodes);
                        });
                    },
                    siblings: function siblings(t) {
                        return U(this.map(function (t, e) {
                            return s.call(V(e.parentNode), function (t) {
                                return t !== e;
                            });
                        }), t);
                    },
                    empty: function empty() {
                        return this.each(function () {
                            this.innerHTML = "";
                        });
                    },
                    pluck: function pluck(t) {
                        return n.map(this, function (e) {
                            return e[t];
                        });
                    },
                    show: function show() {
                        return this.each(function () {
                            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName));
                        });
                    },
                    replaceWith: function replaceWith(t) {
                        return this.before(t).remove();
                    },
                    wrap: function wrap(t) {
                        var e = Z(t);
                        if (this[0] && !e) var i = n(t).get(0),
                            r = i.parentNode || this.length > 1;
                        return this.each(function (o) {
                            n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i);
                        });
                    },
                    wrapAll: function wrapAll(t) {
                        if (this[0]) {
                            n(this[0]).before(t = n(t));
                            for (var e;
                                 (e = t.children()).length;) {
                                t = e.first();
                            }
                            n(t).append(this);
                        }
                        return this;
                    },
                    wrapInner: function wrapInner(t) {
                        var e = Z(t);
                        return this.each(function (i) {
                            var r = n(this),
                                o = r.contents(),
                                s = e ? t.call(this, i) : t;
                            o.length ? o.wrapAll(s) : r.append(s);
                        });
                    },
                    unwrap: function unwrap() {
                        return this.parent().each(function () {
                            n(this).replaceWith(n(this).children());
                        }), this;
                    },
                    clone: function clone() {
                        return this.map(function () {
                            return this.cloneNode(!0);
                        });
                    },
                    hide: function hide() {
                        return this.css("display", "none");
                    },
                    toggle: function toggle(e) {
                        return this.each(function () {
                            var i = n(this);
                            (e === t ? "none" == i.css("display") : e) ? i.show(): i.hide();
                        });
                    },
                    prev: function prev(t) {
                        return n(this.pluck("previousElementSibling")).filter(t || "*");
                    },
                    next: function next(t) {
                        return n(this.pluck("nextElementSibling")).filter(t || "*");
                    },
                    html: function html(t) {
                        return 0 in arguments ? this.each(function (e) {
                            var i = this.innerHTML;
                            n(this).empty().append(J(this, t, e, i));
                        }) : 0 in this ? this[0].innerHTML : null;
                    },
                    text: function text(t) {
                        return 0 in arguments ? this.each(function (e) {
                            var n = J(this, t, e, this.textContent);
                            this.textContent = null == n ? "" : "" + n;
                        }) : 0 in this ? this[0].textContent : null;
                    },
                    attr: function attr(n, i) {
                        var r;
                        return "string" != typeof n || 1 in arguments ? this.each(function (t) {
                            if (1 === this.nodeType)
                                if (D(n))
                                    for (e in n) {
                                        X(this, e, n[e]);
                                    } else X(this, n, J(this, i, t, this.getAttribute(n)));
                        }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t;
                    },
                    removeAttr: function removeAttr(t) {
                        return this.each(function () {
                            1 === this.nodeType && X(this, t);
                        });
                    },
                    prop: function prop(t, e) {
                        return t = P[t] || t, 1 in arguments ? this.each(function (n) {
                            this[t] = J(this, e, n, this[t]);
                        }) : this[0] && this[0][t];
                    },
                    data: function data(e, n) {
                        var i = "data-" + e.replace(m, "-$1").toLowerCase(),
                            r = 1 in arguments ? this.attr(i, n) : this.attr(i);
                        return null !== r ? Y(r) : t;
                    },
                    val: function val(t) {
                        return 0 in arguments ? this.each(function (e) {
                            this.value = J(this, t, e, this.value);
                        }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function () {
                            return this.selected;
                        }).pluck("value") : this[0].value);
                    },
                    offset: function offset(t) {
                        if (t) return this.each(function (e) {
                            var i = n(this),
                                r = J(this, t, e, i.offset()),
                                o = i.offsetParent().offset(),
                                s = {
                                    top: r.top - o.top,
                                    left: r.left - o.left
                                };
                            "static" == i.css("position") && (s.position = "relative"), i.css(s);
                        });
                        if (!this.length) return null;
                        var e = this[0].getBoundingClientRect();
                        return {
                            left: e.left + window.pageXOffset,
                            top: e.top + window.pageYOffset,
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        };
                    },
                    css: function css(t, i) {
                        if (arguments.length < 2) {
                            var r = this[0],
                                o = getComputedStyle(r, "");
                            if (!r) return;
                            if ("string" == typeof t) return r.style[C(t)] || o.getPropertyValue(t);
                            if (A(t)) {
                                var s = {};
                                return n.each(A(t) ? t : [t], function (t, e) {
                                    s[e] = r.style[C(e)] || o.getPropertyValue(e);
                                }), s;
                            }
                        }
                        var a = "";
                        if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function () {
                            this.style.removeProperty(F(t));
                        });
                        else
                            for (e in t) {
                                t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function () {
                                    this.style.removeProperty(F(e));
                                });
                            }
                        return this.each(function () {
                            this.style.cssText += ";" + a;
                        });
                    },
                    index: function index(t) {
                        return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0]);
                    },
                    hasClass: function hasClass(t) {
                        return t ? r.some.call(this, function (t) {
                            return this.test(W(t));
                        }, q(t)) : !1;
                    },
                    addClass: function addClass(t) {
                        return t ? this.each(function (e) {
                            i = [];
                            var r = W(this),
                                o = J(this, t, e, r);
                            o.split(/\s+/g).forEach(function (t) {
                                n(this).hasClass(t) || i.push(t);
                            }, this), i.length && W(this, r + (r ? " " : "") + i.join(" "));
                        }) : this;
                    },
                    removeClass: function removeClass(e) {
                        return this.each(function (n) {
                            return e === t ? W(this, "") : (i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function (t) {
                                i = i.replace(q(t), " ");
                            }), void W(this, i.trim()));
                        });
                    },
                    toggleClass: function toggleClass(e, i) {
                        return e ? this.each(function (r) {
                            var o = n(this),
                                s = J(this, e, r, W(this));
                            s.split(/\s+/g).forEach(function (e) {
                                (i === t ? !o.hasClass(e) : i) ? o.addClass(e): o.removeClass(e);
                            });
                        }) : this;
                    },
                    scrollTop: function scrollTop(e) {
                        if (this.length) {
                            var n = "scrollTop" in this[0];
                            return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function () {
                                this.scrollTop = e;
                            } : function () {
                                this.scrollTo(this.scrollX, e);
                            });
                        }
                    },
                    scrollLeft: function scrollLeft(e) {
                        if (this.length) {
                            var n = "scrollLeft" in this[0];
                            return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function () {
                                this.scrollLeft = e;
                            } : function () {
                                this.scrollTo(e, this.scrollY);
                            });
                        }
                    },
                    position: function position() {
                        if (this.length) {
                            var t = this[0],
                                e = this.offsetParent(),
                                i = this.offset(),
                                r = d.test(e[0].nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : e.offset();
                            return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
                                top: i.top - r.top,
                                left: i.left - r.left
                            };
                        }
                    },
                    offsetParent: function offsetParent() {
                        return this.map(function () {
                            for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) {
                                t = t.offsetParent;
                            }
                            return t;
                        });
                    }
                }, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function (e) {
                    var i = e.replace(/./, function (t) {
                        return t[0].toUpperCase();
                    });
                    n.fn[e] = function (r) {
                        var o,
                            s = this[0];
                        return r === t ? $(s) ? s["inner" + i] : _(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function (t) {
                            s = n(this), s.css(e, J(this, r, t, s[e]()));
                        });
                    };
                }), v.forEach(function (t, e) {
                    var i = e % 2;
                    n.fn[t] = function () {
                        var t,
                            o,
                            r = n.map(arguments, function (e) {
                                return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e);
                            }),
                            s = this.length > 1;
                        return r.length < 1 ? this : this.each(function (t, u) {
                            o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
                            var f = n.contains(a.documentElement, o);
                            r.forEach(function (t) {
                                if (s) t = t.cloneNode(!0);
                                else if (!o) return n(t).remove();
                                o.insertBefore(t, u), f && G(t, function (t) {
                                    null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML);
                                });
                            });
                        });
                    }, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function (e) {
                        return n(e)[t](this), this;
                    };
                }), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n;
            }();
            window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
                function (t) {
                function l(t) {
                    return t._zid || (t._zid = e++);
                }

                function h(t, e, n, i) {
                    if (e = p(e), e.ns) var r = d(e.ns);
                    return (s[l(t)] || []).filter(function (t) {
                        return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i);
                    });
                }

                function p(t) {
                    var e = ("" + t).split(".");
                    return {
                        e: e[0],
                        ns: e.slice(1).sort().join(" ")
                    };
                }

                function d(t) {
                    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
                }

                function m(t, e) {
                    return t.del && !u && t.e in f || !!e;
                }

                function g(t) {
                    return c[t] || u && f[t] || t;
                }

                function v(e, i, r, o, a, u, f) {
                    var h = l(e),
                        d = s[h] || (s[h] = []);
                    i.split(/\s/).forEach(function (i) {
                        if ("ready" == i) return t(document).ready(r);
                        var s = p(i);
                        s.fn = r, s.sel = a, s.e in c && (r = function r(e) {
                            var n = e.relatedTarget;
                            return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0;
                        }), s.del = u;
                        var l = u || r;
                        s.proxy = function (t) {
                            if (t = j(t), !t.isImmediatePropagationStopped()) {
                                t.data = o;
                                var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                                return i === !1 && (t.preventDefault(), t.stopPropagation()), i;
                            }
                        }, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f));
                    });
                }

                function y(t, e, n, i, r) {
                    var o = l(t);
                    (e || "").split(/\s/).forEach(function (e) {
                        h(t, e, n, i).forEach(function (e) {
                            delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
                        });
                    });
                }

                function j(e, i) {
                    return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function (t, n) {
                        var r = i[t];
                        e[t] = function () {
                            return this[n] = x, r && r.apply(i, arguments);
                        }, e[n] = b;
                    }), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e;
                }

                function S(t) {
                    var e,
                        i = {
                            originalEvent: t
                        };
                    for (e in t) {
                        w.test(e) || t[e] === n || (i[e] = t[e]);
                    }
                    return j(i, t);
                }
                var n,
                    e = 1,
                    i = Array.prototype.slice,
                    r = t.isFunction,
                    o = function o(t) {
                        return "string" == typeof t;
                    },
                    s = {},
                    a = {},
                    u = "onfocusin" in window,
                    f = {
                        focus: "focusin",
                        blur: "focusout"
                    },
                    c = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
                    add: v,
                    remove: y
                }, t.proxy = function (e, n) {
                    var s = 2 in arguments && i.call(arguments, 2);
                    if (r(e)) {
                        var a = function a() {
                            return e.apply(n, s ? s.concat(i.call(arguments)) : arguments);
                        };
                        return a._zid = l(e), a;
                    }
                    if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
                    throw new TypeError("expected function");
                }, t.fn.bind = function (t, e, n) {
                    return this.on(t, e, n);
                }, t.fn.unbind = function (t, e) {
                    return this.off(t, e);
                }, t.fn.one = function (t, e, n, i) {
                    return this.on(t, e, n, i, 1);
                };
                var x = function x() {
                    return !0;
                },
                    b = function b() {
                        return !1;
                    },
                    w = /^([A-Z]|returnValue$|layer[XY]$)/,
                    E = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                t.fn.delegate = function (t, e, n) {
                    return this.on(e, t, n);
                }, t.fn.undelegate = function (t, e, n) {
                    return this.off(e, t, n);
                }, t.fn.live = function (e, n) {
                    return t(document.body).delegate(this.selector, e, n), this;
                }, t.fn.die = function (e, n) {
                    return t(document.body).undelegate(this.selector, e, n), this;
                }, t.fn.on = function (e, s, a, u, f) {
                    var c,
                        l,
                        h = this;
                    return e && !o(e) ? (t.each(e, function (t, e) {
                        h.on(t, s, a, e, f);
                    }), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function (n, r) {
                        f && (c = function c(t) {
                            return y(r, t.type, u), u.apply(this, arguments);
                        }), s && (l = function l(e) {
                            var n,
                                o = t(e.target).closest(s, r).get(0);
                            return o && o !== r ? (n = t.extend(S(e), {
                                currentTarget: o,
                                liveFired: r
                            }), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0;
                        }), v(r, e, u, a, s, l || c);
                    }));
                }, t.fn.off = function (e, i, s) {
                    var a = this;
                    return e && !o(e) ? (t.each(e, function (t, e) {
                        a.off(t, i, e);
                    }), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function () {
                        y(this, e, s, i);
                    }));
                }, t.fn.trigger = function (e, n) {
                    return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function () {
                        "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n);
                    });
                }, t.fn.triggerHandler = function (e, n) {
                    var i, r;
                    return this.each(function (s, a) {
                        i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function (t, e) {
                            return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0;
                        });
                    }), r;
                }, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
                    t.fn[e] = function (t) {
                        return t ? this.bind(e, t) : this.trigger(e);
                    };
                }), ["focus", "blur"].forEach(function (e) {
                    t.fn[e] = function (t) {
                        return t ? this.bind(e, t) : this.each(function () {
                            try {
                                this[e]();
                            } catch (t) {}
                        }), this;
                    };
                }), t.Event = function (t, e) {
                    o(t) || (e = t, t = e.type);
                    var n = document.createEvent(a[t] || "Events"),
                        i = !0;
                    if (e)
                        for (var r in e) {
                            "bubbles" == r ? i = !!e[r] : n[r] = e[r];
                        }
                    return n.initEvent(t, i, !0), j(n);
                };
            }(Zepto),
                function (t) {
                function l(e, n, i) {
                    var r = t.Event(n);
                    return t(e).trigger(r, i), !r.isDefaultPrevented();
                }

                function h(t, e, i, r) {
                    return t.global ? l(e || n, i, r) : void 0;
                }

                function p(e) {
                    e.global && 0 === t.active++ && h(e, null, "ajaxStart");
                }

                function d(e) {
                    e.global && !--t.active && h(e, null, "ajaxStop");
                }

                function m(t, e) {
                    var n = e.context;
                    return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e]);
                }

                function g(t, e, n, i) {
                    var r = n.context,
                        o = "success";
                    n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), h(n, r, "ajaxSuccess", [e, n, t]), y(o, e, n);
                }

                function v(t, e, n, i, r) {
                    var o = i.context;
                    i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), h(i, o, "ajaxError", [n, i, t || e]), y(e, n, i);
                }

                function y(t, e, n) {
                    var i = n.context;
                    n.complete.call(i, e, t), h(n, i, "ajaxComplete", [e, n]), d(n);
                }

                function x() {}

                function b(t) {
                    return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text";
                }

                function w(t, e) {
                    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
                }

                function E(e) {
                    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data), e.data = void 0);
                }

                function j(e, n, i, r) {
                    return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                        url: e,
                        data: n,
                        success: i,
                        dataType: r
                    };
                }

                function T(e, n, i, r) {
                    var o,
                        s = t.isArray(n),
                        a = t.isPlainObject(n);
                    t.each(n, function (n, u) {
                        o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? T(e, u, i, n) : e.add(n, u);
                    });
                }
                var i,
                    r,
                    e = 0,
                    n = window.document,
                    o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    s = /^(?:text|application)\/javascript/i,
                    a = /^(?:text|application)\/xml/i,
                    u = "application/json",
                    f = "text/html",
                    c = /^\s*$/;
                t.active = 0, t.ajaxJSONP = function (i, r) {
                    if (!("type" in i)) return t.ajax(i);
                    var f,
                        h,
                        o = i.jsonpCallback,
                        s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
                        a = n.createElement("script"),
                        u = window[s],
                        c = function c(e) {
                            t(a).triggerHandler("error", e || "abort");
                        },
                        l = {
                            abort: c
                        };
                    return r && r.promise(l), t(a).on("load error", function (e, n) {
                        clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0;
                    }), m(l, i) === !1 ? (c("abort"), l) : (window[s] = function () {
                        f = arguments;
                    }, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function () {
                        c("timeout");
                    }, i.timeout)), l);
                }, t.ajaxSettings = {
                    type: "GET",
                    beforeSend: x,
                    success: x,
                    error: x,
                    complete: x,
                    context: null,
                    global: !0,
                    xhr: function xhr() {
                        return new window.XMLHttpRequest();
                    },
                    accepts: {
                        script: "text/javascript, application/javascript, application/x-javascript",
                        json: u,
                        xml: "application/xml, text/xml",
                        html: f,
                        text: "text/plain"
                    },
                    crossDomain: !1,
                    timeout: 0,
                    processData: !0,
                    cache: !0
                }, t.ajax = function (e) {
                    var n = t.extend({}, e || {}),
                        o = t.Deferred && t.Deferred();
                    for (i in t.ajaxSettings) {
                        void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
                    }
                    p(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), E(n);
                    var s = n.dataType,
                        a = /\?.+=\?/.test(n.url);
                    if (a && (s = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != s && "jsonp" != s) || (n.url = w(n.url, "_=" + Date.now())), "jsonp" == s) return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, o);
                    var j,
                        u = n.accepts[s],
                        f = {},
                        l = function l(t, e) {
                            f[t.toLowerCase()] = [t, e];
                        },
                        h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol,
                        d = n.xhr(),
                        y = d.setRequestHeader;
                    if (o && o.promise(d), n.crossDomain || l("X-Requested-With", "XMLHttpRequest"), l("Accept", u || "*/*"), (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]), d.overrideMimeType && d.overrideMimeType(u)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
                        for (r in n.headers) {
                            l(r, n.headers[r]);
                        }
                    if (d.setRequestHeader = l, d.onreadystatechange = function () {
                        if (4 == d.readyState) {
                            d.onreadystatechange = x, clearTimeout(j);
                            var e,
                                i = !1;
                            if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                                s = s || b(n.mimeType || d.getResponseHeader("content-type")), e = d.responseText;
                                try {
                                    "script" == s ? (1, eval)(e) : "xml" == s ? e = d.responseXML : "json" == s && (e = c.test(e) ? null : t.parseJSON(e));
                                } catch (r) {
                                    i = r;
                                }
                                i ? v(i, "parsererror", d, n, o) : g(e, d, n, o);
                            } else v(d.statusText || null, d.status ? "error" : "abort", d, n, o);
                        }
                    }, m(d, n) === !1) return d.abort(), v(null, "abort", d, n, o), d;
                    if (n.xhrFields)
                        for (r in n.xhrFields) {
                            d[r] = n.xhrFields[r];
                        }
                    var S = "async" in n ? n.async : !0;
                    d.open(n.type, n.url, S, n.username, n.password);
                    for (r in f) {
                        y.apply(d, f[r]);
                    }
                    return n.timeout > 0 && (j = setTimeout(function () {
                        d.onreadystatechange = x, d.abort(), v(null, "timeout", d, n, o);
                    }, n.timeout)), d.send(n.data ? n.data : null), d;
                }, t.get = function () {
                    return t.ajax(j.apply(null, arguments));
                }, t.post = function () {
                    var e = j.apply(null, arguments);
                    return e.type = "POST", t.ajax(e);
                }, t.getJSON = function () {
                    var e = j.apply(null, arguments);
                    return e.dataType = "json", t.ajax(e);
                }, t.fn.load = function (e, n, i) {
                    if (!this.length) return this;
                    var a,
                        r = this,
                        s = e.split(/\s/),
                        u = j(e, n, i),
                        f = u.success;
                    return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function (e) {
                        r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments);
                    }, t.ajax(u), this;
                };
                var S = encodeURIComponent;
                t.param = function (t, e) {
                    var n = [];
                    return n.add = function (t, e) {
                        this.push(S(t) + "=" + S(e));
                    }, T(n, t, e), n.join("&").replace(/%20/g, "+");
                };
            }(Zepto),
                function (t) {
                t.fn.serializeArray = function () {
                    var n,
                        e = [];
                    return t([].slice.call(this.get(0).elements)).each(function () {
                        n = t(this);
                        var i = n.attr("type");
                        "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != i && "reset" != i && "button" != i && ("radio" != i && "checkbox" != i || this.checked) && e.push({
                            name: n.attr("name"),
                            value: n.val()
                        });
                    }), e;
                }, t.fn.serialize = function () {
                    var t = [];
                    return this.serializeArray().forEach(function (e) {
                        t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value));
                    }), t.join("&");
                }, t.fn.submit = function (e) {
                    if (e) this.bind("submit", e);
                    else if (this.length) {
                        var n = t.Event("submit");
                        this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit();
                    }
                    return this;
                };
            }(Zepto),
                function (t) {
                "__proto__" in {} || t.extend(t.zepto, {
                    Z: function Z(e, n) {
                        return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e;
                    },
                    isZ: function isZ(e) {
                        return "array" === t.type(e) && "__Z" in e;
                    }
                });
                try {
                    getComputedStyle(void 0);
                } catch (e) {
                    var n = getComputedStyle;
                    window.getComputedStyle = function (t) {
                        try {
                            return n(t);
                        } catch (e) {
                            return null;
                        }
                    };
                }
            }(Zepto);

            window.Zepto = Zepto;
            window.$ === undefined && (window.$ = Zepto);
            (function ($) {
                var _zid = 1,
                    undefined,
                        slice = Array.prototype.slice,
                        isFunction = $.isFunction,
                        isString = function isString(obj) {
                        return typeof obj == 'string';
                    },
                        handlers = {},
                        specialEvents = {},
                        focusinSupported = 'onfocusin' in window,
                        focus = {
                        focus: 'focusin',
                        blur: 'focusout'
                    },
                        hover = {
                        mouseenter: 'mouseover',
                        mouseleave: 'mouseout'
                    };

                specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

                function zid(element) {
                    return element._zid || (element._zid = _zid++);
                }

                function findHandlers(element, event, fn, selector) {
                    event = parse(event);
                    if (event.ns) var matcher = matcherFor(event.ns);
                    return (handlers[zid(element)] || []).filter(function (handler) {
                        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
                    });
                }

                function parse(event) {
                    var parts = ('' + event).split('.');
                    return {
                        e: parts[0],
                        ns: parts.slice(1).sort().join(' ')
                    };
                }

                function matcherFor(ns) {
                    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)');
                }

                function eventCapture(handler, captureSetting) {
                    return handler.del && !focusinSupported && handler.e in focus || !!captureSetting;
                }

                function realEvent(type) {
                    return hover[type] || focusinSupported && focus[type] || type;
                }

                function add(element, events, fn, data, selector, delegator, capture) {
                    var id = zid(element),
                        set = handlers[id] || (handlers[id] = []);
                    events.split(/\s/).forEach(function (event) {
                        if (event == 'ready') return $(document).ready(fn);
                        var handler = parse(event);
                        handler.fn = fn;
                        handler.sel = selector;

                        if (handler.e in hover) fn = function fn(e) {
                            var related = e.relatedTarget;
                            if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
                        };
                        handler.del = delegator;
                        var callback = delegator || fn;
                        handler.proxy = function (e) {
                            e = compatible(e);
                            if (e.isImmediatePropagationStopped()) return;
                            e.data = data;
                            var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
                            if (result === false) e.preventDefault(), e.stopPropagation();
                            return result;
                        };
                        handler.i = set.length;
                        set.push(handler);
                        if ('addEventListener' in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
                    });
                }

                function remove(element, events, fn, selector, capture) {
                    var id = zid(element);
                    (events || '').split(/\s/).forEach(function (event) {
                        findHandlers(element, event, fn, selector).forEach(function (handler) {
                            delete handlers[id][handler.i];
                            if ('removeEventListener' in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
                        });
                    });
                }

                $.event = {
                    add: add,
                    remove: remove
                };

                $.proxy = function (fn, context) {
                    var args = 2 in arguments && slice.call(arguments, 2);
                    if (isFunction(fn)) {
                        var proxyFn = function proxyFn() {
                            return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments);
                        };
                        proxyFn._zid = zid(fn);
                        return proxyFn;
                    } else if (isString(context)) {
                        if (args) {
                            args.unshift(fn[context], fn);
                            return $.proxy.apply(null, args);
                        } else {
                            return $.proxy(fn[context], fn);
                        }
                    } else {
                        throw new TypeError("expected function");
                    }
                };

                $.fn.bind = function (event, data, callback) {
                    return this.on(event, data, callback);
                };
                $.fn.unbind = function (event, callback) {
                    return this.off(event, callback);
                };
                $.fn.one = function (event, selector, data, callback) {
                    return this.on(event, selector, data, callback, 1);
                };

                var returnTrue = function returnTrue() {
                    return true;
                },
                    returnFalse = function returnFalse() {
                        return false;
                    },
                    ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
                    eventMethods = {
                        preventDefault: 'isDefaultPrevented',
                        stopImmediatePropagation: 'isImmediatePropagationStopped',
                        stopPropagation: 'isPropagationStopped'
                    };

                function compatible(event, source) {
                    if (source || !event.isDefaultPrevented) {
                        source || (source = event);

                        $.each(eventMethods, function (name, predicate) {
                            var sourceMethod = source[name];
                            event[name] = function () {
                                this[predicate] = returnTrue;
                                return sourceMethod && sourceMethod.apply(source, arguments);
                            };
                            event[predicate] = returnFalse;
                        });

                        if (source.defaultPrevented !== undefined ? source.defaultPrevented : 'returnValue' in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
                    }
                    return event;
                }

                function createProxy(event) {
                    var key,
                        proxy = {
                            originalEvent: event
                        };
                    for (key in event) {
                        if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
                    }
                    return compatible(proxy, event);
                }

                $.fn.delegate = function (selector, event, callback) {
                    return this.on(event, selector, callback);
                };
                $.fn.undelegate = function (selector, event, callback) {
                    return this.off(event, selector, callback);
                };

                $.fn.live = function (event, callback) {
                    $(document.body).delegate(this.selector, event, callback);
                    return this;
                };
                $.fn.die = function (event, callback) {
                    $(document.body).undelegate(this.selector, event, callback);
                    return this;
                };

                $.fn.on = function (event, selector, data, callback, one) {
                    var autoRemove,
                        delegator,
                        $this = this;
                    if (event && !isString(event)) {
                        $.each(event, function (type, fn) {
                            $this.on(type, selector, data, fn, one);
                        });
                        return $this;
                    }

                    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, data = selector, selector = undefined;
                    if (isFunction(data) || data === false) callback = data, data = undefined;

                    if (callback === false) callback = returnFalse;

                    return $this.each(function (_, element) {
                        if (one) autoRemove = function autoRemove(e) {
                            remove(element, e.type, callback);
                            return callback.apply(this, arguments);
                        };

                        if (selector) delegator = function delegator(e) {
                            var evt,
                                match = $(e.target).closest(selector, element).get(0);
                            if (match && match !== element) {
                                evt = $.extend(createProxy(e), {
                                    currentTarget: match,
                                    liveFired: element
                                });
                                return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)));
                            }
                        };

                        add(element, event, callback, data, selector, delegator || autoRemove);
                    });
                };
                $.fn.off = function (event, selector, callback) {
                    var $this = this;
                    if (event && !isString(event)) {
                        $.each(event, function (type, fn) {
                            $this.off(type, selector, fn);
                        });
                        return $this;
                    }

                    if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, selector = undefined;

                    if (callback === false) callback = returnFalse;

                    return $this.each(function () {
                        remove(this, event, callback, selector);
                    });
                };

                $.fn.trigger = function (event, args) {
                    event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
                    event._args = args;
                    return this.each(function () {
                        if ('dispatchEvent' in this) this.dispatchEvent(event);
                        else $(this).triggerHandler(event, args);
                    });
                };

                $.fn.triggerHandler = function (event, args) {
                    var e, result;
                    this.each(function (i, element) {
                        e = createProxy(isString(event) ? $.Event(event) : event);
                        e._args = args;
                        e.target = element;
                        $.each(findHandlers(element, event.type || event), function (i, handler) {
                            result = handler.proxy(e);
                            if (e.isImmediatePropagationStopped()) return false;
                        });
                    });
                    return result;
                };
                ('focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select keydown keypress keyup error').split(' ').forEach(function (event) {
                    $.fn[event] = function (callback) {
                        return callback ? this.bind(event, callback) : this.trigger(event);
                    };
                });
                ['focus', 'blur'].forEach(function (name) {
                    $.fn[name] = function (callback) {
                        if (callback) this.bind(name, callback);
                        else this.each(function () {
                            try {
                                this[name]();
                            } catch (e) {}
                        });
                        return this;
                    };
                });

                $.Event = function (type, props) {
                    if (!isString(type)) props = type, type = props.type;
                    var event = document.createEvent(specialEvents[type] || 'Events'),
                        bubbles = true;
                    if (props)
                        for (var name in props) {
                            name == 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
                        }
                    event.initEvent(type, bubbles, true);
                    return compatible(event);
                };
            })(Zepto);
            (function ($) {
                var jsonpID = 0,
                    document = window.document,
                    key,
                    name,
                    rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                    scriptTypeRE = /^(?:text|application)\/javascript/i,
                    xmlTypeRE = /^(?:text|application)\/xml/i,
                    jsonType = 'application/json',
                    htmlType = 'text/html',
                    blankRE = /^\s*$/;

                function triggerAndReturn(context, eventName, data) {
                    var event = $.Event(eventName);
                    $(context).trigger(event, data);
                    return !event.isDefaultPrevented();
                }

                function triggerGlobal(settings, context, eventName, data) {
                    if (settings.global) return triggerAndReturn(context || document, eventName, data);
                }

                $.active = 0;

                function ajaxStart(settings) {
                    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
                }

                function ajaxStop(settings) {
                    if (settings.global && !--$.active) triggerGlobal(settings, null, 'ajaxStop');
                }

                function ajaxBeforeSend(xhr, settings) {
                    var context = settings.context;
                    if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;

                    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
                }

                function ajaxSuccess(data, xhr, settings, deferred) {
                    var context = settings.context,
                        status = 'success';
                    settings.success.call(context, data, status, xhr);
                    if (deferred) deferred.resolveWith(context, [data, status, xhr]);
                    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
                    ajaxComplete(status, xhr, settings);
                }

                function ajaxError(error, type, xhr, settings, deferred) {
                    var context = settings.context;
                    settings.error.call(context, xhr, type, error);
                    if (deferred) deferred.rejectWith(context, [xhr, type, error]);
                    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
                    ajaxComplete(type, xhr, settings);
                }

                function ajaxComplete(status, xhr, settings) {
                    var context = settings.context;
                    settings.complete.call(context, xhr, status);
                    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
                    ajaxStop(settings);
                }

                function empty() {}

                $.ajaxJSONP = function (options, deferred) {
                    if (!('type' in options)) return $.ajax(options);

                    var _callbackName = options.jsonpCallback,
                        callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID,
                        script = document.createElement('script'),
                        originalCallback = window[callbackName],
                        responseData,
                        abort = function abort(errorType) {
                            $(script).triggerHandler('error', errorType || 'abort');
                        },
                        xhr = {
                            abort: abort
                        },
                        abortTimeout;

                    if (deferred) deferred.promise(xhr);

                    $(script).on('load error', function (e, errorType) {
                        clearTimeout(abortTimeout);
                        $(script).off().remove();

                        if (e.type == 'error' || !responseData) {
                            ajaxError(null, errorType || 'error', xhr, options, deferred);
                        } else {
                            ajaxSuccess(responseData[0], xhr, options, deferred);
                        }

                        window[callbackName] = originalCallback;
                        if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);

                        originalCallback = responseData = undefined;
                    });

                    if (ajaxBeforeSend(xhr, options) === false) {
                        abort('abort');
                        return xhr;
                    }

                    window[callbackName] = function () {
                        responseData = arguments;
                    };

                    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
                    document.head.appendChild(script);

                    if (options.timeout > 0) abortTimeout = setTimeout(function () {
                        abort('timeout');
                    }, options.timeout);

                    return xhr;
                };

                $.ajaxSettings = {
                    type: 'GET',

                    beforeSend: empty,

                    success: empty,

                    error: empty,

                    complete: empty,

                    context: null,

                    global: true,

                    xhr: function xhr() {
                        return new window.XMLHttpRequest();
                    },

                    accepts: {
                        script: 'text/javascript, application/javascript, application/x-javascript',
                        json: jsonType,
                        xml: 'application/xml, text/xml',
                        html: htmlType,
                        text: 'text/plain'
                    },

                    crossDomain: false,

                    timeout: 0,

                    processData: true,

                    cache: true
                };

                function mimeToDataType(mime) {
                    if (mime) mime = mime.split(';', 2)[0];
                    return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
                }

                function appendQuery(url, query) {
                    if (query == '') return url;
                    return (url + '&' + query).replace(/[&?]{1,2}/, '?');
                }

                function serializeData(options) {
                    if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
                    if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data), options.data = undefined;
                }

                $.ajax = function (options) {
                    var settings = $.extend({}, options || {}),
                        deferred = $.Deferred && $.Deferred();
                    for (key in $.ajaxSettings) {
                        if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
                    }
                    ajaxStart(settings);

                    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;

                    if (!settings.url) settings.url = window.location.toString();
                    serializeData(settings);

                    var dataType = settings.dataType,
                        hasPlaceholder = /\?.+=\?/.test(settings.url);
                    if (hasPlaceholder) dataType = 'jsonp';

                    if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());

                    if ('jsonp' == dataType) {
                        if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
                        return $.ajaxJSONP(settings, deferred);
                    }

                    var mime = settings.accepts[dataType],
                        headers = {},
                        setHeader = function setHeader(name, value) {
                            headers[name.toLowerCase()] = [name, value];
                        },
                        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
                        xhr = settings.xhr(),
                        nativeSetHeader = xhr.setRequestHeader,
                        abortTimeout;

                    if (deferred) deferred.promise(xhr);

                    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
                    setHeader('Accept', mime || '*/*');
                    if (mime = settings.mimeType || mime) {
                        if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
                        xhr.overrideMimeType && xhr.overrideMimeType(mime);
                    }
                    if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');

                    if (settings.headers)
                        for (name in settings.headers) {
                            setHeader(name, settings.headers[name]);
                        }
                    xhr.setRequestHeader = setHeader;

                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4) {
                            xhr.onreadystatechange = empty;
                            clearTimeout(abortTimeout);
                            var result,
                                error = false;
                            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
                                dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
                                result = xhr.responseText;

                                try {
                                    if (dataType == 'script')(1, eval)(result);
                                    else if (dataType == 'xml') result = xhr.responseXML;
                                    else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result);
                                } catch (e) {
                                    error = e;
                                }

                                if (error) ajaxError(error, 'parsererror', xhr, settings, deferred);
                                else ajaxSuccess(result, xhr, settings, deferred);
                            } else {
                                ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred);
                            }
                        }
                    };

                    if (ajaxBeforeSend(xhr, settings) === false) {
                        xhr.abort();
                        ajaxError(null, 'abort', xhr, settings, deferred);
                        return xhr;
                    }

                    if (settings.xhrFields)
                        for (name in settings.xhrFields) {
                            xhr[name] = settings.xhrFields[name];
                        }
                    var async = 'async' in settings ? settings.async : true;
                    xhr.open(settings.type, settings.url, async, settings.username, settings.password);

                    for (name in headers) {
                        nativeSetHeader.apply(xhr, headers[name]);
                    }
                    if (settings.timeout > 0) abortTimeout = setTimeout(function () {
                        xhr.onreadystatechange = empty;
                        xhr.abort();
                        ajaxError(null, 'timeout', xhr, settings, deferred);
                    }, settings.timeout);

                    xhr.send(settings.data ? settings.data : null);
                    return xhr;
                };

                function parseArguments(url, data, success, dataType) {
                    if ($.isFunction(data)) dataType = success, success = data, data = undefined;
                    if (!$.isFunction(success)) dataType = success, success = undefined;
                    return {
                        url: url,
                        data: data,
                        success: success,
                        dataType: dataType
                    };
                }

                $.get = function () {
                    return $.ajax(parseArguments.apply(null, arguments));
                };

                $.post = function () {
                    var options = parseArguments.apply(null, arguments);
                    options.type = 'POST';
                    return $.ajax(options);
                };

                $.getJSON = function () {
                    var options = parseArguments.apply(null, arguments);
                    options.dataType = 'json';
                    return $.ajax(options);
                };

                $.fn.load = function (url, data, success) {
                    if (!this.length) return this;
                    var self = this,
                        parts = url.split(/\s/),
                        selector,
                        options = parseArguments(url, data, success),
                        callback = options.success;
                    if (parts.length > 1) options.url = parts[0], selector = parts[1];
                    options.success = function (response) {
                        self.html(selector ? $('<div>').html(response.replace(rscript, "")).find(selector) : response);
                        callback && callback.apply(self, arguments);
                    };
                    $.ajax(options);
                    return this;
                };

                var escape = encodeURIComponent;

                function serialize(params, obj, traditional, scope) {
                    var type,
                        array = $.isArray(obj),
                        hash = $.isPlainObject(obj);
                    $.each(obj, function (key, value) {
                        type = $.type(value);
                        if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';

                        if (!scope && array) params.add(value.name, value.value);
                        else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key);
                        else params.add(key, value);
                    });
                }

                $.param = function (obj, traditional) {
                    var params = [];
                    params.add = function (k, v) {
                        this.push(escape(k) + '=' + escape(v));
                    };
                    serialize(params, obj, traditional);
                    return params.join('&').replace(/%20/g, '+');
                };
            })(Zepto);
            (function ($) {
                $.fn.serializeArray = function () {
                    var result = [],
                        el;
                    $([].slice.call(this.get(0).elements)).each(function () {
                        el = $(this);
                        var type = el.attr('type');
                        if (this.nodeName.toLowerCase() != 'fieldset' && !this.disabled && type != 'submit' && type != 'reset' && type != 'button' && (type != 'radio' && type != 'checkbox' || this.checked)) result.push({
                            name: el.attr('name'),
                            value: el.val()
                        });
                    });
                    return result;
                };

                $.fn.serialize = function () {
                    var result = [];
                    this.serializeArray().forEach(function (elm) {
                        result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value));
                    });
                    return result.join('&');
                };

                $.fn.submit = function (callback) {
                    if (callback) this.bind('submit', callback);
                    else if (this.length) {
                        var event = $.Event('submit');
                        this.eq(0).trigger(event);
                        if (!event.isDefaultPrevented()) this.get(0).submit();
                    }
                    return this;
                };
            })(Zepto);
            (function ($) {
                if (!('__proto__' in {})) {
                    $.extend($.zepto, {
                        Z: function Z(dom, selector) {
                            dom = dom || [];
                            $.extend(dom, $.fn);
                            dom.selector = selector || '';
                            dom.__Z = true;
                            return dom;
                        },

                        isZ: function isZ(object) {
                            return $.type(object) === 'array' && '__Z' in object;
                        }
                    });
                }

                try {
                    getComputedStyle(undefined);
                } catch (e) {
                    var nativeGetComputedStyle = getComputedStyle;
                    window.getComputedStyle = function (element) {
                        try {
                            return nativeGetComputedStyle(element);
                        } catch (e) {
                            return null;
                        }
                    };
                }
            })(Zepto);

            (function ($) {
                function detect(ua) {
                    var os = this.os = {},
                        browser = this.browser = {},
                        webkit = ua.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                        android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
                        osx = !!ua.match(/\(Macintosh\; Intel /),
                        ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
                        ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
                        iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
                        webos = ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                        wp = ua.match(/Windows Phone ([\d.]+)/),
                        touchpad = webos && ua.match(/TouchPad/),
                        kindle = ua.match(/Kindle\/([\d.]+)/),
                        silk = ua.match(/Silk\/([\d._]+)/),
                        blackberry = ua.match(/(BlackBerry).*Version\/([\d.]+)/),
                        bb10 = ua.match(/(BB10).*Version\/([\d.]+)/),
                        rimtabletos = ua.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                        playbook = ua.match(/PlayBook/),
                        chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
                        firefox = ua.match(/Firefox\/([\d.]+)/),
                        ie = ua.match(/MSIE\s([\d.]+)/) || ua.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                        webview = !chrome && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                        safari = webview || ua.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);

                    if (browser.webkit = !!webkit) browser.version = webkit[1];

                    if (android) os.android = true, os.version = android[2];
                    if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
                    if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
                    if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
                    if (wp) os.wp = true, os.version = wp[1];
                    if (webos) os.webos = true, os.version = webos[2];
                    if (touchpad) os.touchpad = true;
                    if (blackberry) os.blackberry = true, os.version = blackberry[2];
                    if (bb10) os.bb10 = true, os.version = bb10[2];
                    if (rimtabletos) os.rimtabletos = true, os.version = rimtabletos[2];
                    if (playbook) browser.playbook = true;
                    if (kindle) os.kindle = true, os.version = kindle[1];
                    if (silk) browser.silk = true, browser.version = silk[1];
                    if (!silk && os.android && ua.match(/Kindle Fire/)) browser.silk = true;
                    if (chrome) browser.chrome = true, browser.version = chrome[1];
                    if (firefox) browser.firefox = true, browser.version = firefox[1];
                    if (ie) browser.ie = true, browser.version = ie[1];
                    if (safari && (osx || os.ios)) {
                        browser.safari = true;
                        if (osx) browser.version = safari[1];
                    }
                    if (webview) browser.webview = true;

                    os.tablet = !!(ipad || playbook || android && !ua.match(/Mobile/) || firefox && ua.match(/Tablet/) || ie && !ua.match(/Phone/) && ua.match(/Touch/));
                    os.phone = !!(!os.tablet && !os.ipod && (android || iphone || webos || blackberry || bb10 || chrome && ua.match(/Android/) || chrome && ua.match(/CriOS\/([\d.]+)/) || firefox && ua.match(/Mobile/) || ie && ua.match(/Touch/)));
                }

                detect.call($, navigator.userAgent);

                $.__detect = detect;
            })(Zepto);

            (function ($) {
                var zepto = $.zepto,
                    oldQsa = zepto.qsa,
                    oldMatches = zepto.matches;

                function _visible(elem) {
                    elem = $(elem);
                    return !!(elem.width() || elem.height()) && elem.css("display") !== "none";
                }

                var filters = $.expr[':'] = {
                    visible: function visible() {
                        if (_visible(this)) return this;
                    },
                    hidden: function hidden() {
                        if (!_visible(this)) return this;
                    },
                    selected: function selected() {
                        if (this.selected) return this;
                    },
                    checked: function checked() {
                        if (this.checked) return this;
                    },
                    parent: function parent() {
                        return this.parentNode;
                    },
                    first: function first(idx) {
                        if (idx === 0) return this;
                    },
                    last: function last(idx, nodes) {
                        if (idx === nodes.length - 1) return this;
                    },
                    eq: function eq(idx, _, value) {
                        if (idx === value) return this;
                    },
                    contains: function contains(idx, _, text) {
                        if ($(this).text().indexOf(text) > -1) return this;
                    },
                    has: function has(idx, _, sel) {
                        if (zepto.qsa(this, sel).length) return this;
                    }
                };

                var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
                    childRe = /^\s*>/,
                    classTag = 'Zepto' + +new Date();

                function process(sel, fn) {
                    sel = sel.replace(/=#\]/g, '="#"]');
                    var filter,
                        arg,
                        match = filterRe.exec(sel);
                    if (match && match[2] in filters) {
                        filter = filters[match[2]], arg = match[3];
                        sel = match[1];
                        if (arg) {
                            var num = Number(arg);
                            if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '');
                            else arg = num;
                        }
                    }
                    return fn(sel, filter, arg);
                }

                zepto.qsa = function (node, selector) {
                    return process(selector, function (sel, filter, arg) {
                        try {
                            var taggedParent;
                            if (!sel && filter) sel = '*';
                            else if (childRe.test(sel)) taggedParent = $(node).addClass(classTag), sel = '.' + classTag + ' ' + sel;

                            var nodes = oldQsa(node, sel);
                        } catch (e) {
                            console.error('error performing selector: %o', selector);
                            throw e;
                        } finally {
                            if (taggedParent) taggedParent.removeClass(classTag);
                        }
                        return !filter ? nodes : zepto.uniq($.map(nodes, function (n, i) {
                            return filter.call(n, i, nodes, arg);
                        }));
                    });
                };

                zepto.matches = function (node, selector) {
                    return process(selector, function (sel, filter, arg) {
                        return (!sel || oldMatches(node, sel)) && (!filter || filter.call(node, null, arg) === node);
                    });
                };
            })(Zepto);

            ;;
            (function ($) {
                var touch = {},
                    touchTimeout,
                    tapTimeout,
                    swipeTimeout,
                    longTapTimeout,
                    longTapDelay = 750,
                    gesture;

                function swipeDirection(x1, x2, y1, y2) {
                    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
                }

                function longTap() {
                    longTapTimeout = null;
                    if (touch.last) {
                        touch.el.trigger('longTap');
                        touch = {};
                    }
                }

                function cancelLongTap() {
                    if (longTapTimeout) clearTimeout(longTapTimeout);
                    longTapTimeout = null;
                }

                function cancelAll() {
                    if (touchTimeout) clearTimeout(touchTimeout);
                    if (tapTimeout) clearTimeout(tapTimeout);
                    if (swipeTimeout) clearTimeout(swipeTimeout);
                    if (longTapTimeout) clearTimeout(longTapTimeout);
                    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
                    touch = {};
                }

                function isPrimaryTouch(event) {
                    return (event.pointerType == 'touch' || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
                }

                function isPointerEventType(e, type) {
                    return e.type == 'pointer' + type || e.type.toLowerCase() == 'mspointer' + type;
                }

                $(document).ready(function () {
                    var now,
                        delta,
                        deltaX = 0,
                        deltaY = 0,
                        firstTouch,
                        _isPointerType;

                    if ('MSGesture' in window) {
                        gesture = new MSGesture();
                        gesture.target = document.body;
                    }

                    $(document).bind('MSGestureEnd', function (e) {
                        var swipeDirectionFromVelocity = e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
                        if (swipeDirectionFromVelocity) {
                            touch.el.trigger('swipe');
                            touch.el.trigger('swipe' + swipeDirectionFromVelocity);
                        }
                    }).on('touchstart MSPointerDown pointerdown', function (e) {
                        if ((_isPointerType = isPointerEventType(e, 'down')) && !isPrimaryTouch(e)) return;
                        firstTouch = _isPointerType ? e : e.touches[0];
                        if (e.touches && e.touches.length === 1 && touch.x2) {
                            touch.x2 = undefined;
                            touch.y2 = undefined;
                        }
                        now = Date.now();
                        delta = now - (touch.last || now);
                        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
                        touchTimeout && clearTimeout(touchTimeout);
                        touch.x1 = firstTouch.pageX;
                        touch.y1 = firstTouch.pageY;
                        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
                        touch.last = now;
                        longTapTimeout = setTimeout(longTap, longTapDelay);

                        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
                    }).on('touchmove MSPointerMove pointermove', function (e) {
                        if ((_isPointerType = isPointerEventType(e, 'move')) && !isPrimaryTouch(e)) return;
                        firstTouch = _isPointerType ? e : e.touches[0];
                        cancelLongTap();
                        touch.x2 = firstTouch.pageX;
                        touch.y2 = firstTouch.pageY;

                        deltaX += Math.abs(touch.x1 - touch.x2);
                        deltaY += Math.abs(touch.y1 - touch.y2);
                    }).on('touchend MSPointerUp pointerup', function (e) {
                        if ((_isPointerType = isPointerEventType(e, 'up')) && !isPrimaryTouch(e)) return;
                        cancelLongTap();

                        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function () {
                            if (touch.el) {
                                touch.el.trigger('swipe');
                                touch.el.trigger('swipe' + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                            }
                            touch = {};
                        }, 0);
                        else if ('last' in touch)
                            if (deltaX < 30 && deltaY < 30) {
                                tapTimeout = setTimeout(function () {
                                    var event = $.Event('tap');
                                    event.cancelTouch = cancelAll;

                                    if (touch.el) touch.el.trigger(event);

                                    if (touch.isDoubleTap) {
                                        if (touch.el) touch.el.trigger('doubleTap');
                                        touch = {};
                                    } else {
                                        touchTimeout = setTimeout(function () {
                                            touchTimeout = null;
                                            if (touch.el) touch.el.trigger('singleTap');
                                            touch = {};
                                        }, 250);
                                    }
                                }, 0);
                            } else {
                                touch = {};
                            }
                        deltaX = deltaY = 0;
                    }).on('touchcancel MSPointerCancel pointercancel', cancelAll);

                    $(window).on('scroll', cancelAll);
                });
                ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function (eventName) {
                    $.fn[eventName] = function (callback) {
                        return this.on(eventName, callback);
                    };
                });
            })(Zepto);
            (function ($) {
                var cache = [],
                    timeout;

                $.fn.remove = function () {
                    return this.each(function () {
                        if (this.parentNode) {
                            if (this.tagName === 'IMG') {
                                cache.push(this);
                                this.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
                                if (timeout) clearTimeout(timeout);
                                timeout = setTimeout(function () {
                                    cache = [];
                                }, 60000);
                            }
                            this.parentNode.removeChild(this);
                        }
                    });
                };
            })(Zepto);

            ;
            (function ($, undefined) {
                var prefix = '',
                    eventPrefix,
                    endEventName,
                    endAnimationName,
                    vendors = {
                        Webkit: 'webkit',
                        Moz: '',
                        O: 'o'
                    },
                    document = window.document,
                    testEl = document.createElement('div'),
                    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                    transform,
                    transitionProperty,
                    transitionDuration,
                    transitionTiming,
                    transitionDelay,
                    animationName,
                    animationDuration,
                    animationTiming,
                    animationDelay,
                    cssReset = {};

                function dasherize(str) {
                    return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
                }

                function normalizeEvent(name) {
                    return eventPrefix ? eventPrefix + name : name.toLowerCase();
                }

                $.each(vendors, function (vendor, event) {
                    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
                        prefix = '-' + vendor.toLowerCase() + '-';
                        eventPrefix = event;
                        return false;
                    }
                });

                transform = prefix + 'transform';
                cssReset[transitionProperty = prefix + 'transition-property'] = cssReset[transitionDuration = prefix + 'transition-duration'] = cssReset[transitionDelay = prefix + 'transition-delay'] = cssReset[transitionTiming = prefix + 'transition-timing-function'] = cssReset[animationName = prefix + 'animation-name'] = cssReset[animationDuration = prefix + 'animation-duration'] = cssReset[animationDelay = prefix + 'animation-delay'] = cssReset[animationTiming = prefix + 'animation-timing-function'] = '';

                $.fx = {
                    off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
                    speeds: {
                        _default: 400,
                        fast: 200,
                        slow: 600
                    },
                    cssPrefix: prefix,
                    transitionEnd: normalizeEvent('TransitionEnd'),
                    animationEnd: normalizeEvent('AnimationEnd')
                };

                $.fn.animate = function (properties, duration, ease, callback, delay) {
                    if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
                    if ($.isFunction(ease)) callback = ease, ease = undefined;
                    if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration;
                    if (duration) duration = (typeof duration == 'number' ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1000;
                    if (delay) delay = parseFloat(delay) / 1000;
                    return this.anim(properties, duration, ease, callback, delay);
                };

                $.fn.anim = function (properties, duration, ease, callback, delay) {
                    var key,
                        cssValues = {},
                        cssProperties,
                        transforms = '',
                        that = this,
                        _wrappedCallback,
                        endEvent = $.fx.transitionEnd,
                        fired = false;

                    if (duration === undefined) duration = $.fx.speeds._default / 1000;
                    if (delay === undefined) delay = 0;
                    if ($.fx.off) duration = 0;

                    if (typeof properties == 'string') {
                        cssValues[animationName] = properties;
                        cssValues[animationDuration] = duration + 's';
                        cssValues[animationDelay] = delay + 's';
                        cssValues[animationTiming] = ease || 'linear';
                        endEvent = $.fx.animationEnd;
                    } else {
                        cssProperties = [];

                        for (key in properties) {
                            if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') ';
                            else cssValues[key] = properties[key], cssProperties.push(dasherize(key));
                        }
                        if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
                        if (duration > 0 && (typeof properties === "undefined" ? "undefined" : (0, _typeof3.default)(properties)) === 'object') {
                            cssValues[transitionProperty] = cssProperties.join(', ');
                            cssValues[transitionDuration] = duration + 's';
                            cssValues[transitionDelay] = delay + 's';
                            cssValues[transitionTiming] = ease || 'linear';
                        }
                    }

                    _wrappedCallback = function wrappedCallback(event) {
                        if (typeof event !== 'undefined') {
                            if (event.target !== event.currentTarget) return;
                            $(event.target).unbind(endEvent, _wrappedCallback);
                        } else $(this).unbind(endEvent, _wrappedCallback);

                        fired = true;
                        $(this).css(cssReset);
                        callback && callback.call(this);
                    };
                    if (duration > 0) {
                        this.bind(endEvent, _wrappedCallback);

                        setTimeout(function () {
                            if (fired) return;
                            _wrappedCallback.call(that);
                        }, duration * 1000 + 25);
                    }

                    this.size() && this.get(0).clientLeft;

                    this.css(cssValues);

                    if (duration <= 0) setTimeout(function () {
                        that.each(function () {
                            _wrappedCallback.call(this);
                        });
                    }, 0);

                    return this;
                };

                testEl = null;
            })(Zepto);

            ;
            (function ($, undefined) {
                var document = window.document,
                    docElem = document.documentElement,
                    origShow = $.fn.show,
                    origHide = $.fn.hide,
                    origToggle = $.fn.toggle;

                function anim(el, speed, opacity, scale, callback) {
                    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined;
                    var props = {
                        opacity: opacity
                    };
                    if (scale) {
                        props.scale = scale;
                        el.css($.fx.cssPrefix + 'transform-origin', '0 0');
                    }
                    return el.animate(props, speed, null, callback);
                }

                function hide(el, speed, scale, callback) {
                    return anim(el, speed, 0, scale, function () {
                        origHide.call($(this));
                        callback && callback.call(this);
                    });
                }

                $.fn.show = function (speed, callback) {
                    origShow.call(this);
                    if (speed === undefined) speed = 0;
                    else this.css('opacity', 0);
                    return anim(this, speed, 1, '1,1', callback);
                };

                $.fn.hide = function (speed, callback) {
                    if (speed === undefined) return origHide.call(this);
                    else return hide(this, speed, '0,0', callback);
                };

                $.fn.toggle = function (speed, callback) {
                    if (speed === undefined || typeof speed == 'boolean') return origToggle.call(this, speed);
                    else return this.each(function () {
                        var el = $(this);
                        el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback);
                    });
                };

                $.fn.fadeTo = function (speed, opacity, callback) {
                    return anim(this, speed, opacity, null, callback);
                };

                $.fn.fadeIn = function (speed, callback) {
                    var target = this.css('opacity');
                    if (target > 0) this.css('opacity', 0);
                    else target = 1;
                    return origShow.call(this).fadeTo(speed, target, callback);
                };

                $.fn.fadeOut = function (speed, callback) {
                    return hide(this, speed, null, callback);
                };

                $.fn.fadeToggle = function (speed, callback) {
                    return this.each(function () {
                        var el = $(this);
                        el[el.css('opacity') == 0 || el.css('display') == 'none' ? 'fadeIn' : 'fadeOut'](speed, callback);
                    });
                };
            })(Zepto);

            return Zepto;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        /***/
    }),
    /* 22 */
    /***/
    (function (module, exports) {

        /* WEBPACK VAR INJECTION */
        (function (global) {
            "use strict";

            var $jscomp = {
                scope: {},
                getGlobal: function getGlobal(a) {
                    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global ? global : a;
                }
            };
            var global = $jscomp.getGlobal(undefined);
            (function (global) {
                var time = Date.now || function () {
                    return +new Date();
                };
                var desiredFrames = 60;
                var millisecondsPerSecond = 1000;
                var running = {};
                var counter = 1;

                if (!global.core) {
                    global.core = {
                        effect: {}
                    };
                } else if (!core.effect) {
                    core.effect = {};
                }

                core.effect.Animate = {
                    requestAnimationFrame: function () {
                        var requestFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame;
                        var isNative = !!requestFrame;

                        if (requestFrame && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(requestFrame.toString())) {
                            isNative = false;
                        }

                        if (isNative) {
                            return function (callback, root) {
                                requestFrame(callback, root);
                            };
                        }

                        var TARGET_FPS = 60;
                        var requests = {};
                        var requestCount = 0;
                        var rafHandle = 1;
                        var intervalHandle = null;
                        var lastActive = +new Date();

                        return function (callback, root) {
                            var callbackHandle = rafHandle++;

                            requests[callbackHandle] = callback;
                            requestCount++;

                            if (intervalHandle === null) {

                                intervalHandle = setInterval(function () {

                                    var time = +new Date();
                                    var currentRequests = requests;

                                    requests = {};
                                    requestCount = 0;

                                    for (var key in currentRequests) {
                                        if (currentRequests.hasOwnProperty(key)) {
                                            currentRequests[key](time);
                                            lastActive = time;
                                        }
                                    }

                                    if (time - lastActive > 2500) {
                                        clearInterval(intervalHandle);
                                        intervalHandle = null;
                                    }
                                }, 1000 / TARGET_FPS);
                            }

                            return callbackHandle;
                        };
                    }(),

                    stop: function stop(id) {
                        var cleared = running[id] != null;
                        if (cleared) {
                            running[id] = null;
                        }

                        return cleared;
                    },

                    isRunning: function isRunning(id) {
                        return running[id] != null;
                    },

                    start: function start(stepCallback, verifyCallback, completedCallback, duration, easingMethod, root) {

                        var start = time();
                        var lastFrame = start;
                        var percent = 0;
                        var dropCounter = 0;
                        var id = counter++;

                        if (!root) {
                            root = document.body;
                        }

                        if (id % 20 === 0) {
                            var newRunning = {};
                            for (var usedId in running) {
                                newRunning[usedId] = true;
                            }
                            running = newRunning;
                        }

                        var step = function step(virtual) {
                            var render = virtual !== true;

                            var now = time();

                            if (!running[id] || verifyCallback && !verifyCallback(id)) {

                                running[id] = null;
                                completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, false);
                                return;
                            }

                            if (render) {

                                var droppedFrames = Math.round((now - lastFrame) / (millisecondsPerSecond / desiredFrames)) - 1;
                                for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
                                    step(true);
                                    dropCounter++;
                                }
                            }

                            if (duration) {
                                percent = (now - start) / duration;
                                if (percent > 1) {
                                    percent = 1;
                                }
                            }

                            var value = easingMethod ? easingMethod(percent) : percent;
                            if ((stepCallback(value, now, render) === false || percent === 1) && render) {
                                running[id] = null;
                                completedCallback && completedCallback(desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond), id, percent === 1 || duration == null);
                            } else if (render) {
                                lastFrame = now;
                                core.effect.Animate.requestAnimationFrame(step, root);
                            }
                        };

                        running[id] = true;

                        core.effect.Animate.requestAnimationFrame(step, root);

                        return id;
                    }
                };
            })(global);
            /* WEBPACK VAR INJECTION */
        }.call(exports, (function () {
            return this;
        }())))

        /***/
    }),
    /* 23 */
    /***/
    (function (module, exports) {

        'use strict';

        var EasyScroller = function EasyScroller(content, options) {

            this.content = content;
            this.container = content.parentNode;
            this.options = options || {};

            var that = this;
            this.scroller = new Scroller(function (left, top, zoom) {
                that.render(left, top, zoom);
            }, options);

            this.bindEvents();

            this.content.style[EasyScroller.vendorPrefix + 'TransformOrigin'] = "left top";

            this.reflow();
        };

        EasyScroller.prototype.render = function () {

            var docStyle = document.documentElement.style;

            var engine;
            if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
                engine = 'presto';
            } else if ('MozAppearance' in docStyle) {
                engine = 'gecko';
            } else if ('WebkitAppearance' in docStyle) {
                engine = 'webkit';
            } else if (typeof navigator.cpuClass === 'string') {
                engine = 'trident';
            }

            var vendorPrefix = EasyScroller.vendorPrefix = {
                trident: 'ms',
                gecko: 'Moz',
                webkit: 'Webkit',
                presto: 'O'
            }[engine];

            var helperElem = document.createElement("div");
            var undef;

            var perspectiveProperty = vendorPrefix + "Perspective";
            var transformProperty = vendorPrefix + "Transform";

            if (helperElem.style[perspectiveProperty] !== undef) {

                return function (left, top, zoom) {
                    this.content.style[transformProperty] = 'translate3d(' + -left + 'px,' + -top + 'px,0) scale(' + zoom + ')';
                };
            } else if (helperElem.style[transformProperty] !== undef) {

                return function (left, top, zoom) {
                    this.content.style[transformProperty] = 'translate(' + -left + 'px,' + -top + 'px) scale(' + zoom + ')';
                };
            } else {

                return function (left, top, zoom) {
                    this.content.style.marginLeft = left ? -left / zoom + 'px' : '';
                    this.content.style.marginTop = top ? -top / zoom + 'px' : '';
                    this.content.style.zoom = zoom || '';
                };
            }
        }();

        EasyScroller.prototype.reflow = function () {
            this.scroller.setDimensions(this.container.clientWidth, this.container.clientHeight, this.content.offsetWidth, this.content.offsetHeight);

            var rect = this.container.getBoundingClientRect();
            this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);
        };

        EasyScroller.prototype.bindEvents = function () {

            var that = this;

            window.addEventListener("resize", function () {
                that.reflow();
            }, false);

            if ('ontouchstart' in window) {

                this.container.addEventListener("touchstart", function (e) {
                    if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                        return;
                    }

                    that.reflow();

                    that.scroller.doTouchStart(e.touches, e.timeStamp);
                }, false);

                this.container.addEventListener("touchmove", function (e) {
                    e.preventDefault();
                    that.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
                }, false);

                this.container.addEventListener("touchend", function (e) {
                    that.scroller.doTouchEnd(e.timeStamp);
                }, false);

                this.container.addEventListener("touchcancel", function (e) {
                    that.scroller.doTouchEnd(e.timeStamp);
                }, false);
            } else {

                var mousedown = false;

                this.container.addEventListener("mousedown", function (e) {

                    if (e.target.tagName.match(/input|textarea|select/i)) {
                        return;
                    }

                    that.scroller.doTouchStart([{
                        pageX: e.pageX,
                        pageY: e.pageY
                    }], e.timeStamp);

                    mousedown = true;

                    that.reflow();

                    e.preventDefault();
                }, false);

                document.addEventListener("mousemove", function (e) {

                    if (!mousedown) {
                        return;
                    }

                    that.scroller.doTouchMove([{
                        pageX: e.pageX,
                        pageY: e.pageY
                    }], e.timeStamp);

                    mousedown = true;
                }, false);

                document.addEventListener("mouseup", function (e) {

                    if (!mousedown) {
                        return;
                    }

                    that.scroller.doTouchEnd(e.timeStamp);

                    mousedown = false;
                }, false);

                this.container.addEventListener("mousewheel", function (e) {
                    if (that.options.zooming) {
                        that.scroller.doMouseZoom(e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
                        e.preventDefault();
                    }
                }, false);
            }
        };

        document.addEventListener("DOMContentLoaded", function () {

            var elements = document.querySelectorAll('[data-scrollable],[data-zoomable]'),
                element;
            for (var i = 0; i < elements.length; i++) {

                element = elements[i];
                var scrollable = element.attributes.getNamedItem('data-scrollable') ? element.attributes.getNamedItem('data-scrollable').value : null;
                var zoomable = element.attributes.getNamedItem('data-zoomable') ? element.attributes.getNamedItem('data-zoomable').value : '';
                var zoomOptions = zoomable.split('-');
                var minZoom = zoomOptions.length > 1 && parseFloat(zoomOptions[0]);
                var maxZoom = zoomOptions.length > 1 && parseFloat(zoomOptions[1]);

                new EasyScroller(element, {
                    scrollingX: scrollable === 'true' || scrollable === 'x',
                    scrollingY: scrollable === 'true' || scrollable === 'y',
                    zooming: zoomable === 'true' || zoomOptions.length > 1,
                    minZoom: minZoom,
                    maxZoom: maxZoom
                });
            };
        }, false);

        /***/
    }),
    /* 24 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';

        __webpack_require__(22);
        __webpack_require__(23);

        var Scroller;

        var NOOP = function NOOP() {};

        Scroller = function Scroller(callback, options) {

            this.__callback = callback;

            this.options = {
                scrollingX: true,

                scrollingY: true,

                animating: true,

                animationDuration: 250,

                bouncing: true,

                locking: true,

                paging: false,

                snapping: false,

                zooming: false,

                minZoom: 0.5,

                maxZoom: 3,

                speedMultiplier: 1,

                scrollingComplete: NOOP,

                penetrationDeceleration: 0.03,

                penetrationAcceleration: 0.08

            };

            for (var key in options) {
                this.options[key] = options[key];
            }
        };

        var easeOutCubic = function easeOutCubic(pos) {
            return Math.pow(pos - 1, 3) + 1;
        };

        var easeInOutCubic = function easeInOutCubic(pos) {
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 3);
            }

            return 0.5 * (Math.pow(pos - 2, 3) + 2);
        };

        var members = {
            __isSingleTouch: false,

            __isTracking: false,

            __didDecelerationComplete: false,

            __isGesturing: false,

            __isDragging: false,

            __isDecelerating: false,

            __isAnimating: false,

            __clientLeft: 0,

            __clientTop: 0,

            __clientWidth: 0,

            __clientHeight: 0,

            __contentWidth: 0,

            __contentHeight: 0,

            __snapWidth: 100,

            __snapHeight: 100,

            __refreshHeight: null,

            __refreshActive: false,

            __refreshActivate: null,

            __refreshDeactivate: null,

            __refreshStart: null,

            __zoomLevel: 1,

            __scrollLeft: 0,

            __scrollTop: 0,

            __maxScrollLeft: 0,

            __maxScrollTop: 0,

            __scheduledLeft: 0,

            __scheduledTop: 0,

            __scheduledZoom: 0,

            __lastTouchLeft: null,

            __lastTouchTop: null,

            __lastTouchMove: null,

            __positions: null,

            __minDecelerationScrollLeft: null,

            __minDecelerationScrollTop: null,

            __maxDecelerationScrollLeft: null,

            __maxDecelerationScrollTop: null,

            __decelerationVelocityX: null,

            __decelerationVelocityY: null,

            setDimensions: function setDimensions(clientWidth, clientHeight, contentWidth, contentHeight) {

                var self = this;

                if (clientWidth === +clientWidth) {
                    self.__clientWidth = clientWidth;
                }

                if (clientHeight === +clientHeight) {
                    self.__clientHeight = clientHeight;
                }

                if (contentWidth === +contentWidth) {
                    self.__contentWidth = contentWidth;
                }

                if (contentHeight === +contentHeight) {
                    self.__contentHeight = contentHeight;
                }

                self.__computeScrollMax();

                self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
            },

            setPosition: function setPosition(left, top) {

                var self = this;

                self.__clientLeft = left || 0;
                self.__clientTop = top || 0;
            },

            setSnapSize: function setSnapSize(width, height) {

                var self = this;

                self.__snapWidth = width;
                self.__snapHeight = height;
            },

            activatePullToRefresh: function activatePullToRefresh(height, activateCallback, deactivateCallback, startCallback) {

                var self = this;

                self.__refreshHeight = height;
                self.__refreshActivate = activateCallback;
                self.__refreshDeactivate = deactivateCallback;
                self.__refreshStart = startCallback;
            },

            triggerPullToRefresh: function triggerPullToRefresh() {
                this.__publish(this.__scrollLeft, -this.__refreshHeight, this.__zoomLevel, true);

                if (this.__refreshStart) {
                    this.__refreshStart();
                }
            },

            finishPullToRefresh: function finishPullToRefresh() {

                var self = this;

                self.__refreshActive = false;
                if (self.__refreshDeactivate) {
                    self.__refreshDeactivate();
                }

                self.scrollTo(self.__scrollLeft, self.__scrollTop, true);
            },

            getValues: function getValues() {

                var self = this;

                return {
                    left: self.__scrollLeft,
                    top: self.__scrollTop,
                    zoom: self.__zoomLevel
                };
            },

            getScrollMax: function getScrollMax() {

                var self = this;

                return {
                    left: self.__maxScrollLeft,
                    top: self.__maxScrollTop
                };
            },

            zoomTo: function zoomTo(level, animate, originLeft, originTop, callback) {

                var self = this;

                if (!self.options.zooming) {
                    throw new Error("Zooming is not enabled!");
                }

                if (callback) {
                    self.__zoomComplete = callback;
                }

                if (self.__isDecelerating) {
                    core.effect.Animate.stop(self.__isDecelerating);
                    self.__isDecelerating = false;
                }

                var oldLevel = self.__zoomLevel;

                if (originLeft == null) {
                    originLeft = self.__clientWidth / 2;
                }

                if (originTop == null) {
                    originTop = self.__clientHeight / 2;
                }

                level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

                self.__computeScrollMax(level);

                var left = (originLeft + self.__scrollLeft) * level / oldLevel - originLeft;
                var top = (originTop + self.__scrollTop) * level / oldLevel - originTop;

                if (left > self.__maxScrollLeft) {
                    left = self.__maxScrollLeft;
                } else if (left < 0) {
                    left = 0;
                }

                if (top > self.__maxScrollTop) {
                    top = self.__maxScrollTop;
                } else if (top < 0) {
                    top = 0;
                }

                self.__publish(left, top, level, animate);
            },

            zoomBy: function zoomBy(factor, animate, originLeft, originTop, callback) {

                var self = this;

                self.zoomTo(self.__zoomLevel * factor, animate, originLeft, originTop, callback);
            },

            scrollTo: function scrollTo(left, top, animate, zoom) {

                var self = this;

                if (self.__isDecelerating) {
                    core.effect.Animate.stop(self.__isDecelerating);
                    self.__isDecelerating = false;
                }

                if (zoom != null && zoom !== self.__zoomLevel) {

                    if (!self.options.zooming) {
                        throw new Error("Zooming is not enabled!");
                    }

                    left *= zoom;
                    top *= zoom;

                    self.__computeScrollMax(zoom);
                } else {
                    zoom = self.__zoomLevel;
                }

                if (!self.options.scrollingX) {

                    left = self.__scrollLeft;
                } else {

                    if (self.options.paging) {
                        left = Math.round(left / self.__clientWidth) * self.__clientWidth;
                    } else if (self.options.snapping) {
                        left = Math.round(left / self.__snapWidth) * self.__snapWidth;
                    }
                }

                if (!self.options.scrollingY) {

                    top = self.__scrollTop;
                } else {

                    if (self.options.paging) {
                        top = Math.round(top / self.__clientHeight) * self.__clientHeight;
                    } else if (self.options.snapping) {
                        top = Math.round(top / self.__snapHeight) * self.__snapHeight;
                    }
                }

                left = Math.max(Math.min(self.__maxScrollLeft, left), 0);
                top = Math.max(Math.min(self.__maxScrollTop, top), 0);

                if (left === self.__scrollLeft && top === self.__scrollTop) {
                    animate = false;
                }

                if (!self.__isTracking) {
                    self.__publish(left, top, zoom, animate);
                }
            },

            scrollBy: function scrollBy(left, top, animate) {

                var self = this;

                var startLeft = self.__isAnimating ? self.__scheduledLeft : self.__scrollLeft;
                var startTop = self.__isAnimating ? self.__scheduledTop : self.__scrollTop;

                self.scrollTo(startLeft + (left || 0), startTop + (top || 0), animate);
            },

            doMouseZoom: function doMouseZoom(wheelDelta, timeStamp, pageX, pageY) {

                var self = this;
                var change = wheelDelta > 0 ? 0.97 : 1.03;

                return self.zoomTo(self.__zoomLevel * change, false, pageX - self.__clientLeft, pageY - self.__clientTop);
            },

            doTouchStart: function doTouchStart(touches, timeStamp) {
                if (touches.length == null) {
                    throw new Error("Invalid touch list: " + touches);
                }

                if (timeStamp instanceof Date) {
                    timeStamp = timeStamp.valueOf();
                }
                if (typeof timeStamp !== "number") {
                    throw new Error("Invalid timestamp value: " + timeStamp);
                }

                var self = this;

                self.__interruptedAnimation = true;

                if (self.__isDecelerating) {
                    core.effect.Animate.stop(self.__isDecelerating);
                    self.__isDecelerating = false;
                    self.__interruptedAnimation = true;
                }

                if (self.__isAnimating) {
                    core.effect.Animate.stop(self.__isAnimating);
                    self.__isAnimating = false;
                    self.__interruptedAnimation = true;
                }

                var currentTouchLeft, currentTouchTop;
                var isSingleTouch = touches.length === 1;
                if (isSingleTouch) {
                    currentTouchLeft = touches[0].pageX;
                    currentTouchTop = touches[0].pageY;
                } else {
                    currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
                    currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
                }

                self.__initialTouchLeft = currentTouchLeft;
                self.__initialTouchTop = currentTouchTop;

                self.__zoomLevelStart = self.__zoomLevel;

                self.__lastTouchLeft = currentTouchLeft;
                self.__lastTouchTop = currentTouchTop;

                self.__lastTouchMove = timeStamp;

                self.__lastScale = 1;

                self.__enableScrollX = !isSingleTouch && self.options.scrollingX;
                self.__enableScrollY = !isSingleTouch && self.options.scrollingY;

                self.__isTracking = true;

                self.__didDecelerationComplete = false;

                self.__isDragging = !isSingleTouch;

                self.__isSingleTouch = isSingleTouch;

                self.__positions = [];
            },

            doTouchMove: function doTouchMove(touches, timeStamp, scale) {
                if (touches.length == null) {
                    throw new Error("Invalid touch list: " + touches);
                }

                if (timeStamp instanceof Date) {
                    timeStamp = timeStamp.valueOf();
                }
                if (typeof timeStamp !== "number") {
                    throw new Error("Invalid timestamp value: " + timeStamp);
                }

                var self = this;

                if (!self.__isTracking) {
                    return;
                }

                var currentTouchLeft, currentTouchTop;

                if (touches.length === 2) {
                    currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2;
                    currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2;
                } else {
                    currentTouchLeft = touches[0].pageX;
                    currentTouchTop = touches[0].pageY;
                }

                var positions = self.__positions;

                if (self.__isDragging) {
                    var moveX = currentTouchLeft - self.__lastTouchLeft;
                    var moveY = currentTouchTop - self.__lastTouchTop;

                    var scrollLeft = self.__scrollLeft;
                    var scrollTop = self.__scrollTop;
                    var level = self.__zoomLevel;

                    if (scale != null && self.options.zooming) {

                        var oldLevel = level;

                        level = level / self.__lastScale * scale;

                        level = Math.max(Math.min(level, self.options.maxZoom), self.options.minZoom);

                        if (oldLevel !== level) {
                            var currentTouchLeftRel = currentTouchLeft - self.__clientLeft;
                            var currentTouchTopRel = currentTouchTop - self.__clientTop;

                            scrollLeft = (currentTouchLeftRel + scrollLeft) * level / oldLevel - currentTouchLeftRel;
                            scrollTop = (currentTouchTopRel + scrollTop) * level / oldLevel - currentTouchTopRel;

                            self.__computeScrollMax(level);
                        }
                    }

                    if (self.__enableScrollX) {

                        scrollLeft -= moveX * this.options.speedMultiplier;
                        var maxScrollLeft = self.__maxScrollLeft;

                        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
                            if (self.options.bouncing) {

                                scrollLeft += moveX / 2 * this.options.speedMultiplier;
                            } else if (scrollLeft > maxScrollLeft) {

                                scrollLeft = maxScrollLeft;
                            } else {

                                scrollLeft = 0;
                            }
                        }
                    }

                    if (self.__enableScrollY) {

                        scrollTop -= moveY * this.options.speedMultiplier;
                        var maxScrollTop = self.__maxScrollTop;

                        if (scrollTop > maxScrollTop || scrollTop < 0) {
                            if (self.options.bouncing) {

                                scrollTop += moveY / 2 * this.options.speedMultiplier;

                                if (!self.__enableScrollX && self.__refreshHeight != null) {

                                    if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {

                                        self.__refreshActive = true;
                                        if (self.__refreshActivate) {
                                            self.__refreshActivate();
                                        }
                                    } else if (self.__refreshActive && scrollTop > -self.__refreshHeight) {

                                        self.__refreshActive = false;
                                        if (self.__refreshDeactivate) {
                                            self.__refreshDeactivate();
                                        }
                                    }
                                }
                            } else if (scrollTop > maxScrollTop) {

                                scrollTop = maxScrollTop;
                            } else {

                                scrollTop = 0;
                            }
                        }
                    }

                    if (positions.length > 60) {
                        positions.splice(0, 30);
                    }

                    positions.push(scrollLeft, scrollTop, timeStamp);

                    self.__publish(scrollLeft, scrollTop, level);
                } else {

                    var minimumTrackingForScroll = self.options.locking ? 3 : 0;
                    var minimumTrackingForDrag = 5;

                    var distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft);
                    var distanceY = Math.abs(currentTouchTop - self.__initialTouchTop);

                    self.__enableScrollX = self.options.scrollingX && distanceX >= minimumTrackingForScroll;
                    self.__enableScrollY = self.options.scrollingY && distanceY >= minimumTrackingForScroll;

                    positions.push(self.__scrollLeft, self.__scrollTop, timeStamp);

                    self.__isDragging = (self.__enableScrollX || self.__enableScrollY) && (distanceX >= minimumTrackingForDrag || distanceY >= minimumTrackingForDrag);
                    if (self.__isDragging) {
                        self.__interruptedAnimation = false;
                    }
                }

                self.__lastTouchLeft = currentTouchLeft;
                self.__lastTouchTop = currentTouchTop;
                self.__lastTouchMove = timeStamp;
                self.__lastScale = scale;
            },

            doTouchEnd: function doTouchEnd(timeStamp) {

                if (timeStamp instanceof Date) {
                    timeStamp = timeStamp.valueOf();
                }
                if (typeof timeStamp !== "number") {
                    throw new Error("Invalid timestamp value: " + timeStamp);
                }

                var self = this;

                if (!self.__isTracking) {
                    return;
                }

                self.__isTracking = false;

                if (self.__isDragging) {
                    self.__isDragging = false;

                    if (self.__isSingleTouch && self.options.animating && timeStamp - self.__lastTouchMove <= 100) {
                        var positions = self.__positions;
                        var endPos = positions.length - 1;
                        var startPos = endPos;

                        for (var i = endPos; i > 0 && positions[i] > self.__lastTouchMove - 100; i -= 3) {
                            startPos = i;
                        }

                        if (startPos !== endPos) {
                            var timeOffset = positions[endPos] - positions[startPos];
                            var movedLeft = self.__scrollLeft - positions[startPos - 2];
                            var movedTop = self.__scrollTop - positions[startPos - 1];

                            self.__decelerationVelocityX = movedLeft / timeOffset * (1000 / 60);
                            self.__decelerationVelocityY = movedTop / timeOffset * (1000 / 60);

                            var minVelocityToStartDeceleration = self.options.paging || self.options.snapping ? 4 : 1;

                            if (Math.abs(self.__decelerationVelocityX) > minVelocityToStartDeceleration || Math.abs(self.__decelerationVelocityY) > minVelocityToStartDeceleration) {
                                if (!self.__refreshActive) {
                                    self.__startDeceleration(timeStamp);
                                }
                            } else {
                                self.options.scrollingComplete();
                            }
                        } else {
                            self.options.scrollingComplete();
                        }
                    } else if (timeStamp - self.__lastTouchMove > 100) {
                        self.options.scrollingComplete();
                    }
                }

                if (!self.__isDecelerating) {

                    if (self.__refreshActive && self.__refreshStart) {
                        self.__publish(self.__scrollLeft, -self.__refreshHeight, self.__zoomLevel, true);

                        if (self.__refreshStart) {
                            self.__refreshStart();
                        }
                    } else {

                        if (self.__interruptedAnimation || self.__isDragging) {
                            self.options.scrollingComplete();
                        }
                        self.scrollTo(self.__scrollLeft, self.__scrollTop, true, self.__zoomLevel);

                        if (self.__refreshActive) {

                            self.__refreshActive = false;
                            if (self.__refreshDeactivate) {
                                self.__refreshDeactivate();
                            }
                        }
                    }
                }

                self.__positions.length = 0;
            },

            __publish: function __publish(left, top, zoom, animate) {

                var self = this;

                var wasAnimating = self.__isAnimating;
                if (wasAnimating) {
                    core.effect.Animate.stop(wasAnimating);
                    self.__isAnimating = false;
                }

                if (animate && self.options.animating) {
                    self.__scheduledLeft = left;
                    self.__scheduledTop = top;
                    self.__scheduledZoom = zoom;

                    var oldLeft = self.__scrollLeft;
                    var oldTop = self.__scrollTop;
                    var oldZoom = self.__zoomLevel;

                    var diffLeft = left - oldLeft;
                    var diffTop = top - oldTop;
                    var diffZoom = zoom - oldZoom;

                    var step = function step(percent, now, render) {

                        if (render) {

                            self.__scrollLeft = oldLeft + diffLeft * percent;
                            self.__scrollTop = oldTop + diffTop * percent;
                            self.__zoomLevel = oldZoom + diffZoom * percent;

                            if (self.__callback) {
                                self.__callback(self.__scrollLeft, self.__scrollTop, self.__zoomLevel);
                            }
                        }
                    };

                    var verify = function verify(id) {
                        return self.__isAnimating === id;
                    };

                    var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
                        if (animationId === self.__isAnimating) {
                            self.__isAnimating = false;
                        }
                        if (self.__didDecelerationComplete || wasFinished) {
                            self.options.scrollingComplete();
                        }

                        if (self.options.zooming) {
                            self.__computeScrollMax();
                            if (self.__zoomComplete) {
                                self.__zoomComplete();
                                self.__zoomComplete = null;
                            }
                        }
                    };

                    self.__isAnimating = core.effect.Animate.start(step, verify, completed, self.options.animationDuration, wasAnimating ? easeOutCubic : easeInOutCubic);
                } else {

                    self.__scheduledLeft = self.__scrollLeft = left;
                    self.__scheduledTop = self.__scrollTop = top;
                    self.__scheduledZoom = self.__zoomLevel = zoom;

                    if (self.__callback) {
                        self.__callback(left, top, zoom);
                    }

                    if (self.options.zooming) {
                        self.__computeScrollMax();
                        if (self.__zoomComplete) {
                            self.__zoomComplete();
                            self.__zoomComplete = null;
                        }
                    }
                }
            },

            __computeScrollMax: function __computeScrollMax(zoomLevel) {

                var self = this;

                if (zoomLevel == null) {
                    zoomLevel = self.__zoomLevel;
                }

                self.__maxScrollLeft = Math.max(self.__contentWidth * zoomLevel - self.__clientWidth, 0);
                self.__maxScrollTop = Math.max(self.__contentHeight * zoomLevel - self.__clientHeight, 0);
            },

            __startDeceleration: function __startDeceleration(timeStamp) {

                var self = this;

                if (self.options.paging) {

                    var scrollLeft = Math.max(Math.min(self.__scrollLeft, self.__maxScrollLeft), 0);
                    var scrollTop = Math.max(Math.min(self.__scrollTop, self.__maxScrollTop), 0);
                    var clientWidth = self.__clientWidth;
                    var clientHeight = self.__clientHeight;

                    self.__minDecelerationScrollLeft = Math.floor(scrollLeft / clientWidth) * clientWidth;
                    self.__minDecelerationScrollTop = Math.floor(scrollTop / clientHeight) * clientHeight;
                    self.__maxDecelerationScrollLeft = Math.ceil(scrollLeft / clientWidth) * clientWidth;
                    self.__maxDecelerationScrollTop = Math.ceil(scrollTop / clientHeight) * clientHeight;
                } else {

                    self.__minDecelerationScrollLeft = 0;
                    self.__minDecelerationScrollTop = 0;
                    self.__maxDecelerationScrollLeft = self.__maxScrollLeft;
                    self.__maxDecelerationScrollTop = self.__maxScrollTop;
                }

                var step = function step(percent, now, render) {
                    self.__stepThroughDeceleration(render);
                };

                var minVelocityToKeepDecelerating = self.options.snapping ? 4 : 0.001;

                var verify = function verify() {
                    var shouldContinue = Math.abs(self.__decelerationVelocityX) >= minVelocityToKeepDecelerating || Math.abs(self.__decelerationVelocityY) >= minVelocityToKeepDecelerating;
                    if (!shouldContinue) {
                        self.__didDecelerationComplete = true;
                    }
                    return shouldContinue;
                };

                var completed = function completed(renderedFramesPerSecond, animationId, wasFinished) {
                    self.__isDecelerating = false;
                    if (self.__didDecelerationComplete) {
                        self.options.scrollingComplete();
                    }

                    self.scrollTo(self.__scrollLeft, self.__scrollTop, self.options.snapping);
                };

                self.__isDecelerating = core.effect.Animate.start(step, verify, completed);
            },

            __stepThroughDeceleration: function __stepThroughDeceleration(render) {

                var self = this;

                var scrollLeft = self.__scrollLeft + self.__decelerationVelocityX;
                var scrollTop = self.__scrollTop + self.__decelerationVelocityY;

                if (!self.options.bouncing) {

                    var scrollLeftFixed = Math.max(Math.min(self.__maxDecelerationScrollLeft, scrollLeft), self.__minDecelerationScrollLeft);
                    if (scrollLeftFixed !== scrollLeft) {
                        scrollLeft = scrollLeftFixed;
                        self.__decelerationVelocityX = 0;
                    }

                    var scrollTopFixed = Math.max(Math.min(self.__maxDecelerationScrollTop, scrollTop), self.__minDecelerationScrollTop);
                    if (scrollTopFixed !== scrollTop) {
                        scrollTop = scrollTopFixed;
                        self.__decelerationVelocityY = 0;
                    }
                }

                if (render) {

                    self.__publish(scrollLeft, scrollTop, self.__zoomLevel);
                } else {

                    self.__scrollLeft = scrollLeft;
                    self.__scrollTop = scrollTop;
                }

                if (!self.options.paging) {
                    var frictionFactor = 0.95;

                    self.__decelerationVelocityX *= frictionFactor;
                    self.__decelerationVelocityY *= frictionFactor;
                }

                if (self.options.bouncing) {

                    var scrollOutsideX = 0;
                    var scrollOutsideY = 0;

                    var penetrationDeceleration = self.options.penetrationDeceleration;
                    var penetrationAcceleration = self.options.penetrationAcceleration;

                    if (scrollLeft < self.__minDecelerationScrollLeft) {
                        scrollOutsideX = self.__minDecelerationScrollLeft - scrollLeft;
                    } else if (scrollLeft > self.__maxDecelerationScrollLeft) {
                        scrollOutsideX = self.__maxDecelerationScrollLeft - scrollLeft;
                    }

                    if (scrollTop < self.__minDecelerationScrollTop) {
                        scrollOutsideY = self.__minDecelerationScrollTop - scrollTop;
                    } else if (scrollTop > self.__maxDecelerationScrollTop) {
                        scrollOutsideY = self.__maxDecelerationScrollTop - scrollTop;
                    }

                    if (scrollOutsideX !== 0) {
                        if (scrollOutsideX * self.__decelerationVelocityX <= 0) {
                            self.__decelerationVelocityX += scrollOutsideX * penetrationDeceleration;
                        } else {
                            self.__decelerationVelocityX = scrollOutsideX * penetrationAcceleration;
                        }
                    }

                    if (scrollOutsideY !== 0) {
                        if (scrollOutsideY * self.__decelerationVelocityY <= 0) {
                            self.__decelerationVelocityY += scrollOutsideY * penetrationDeceleration;
                        } else {
                            self.__decelerationVelocityY = scrollOutsideY * penetrationAcceleration;
                        }
                    }
                }
            }
        };

        for (var key in members) {
            Scroller.prototype[key] = members[key];
        }

        module.exports = {
            Scroller: Scroller
        };

        /***/
    }),
    /* 25 */
    /***/
    (function (module, exports, __webpack_require__) {

        module.exports = {
            "default": __webpack_require__(29),
            __esModule: true
        };

        /***/
    }),
    /* 26 */
    /***/
    (function (module, exports, __webpack_require__) {

        module.exports = {
            "default": __webpack_require__(30),
            __esModule: true
        };

        /***/
    }),
    /* 27 */
    /***/
    (function (module, exports, __webpack_require__) {

        module.exports = {
            "default": __webpack_require__(31),
            __esModule: true
        };

        /***/
    }),
    /* 28 */
    /***/
    (function (module, exports, __webpack_require__) {

        "use strict";

        exports.__esModule = true;

        var _iterator = __webpack_require__(27);

        var _iterator2 = _interopRequireDefault(_iterator);

        var _symbol = __webpack_require__(26);

        var _symbol2 = _interopRequireDefault(_symbol);

        var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
        } : function (obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
        };

        /***/
    }),
    /* 29 */
    /***/
    (function (module, exports, __webpack_require__) {

        __webpack_require__(49);
        module.exports = __webpack_require__(3).Object.getPrototypeOf;

        /***/
    }),
    /* 30 */
    /***/
    (function (module, exports, __webpack_require__) {

        __webpack_require__(52);
        __webpack_require__(50);
        module.exports = __webpack_require__(3).Symbol;

        /***/
    }),
    /* 31 */
    /***/
    (function (module, exports, __webpack_require__) {

        __webpack_require__(51);
        __webpack_require__(53);
        module.exports = __webpack_require__(2)('iterator');

        /***/
    }),
    /* 32 */
    /***/
    (function (module, exports) {

        module.exports = function (it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };

        /***/
    }),
    /* 33 */
    /***/
    (function (module, exports) {

        module.exports = function () { /* empty */ };

        /***/
    }),
    /* 34 */
    /***/
    (function (module, exports, __webpack_require__) {

        var isObject = __webpack_require__(40);
        module.exports = function (it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };

        /***/
    }),
    /* 35 */
    /***/
    (function (module, exports, __webpack_require__) {

        // optional / simple context binding
        var aFunction = __webpack_require__(32);
        module.exports = function (fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1:
                    return function (a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function (a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function (a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function ( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };

        /***/
    }),
    /* 36 */
    /***/
    (function (module, exports, __webpack_require__) {

        // all enumerable object keys, includes symbols
        var $ = __webpack_require__(1);
        module.exports = function (it) {
            var keys = $.getKeys(it),
                getSymbols = $.getSymbols;
            if (getSymbols) {
                var symbols = getSymbols(it),
                    isEnum = $.isEnum,
                    i = 0,
                    key;
                while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++])) keys.push(key);
            }
            return keys;
        };

        /***/
    }),
    /* 37 */
    /***/
    (function (module, exports, __webpack_require__) {

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(5),
            getNames = __webpack_require__(1).getNames,
            toString = {}.toString;

        var windowNames = typeof window == 'object' && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function (it) {
            try {
                return getNames(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        module.exports.get = function getOwnPropertyNames(it) {
            if (windowNames && toString.call(it) == '[object Window]') return getWindowNames(it);
            return getNames(toIObject(it));
        };

        /***/
    }),
    /* 38 */
    /***/
    (function (module, exports, __webpack_require__) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(14);
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
            return cof(it) == 'String' ? it.split('') : Object(it);
        };

        /***/
    }),
    /* 39 */
    /***/
    (function (module, exports, __webpack_require__) {

        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(14);
        module.exports = Array.isArray || function (arg) {
            return cof(arg) == 'Array';
        };

        /***/
    }),
    /* 40 */
    /***/
    (function (module, exports) {

        module.exports = function (it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
    }),
    /* 41 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';
        var $ = __webpack_require__(1),
            descriptor = __webpack_require__(12),
            setToStringTag = __webpack_require__(13),
            IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(10)(IteratorPrototype, __webpack_require__(2)('iterator'), function () {
            return this;
        });

        module.exports = function (Constructor, NAME, next) {
            Constructor.prototype = $.create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + ' Iterator');
        };

        /***/
    }),
    /* 42 */
    /***/
    (function (module, exports) {

        module.exports = function (done, value) {
            return {
                value: value,
                done: !!done
            };
        };

        /***/
    }),
    /* 43 */
    /***/
    (function (module, exports, __webpack_require__) {

        var $ = __webpack_require__(1),
            toIObject = __webpack_require__(5);
        module.exports = function (object, el) {
            var O = toIObject(object),
                keys = $.getKeys(O),
                length = keys.length,
                index = 0,
                key;
            while (length > index)
                if (O[key = keys[index++]] === el) return key;
        };

        /***/
    }),
    /* 44 */
    /***/
    (function (module, exports, __webpack_require__) {

        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(7),
            core = __webpack_require__(3),
            fails = __webpack_require__(8);
        module.exports = function (KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY],
                exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function () {
                fn(1);
            }), 'Object', exp);
        };

        /***/
    }),
    /* 45 */
    /***/
    (function (module, exports, __webpack_require__) {

        var toInteger = __webpack_require__(46),
            defined = __webpack_require__(6);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function (TO_STRING) {
            return function (that, pos) {
                var s = String(defined(that)),
                    i = toInteger(pos),
                    l = s.length,
                    a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };

        /***/
    }),
    /* 46 */
    /***/
    (function (module, exports) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil,
            floor = Math.floor;
        module.exports = function (it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
    }),
    /* 47 */
    /***/
    (function (module, exports, __webpack_require__) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(6);
        module.exports = function (it) {
            return Object(defined(it));
        };

        /***/
    }),
    /* 48 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';
        var addToUnscopables = __webpack_require__(33),
            step = __webpack_require__(42),
            Iterators = __webpack_require__(11),
            toIObject = __webpack_require__(5);

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(16)(Array, 'Array', function (iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
            var O = this._t,
                kind = this._k,
                index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == 'keys') return step(0, index);
            if (kind == 'values') return step(0, O[index]);
            return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
    }),
    /* 49 */
    /***/
    (function (module, exports, __webpack_require__) {

        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(47);

        __webpack_require__(44)('getPrototypeOf', function ($getPrototypeOf) {
            return function getPrototypeOf(it) {
                return $getPrototypeOf(toObject(it));
            };
        });

        /***/
    }),
    /* 50 */
    /***/
    (function (module, exports) {



        /***/
    }),
    /* 51 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';
        var $at = __webpack_require__(45)(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(16)(String, 'String', function (iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
            var O = this._t,
                index = this._i,
                point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });

        /***/
    }),
    /* 52 */
    /***/
    (function (module, exports, __webpack_require__) {

        'use strict';
        // ECMAScript 6 symbols shim
        var $ = __webpack_require__(1),
            global = __webpack_require__(4),
            has = __webpack_require__(9),
            DESCRIPTORS = __webpack_require__(15),
            $export = __webpack_require__(7),
            redefine = __webpack_require__(18),
            $fails = __webpack_require__(8),
            shared = __webpack_require__(19),
            setToStringTag = __webpack_require__(13),
            uid = __webpack_require__(20),
            wks = __webpack_require__(2),
            keyOf = __webpack_require__(43),
            $names = __webpack_require__(37),
            enumKeys = __webpack_require__(36),
            isArray = __webpack_require__(39),
            anObject = __webpack_require__(34),
            toIObject = __webpack_require__(5),
            createDesc = __webpack_require__(12),
            getDesc = $.getDesc,
            setDesc = $.setDesc,
            _create = $.create,
            getNames = $names.get,
            $Symbol = global.Symbol,
            $JSON = global.JSON,
            _stringify = $JSON && $JSON.stringify,
            setter = false,
            HIDDEN = wks('_hidden'),
            isEnum = $.isEnum,
            SymbolRegistry = shared('symbol-registry'),
            AllSymbols = shared('symbols'),
            useNative = typeof $Symbol == 'function',
            ObjectProto = Object.prototype;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function () {
            return _create(setDesc({}, 'a', {
                get: function () {
                    return setDesc(this, 'a', {
                        value: 7
                    }).a;
                }
            })).a != 7;
        }) ? function (it, key, D) {
            var protoDesc = getDesc(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            setDesc(it, key, D);
            if (protoDesc && it !== ObjectProto) setDesc(ObjectProto, key, protoDesc);
        } : setDesc;

        var wrap = function (tag) {
            var sym = AllSymbols[tag] = _create($Symbol.prototype);
            sym._k = tag;
            DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
                configurable: true,
                set: function (value) {
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                }
            });
            return sym;
        };

        var isSymbol = function (it) {
            return typeof it == 'symbol';
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (D && has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) setDesc(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, {
                        enumerable: createDesc(0, false)
                    });
                }
                return setSymbolDesc(it, key, D);
            }
            return setDesc(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P)),
                i = 0,
                l = keys.length,
                key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key);
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            var D = getDesc(it = toIObject(it), key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = getNames(toIObject(it)),
                result = [],
                i = 0,
                key;
            while (names.length > i)
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN) result.push(key);
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var names = getNames(toIObject(it)),
                result = [],
                i = 0,
                key;
            while (names.length > i)
                if (has(AllSymbols, key = names[i++])) result.push(AllSymbols[key]);
            return result;
        };
        var $stringify = function stringify(it) {
            if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
            var args = [it],
                i = 1,
                $$ = arguments,
                replacer, $replacer;
            while ($$.length > i) args.push($$[i++]);
            replacer = args[1];
            if (typeof replacer == 'function') $replacer = replacer;
            if ($replacer || !isArray(replacer)) replacer = function (key, value) {
                if ($replacer) value = $replacer.call(this, key, value);
                if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return _stringify.apply($JSON, args);
        };
        var buggyJSON = $fails(function () {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({
                a: S
            }) != '{}' || _stringify(Object(S)) != '{}';
        });

        // 19.4.1.1 Symbol([description])
        if (!useNative) {
            $Symbol = function Symbol() {
                if (isSymbol(this)) throw TypeError('Symbol is not a constructor');
                return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
            };
            redefine($Symbol.prototype, 'toString', function toString() {
                return this._k;
            });

            isSymbol = function (it) {
                return it instanceof $Symbol;
            };

            $.create = $create;
            $.isEnum = $propertyIsEnumerable;
            $.getDesc = $getOwnPropertyDescriptor;
            $.setDesc = $defineProperty;
            $.setDescs = $defineProperties;
            $.getNames = $names.get = $getOwnPropertyNames;
            $.getSymbols = $getOwnPropertySymbols;

            if (DESCRIPTORS && !__webpack_require__(17)) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }
        }

        var symbolStatics = {
            // 19.4.2.1 Symbol.for(key)
            'for': function (key) {
                return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(key) {
                return keyOf(SymbolRegistry, key);
            },
            useSetter: function () {
                setter = true;
            },
            useSimple: function () {
                setter = false;
            }
        };
        // 19.4.2.2 Symbol.hasInstance
        // 19.4.2.3 Symbol.isConcatSpreadable
        // 19.4.2.4 Symbol.iterator
        // 19.4.2.6 Symbol.match
        // 19.4.2.8 Symbol.replace
        // 19.4.2.9 Symbol.search
        // 19.4.2.10 Symbol.species
        // 19.4.2.11 Symbol.split
        // 19.4.2.12 Symbol.toPrimitive
        // 19.4.2.13 Symbol.toStringTag
        // 19.4.2.14 Symbol.unscopables
        $.each.call((
            'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
            'species,split,toPrimitive,toStringTag,unscopables'
        ).split(','), function (it) {
            var sym = wks(it);
            symbolStatics[it] = useNative ? sym : wrap(sym);
        });

        setter = true;

        $export($export.G + $export.W, {
            Symbol: $Symbol
        });

        $export($export.S, 'Symbol', symbolStatics);

        $export($export.S + $export.F * !useNative, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {
            stringify: $stringify
        });

        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol');
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true);

        /***/
    }),
    /* 53 */
    /***/
    (function (module, exports, __webpack_require__) {

        __webpack_require__(48);
        var Iterators = __webpack_require__(11);
        Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

        /***/
    })
    /******/
]);


// WEBPACK FOOTER //
// mystery_story.2036.57974.js
