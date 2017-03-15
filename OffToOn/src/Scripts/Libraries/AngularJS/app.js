(function () {
    var app = angular.module('Off2On', []);

    app.controller('Off2OnController', function ($http) {

        var admin = this; 

        /*$http.get('http://localhost:12345/Service1.svc/objs').success(function (data) {
            admin.products = data;
        });*/

        //this.obj = options_obj;
    });

    app.controller('NavController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    var options_obj =
       [
           {
               "Id": 1,
               "Name": 'Obj 1'
           },
           {
               "Id": 2,
               "Name": 'Obj 2'
           }
       ];

})();