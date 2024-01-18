import useAsync from "./useAsync";

const DEFAULT_OPTION = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useFetch(url, option = {}, depedencies = []) {
  return useAsync(() => {
    return fetch(url, {
      ...DEFAULT_OPTION,
      ...option,
    }).then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, depedencies);
}
