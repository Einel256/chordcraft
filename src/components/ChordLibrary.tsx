import { FUNCTION_DESCRIPTIONS, getDiatonicChords, type KeyName, type ScaleName } from '../music/progression'

export default function ChordLibrary({ keyName, scaleName, selectedIndex, onApply, onPreview }: {
  keyName: KeyName
  scaleName: ScaleName
  selectedIndex: number
  onApply: (chordIndex: number) => void
  onPreview: (chordIndex: number) => void
}) {
  const chords = getDiatonicChords(keyName, scaleName)

  return <section className="library panel" aria-labelledby="library-title">
    <div className="library-heading">
      <div className="panel-heading"><span className="section-index">02</span><div><h2 id="library-title">スケール / コード表</h2><p>{keyName} · {scaleName} の構成音・コード</p></div></div>
      <div className="library-instruction"><span className="library-key">{String(selectedIndex + 1).padStart(2, '0')}</span>コードを選んで進行に追加</div>
    </div>
    <div className="diatonic-grid">
      {chords.map((chord, index) => <div className="diatonic-card-wrap" key={chord.roman}>
        <button type="button" className="diatonic-card" onClick={() => onApply(index)} aria-label={`${chord.symbol}を進行に追加`}>
          <span className="diatonic-top"><span className="diatonic-degree">{chord.roman}</span><i className={`role-dot role-${chord.role.toLowerCase()}`} /></span>
          <strong>{chord.symbol}</strong>
          <span className={`diatonic-function role-text-${chord.role.toLowerCase()}`}>{FUNCTION_DESCRIPTIONS[index % FUNCTION_DESCRIPTIONS.length].split('｜')[0]}</span>
          <span className="diatonic-description">{FUNCTION_DESCRIPTIONS[index % FUNCTION_DESCRIPTIONS.length].split('｜')[1]}</span>
        </button>
        <button type="button" className="diatonic-preview" onClick={() => onPreview(index)} aria-label={`${chord.symbol}を試聴`} title={`${chord.symbol}を試聴`}>▶</button>
      </div>)}
    </div>
    <div className="library-legend"><span><i className="legend-dot tonic" />トニック機能</span><span><i className="legend-dot predominant" />サブドミナント機能</span><span><i className="legend-dot dominant" />ドミナント機能</span></div>
  </section>
}
