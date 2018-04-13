app.directive('productItem', function(){
    // Runs during compile
    return {
        scope: {
            item: '=item',
        },
        controller: function($scope, ProductService) {
            $scope.change = {};
            $scope.canEdit = () => $scope.edit;
            $scope.isDifferent = () => $scope.item.name !== $scope.change.name;
            $scope.toggleEdit = () => {
                $scope.edit = !$scope.edit;
                $scope.change.name = $scope.item.name;
            }
            $scope.delete = () => {
                console.log($scope.item);
                ProductService.deleteProduct($scope.item.id);
            }

            $scope.$on('cancel', function() {
                $scope.edit = false;
            })

            $scope.$on('save', function(){
                if ($scope.edit){
                   const newProduct = {
                     id: $scope.item.id,
                     name: $scope.change.name,
                   }
                   ProductService.modifyProduct(newProduct)
                   $scope.edit = false;
                }
            })
        },
        templateUrl: '/client/templates/productItem.directive.html',
    };
});