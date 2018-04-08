import tip from './tip'

const wxRequest = async(params = {}, url) => {

    let data = params.query || {};
    const LEANID = "yUB1LBCTwiuuKyfKw3llTtE9-gzGzoHsz";
    const LEANKEY = "WCpB4WnDow9x5coqBjad4lXY";
    wx.showLoading({
      title: '加载中',
    });
    let res =new Promise((resolve, reject) => {
       wx.
      request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {
          "X-LC-Id":LEANID,
          "X-LC-Key":LEANKEY,
          "Content-Type":"application/json"
        },
        success: function(data) {
          wx.hideLoading()
          resolve(data);
        },
        error: function(data) {
          wx.hideLoading()
          reject(data)
        }
      });
    });
    return res;
};


module.exports = {
    wxRequest
}
