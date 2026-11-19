import test from 'node:test'
import assert from 'node:assert/strict'
import { midiToToneNote, parseChord, voiceChordProgression } from '../src/audio/chordVoicing.ts'
import { makeCustomChord } from '../src/music/progression.ts'

test('parses basic triads, sevenths and extensions', () => {
  assert.deepEqual(parseChord('C').pitchClasses, [0, 4, 7])
  assert.deepEqual(parseChord('Am7').pitchClasses, [9, 0, 4, 7])
  assert.deepEqual(parseChord('Cmaj7').pitchClasses, [0, 4, 7, 11])
  assert.deepEqual(parseChord('Bdim').pitchClasses, [11, 2, 5])
  assert.deepEqual(parseChord('Dsus4').pitchClasses, [2, 7, 9])
  assert.deepEqual(parseChord('Cadd9').pitchClasses, [0, 4, 7, 2])
  assert.deepEqual(parseChord('D9').pitchClasses, [2, 6, 9, 0, 4])
  assert.deepEqual(parseChord('D11').pitchClasses, [2, 6, 9, 0, 4, 7])
  assert.deepEqual(parseChord('D13').pitchClasses, [2, 6, 9, 0, 4, 7, 11])
})

test('parses altered tensions and slash bass notes', () => {
  assert.deepEqual(parseChord('Fmaj7(#11)').pitchClasses, [5, 9, 0, 4, 11])
  assert.deepEqual(parseChord('G7(b9)').pitchClasses, [7, 11, 2, 5, 8])
  assert.equal(parseChord('G7/B').bass, 11)
  assert.deepEqual(voiceChordProgression(['G7/B'])[0], [59, 62, 65, 67])
})

test('parses and builds altered chords', () => {
  assert.deepEqual(parseChord('G7alt').pitchClasses, [7, 11, 2, 5, 8, 10, 3])
  assert.equal(makeCustomChord('C', 'G', ['alt']).symbol, 'G7alt')
  assert.deepEqual(makeCustomChord('C', 'G', ['alt']).notes, [7, 11, 2, 5, 8, 10, 3])
  assert.equal(makeCustomChord('C', 'G', ['b9']).symbol, 'G7(♭9)')
  assert.deepEqual(makeCustomChord('C', 'G', ['b9']).notes, [7, 11, 2, 5, 8])
  assert.equal(makeCustomChord('C', 'C', ['major', '7', '#11']).symbol, 'Cmaj7(♯11)')
  assert.deepEqual(makeCustomChord('C', 'C', ['major', '7', '#11']).notes, [0, 4, 7, 11, 6])
})

test('creates the requested octave voicings and smooth chord changes', () => {
  assert.deepEqual(voiceChordProgression(['Cmaj7'])[0], [48, 52, 55, 59])
  assert.deepEqual(voiceChordProgression(['Am7'])[0], [57, 60, 64, 67])
  assert.deepEqual(voiceChordProgression(['Fmaj7(#11)'])[0], [53, 57, 59, 60, 64])
  assert.deepEqual(voiceChordProgression(['G7(b9)'])[0], [55, 56, 59, 62, 65])
  assert.deepEqual(voiceChordProgression(['Cmaj7', 'Am7'])[1], [57, 60, 64, 67])
  assert.equal(midiToToneNote(48), 'C3')
})
