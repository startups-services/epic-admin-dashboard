// useCase:
//
// const sendWithDebounce = debounce(sendDataToBd, 600);
// <input
//   onChange={(e)=> {
//     sendWithDebounce(e.target.value)
//   }}
// />
//

const globalDebounceTimer = new Map();

export default function debounce(f, ms = 300) {
  return (...args) => {
    const onComplete = () => {
      f.apply(f, args);
      globalDebounceTimer.delete(f);
    };
    if (globalDebounceTimer.has(f)) {
      clearTimeout(globalDebounceTimer.get(f));
    }
    // eslint-disable-next-line no-undef
    globalDebounceTimer.set(f, window.setTimeout(onComplete, ms));
  };
}
