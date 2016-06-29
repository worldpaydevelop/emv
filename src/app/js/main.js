(function (angular) {
    angular.module('emv', ['ui.router', 'ui.bootstrap']).config(function ($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $provide) {
        $provide.decorator('$state', function ($delegate, $stateParams) {
            $delegate.forceReload = function () {
                return $delegate.go($delegate.current, $stateParams, {
                    reload: true,
                    inherit: false,
                    notify: true
                });
            };
            return $delegate;
        });
        /**
         * @description Disable the cache
         */
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

        /**
         * @description setup Routes for page change
         */
        $stateProvider

            .state('home', {
                url: '/updateEMV',
                templateUrl: 'src/app/js/components/templates/home.html',
                controller: 'MainController',
                controllerAs: 'mainController'

            }).state('getUpdate', {
            url: '/getUpdate',
            templateUrl: 'src/app/js/components/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mainController',
            onEnter: function ($location, $anchorScroll, $state, $timeout) {
                $location.path('getUpdate');
                $timeout(function() {
                    $anchorScroll('getUpdate');
                }, 500);

            }
        }).state('act-today', {
            url: '/act-today',
            templateUrl: 'src/app/js/components/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mainController',
            onEnter: function ($location, $anchorScroll, $state, $timeout) {
                $location.path('act-today');
                $timeout(function() {
                    $anchorScroll('act-today');
                }, 500);
            }
        }).state('testimonials', {
            url: '/testimonials',
            templateUrl: 'src/app/js/components/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mainController',
            onEnter: function ($location, $anchorScroll, $state, $timeout) {
                $location.path('testimonials');
                $timeout(function() {
                    $anchorScroll('testimonials');
                }, 500);
            }
        }).state('purchase', {
            url: '/purchase',
            templateUrl: 'src/app/js/components/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mainController',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('purchase');
                $timeout(function() {
                    $anchorScroll('purchase');
                }, 500);
            }
        }).state('service', {
            url: '/service',
            templateUrl: 'src/app/js/components/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mainController',
            onEnter: function ($location, $anchorScroll,$timeout) {
                $location.path('service');
                $timeout(function() {
                    $anchorScroll('service');
                }, 500);
            }
        }).state('steps', {
            url: '/steps',
            templateUrl: 'src/app/js/components/EMV101/templates/emv101.html',
            controller: 'EMV101Controller',
            controllerAs: 'emv101Controller',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('steps');
                $timeout(function() {
                    $anchorScroll('steps');
                }, 500);
            }
        }).state('practices', {
            url: '/practices',
            templateUrl: 'src/app/js/components/EMV101/templates/emv101.html',
            controller: 'EMV101Controller',
            controllerAs: 'emv101Controller',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('practices');
                $timeout(function() {
                    $anchorScroll('practices');
                }, 500);
            }
        }).state('reader', {
            url: '/reader',
            templateUrl: 'src/app/js/components/EMV101/templates/emv101.html',
            controller: 'EMV101Controller',
            controllerAs: 'emv101Controller',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('reader');
                $timeout(function() {
                    $anchorScroll('reader');
                }, 500);
            }
        }).state('training-materials', {
            url: '/training-materials',
            templateUrl: 'src/app/js/components/Post-Support/templates/post-support.html',
            controller: 'PostSupportController',
            controllerAs: 'postSupportController',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('training-materials');
                $timeout(function() {
                    $anchorScroll('training-materials');
                }, 500);
            }
        }).state('prevent-fraud', {
            url: '/prevent-fraud',
            templateUrl: 'src/app/js/components/Post-Support/templates/post-support.html',
            controller: 'PostSupportController',
            controllerAs: 'postSupportController',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('prevent-fraud');
                $timeout(function() {
                    $anchorScroll('prevent-fraud');
                }, 500);
            }
        }).state('chip-reader', {
            url: '/chip-reader',
            templateUrl: 'src/app/js/components/Post-Support/templates/post-support.html',
            controller: 'PostSupportController',
            controllerAs: 'postSupportController',
            onEnter: function ($location, $anchorScroll, $timeout) {
                $location.path('chip-reader');
                $timeout(function() {
                    $anchorScroll('chip-reader');
                }, 500);
            }
        }).state('tutorial', {
            url: '/tutorial',
            templateUrl: 'src/app/js/components/Tutorial/templates/tutorial.html',
            controller: 'TutorialController',
            controllerAs: 'tutorialController',
            onEnter: function(){
                $("html, body").animate({ scrollTop: 0 }, 200);
            }
        }).state('contact', {
            url: '/contact',
            templateUrl: 'src/app/js/components/Contact/templates/contact.html',
            controller: 'ContactController',
            controllerAs: 'contactController'
        }).state('concierge', {
            url: '/concierge',
            templateUrl: 'src/app/js/components/Concierge/templates/concierge.html',
            controller: 'ConciergeController',
            controllerAs: 'conciergeController'
        }).state('emv101', {
            url: '/emv101',
            templateUrl: 'src/app/js/components/EMV101/templates/emv101.html',
            controller: 'EMV101Controller',
            controllerAs: 'emv101Controller'
        }).state('post-support', {
            url: '/post-support',
            templateUrl: 'src/app/js/components/Post-Support/templates/post-support.html',
            controller: 'PostSupportController',
            controllerAs: 'postSupportController'
        }).state('help', {
            url: '/help',
            templateUrl: 'src/app/js/components/Help/templates/help.html',
            controller: 'HelpController',
            controllerAs: 'helpController'
        }).state('order', {
            url: '/order',
            templateUrl: 'src/app/js/components/Order/templates/order.html',
            controller: 'OrderController',
            controllerAs: 'orderController'
        }).state('faqs', {
            url: '/faqs',
            templateUrl: 'src/app/js/components/Faqs/templates/faqs.html',
            controller: 'FaqsController',
            controllerAs: 'faqsController',
            onEnter: function(){
                $("html, body").animate({ scrollTop: 0 }, 200);
            }
        }).state('help_thankyou', {
            url: '/help_thankyou',
            templateUrl: 'src/app/js/components/Thankyou/templates/help_thankyou.html',
            controller: 'ThankYouController',
            controllerAs: 'thankYouController'
        }).state('contact_thankyou', {
            url: '/contact_thankyou',
            templateUrl: 'src/app/js/components/Thankyou/templates/contact_thankyou.html',
            controller: 'ThankYouController',
            controllerAs: 'thankYouController'
        }).state('805emv_thankyou', {
            url: '/805emv_thankyou',
            templateUrl: 'src/app/js/components/Thankyou/templates/805emv_thankyou.html',
            controller: 'ThankYouController',
            controllerAs: 'thankYouController'
        }).state('merchant-portal', {
            url: 'https://portal.worldpay.us/',
            external: true
        }).state('about', {
            url: 'http://www.worldpay.com/us/about/our-history',
            external: true
        }).state('terms', {
            url: 'http://www.worldpay.com/us/us-terms-conditions',
            external: true
        }).state('linkedin', {
            url: 'https://www.linkedin.com/company/worldpay-us',
            external: true
        }).state('google', {
            url: 'http://plus.google.com/+worldpayus',
            external: true
        }).state('youtube', {
            url: 'http://www.youtube.com/worldpayus',
            external: true
        }).state('twitter', {
            url: 'http://www.twitter.com/worldpay_us',
            external: true
        }).state('facebook', {
            url: 'http://www.facebook.com/worldpay.us',
            external: true
        }).state('worldpay', {
            url: 'http://www.worldpay.com/us',
            external: true
        });
        $urlRouterProvider.otherwise('/updateEMV');

        // Turn off fragments for browser that support history storage
        if(window.history && window.history.pushState) {
            $locationProvider.html5Mode({ enabled: true, requireBase: false });
        }

    }).run(function ($rootScope, $window, $location, $anchorScroll, $stateParams, $state) {
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.external) {
                    event.preventDefault();
                    $window.open(toState.url, '_blank');
                }
            });
        $rootScope
            .$on('$stateChangeSuccess',
                function(event){

                    if (!$window.ga)
                        return;

                    $window.ga('send', 'pageview', { page: $location.path() });
                });
    });
}(angular));
