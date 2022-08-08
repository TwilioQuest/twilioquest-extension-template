// これは、自分のコードで客観的検証ヘルパーを使用する場合の例です。
// 必ずしも使わなければならないわけではありませんが、使いたくなることも多いでしょう。
function isTwilio(testString = '') {
  return testString.toLowerCase() === 'twilio';
}

module.exports = {
  isTwilio
};
