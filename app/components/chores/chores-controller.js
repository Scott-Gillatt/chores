app.controller('choresController', function ($scope) {
    $scope.test = "This is a test";

    $scope.Chores = [{
        task: 'Walk dog',
        dueDate: Date.now(),
        responsibleParty: 'Scott',
        estTime: 15
        },
        {
            task: 'Run dog',
            dueDate: Date.now(),
            responsibleParty: 'Dave',
            estTime: 30
        },
        {
            task: 'Landury',
            dueDate: Date.now(),
            responsibleParty: 'Scott',
            estTime: 25
        },
        {
            task: 'Clean Dishs',
            dueDate: Date.now(),
            responsibleParty: 'Scott',
            estTime: 20
        },
        {
            task: 'Vacumm',
            dueDate: Date.now(),
            responsibleParty: 'Scott',
            estTime: 45
        },
        {
            task: 'Sweep',
            dueDate: Date.now(),
            responsibleParty: 'Scott',
            estTime: 10
        },
    ]

    $scope.addNewChore = function () {
        $scope.Chores.push($scope.newChore);
        $scope.newChore = "";
        
        $scope.Chores.push({
            task: $scope.newChore.task,
            dueDate: $scope.newChore.dueDate,
            responsibleParty: $scope.newChore.responsibleParty,
            estTime: $scope.newChore.estTime
        
        }),
        
     $scope.deleteChore = function(i){
         $scope.Chores.splice(i,1);
     }
    }
     });