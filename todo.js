function TodoCentral($scope){
  //initial sample checklist setup
	$scope.todos = [
    {text:'Set up personal website', done:false},
    {text:'Apply for new jobs', done:false}
  ];
	
	//finds the number of checklist items on the board
  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

	//creates new checklist items 
  $scope.addTodo = function() {
		$scope.todos.push({text:$scope.addTodoText, done:false});
		$scope.addTodoText = '';
	};
		
	//clears off the completed items
	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo){
			return !todo.done;	
		});
	};
};