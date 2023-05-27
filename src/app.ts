import { IWorld, WannaWatchMeCodeWorld } from './model/world';
console.log('hello world');

const wannaWatchMeCodeWorld: IWorld = new WannaWatchMeCodeWorld({});

wannaWatchMeCodeWorld.talkBack();

console.log('Goodbye Episode 1!');