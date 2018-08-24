var plugin = requirePlugin("myPlugin")

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    displayMultipleItems: 1,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    backgroundImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    circular: true,
    indicatorColor: 'rgba(255,255,255,0.5)',
    indicatorActiveColor: 'rgba(255, 255, 255, 1)'
  },
  bindchange: function (e) {
    var src = this.data.imgUrls[e.detail.current];
    this.getBackgroundImg(src);
  },
  getBackgroundImg: function (src) {
    this.setData({
      backgroundImg: src
    })
  },
  onLoad: function () {
    plugin.getData()
  },
})