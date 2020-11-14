export function axios(url) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve({
      data: [
        {
          id: 1,
          name: "item1",
        },
        {
          id: 2,
          name: "item2",
        },
      ],
    });
    // }, 1000);
  });
}
