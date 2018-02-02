angular.module('video-player')
  .controller('videoCtrl', function() {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];


    this.clickVideo = (newVideo) => {
      this.video = newVideo;
    }; 
    this.search = (query) => {
      youtube(query, (data) => {
        this.video = data[1];
        this.videos = data;
      });
    };
  })

  .component('app', {
    controller: 'videoCtrl',
    templateUrl: 'src/templates/app.html'
  });
