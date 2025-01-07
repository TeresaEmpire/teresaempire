(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"hash": "379b250630615cb54d0e96f0891eaec6a735e4dd7b0d689492e925a7f4e73fd9", "definitions": [{"id":"video_4EE8A11D_41B9_0345_418C_3398DC86A6C6","video":"this.videores_503A9F52_4189_3FDF_41A1_BD25A5818D0B","label":trans('video_4EE8A11D_41B9_0345_418C_3398DC86A6C6.label'),"width":1800,"chromaThreshold":0.28,"height":1080,"chromaColor":"#28C034","data":{"label":"0107 (1)(2)"},"thumbnailUrl":"media/video_4EE8A11D_41B9_0345_418C_3398DC86A6C6_t.jpg","chromaSmoothing":0,"class":"Video"},{"id":"panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6","overlays":["this.overlay_50847BAD_4159_FD1D_419C_6DD70AFE5596","this.overlay_500D1519_4158_7505_41C2_0A71780F3C95"],"label":trans('panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6.label'),"hfovMax":130,"data":{"label":"rec2"},"hfov":360,"class":"Panorama","hfovMin":"120%","thumbnailUrl":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_t.jpg","frames":[{"thumbnailUrl":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_t.jpg","cube":{"class":"ImageResource","levels":[{"height":3072,"colCount":36,"rowCount":6,"url":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":18432,"tags":"ondemand"},{"height":1536,"colCount":18,"rowCount":3,"url":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216,"tags":"ondemand"},{"height":1024,"colCount":12,"rowCount":2,"url":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"colCount":6,"rowCount":1,"url":"media/panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"class":"CubicPanoramaFrame"}],"vfov":180},{"id":"MainViewer","toolTipFontSize":"1.11vmin","vrThumbstickRotationStep":20,"subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"class":"ViewerArea","data":{"name":"Main Viewer"},"progressLeft":"33%","progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","progressBottom":10,"playbackBarHeight":10,"subtitlesTextShadowHorizontalLength":1,"height":"100%","progressHeight":2,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","playbackBarProgressBorderSize":0,"toolTipPaddingRight":6,"playbackBarBackgroundColorDirection":"vertical","vrPointerSelectionColor":"#FF6600","progressBorderSize":0,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"playbackBarRight":0,"progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"minWidth":100,"toolTipPaddingTop":4,"playbackBarHeadHeight":15,"toolTipFontColor":"#606060","surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","width":"100%","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowOpacity":1,"playbackBarProgressBorderColor":"#000000","progressRight":"33%","progressOpacity":0.7,"subtitlesFontSize":"3vmin","playbackBarBackgroundOpacity":1,"toolTipShadowColor":"#333138","progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"subtitlesGap":0,"progressBorderRadius":2,"toolTipTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarBorderSize":0,"propagateClick":false,"vrPointerColor":"#FFFFFF","playbackBarBottom":5},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_camera","media":"this.panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6","class":"PanoramaPlayListItem"}]},{"id":"video_2C128E56_3C60_19D0_41C0_17DF0C91975E","video":"this.videores_2C0FAAEA_3C60_3EF0_41B7_BEC9B50210D5","label":trans('video_2C128E56_3C60_19D0_41C0_17DF0C91975E.label'),"width":1200,"chromaThreshold":0.22,"height":1152,"chromaColor":"#28C034","data":{"label":"WhatsApp Video 2024-12-23 at 21.10.38_06f33724"},"thumbnailUrl":"media/video_2C128E56_3C60_19D0_41C0_17DF0C91975E_t.jpg","chromaSmoothing":0,"class":"Video"},{"id":"audio_4CC0BB77_408B_07C4_4190_57FF7F9AA1A0","class":"MediaAudio","autoplay":true,"data":{"label":"Mendelssohn's The Hebrides Overture, Op. 26 (Fingal's Cave) - FELIX MENDELSSOHN #music #classical"},"audio":"this.audiores_4E0BE402_4089_013C_41C3_32C9FF9C806B"},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"audio_505DC308_4089_074C_41C2_FFCA31074CB9","class":"MediaAudio","autoplay":true,"data":{"label":"Mendelssohn's The Hebrides Overture, Op. 26 (Fingal's Cave) - FELIX MENDELSSOHN #music #classical"},"audio":"this.audiores_50620481_4089_013C_41C9_64D4C664206B"},{"id":"panorama_53CE902D_4158_AB1D_41C0_665D3E8C46A6_camera","enterPointingToHorizon":true,"initialSequence":"this.sequence_513A5AD3_4158_BF05_41C6_88D3F135EF85","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera"},{"id":"video_33B86E11_3C60_1953_41B1_27708D642B85","video":"this.videores_2C7439F0_3C60_3AD0_41AC_1FA907AA8F90","label":trans('video_33B86E11_3C60_1953_41B1_27708D642B85.label'),"width":960,"chromaThreshold":0,"height":576,"chromaColor":"#FCFEFE","data":{"label":"WhatsApp Video 2024-12-31 at 12.01.49_8d16978e"},"thumbnailUrl":"media/video_33B86E11_3C60_1953_41B1_27708D642B85_t.jpg","chromaSmoothing":0,"class":"Video"},{"id":"videores_503A9F52_4189_3FDF_41A1_BD25A5818D0B","height":666,"class":"VideoResource","width":1108,"levels":["this.videolevel_50A0EEF1_4148_5705_41B7_B732CE17C07C"]},{"id":"overlay_50847BAD_4159_FD1D_419C_6DD70AFE5596","url":trans('overlay_50847BAD_4159_FD1D_419C_6DD70AFE5596.url'),"height":720,"data":{"label":"Web"},"vertices":[{"yaw":44.47,"class":"PanoramaPoint","pitch":29.11},{"yaw":97.11,"class":"PanoramaPoint","pitch":28.97},{"yaw":97.16,"class":"PanoramaPoint","pitch":0.1},{"yaw":44.99,"class":"PanoramaPoint","pitch":0.93}],"contentInteractive":true,"class":"QuadFramePanoramaOverlay","width":1280},{"id":"overlay_500D1519_4158_7505_41C2_0A71780F3C95","video":"this.videores_503A9F52_4189_3FDF_41A1_BD25A5818D0B","hfov":41.06,"image":"this.res_53652789_4158_7505_41BD_7811B82C2412","chromaColor":"#28C034","chromaThreshold":0.28,"cues":[],"click":"if(this.overlay_500D1519_4158_7505_41C2_0A71780F3C95.get('state') != 'playing'){ this.overlay_500D1519_4158_7505_41C2_0A71780F3C95.play(); } else { this.overlay_500D1519_4158_7505_41C2_0A71780F3C95.pause(); }","distance":50,"data":{"label":"Video"},"useHandCursor":true,"pitch":-3.72,"chromaSmoothing":0,"yaw":-57.08,"vfov":24.62,"class":"VideoPanoramaOverlay"},{"id":"videores_2C0FAAEA_3C60_3EF0_41B7_BEC9B50210D5","height":842,"class":"VideoResource","width":876,"levels":["this.videolevel_50BF1EAF_4148_571E_41A1_830BA1C9F134"]},{"id":"audiores_4E0BE402_4089_013C_41C3_32C9FF9C806B","mp3Url":trans('audiores_4E0BE402_4089_013C_41C3_32C9FF9C806B.mp3Url'),"class":"AudioResource","gain":0.23},{"id":"audiores_50620481_4089_013C_41C9_64D4C664206B","mp3Url":trans('audiores_50620481_4089_013C_41C9_64D4C664206B.mp3Url'),"class":"AudioResource","gain":0.24},{"id":"sequence_513A5AD3_4158_BF05_41C6_88D3F135EF85","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"videores_2C7439F0_3C60_3AD0_41AC_1FA907AA8F90","height":576,"class":"VideoResource","width":960,"levels":["this.videolevel_50BEAE8E_4148_571F_41A0_F80832B53573"]},{"id":"videolevel_50A0EEF1_4148_5705_41B7_B732CE17C07C","height":666,"codec":"h264","posterURL":trans('videolevel_50A0EEF1_4148_5705_41B7_B732CE17C07C.posterURL'),"framerate":30,"type":"video/mp4","bitrate":1660,"url":trans('videolevel_50A0EEF1_4148_5705_41B7_B732CE17C07C.url'),"class":"VideoResourceLevel","width":1108},{"id":"res_53652789_4158_7505_41BD_7811B82C2412","levels":[{"height":1080,"url":"media/res_53652789_4158_7505_41BD_7811B82C2412_0.jpg","class":"ImageResourceLevel","width":1800}],"class":"ImageResource"},{"id":"videolevel_50BF1EAF_4148_571E_41A1_830BA1C9F134","height":842,"codec":"h264","posterURL":trans('videolevel_50BF1EAF_4148_571E_41A1_830BA1C9F134.posterURL'),"framerate":30,"type":"video/mp4","bitrate":259,"url":trans('videolevel_50BF1EAF_4148_571E_41A1_830BA1C9F134.url'),"class":"VideoResourceLevel","width":876},{"id":"videolevel_50BEAE8E_4148_571F_41A0_F80832B53573","height":576,"codec":"h264","posterURL":trans('videolevel_50BEAE8E_4148_571F_41A0_F80832B53573.posterURL'),"framerate":24,"type":"video/mp4","bitrate":709,"url":trans('videolevel_50BEAE8E_4148_571F_41A0_F80832B53573.url'),"class":"VideoResourceLevel","width":960}],"backgroundColor":["#FFFFFF"],"propagateClick":false,"start":"this.playAudioList([this.audio_505DC308_4089_074C_41C2_FFCA31074CB9], true); this.init()","vrPolyfillScale":0.94,"data":{"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player504","history":{}},"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"scripts":{"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setMapLocation":TDV.Tour.Script.setMapLocation,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeJS":TDV.Tour.Script.executeJS,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"createTween":TDV.Tour.Script.createTween,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setLocale":TDV.Tour.Script.setLocale,"getMainViewer":TDV.Tour.Script.getMainViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoBack":TDV.Tour.Script.historyGoBack,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"translate":TDV.Tour.Script.translate,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isPanorama":TDV.Tour.Script.isPanorama,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"registerKey":TDV.Tour.Script.registerKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizFinish":TDV.Tour.Script.quizFinish,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"playAudioList":TDV.Tour.Script.playAudioList,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"cloneBindings":TDV.Tour.Script.cloneBindings,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"openLink":TDV.Tour.Script.openLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"downloadFile":TDV.Tour.Script.downloadFile,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"getPixels":TDV.Tour.Script.getPixels,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot},"width":"100%","height":"100%","layout":"absolute","gap":10,"children":["this.MainViewer"],"watermark":false,"scrollBarColor":"#000000","class":"Player","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.0.js.map
})();
//Generated with v2023.2.0, Tue Jan 7 2025