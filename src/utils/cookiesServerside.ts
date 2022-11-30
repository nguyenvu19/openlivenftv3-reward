import nookies from 'nookies'

// Get parse
export const getCookiesByKey = (context, key) => nookies.get(context)[key]

// Set
export const setCookiesByKey = (context, key, value) => {
  nookies.set(context, key, 'value', value)
}

// Delete
export const deleteCookiesByKey = (context, key) => nookies.destroy(ctx, key)
