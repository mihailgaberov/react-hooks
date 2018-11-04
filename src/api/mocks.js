const DELAY = 250;

export default class MockedApi {
  static fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: 'Mihail', surname: 'Gaberov' },
          { name: 'Nikolaos', surname: 'Tsourektidis' }
        ])
      }, DELAY);
    });
  }
}
