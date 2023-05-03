// lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint',
    'prettier --write',
    () => 'tsc --skipLibCheck --noEmit',
  ],
};
