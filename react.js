import { useEffect, useState } from "react";
import styles from "./Search.module.css";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = [
      { 이름: "비키니" },
      { 이름: "시스루" },
      { 이름: "자켓" },
      { 이름: "패딩" },
      { 이름: "양말" },
      { 이름: "바지" },
    ];
    setItems(data);
  }, []);

  return (
    <div>
      <h3>인기 검색어</h3>
      <ol>
        {items.map((item, index) => (
          <li>
            <a
              href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${item.이름}`}
            >
              {item.이름}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
