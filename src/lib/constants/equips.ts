const equipList=[
  "무기",
  "엠블렘",
  "보조무기(포스실드, 소울링 제외)",
  "포스실드, 소울링",
  "방패",
  "모자",
  "상의",
  "한벌옷",
  "하의",
  "신발",
  "장갑",
  "망토",
  "벨트",
  "어깨장식",
  "얼굴장식",
  "눈장식",
  "귀고리",
  "반지",
  "펜던트",
  "기계심장"
];

const equipList_starforce=equipList.filter((value) => value !=="엠블렘" && value !=="")

export default equipList;