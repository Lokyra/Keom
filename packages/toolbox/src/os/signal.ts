type Signal = 'SIGINT' | 'SIGTERM'

export const waitForSignal = (signals: Signal[]): Promise<string> => {
  return new Promise(resolve => {
    signals.forEach(signal => {
      process.on(signal, () => resolve(signal))
    })
  })
}
