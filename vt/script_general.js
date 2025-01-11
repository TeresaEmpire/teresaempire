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
var script = {"gap":10,"id":"rootPlayer","minHeight":0,"backgroundColor":["#FFFFFF"],"defaultMenu":["fullscreen","mute","rotation"],"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player2140"},"children":["this.MainViewer"],"propagateClick":false,"scrollBarMargin":2,"watermark":false,"width":"100%","layout":"absolute","start":"this.init()","height":"100%","class":"Player","backgroundColorRatios":[0],"hash": "fb6eee1f5b729f91c97226662a5d8bb1b919448f6661860345fefbed0dec779d", "definitions": [{"initialPosition":{"yaw":-57.69,"class":"PanoramaCameraPosition","pitch":-5.04},"id":"panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_5E01F129_55DB_DB02_41B6_CD2B14934D5C"},{"id":"MainViewer","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipPaddingBottom":4,"data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"progressHeight":2,"propagateClick":false,"subtitlesFontFamily":"Arial","progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"progressBarBorderRadius":2,"subtitlesTextShadowOpacity":1,"toolTipPaddingRight":6,"playbackBarLeft":0,"playbackBarProgressBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","width":"100%","subtitlesBorderColor":"#FFFFFF","subtitlesBottom":50,"playbackBarHeadShadowColor":"#000000","subtitlesTop":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"height":"100%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"minHeight":50,"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","minWidth":100,"subtitlesGap":0,"playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipBorderColor":"#767676","playbackBarProgressBorderColor":"#000000","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","playbackBarHeadBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","playbackBarBottom":5,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","vrThumbstickRotationStep":20,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","class":"ViewerArea","vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"]},{"id":"panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315","label":trans('panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315.label'),"data":{"label":"rec2"},"thumbnailUrl":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_t.jpg","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":3072,"class":"TiledImageResourceLevel","colCount":36,"tags":"ondemand","url":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_0/{face}/0/{row}_{column}.jpg","rowCount":6,"width":18432},{"height":1536,"class":"TiledImageResourceLevel","colCount":18,"tags":"ondemand","url":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216},{"height":1024,"class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","url":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072}],"class":"ImageResource"}}],"overlays":["this.overlay_45091210_55EE_B902_41D3_0382A7E92CF0","this.overlay_45CB6781_55F5_4702_41B2_D3351B273CBD"],"class":"Panorama","vfov":180,"hfovMax":130,"hfovMin":"120%"},{"id":"video_453DE935_55ED_4B02_41D2_E50AC715F469","chromaColor":"#28C034","label":trans('video_453DE935_55ED_4B02_41D2_E50AC715F469.label'),"video":"this.videores_456F5785_55EF_4702_41A1_FA260D022346","chromaThreshold":0.26,"width":1108,"thumbnailUrl":"media/video_453DE935_55ED_4B02_41D2_E50AC715F469_t.jpg","height":666,"chromaSmoothing":0,"class":"Video","data":{"label":"video_4EE8A11D_41B9_0345_418C_3398DC86A6C6_en"}},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","aaEnabled":true,"touchControlMode":"drag_rotation"},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315_camera","media":"this.panorama_58FB057C_55DB_FB03_419D_86D5CF1B1315","class":"PanoramaPlayListItem"}]},{"id":"sequence_5E01F129_55DB_DB02_41B6_CD2B14934D5C","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}]},{"id":"overlay_45091210_55EE_B902_41D3_0382A7E92CF0","chromaColor":"#28C034","video":"this.videores_456F5785_55EF_4702_41A1_FA260D022346","chromaThreshold":0.26,"chromaSmoothing":0,"hfov":43.74,"click":"this.overlay_45091210_55EE_B902_41D3_0382A7E92CF0.play()","vfov":26.27,"class":"VideoPanoramaOverlay","data":{"label":"Video"},"image":"this.res_5A22F526_55ED_DB0E_41C3_BB4062DA783C","useHandCursor":true,"distance":50,"yaw":-55.5,"pitch":-2.99,"cues":[]},{"vertices":[{"yaw":44.64,"class":"PanoramaPoint","pitch":29.72},{"yaw":97.33,"class":"PanoramaPoint","pitch":29.4},{"yaw":97.3,"class":"PanoramaPoint","pitch":0.07},{"yaw":45.11,"class":"PanoramaPoint","pitch":-0.38}],"id":"overlay_45CB6781_55F5_4702_41B2_D3351B273CBD","url":trans('overlay_45CB6781_55F5_4702_41B2_D3351B273CBD.url'),"class":"QuadFramePanoramaOverlay","contentInteractive":true,"height":720,"data":{"label":"Web"},"width":1280},{"id":"videores_456F5785_55EF_4702_41A1_FA260D022346","height":666,"class":"VideoResource","levels":["this.videolevel_44ED1889_55FA_C905_41D3_B57512696888"],"width":1108},{"id":"res_5A22F526_55ED_DB0E_41C3_BB4062DA783C","class":"ImageResource","levels":[{"height":666,"class":"ImageResourceLevel","url":"media/res_5A22F526_55ED_DB0E_41C3_BB4062DA783C_0.jpg","width":1107}]},{"id":"videolevel_44ED1889_55FA_C905_41D3_B57512696888","height":666,"class":"VideoResourceLevel","type":"video/mp4","bitrate":1649,"url":trans('videolevel_44ED1889_55FA_C905_41D3_B57512696888.url'),"codec":"h264","posterURL":trans('videolevel_44ED1889_55FA_C905_41D3_B57512696888.posterURL'),"width":1108,"framerate":30}],"scrollBarColor":"#000000","scripts":{"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getKey":TDV.Tour.Script.getKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizStart":TDV.Tour.Script.quizStart,"translate":TDV.Tour.Script.translate,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"init":TDV.Tour.Script.init,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"createTween":TDV.Tour.Script.createTween,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startMeasurement":TDV.Tour.Script.startMeasurement,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setLocale":TDV.Tour.Script.setLocale,"getOverlays":TDV.Tour.Script.getOverlays,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"clone":TDV.Tour.Script.clone,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"resumePlayers":TDV.Tour.Script.resumePlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMapLocation":TDV.Tour.Script.setMapLocation,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeJS":TDV.Tour.Script.executeJS,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"isPanorama":TDV.Tour.Script.isPanorama,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"openLink":TDV.Tour.Script.openLink,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"mixObject":TDV.Tour.Script.mixObject,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"registerKey":TDV.Tour.Script.registerKey},"minWidth":0};
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
//Generated with v2023.2.0, Sat Jan 11 2025