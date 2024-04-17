let bmiHeight = "";
let bmiWeight = "";
let resultCal = "";

function calBmi() {
  console.log("0");
  // TODO: 계산불가 상황일때 경고 메시지 날리기 구현할것
  if (bmiHeight && bmiWeight) {
    alert("모든 수치를 입력해주세요");
    return;
  }

  console.log("1");

  bmiHeight = document.getElementById("bmiHeight").value;
  bmiWeight = document.getElementById("bmiWeight").value;

  console.log("2", bmiHeight, bmiWeight);

  if (bmiHeight && bmiWeight) {
    resultCal = (bmiWeight / (bmiHeight * bmiHeight)) * 10000;
    console.log("3", resultCal);
  }

  if (resultCal) {
    console.log("4)", resultCal);
    document.getElementById(
      "bmiResult"
    ).innerHTML = `계산결과 : ${resultCal}입니다.`;
  }
}

function BmiCal() {
  return (
    <>
      <h3>BMI계산기</h3>
      <div>
        <div>
          <p>신장</p>
          <input
            type="text"
            placeholder="숫자만 입력하세요"
            id="bmiHeight"
            // onChange={getValue("bmiHeight")}
          />
          <p>cm</p>
        </div>
        <div>
          <p>체중</p>
          <input
            type="text"
            placeholder="숫자만 입력하세요."
            id="bmiWeight"
            // onChange={getValue("bmiWeight")}
          />
          <p>kg</p>
        </div>
        <button onClick={() => calBmi()}>계산하기</button>
        <div>
          <p>결과</p>
          <p id="bmiResult"></p>
        </div>
      </div>
    </>
  );
}

export default BmiCal;
