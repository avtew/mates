import profileReduser, { addPost } from './profileReduser';

let state = {
  feed: [
    {id: 0, time: '15:00', text: 'Hello',}
  ],
}

test('feed length shoud be incremented', () => {
  let action = addPost('Hello, world!');
  let newState = profileReduser(state, action);
  expect(newState.feed.length).toBe(2);
});

test('text message shoud be correct', () => {
  let action = addPost('Hello, world!');
  let newState = profileReduser(state, action);
  expect(newState.feed[0].text).toBe('Hello, world!');
});