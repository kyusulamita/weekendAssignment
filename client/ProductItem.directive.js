app.directive('productItem', function(){
    // Runs during compile
    return {
        scope: {
            item: '=item',
        },
        controller: function($scope, ProductService) {
            $scope.change = {};
            $scope.change.name = $scope.item.name;
            $scope.canEdit = () => $scope.edit;
            $scope.isDifferent = () => $scope.item.name !== $scope.change.name;
            $scope.toggleEdit = () => {
                $scope.edit = !$scope.edit;
                $scope.change.name = $scope.item.name;
            }
            $scope.delete = () => {
                ProductService.deleteProduct($scope.item.id);
            }

            $scope.$on('cancel', function() {
                if ($scope.edit){
                    $scope.toggleEdit();
                }
            })

            $scope.$on('save', function(){
                if ($scope.edit){
                   const newProduct = {
                     id: $scope.item.id,
                     name: $scope.change.name,
                   }
                   ProductService.modifyProduct(newProduct)
                   $scope.toggleEdit();
                }
            })

            $scope.$on('checkStatus', function(){
                $scope.$emit('change', $scope.isDifferent() );
            })
        },
        templateUrl: '/client/templates/productItem.directive.html',
    };
});
