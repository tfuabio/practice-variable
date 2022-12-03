let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while (!(user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー" || user_hand == null)) {
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
if (user_hand == null) {
  alert('またチャレンジしてね');
} else {
  const js_hand = getJShand();
  const judge = winLose(user_hand,js_hand);
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
    winLoseStr = (js == "チョキ") ? "勝ち" : "負け";
  } else if (user == "チョキ") {
    winLoseStr = (js == "パー") ? "勝ち" : "負け";
  } else if (user == "パー") {
    winLoseStr = (js == "グー") ? "勝ち" : "負け";
  } else {
    winLoseStr = "判定不能";
  }
  return winLoseStr;
}