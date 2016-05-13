(function () {
    function TutorialController($scope, $log, $rootScope) {
        var vm = $scope;
        $rootScope.tutorial = true; //set true to show the correct footer container.
        vm.fi = 0;
        vm.frozen = false;

        var ih = 1080;
        var iw = 1920;
        var audio = new Audio();
        var completed = {};
        var frames = [
            {
                image: "src/app/assets/ipFrames/Cover_1.jpg",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Cover_2.jpg",
                audio: "src/app/assets/ipFrames/Cover_2.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Cover_3.jpg",
                audio: "src/app/assets/ipFrames/Cover_3.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Cover_4.jpg",
                audio: "src/app/assets/ipFrames/Cover_4.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_1_0.jpg",
                audio: "src/app/assets/ipFrames/1_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_2_0.jpg",
                audio: "src/app/assets/ipFrames/Step_2_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_3_0.jpg",
                audio: "src/app/assets/ipFrames/3_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_4_0.jpg",
                audio: "src/app/assets/ipFrames/4_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_5_0.jpg",
                audio: "src/app/assets/ipFrames/5_0.mp3",
                next: "timeout:8500"
            },
            {
                image: "src/app/assets/ipFrames/Step_5_1.jpg",
                audio: "src/app/assets/ipFrames/5_1.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_6_0.jpg",
                audio: "src/app/assets/ipFrames/6_0.mp3",
                next: "timeout:5000"
            },
            {
                image: "src/app/assets/ipFrames/Step_6_1.jpg",
                audio: "src/app/assets/ipFrames/6_1.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_7_0.jpg",
                audio: "src/app/assets/ipFrames/7_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_8_0.jpg",
                audio: "src/app/assets/ipFrames/8_0.mp3",
                next: "timeout:3500"
            },
            {
                image: "src/app/assets/ipFrames/Step_8_1.jpg",
                audio: "src/app/assets/ipFrames/8_1.mp3",
                next: "click"//"timeout:11500"
            },
            {
                image: "src/app/assets/ipFrames/Step_8_2.jpg",
                audio: "src/app/assets/ipFrames/8_2.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_9_0.jpg",
                audio: "src/app/assets/ipFrames/9_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_10_0.jpg",
                audio: "src/app/assets/ipFrames/10_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_11_0.jpg",
                audio: "src/app/assets/ipFrames/11_0.mp3",
                next: "timeout:8500"
            },
            {
                image: "src/app/assets/ipFrames/Step_11_1.jpg",
                audio: "src/app/assets/ipFrames/Step_11_1.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_12_0.jpg",
                audio: "src/app/assets/ipFrames/12_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_13_0.jpg",
                audio: "src/app/assets/ipFrames/13_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_14_0.jpg",
                audio: "src/app/assets/ipFrames/14_0.mp3",
                next: "timeout:2500"
            },
            {
                image: "src/app/assets/ipFrames/Step_14_1.jpg",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_15_0.jpg",
                audio: "src/app/assets/ipFrames/15_0.mp3",
                next: "timeout:2500"
            },
            {
                image: "src/app/assets/ipFrames/Step_15_1.jpg",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_16_0.jpg",
                audio: "src/app/assets/ipFrames/16_0.mp3",
                next: "timeout:3500"
            },
            {
                image: "src/app/assets/ipFrames/Step_16_1.jpg",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_17_0.jpg",
                audio: "src/app/assets/ipFrames/17_0.mp3",
                next: "timeout:3500"
            },
            {
                image: "src/app/assets/ipFrames/Step_17_1.jpg",
                audio: "src/app/assets/ipFrames/17_1.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_18_0.jpg",
                audio: "src/app/assets/ipFrames/18_0.mp3",
                next: "timeout:5500"
            },
            {
                image: "src/app/assets/ipFrames/Step_18_1.jpg",
                audio: "src/app/assets/ipFrames/18_1.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_19_0.jpg",
                audio: "src/app/assets/ipFrames/19_0.mp3",
                next: "click"
            },
            {
                image: "src/app/assets/ipFrames/Step_20_0.jpg",
                audio: "src/app/assets/ipFrames/20_0.mp3",
                next: "survey"
            }
        ];

        vm.openInstructions = function() { window.open("src/app/assets/pdf/Batch_out_instructions.pdf", "_blank"); };

        vm.openSurvey = function() { window.open("https://www.worldpay.us/emvsurvey", "_blank"); };


        vm.setFrame = function() {
            var frame = document.getElementById("frame");
            var f = frames[vm.fi];
            frame.src = f.image;
            if(f.audio) {
                audio.src = f.audio;
                audio.load();
                audio.play();
            }
            if(vm.frozen) return;
            if(f.next === "audio-end") {
                audio.onended = function() {
                    audio.onended = null;
                    completed[vm.fi] = true;
                    vm.fi++;
                    vm.setFrame();
                }
            }
            if(f.next.indexOf('timeout') === 0) {
                window.setTimeout(function(){
                    completed[vm.fi] = true;
                    vm.fi++;
                    vm.setFrame();
                }, f.next.split(":")[1] - 0);
            }
            if(f.next === "survey") {
                window.setTimeout(function(){
                    completed[vm.fi] = true;
                    vm.openSurvey();
                }, 5000);
            }
        };
        vm.goBack = function(event) {
            event.stopPropagation();
            audio.pause(); audio.onended = null;
            audio = new Audio();
            vm.frozen = true;
            vm.fi--; vm.setFrame();
        };
        vm.goForward = function(event) {
            vm.fi++;
            if(!completed[vm.fi]) vm.frozen = false;
            vm.setFrame();
            event.stopPropagation();
        };

        vm.isCheckboxClick = function(event) {
            return vm.isClickWithinArea(event, 870, 740, 980, 830);
        };

        vm.isRestartClick = function(event) {
            return vm.isClickWithinArea(event, 1780, 940, 1900, 1060);
        };

        vm.isInstructionsClick = function(event) {
            return vm.isClickWithinArea(event, 990, 1000, 1260, 1050);
        };

        vm.isClickWithinArea = function(event,x1,y1,x2,y2) {
            if(!event.offsetX) return false;
            var frame = document.getElementById("frame");
            var l = x1 / iw, t = y1 / ih, r = x2 / iw, b = y2 / ih;
            var h = event.offsetX / frame.width, v = event.offsetY / frame.height;
            return !(h < l || h > r || v < t || v > b)
        };

    }

    angular.module('emv').controller('TutorialController', TutorialController);
})();
