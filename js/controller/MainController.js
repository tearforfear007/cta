app.controller('MainController', function($scope, $uibModal, $rootScope,$http) {
    $scope.appName = "CTA 慈濟委員暨慈誠聯誼會";

    $scope.contactUsData = [{
            area: "北區",
            branch: "台北分會",
            tel: "02-27760111",
            members: [{
                    name: "李潔韻",
                    extension: 2421,
                    vmeetId: 0143728
                },
                {
                    name: "鄭佩鈞",
                    extension: 2411,
                    vmeetId: 0143719
                }
            ]
        },
        {
            area: "中區",
            branch: "台中分會",
            tel: "02-23054073",
            members: [{
                    name: "陳麗凈",
                    extension: 214,
                    vmeetId: 0143705
                },
                {
                    name: "張麗娜",
                    extension: 214,
                    vmeetId: 0143743
                }
            ]
        },
        {
            area: "南區",
            branch: "高雄分會",
            tel: "07-3987667",
            members: [{
                    name: "梁桂箐",
                    extension: 2716,
                    vmeetId: 0143787
                },
                {
                    name: "張渝鈁",
                    extension: 2714
                }
            ]
        },
        {
            area: "東區",
            branch: "花蓮本會",
            tel: "03-8266779",
            members: [{
                    name: "釋德俱",
                    extension: 318,
                    vmeetId: 0143721
                },
                {
                    name: "釋德僎",
                    extension: 552
                }
            ]
        },
        {
            area: "會計",
            branch: "花蓮本會",
            tel: "02-23054073",
            members: [{
                name: "釋德森",
                extension: 255,
                vmeetId: 0144886
            }]
        }
    ];
    $scope.animationsEnabled = true;
    $scope.openContactUsModal = function() {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            controller: "ModalInstanceCtrl",
            templateUrl: 'contactUsModal.html',
            resolve: {
                contactUsData: function() {
                    return $scope.contactUsData;
                }
            }

        });
    };

    $scope.gridOptions = {
    onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
    }
    };


    var root = 'https://jsonplaceholder.typicode.com';
    $http({
        url: root + '/posts',
        method: 'GET'
    }).then(function(res) {
        $scope.gridOptions.data = res.data;
    });

});

app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, contactUsData, $interval) {
    $scope.contactUsData = contactUsData;
    $scope.onCancelModal = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.columnDefs = [{
            name: 'name',
            displayName: '姓名'
        },
        {
            name: 'extension',
            displayName: '分機'
        },
        {
            name: 'vmeetId',
            displayName: 'Vmeet ID'
        }
    ];

    // 北區
    $scope.northGridOptions = {
        headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">' + $scope.contactUsData[0].area + ' ' + $scope.contactUsData[0].branch + '電話:' + $scope.contactUsData[0].tel + '</div>',
        data: $scope.contactUsData[0].members,
        columnDefs: $scope.columnDefs,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // call resize every 500 ms for 5 s after modal finishes opening - usually only necessary on a bootstrap modal
            $interval(function() {
                $scope.gridApi.core.handleWindowResize();
            }, 500, 10);
        }
    };
    // 中區
    $scope.middleGridOptions = {
        headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">' + $scope.contactUsData[1].area + ' ' + $scope.contactUsData[1].branch + '電話:' + $scope.contactUsData[1].tel + '</div>',
        data: $scope.contactUsData[1].members,
        columnDefs: $scope.columnDefs,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // call resize every 500 ms for 5 s after modal finishes opening - usually only necessary on a bootstrap modal
            $interval(function() {
                $scope.gridApi.core.handleWindowResize();
            }, 500, 10);
        }
    };
    // 南區
    $scope.southGridOptions = {
        headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">' + $scope.contactUsData[2].area + ' ' + $scope.contactUsData[2].branch + '電話:' + $scope.contactUsData[2].tel + '</div>',
        data: $scope.contactUsData[2].members,
        columnDefs: $scope.columnDefs,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // call resize every 500 ms for 5 s after modal finishes opening - usually only necessary on a bootstrap modal
            $interval(function() {
                $scope.gridApi.core.handleWindowResize();
            }, 500, 10);
        }
    };
    // 東區
    $scope.eastGridOptions = {
        headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">' + $scope.contactUsData[3].area + ' ' + $scope.contactUsData[3].branch + '電話:' + $scope.contactUsData[3].tel + '</div>',
        data: $scope.contactUsData[3].members,
        columnDefs: $scope.columnDefs,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // call resize every 500 ms for 5 s after modal finishes opening - usually only necessary on a bootstrap modal
            $interval(function() {
                $scope.gridApi.core.handleWindowResize();
            }, 500, 10);
        }
    };
    // 會計
    $scope.accountGridOptions = {
        headerTemplate: '<div class="ui-grid-top-panel" style="text-align: center">' + $scope.contactUsData[4].area + ' ' + $scope.contactUsData[4].branch + '電話:' + $scope.contactUsData[4].tel + '</div>',
        data: $scope.contactUsData[4].members,
        columnDefs: $scope.columnDefs,
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;

            // call resize every 500 ms for 5 s after modal finishes opening - usually only necessary on a bootstrap modal
            $interval(function() {
                $scope.gridApi.core.handleWindowResize();
            }, 500, 10);
        }
    };
});