/**
 * Created by Leon<silenceace@gmail.com> at 2023-05-05.
 */

import _ from 'lodash'
import Tts, { Options } from 'react-native-tts'
import { logInfo } from './logger'

/**
 * https://github.com/ak1394/react-native-tts#usage
 * @param text
 * @param options
 */
const speech = async (text: string, options?: Options) => {
  stop()
  // IOS
  Tts.speak(
    text,
    _.mergeWith(
      {
        // For iOS
        // iosVoiceId: 'com.apple.ttsbundle.Moira-compact',
        // rate: 0.5,
        // For Android
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC'
        }
      },
      options ?? {}
    )
  )
}

/**
 * Enable lowering other applications output level while speaking (also referred to as "ducking").
 * @param ducking
 */
const setDucking = (ducking: boolean = true) => {
  Tts.setDucking(ducking)
}

const stop = () => {
  Tts.stop()
}

const init = () => {
  try {
    setDucking(true)
    Tts.setDefaultLanguage('zh-CN')
    Tts.setDefaultPitch(1)
    Tts.setDefaultRate(0.5)
    Tts.setIgnoreSilentSwitch('inherit')

    Tts.addEventListener('tts-start', (event) =>
      logInfo('start', event)
    )
    Tts.addEventListener('tts-progress', (event) =>
      logInfo('progress', event)
    )
    Tts.addEventListener('tts-finish', (event) =>
      logInfo('finish', event)
    )
    Tts.addEventListener('tts-cancel', (event) =>
      logInfo('cancel', event)
    )
  } catch (_err) {
    logInfo('TTS init error', _err)
  }
}

const {
  voices,
  setDefaultEngine,
  setDefaultLanguage,
  setDefaultPitch,
  setDefaultVoice,
  setDefaultRate
} = Tts

const setLanguage = (language: string) => {
  try {
    Tts.setDefaultLanguage(language)
    logInfo('Tts setLanguage success', language)
  } catch (error) {
    logInfo('Tts setLanguage error', error)
  }
}

init()

export const TTS = {
  speech,
  voices,
  setDucking,
  setDefaultEngine,
  setDefaultRate,
  setLanguage,
  setDefaultPitch,
  setDefaultVoice,
  stop
}
