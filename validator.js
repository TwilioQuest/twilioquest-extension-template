/*
検証コードでは、通常のNode.jsモジュールのように、Node.jsのコアモジュール、npmのサードパーティモジュール、または自分のコードを要求することができる。
*/
const assert = require("assert");
const R = require("ramda");
const { isTwilio } = require("../lib/example_helper");

/*
目的のバリデータはひとつのfunctionをエクスポートし、そのfunctionにはヘルパーオブジェクトが渡される。ヘルパーオブジェクトには、プレイヤーがハックインターフェースのフィールドに入力した内容など、ゲームのUIから渡された情報が含まれている。

ヘルパーオブジェクトには、「success」と 「fail」のコールバックfunctionがある。これらのfunctionを使って、プレイヤーが指示通りにチャレンジを完了したかどうかを知らせる。
*/
module.exports = async function (helper) {
  // まず、ヘルパーからユーザーの入力を得ることから始める。
  const { answer1, answer2 } = helper.validationFields;

  // 次に、ユーザーの入力をテストする。答えの1つが間違っていたり、何かの要素が間違っていたりすると、
  // すぐに失敗する。一度に多くのネガティブなフィードバックを与えることはせず、
  // プレイヤーに反復させる。
  if (!answer1 || !isTwilio(answer1)) {
    return helper.fail(`
      最初の質問の答えは不正解です。TwilioQuestを作っている会社は、「T」で始まり 「wilio」で終わる。
    `);
  }

  // バリデータにnpmやコアのNode.jsの依存関係を使うことができる!
  try {
    assert.strictEqual(R.add(2, 2), Number(answer2));
  } catch (e) {
    return helper.fail(`
      2つ目の答えは、数字ではないとか、「2＋2は何か」の正しい答えではない。
    `);
  }

  // バリデータを書くときによく使う方法は、早く失敗して、最後までたどり着けば
  // ユーザーがすべての答えを正しく理解したことになるというものです。
  helper.success(`
    イエーイ〜 やった！
  `);
};
