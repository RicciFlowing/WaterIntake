angular.module('waterintakeApp').filter('type', function () {
return function (list, type) {
  var newList = [];

  if(type && type.id){

    for(var i=0; i<list.length; i++)
    {
      if(list[i].type.id === type.id)
      {
          newList.push(list[i]);
      }
    }
    return newList;
  }

  else
  {
    return list;
  }

}

});
