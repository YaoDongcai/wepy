let env = "-test" //-dev 或者 -test
const apiBase = 'https://leancloud.cn/1.1'
/**
 * 获取所有的已经完成的练习历史信息
 * @param params
 */
const getHistoryForHasComplateInfo = apiBase + '/classes/PlanInfo';
const getTeachersList = apiBase + '/classes/Teachers'
module.exports = {
  getHistoryForHasComplateInfo,
  getTeachersList
}
