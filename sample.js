const user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
const js_hand = getJShand();
const judge = winLose(user_hand,js_hand);
if (judge == "判定不能") {
  alert('あなたの選んだ手は' + user_hand + 'です。\nこれじゃあ判定不能だよ！');
} else {
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'ですね〜');
}

// ランダムで相手の手を取得する関数
function getJShand() {
  const js_hand_num = Math.floor( Math.random() * 3);
  let js_hand_name;
  if (js_hand_num == 0) {
    js_hand_name = "グー";
  } else if (js_hand_num == 1) {
    js_hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    js_hand_name = "パー";
  }
  return js_hand_name;
}

// 勝ち負けを判断する関数
function winLose(user,js) {
  let winLoseStr;
  if (user == js) {
    winLoseStr = "あいこ";
  } else if (user == "グー") {
    if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "パー") {
      winLoseStr = "勝ち";
    } else {
      winLoseStr = "負け";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else {
      winLoseStr = "負け";
    }
  } else {
    winLoseStr = "判定不能";
  }
  return winLoseStr;
}