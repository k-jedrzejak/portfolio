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

export function removeBodyClass(...classes) {
  document.body.classList.remove(...classes)
}

export function addBodyClass(...classes) {
  document.body.classList.add(...classes)
}
