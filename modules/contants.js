// We can avoid unnecessary constant declaration by exporting them
export const MAX_REPLIES = 3;
export const MAX_USERS = 3;

// Or use a single export statement
const MAX_REPLIES = 3;
const MAX_USERS = 3;
export { MAX_USERS, MAX_REPLIES }