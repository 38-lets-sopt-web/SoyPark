import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

import { members } from "./member";

function App() {
  const [search, setSearch] = useState("");
  const [filteredMembers, setFilteredMembers] = useState(members); 

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // 버튼 클릭 이벤트 함수
  const handleSearchClick = () => {
    const result = members.filter((member) => member.name.includes(search));
    setFilteredMembers(result); 
  };

  return (
    <>
      <Header />
      <Search 
        search={search} 
        onSearchChange={handleSearch} 
        onSearchClick={handleSearchClick}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMembers.map((member) => (
          <Card key={member.id} {...member} />
        ))}
      </section>
    </>
  );
}

export default App;
