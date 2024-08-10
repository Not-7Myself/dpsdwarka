export default function Sidebar() {
  return (
    <div className="side">
      <News />
    </div>
  );
}

function News() {
  return (
    <div className="newsBox">
      <div className="head">
        <h1>Latest News</h1>
      </div>
      <div className="news">
        <div className="dabba"></div>
      </div>
    </div>
  );
}
