function cadCntrl($scope){
	$scope.items=[{text:'Testando o nome'}];

	$scope.add = function(){
         var item = {text: $scope.nome};

	 $scope.items.push(item);
         }; 
	
	

}
