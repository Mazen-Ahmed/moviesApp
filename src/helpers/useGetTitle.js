export default function useGetTitle(title, length) {
  let res = "";
  if (title.length > length) {
    res = `${title.substr(0, length)}...`;
  } else {
    res = title;
  }
  return res;
}
