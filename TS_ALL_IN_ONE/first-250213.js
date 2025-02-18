"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isRejected = (input) => {
    return input.status === 'rejected';
};
const isFulfilled = (input) => {
    return input.status === 'fulfilled';
};
const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const erros = promises.filter((a) => true);
