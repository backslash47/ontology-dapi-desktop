import fetch from 'cross-fetch';

let port = 33879;

export function registerClient({ p = 33879 }: { p: number }) {
  port = p;
}

// tslint:disable:object-literal-key-quotes
export async function call<RESULT>(method: string, ...params: any[]) {
  const response = await fetch(`http://127.0.0.1:${port}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      method,
      params
    })
  });

  return (await response.json()).result as RESULT;
}
