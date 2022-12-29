export async function fetchData() {
  try {
    const response = await fetch('./data/aboutme.json')
    const json = await response.json()
    return json
  } catch (error) {
    console.error(new Error(error))
    return {}
  }
}

// returns a random integer between the min/max
export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

