export const KEYS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'] as const
export const CHORD_ROOTS = KEYS
export const SCALES = [
  { name: 'メジャー・スケール', intervals: [0, 2, 4, 5, 7, 9, 11] },
  { name: 'ナチュラル・マイナー・スケール', intervals: [0, 2, 3, 5, 7, 8, 10] },
  { name: 'ハーモニック・マイナー・スケール', intervals: [0, 2, 3, 5, 7, 8, 11] },
  { name: 'メロディック・マイナー・スケール', intervals: [0, 2, 3, 5, 7, 9, 11] },
  { name: 'アイオニアン・スケール', intervals: [0, 2, 4, 5, 7, 9, 11] },
  { name: 'ドリアン・スケール', intervals: [0, 2, 3, 5, 7, 9, 10] },
  { name: 'フリジアン・スケール', intervals: [0, 1, 3, 5, 7, 8, 10] },
  { name: 'リディアン・スケール', intervals: [0, 2, 4, 6, 7, 9, 11] },
  { name: 'ミクソリディアン・スケール', intervals: [0, 2, 4, 5, 7, 9, 10] },
  { name: 'エオリアン・スケール', intervals: [0, 2, 3, 5, 7, 8, 10] },
  { name: 'ロクリアン・スケール', intervals: [0, 1, 3, 5, 6, 8, 10] },
  { name: 'メジャー・ペンタトニック・スケール', intervals: [0, 2, 4, 7, 9] },
  { name: 'マイナー・ペンタトニック・スケール', intervals: [0, 3, 5, 7, 10] },
  { name: 'ホールトーン・スケール', intervals: [0, 2, 4, 6, 8, 10] },
  { name: 'ディミニッシュ・スケール', intervals: [0, 2, 3, 5, 6, 8, 9, 11] },
  { name: 'コンビネーション・オブ・ディミニッシュ・スケール', intervals: [0, 1, 3, 4, 6, 7, 9, 10] },
  { name: 'クロマチック・スケール', intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  { name: 'ブルーノート・スケール', intervals: [0, 3, 5, 6, 7, 10] },
  { name: '都節（みやこぶし）音階', intervals: [0, 1, 5, 7, 8] },
  { name: '民謡音階', intervals: [0, 2, 5, 7, 9] },
  { name: 'オルタード・スケール', intervals: [0, 1, 3, 4, 6, 8, 10] },
  { name: 'リディアン・ドミナント・スケール', intervals: [0, 2, 4, 6, 7, 9, 10] },
  { name: 'ハーモニック・メジャー・スケール', intervals: [0, 2, 4, 5, 7, 8, 11] },
  { name: 'ロクリアン・ナチュラル2・スケール', intervals: [0, 2, 3, 5, 6, 8, 10] },
  { name: 'ビバップ・ドミナント・スケール', intervals: [0, 2, 4, 5, 7, 9, 10, 11] },
  { name: 'エニグマティック・スケール', intervals: [0, 1, 4, 6, 8, 10, 11] },
  { name: 'プロメテウス・スケール', intervals: [0, 2, 4, 6, 9, 10] },
  { name: 'ヨナ抜き長音階', intervals: [0, 2, 4, 7, 9] },
  { name: 'ヨナ抜き短音階', intervals: [0, 3, 5, 7, 10] },
  { name: '琉球（沖縄）スケール', intervals: [0, 4, 5, 7, 11] },
  { name: '律旋法（雅楽の音階）', intervals: [0, 2, 5, 7, 9] },
  { name: '呂旋法', intervals: [0, 2, 4, 7, 9] },
  { name: 'スパニッシュ・スケール', intervals: [0, 1, 4, 5, 7, 8, 10] },
  { name: 'ジプシー・スケール', intervals: [0, 2, 3, 6, 7, 8, 11] },
  { name: 'ハンガリアン・マイナー・スケール', intervals: [0, 2, 3, 6, 7, 8, 11] },
  { name: 'アラビア音階（中近東スケール）', intervals: [0, 2, 4, 5, 6, 8, 10] },
  { name: 'ペロッグ・スケール', intervals: [0, 1, 3, 7, 8] },
  { name: 'スレンドロ・スケール', intervals: [0, 2, 5, 7, 10] },
] as const
export type ScaleName = typeof SCALES[number]['name']
export const CHORD_MODIFIERS = [
  { value: 'major', label: 'Major', description: 'メジャーコード' }, { value: 'm', label: 'm', description: '短3度' },
  { value: '6', label: '6', description: '6度' }, { value: '7', label: '7', description: '短7度' }, { value: '9', label: '9', description: '9度' }, { value: '11', label: '11', description: '11度' }, { value: '13', label: '13', description: '13度' }, { value: 'b5', label: '♭5', description: '減5度' },
  { value: 'dim', label: 'dim', description: '減5度' }, { value: 'aug', label: 'aug', description: '増5度' },
  { value: 'sus2', label: 'sus2', description: '2度に置換' }, { value: 'sus4', label: 'sus4', description: '4度に置換' },
  { value: 'add9', label: 'add9', description: '9度を追加' }, { value: 'add11', label: 'add11', description: '11度を追加' }, { value: 'add13', label: 'add13', description: '13度を追加' },
] as const
export type ChordModifier = typeof CHORD_MODIFIERS[number]['value'] | 'add9' | 'add11' | 'add13'
export type KeyName = typeof KEYS[number]
export type Settings = { key: KeyName; scale: ScaleName; count: 4 | 8 | 16 | 32 | 64; naturalness: number; complexity: number; surprise: number }
export type Chord = { symbol: string; roman: string; role: 'Tonic' | 'Subdominant' | 'Dominant' | 'Color'; pitch: number; notes: number[]; bass?: number; inversion?: number; octave?: 3 | 4 | 5; duration?: '4n' | '8n'; modifiers?: ChordModifier[]; baseSymbol?: string }

const names = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']
const pitchClassesByName: Record<string, number> = {
  C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, Fb: 4,
  'E#': 5, F: 5, 'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8,
  A: 9, 'A#': 10, Bb: 10, B: 11, Cb: 11,
}
const scale = [0, 2, 4, 5, 7, 9, 11]
export const FUNCTION_DESCRIPTIONS = [
  'トニック｜安定・始まりや着地',
  'サブドミナント｜ドミナントへつなぐ',
  'トニック代理｜柔らかい流れ',
  'サブドミナント｜展開・広がり',
  'ドミナント｜トニックへの解決',
  'トニック代理｜落ち着きと情感',
  'ドミナント｜強い緊張と解決',
] as const
type Candidate = Chord & { degree: number; kind: string; weight: number }

function intervals(kind: string, extension: number): number[] {
  const base: Record<string, number[]> = { major: [0, 4, 7], minor: [0, 3, 7], diminished: [0, 3, 6], augmented: [0, 4, 8], sus2: [0, 2, 7], sus4: [0, 5, 7], 'major7': [0, 4, 7, 11], 'minor7': [0, 3, 7, 10], 'dominant7': [0, 4, 7, 10], 'half-dim7': [0, 3, 6, 10] }
  const ns = [...(base[kind] ?? base.major)]
  if (extension === 9) ns.push(14)
  if (extension === 11) ns.push(17)
  if (extension === 13) ns.push(21)
  return ns
}

function chordName(root: number, kind: string, ext: number, slash?: number): string {
  const suffix: Record<string, string> = { major: '', minor: 'm', diminished: 'dim', augmented: 'aug', sus2: 'sus2', sus4: 'sus4', major7: 'maj7', minor7: 'm7', dominant7: '7', 'half-dim7': 'm7♭5' }
  const extensionSuffix: Record<string, string> = { major7: 'maj', minor7: 'm', dominant7: '' }
  const chordSuffix = ext && kind.endsWith('7') ? `${extensionSuffix[kind] ?? ''}${ext}` : `${suffix[kind] ?? ''}${ext ? `add${ext}` : ''}`
  return `${names[root]}${chordSuffix}${slash === undefined ? '' : `/${names[slash]}`}`
}

function voiceDistance(a: number[], b: number[]): number {
  const n = Math.max(a.length, b.length)
  let total = 0
  for (let i = 0; i < n; i++) {
    const x = a[i % a.length], y = b[i % b.length]
    const d = Math.abs((((x - y + 6) % 12) + 12) % 12 - 6)
    total += d
  }
  return total / n
}

// Functional tendencies based on T → SD → D → T. Degree-level weights below
// add finer tonal behavior on top of these broader functional movements.
const transitionWeights: Record<number, Record<number, number>> = {
  0: { 1: 1.05, 2: 0.82, 3: 1.22, 4: 1.18, 5: 1.2, 6: 0.62 },
  1: { 0: 0.72, 3: 1.08, 4: 1.85, 5: 0.7, 6: 0.9 },
  2: { 0: 0.78, 3: 0.82, 4: 0.9, 5: 1.55 },
  3: { 0: 1.18, 1: 1.05, 2: 0.8, 4: 1.48, 5: 0.8 },
  4: { 0: 2.35, 1: 0.55, 3: 0.48, 5: 1.02 },
  5: { 0: 0.78, 1: 1.3, 2: 0.82, 3: 1.38, 4: 1.12 },
  6: { 0: 2.1, 1: 0.72, 4: 0.65 },
}

function transitionWeight(from: number, to: number): number {
  return transitionWeights[from]?.[to] ?? 0.86
}

export function getDiatonicChords(key: KeyName, scaleName: ScaleName = 'メジャー・スケール'): Chord[] {
  const tonic = KEYS.indexOf(key)
  const selectedScale = SCALES.find(item => item.name === scaleName) ?? SCALES[0]
  const offsets = selectedScale.intervals
  return offsets.map((offset, degree) => {
    const root = (tonic + offset) % 12
    const triad = [0, 2, 4].map(step => (tonic + offsets[(degree + step) % offsets.length] + (degree + step >= offsets.length ? 12 : 0)) % 12)
    const third = (triad[1] - root + 12) % 12
    const fifth = (triad[2] - root + 12) % 12
    const suffix = third === 3 ? fifth === 6 ? 'dim' : 'm' : third === 4 ? fifth === 8 ? 'aug' : '' : 'sus'
    const role = degree === 0 || degree === 2 || degree === 5 ? 'Tonic' : degree === 1 || degree === 3 ? 'Subdominant' : 'Dominant'
    return {
      symbol: `${names[root]}${suffix}`,
      roman: `${degree + 1}${suffix === 'm' ? 'm' : suffix === 'dim' ? '°' : ''}`,
      role,
      pitch: root,
      notes: triad,
    }
  })
}

/** Move every chord by the same interval while preserving qualities, slash basses and Roman degrees. */
export function transposeProgression(chords: Chord[], fromKey: KeyName, toKey: KeyName): Chord[] {
  const semitones = (KEYS.indexOf(toKey) - KEYS.indexOf(fromKey) + 12) % 12
  const move = (pitch: number) => (pitch + semitones) % 12
  const readNote = (note: string) => pitchClassesByName[note.replace('♯', '#').replace('♭', 'b')]
  return chords.map(chord => {
    const match = chord.symbol.match(/^([A-G](?:#|b|♯|♭)?)(.*?)(?:\/([A-G](?:#|b|♯|♭)?))?$/)
    if (!match) return { ...chord, pitch: move(chord.pitch), notes: chord.notes.map(move) }
    const [, rootName, quality, bassName] = match
    const root = readNote(rootName)
    const bass = bassName ? readNote(bassName) : undefined
    const pitch = move(root)
    const nextBass = bass === undefined ? undefined : move(bass)
    return {
      ...chord,
      symbol: `${names[pitch]}${quality}${nextBass === undefined ? '' : `/${names[nextBass]}`}`,
      pitch,
      notes: chord.notes.map(move),
      bass: chord.bass === undefined ? undefined : move(chord.bass),
    }
  })
}

export function makeCustomChord(key: KeyName, rootName: KeyName, modifiers: ChordModifier[], voicing: { inversion?: number; slashBass?: number } = {}): Chord {
  const pitch = KEYS.indexOf(rootName)
  const rootInterval = (pitch - KEYS.indexOf(key) + 12) % 12
  const rootsBySemitone = ['I', '♭II', 'II', '♭III', 'III', 'IV', '♭V', 'V', '♭VI', 'VI', '♭VII', 'VII']
  const has = (modifier: ChordModifier) => modifiers.includes(modifier)
  const minor = has('m')
  const diminished = has('dim')
  const flatFive = has('b5')
  const augmented = has('aug')
  const sus2 = has('sus2')
  const sus4 = has('sus4')
  const majorQuality = !minor && !diminished
  const rootRoman = rootsBySemitone[rootInterval]
  const numeral = majorQuality ? rootRoman : rootRoman.replace(/[IV]+$/, value => value.toLowerCase())
  const baseIntervals = diminished ? [0, 3, 6] : augmented ? [0, 4, 8] : sus2 ? [0, 2, 7] : sus4 ? [0, 5, 7] : minor ? [0, 3, 7] : [0, 4, 7]
  const intervals = flatFive ? baseIntervals.map(interval => interval === 7 ? 6 : interval) : baseIntervals
  const numericExtension = has('13') ? 13 : has('11') ? 11 : has('9') ? 9 : 0
  if (has('major') && has('7')) intervals.push(11)
  else if (has('7') || numericExtension) intervals.push(diminished ? 9 : 10)
  if (has('6')) intervals.push(9)
  if (has('add9')) intervals.push(14)
  if (has('add11')) intervals.push(17)
  if (has('add13')) intervals.push(21)
  if (numericExtension >= 9) intervals.push(14)
  if (numericExtension >= 11) intervals.push(17)
  if (numericExtension >= 13) intervals.push(21)
  const baseSymbol = diminished || (minor && flatFive) ? 'dim' : augmented ? 'aug' : sus2 ? 'sus2' : sus4 ? 'sus4' : minor ? 'm' : ''
  let seventhSymbol = ''
  let seventhRoman = ''
  if (has('major') && has('7')) { seventhSymbol = minor ? 'mM7' : `${baseSymbol}maj7`; seventhRoman = 'maj⁷' }
  else if (has('7')) { seventhSymbol = numericExtension ? '' : diminished ? 'dim7' : sus2 || sus4 ? `7${baseSymbol}` : `${baseSymbol}7`; seventhRoman = diminished ? '°⁷' : '⁷' }
  const addSixthSymbol = has('6') ? (has('major') || has('7') ? '(add6)' : '6') : ''
  const extensionSymbol = (['add9', 'add11', 'add13'] as const).filter(option => has(option)).join('')
  const addedExtensions = numericExtension ? `${has('major') && has('7') ? 'maj' : minor ? 'm' : ''}${numericExtension}` : ''
  const romanSuffix = `${diminished && !seventhRoman.includes('°') ? '°' : ''}${seventhRoman}${has('6') && !has('major') && !has('7') ? '⁶' : ''}${has('add9') ? 'add9' : ''}${has('add11') ? 'add11' : ''}${has('add13') ? 'add13' : ''}`
  const degree = scale.indexOf(rootInterval)
  const role: Chord['role'] = degree < 0 ? 'Color' : degree === 0 || degree === 2 || degree === 5 ? 'Tonic' : degree === 1 || degree === 3 ? 'Subdominant' : 'Dominant'
  const roman = `${numeral}${romanSuffix}`
  const notes = [...new Set(intervals.map(interval => (pitch + interval) % 12))]
  const inversion = Math.max(0, Math.min(voicing.inversion ?? 0, notes.length - 1))
  const bass = voicing.slashBass ?? (inversion > 0 ? notes[inversion] : undefined)
  const slash = bass === undefined || bass === pitch ? '' : `/${names[bass]}`
  const suffix = `${addedExtensions || seventhSymbol || baseSymbol}${flatFive && !diminished && !minor ? '(♭5)' : ''}${addSixthSymbol}${extensionSymbol}`
  const symbol = `${rootName}${suffix}${slash}`
  return { symbol, baseSymbol: symbol, roman, role, pitch, notes, bass, inversion, modifiers: [...modifiers] }
}

function weightedPick<T extends { weight: number }>(items: T[]): T {
  const sum = items.reduce((n, item) => n + Math.max(0.015, item.weight), 0)
  let cursor = Math.random() * sum
  for (const item of items) { cursor -= Math.max(0.015, item.weight); if (cursor <= 0) return item }
  return items[items.length - 1]
}

export function generateProgression(settings: Settings): Chord[] {
  const tonic = KEYS.indexOf(settings.key)
  const selectedScale = SCALES.find(item => item.name === settings.scale) ?? SCALES[0]
  const scaleOffsets = selectedScale.intervals
  const natural = settings.naturalness / 10
  const complex = settings.complexity / 10
  const surprise = settings.surprise / 10
  const result: Candidate[] = []
  let previous: Candidate | undefined

  for (let i = 0; i < settings.count; i++) {
    const candidates: Candidate[] = []
    for (let degree = 0; degree < scaleOffsets.length; degree++) {
      const root = (tonic + scaleOffsets[degree]) % 12
      const role = degree === 0 || degree === 2 || degree === 5 ? 'Tonic' : degree === 1 || degree === 3 ? 'Subdominant' : 'Dominant'
      const triad = [0, 2, 4].map(step => (scaleOffsets[(degree + step) % scaleOffsets.length] + (degree + step >= scaleOffsets.length ? 12 : 0)) % 12)
      const third = (triad[1] - scaleOffsets[degree] + 12) % 12
      const fifth = (triad[2] - scaleOffsets[degree] + 12) % 12
      const kind = third === 3 ? fifth === 6 ? 'diminished' : 'minor' : third === 4 ? fifth === 8 ? 'augmented' : 'major' : 'major'
      let weight = [1.5, 1.25, 0.8, 1.4, 1.5, 1.2, 0.48][degree] ?? 0.8
      if (i === 0) {
        const openingWeight = [2.15, 0.72, 0.6, 1.8, 0.68, 1.65, 0.3][degree]
        weight *= 1 + natural * (openingWeight - 1)
      }
      if (i === settings.count - 1 && degree === 0) weight *= 4.5 + natural * 8
      if (natural > 0.5 && degree === 6) weight *= 0.68
      const quality = complex > 0.55 && role !== 'Dominant' ? (degree === 0 || degree === 3 ? 'major7' : 'minor7') : kind
      const ext = complex > 0.45 && Math.random() < complex * 0.38 ? [9, 11, 13][Math.floor(Math.random() * 3)] : 0
      const notes = intervals(quality, ext).map(n => (root + n) % 12)
      const roman = `${degree + 1}${kind === 'minor' ? 'm' : kind === 'diminished' ? '°' : ''}`
      candidates.push({ symbol: chordName(root, quality, ext), roman: roman + (quality.includes('7') ? '⁷' : ext ? `${ext}` : ''), role, pitch: root, notes, degree, kind: quality, weight })
    }
    // Borrowed iv / bVII / bVI and secondary dominants provide controlled chromatic color.
    const borrowed = [
      { offset: 5, kind: 'minor', roman: 'iv', role: 'Subdominant' as const, w: 0.7 },
      { offset: 10, kind: 'major', roman: '♭VII', role: 'Color' as const, w: 0.58 },
      { offset: 8, kind: 'major', roman: '♭VI', role: 'Color' as const, w: 0.46 },
      { offset: 2, kind: 'dominant7', roman: 'V/V', role: 'Dominant' as const, w: 0.62 },
      { offset: 9, kind: 'dominant7', roman: 'V/ii', role: 'Dominant' as const, w: 0.44 },
      { offset: 4, kind: 'dominant7', roman: 'V/vi', role: 'Dominant' as const, w: 0.4 },
    ]
    for (const item of borrowed) {
      const root = (tonic + item.offset) % 12
      const stability = 0.12 + Math.pow(1 - natural, 1.6) * 0.88
      const weight = item.w * surprise * (0.25 + complex * 0.75) * stability
      if (weight < 0.04) continue
      const quality = item.kind
      const notes = intervals(quality, 0).map(n => (root + n) % 12)
      candidates.push({ symbol: chordName(root, quality, 0), roman: item.roman, role: item.role, pitch: root, notes, degree: -1, kind: quality, weight })
    }
    // Color the candidates: extensions, suspensions, diminished passing chords and inversions.
    for (const c of candidates) {
      if (!previous) continue
      const distance = voiceDistance(previous.notes, c.notes)
      const smooth = Math.max(0.22, 1.65 - distance / 8)
      c.weight *= 0.38 + smooth * natural * 0.8 + (1 - natural) * 0.2
      if (previous.degree >= 0 && c.degree >= 0) {
        c.weight *= 1 + natural * (transitionWeight(previous.degree, c.degree) - 1)
      }
      // Reward the common functional routes while strongly discouraging the
      // dominant → subdominant rollback. Keep a small path open for pop
      // exceptions, especially when the user asks for more surprise.
      if (previous.role === 'Tonic' && c.role === 'Subdominant') c.weight *= 1 + natural * 0.65
      else if (previous.role === 'Tonic' && c.role === 'Dominant') c.weight *= 0.88 + natural * 0.28
      else if (previous.role === 'Tonic' && c.role === 'Tonic') c.weight *= 0.82
      else if (previous.role === 'Subdominant' && c.role === 'Dominant') c.weight *= 1 + natural * 0.9
      else if (previous.role === 'Subdominant' && c.role === 'Tonic') c.weight *= 0.9 + natural * 0.25
      else if (previous.role === 'Dominant' && c.role === 'Tonic') c.weight *= 1.45 + natural * 1.2
      else if (previous.role === 'Dominant' && c.role === 'Subdominant') c.weight *= 0.08 + (1 - natural) * 0.55 + surprise * 0.42
      else if (previous.role === 'Dominant' && c.role === 'Dominant') c.weight *= 0.78
      if (previous.degree === c.degree && c.degree >= 0) c.weight *= 0.58
      if (previous.degree === 4 && c.degree === 0) c.weight *= 1.8
      if (previous.degree === 1 && c.degree === 4) c.weight *= 1.35
      if (previous.degree === 5 && c.degree === 1) c.weight *= 1.3
      if (previous.roman === 'V/V' && c.degree === 4) c.weight *= 1.8
      if (c.degree === 0 && i < settings.count - 1) c.weight *= 0.55
      if (surprise > 0.35 && c.role === 'Color') c.weight *= 0.7 + surprise
      if (previous.role === 'Dominant' && c.roman.startsWith('V/')) c.weight *= 0.8
      if (complex > 0.4 && c.kind === 'major' && Math.random() < complex * 0.23) {
        c.kind = 'sus4'; c.symbol = chordName(c.pitch, 'sus4', 0); c.notes = intervals('sus4', 0).map(n => (c.pitch + n) % 12); c.roman += 'sus'
      }
    }
    const selected = weightedPick(candidates)
    result.push(selected)
    previous = selected
  }
  return result.map(({ symbol, roman, role, pitch, notes }) => ({ symbol, roman, role, pitch, notes }))
}
