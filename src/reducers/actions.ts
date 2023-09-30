/* eslint-disable @typescript-eslint/no-explicit-any */
export function allCart(type: string, payload?: any) {
    return { type: type, payload: payload };
  }