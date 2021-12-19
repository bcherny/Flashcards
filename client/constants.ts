import Constants from 'expo-constants'

export default {}

function nullthrows<A>(a: A | undefined): A {
  if (a === undefined) {
    throw new ReferenceError('Expected var not to be null')
  }
  return a
}
