import Split from 'react-split';

export function Editor() {
  return (
    <Split className="flex" style={{ height: 'calc(100vh - 250px)' }}>
      <Split direction="vertical">
        <div className="bg-gray-light">1 qwe</div>
        <div className="bg-gray-light">2 qwe</div>
      </Split>
      <div className="bg-gray-light">2 qwe</div>
    </Split>
  );
}
