type Union = 'a' | 'b' | 'c'

export function test(u: Union) {
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (u) {
    case 'a':
      return true
  }

  return false
}
