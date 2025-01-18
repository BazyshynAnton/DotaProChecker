/**
 * Helper function to fetch data from a given URL
 * and parse the response as JSON.
 *
 * This function sends a GET request to the specified URL,
 * handles the response, and returns the parsed JSON data
 * if the response is successful. If an error occurs,
 * it returns the error message or a string indicating the failure.
 *
 * @template T The type of the data expected in the response.
 * @param {string} URL The URL to fetch data from.
 * @returns {Promise<T | Error>}
 * A promise that resolves to the parsed JSON data of type `T`,
 * or an `Error` object if the fetch operation fails.
 */
export async function fetchHelper<T>(URL: string): Promise<T | Error> {
  const response = await fetch(URL, {
    cache: 'no-store',
  })

  if (!response.ok) {
    return new Error(`Failed to fetch using URL: ${URL}`)
  }

  return await response.json()
}
