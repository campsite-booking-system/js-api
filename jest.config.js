module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  automock: false,
  setupFiles: ['./src/tests/setup.ts'],
};
