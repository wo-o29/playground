import React, { Fragment, useState, useTransition } from "react";

function SearchableList() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    startTransition(async () => {
      const searchResults = await generateSearchResults(searchQuery);
      setList(searchResults);
    });
  };

  return (
    <Fragment key={1}>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="검색어를 입력하세요"
      />
      {isPending && <p>검색 중...</p>}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

async function generateSearchResults(query: string): Promise<string[]> {
  // 실제로는 API 호출이나 복잡한 연산 실행
  await new Promise((resolve) => setTimeout(() => resolve(""), 5000));
  const dummyData = ["사과", "바나나", "체리", "대추", "엘더베리"];
  return dummyData.filter((item) => item.includes(query));
}

export default SearchableList;
