// // public/js/services/PhotoService.js

// angular.module('PhotoService', []).factory('Photo', ['$http', function($http) {

//   return {
//     // call to get all photos 
//     get : function () {
//         return $http.get('/api/photos');
//     },

//     // // call to get single photo
//     // get : function() {
//     //     return $http.get('/api/photo/' + id);
//     // },

//     // call to post and create a new photo

//     create : function(photoData) {
//       return $http.post('/api/photos', photoData);
//     },

//     // // call to update a photo
//     // update : function(photoData) {
//     //   return $http.put('/api/photos', + id);
//     // },

//     // call to delete a photo
//     delete : function(id) {
//       return $http.delete('/api/nerds/' + id);
//     }

//   }

// }]);