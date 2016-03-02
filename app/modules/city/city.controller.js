'use strict';

module.exports = function(CityService) {

    var vm = this;
    vm.cities = {};
    vm.getCities = getCities;
    _init();

    function _init(){
        _setPagination();
        getCities();
    }
    function getCities(){
            var options = {
                limit: vm.pagination.perPage,
                offset: vm.pagination.currentPage,
                sort: vm.pagination.currentSort,
                sdir: vm.pagination.currentDirection
            };
        CityService.getCities(options).then(function(res){
            vm.cities = res.rows;
        });
    }

    function _setPagination(){ //TODO: move this to service
        vm.pagination = {
            numbers: [5, 10, 20, 50],
            perPage: 20,
            currentPage: 1,
            currentSort: 'city',
            currentDirection: 'asc',
            sort: function(type){
                if(this.currentSort == type){
                    this.currentDirection = (this.currentDirection == "asc") ? "desc" : "asc";
                }else{
                    this.currentSort = type;
                    this.currentDirection = 'asc';
                }

                getCities();
            },
            navigate: function(next){
                if(next)
                    this.currentPage ++;
                else
                    this.currentPage --;
                getCities();
            }
        }
    }
};