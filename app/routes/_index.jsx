import "../../src/styles/_index.css";
import { generateMenu } from "../../src/shared/utils/utils.jsx";

export default function Index() {
  return (
    <div className="toolmoa__home">
      <div className="toolmoa__intro">
      <p>인터넷의 모든 툴을 공유하는 툴모아닷컴입니다. </p>
      <p>찾아와주셔서 감사합니다. </p>
      <p>필요로 하는 툴을 아래에서 찾아보세요.</p>
      <p>그 밖에 원하시는 툴이 있다면 아래 이메일로 요청주시면 개발 후 적용하겠습니다.</p>
      </div>
      <div className="toolmoa__calc-list">
        <ul>
          {generateMenu("_index")}
        </ul>
      </div>
    </div>
  );
}
