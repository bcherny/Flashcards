import Constants from 'expo-constants'

export default {
  FIREBASE_API_KEY: nullthrows<string>(
    Constants.manifest?.extra?.FIREBASE_API_KEY
  ),
}

function nullthrows<A>(a: A | undefined): A {
  if (a === undefined) {
    throw new ReferenceError('Expected var not to be null')
  }
  return a
}
